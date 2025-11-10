import { dto } from '../../connection/dto.js';
import { storage } from '../../common/storage.js';
import { session } from '../../common/session.js';
import { tapTapAnimation } from '../../libs/confetti.js';
import { request, HTTP_PATCH, HTTP_POST, HTTP_STATUS_CREATED } from '../../connection/request.js';

export const like = (() => {

    /**
     * @type {ReturnType<typeof storage>|null}
     */
    let likes = null;

    /**
     * @type {Map<string, AbortController>|null}
     */
    let listeners = null;

    /**
     * @param {HTMLButtonElement} button
     * @returns {Promise<void>}
     */
    const love = async (button) => {

        const info = button.firstElementChild;
        const heart = button.lastElementChild;

        const id = button.getAttribute('data-uuid');
        const count = parseInt(info.getAttribute('data-count-like'));

        button.disabled = true;

        if (navigator.vibrate) {
            navigator.vibrate(100);
        }

        if (likes.has(id)) {
            await request(HTTP_PATCH, '/api/comment/' + id)
                .token(session.getToken())
                .send(dto.statusResponse)
                .then((res) => {
                    if (res.data.status) {
                        likes.unset(id);

                        // Check if there are still likes after unliking
                        const newCount = res.data.like_count !== undefined ? res.data.like_count : count - 1;
                        const hasLikes = newCount > 0;
                        
                        if (hasLikes) {
                            heart.classList.remove('fa-regular');
                            heart.classList.add('fa-solid', 'text-golden');
                        } else {
                            heart.classList.remove('fa-solid', 'text-golden');
                            heart.classList.add('fa-regular');
                        }

                        info.setAttribute('data-count-like', String(newCount));
                    }
                })
                .catch((err) => {
                    console.warn('Unlike error:', err);
                })
                .finally(() => {
                    info.innerText = info.getAttribute('data-count-like');
                    button.disabled = false;
                });
        } else {
            await request(HTTP_POST, '/api/comment/' + id)
                .token(session.getToken())
                .send(dto.uuidResponse)
                .then((res) => {
                    if (res.code === HTTP_STATUS_CREATED || res.code === 200) {
                        likes.set(id, id);

                        heart.classList.remove('fa-regular');
                        heart.classList.add('fa-solid', 'text-golden');

                        // Get updated like count from server response if available
                        const newCount = res.data.like_count !== undefined ? res.data.like_count : count + 1;
                        info.setAttribute('data-count-like', String(newCount));
                    }
                })
                .catch((err) => {
                    if (err.message && err.message.includes('already liked')) {
                        // Silently handle "already liked" - just update UI without showing error
                        likes.set(id, id);
                        heart.classList.remove('fa-regular');
                        heart.classList.add('fa-solid', 'text-golden');
                        // Don't update count if already liked - server will return current count
                        // Don't show any error message
                    } else {
                        // Only throw error if it's not "already liked"
                        throw err;
                    }
                })
                .finally(() => {
                    info.innerText = info.getAttribute('data-count-like');
                    button.disabled = false;
                });
        }
    };

    /**
     * @param {string} uuid
     * @returns {HTMLElement|null}
     */
    const getButtonLike = (uuid) => {
        return document.querySelector(`button[onclick="undangan.comment.like.love(this)"][data-uuid="${uuid}"]`);
    };

    /**
     * @param {HTMLElement} div
     * @returns {Promise<void>}
     */
    const tapTap = async (div) => {
        if (!navigator.onLine) {
            return;
        }

        const currentTime = Date.now();
        const tapLength = currentTime - parseInt(div.getAttribute('data-tapTime'));
        const uuid = div.id.replace('body-content-', '');

        const isTapTap = tapLength < 300 && tapLength > 0;
        const notLiked = !likes.has(uuid) && div.getAttribute('data-liked') !== 'true';

        if (isTapTap && notLiked) {
            tapTapAnimation(div);

            div.setAttribute('data-liked', 'true');
            await love(getButtonLike(uuid));
            div.setAttribute('data-liked', 'false');
        }

        div.setAttribute('data-tapTime', String(currentTime));
    };

    /**
     * @param {string} uuid
     * @returns {void}
     */
    const addListener = (uuid) => {
        const ac = new AbortController();

        const bodyLike = document.getElementById(`body-content-${uuid}`);
        bodyLike.addEventListener('touchend', () => tapTap(bodyLike), { signal: ac.signal });

        listeners.set(uuid, ac);
    };

    /**
     * @param {string} uuid
     * @returns {void}
     */
    const removeListener = (uuid) => {
        const ac = listeners.get(uuid);
        if (ac) {
            ac.abort();
            listeners.delete(uuid);
        }
    };

    /**
     * @returns {void}
     */
    const init = () => {
        listeners = new Map();
        likes = storage('likes');
    };

    return {
        init,
        love,
        getButtonLike,
        addListener,
        removeListener,
    };
})();