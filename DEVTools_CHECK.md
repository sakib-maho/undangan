# How to Check DevTools for Blur Issues

## Step-by-Step Guide:

### 1. Open DevTools
- **Chrome/Edge**: Press `F12` or `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac)
- **Firefox**: Press `F12` or `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac)
- **Safari**: Press `Cmd + Option + I` (Mac - need to enable Developer menu first)

### 2. Inspect the Background Image
1. Click the **Elements** tab (or **Inspector** in Firefox)
2. Click the **Select Element** tool (icon in top-left, or press `Ctrl + Shift + C`)
3. Click on one of the background images in the desktop sidebar
4. The HTML element will be highlighted in the Elements panel

### 3. Check Computed Styles
1. In the **Styles** panel (right side), scroll down
2. Look for **"Computed"** tab (or click "Computed" in Firefox)
3. Search for these properties:
   - `filter` - Should be `none`
   - `backdrop-filter` - Should be `none`
   - `-webkit-filter` - Should be `none`
   - `-webkit-backdrop-filter` - Should be `none`
   - `transform` - Check if it has `scale()` that might cause blur

### 4. Check Parent Elements
1. In the Elements panel, click on parent elements (going up):
   - `.slide-desktop`
   - `.position-absolute`
   - `.desktop-sidebar-overlay`
   - `.bg-overlay-auto`
2. Check each one's Computed styles for `backdrop-filter` and `filter`

### 5. Check Network Tab
1. Go to **Network** tab
2. Refresh the page (`F5`)
3. Look for the image files (like `_ANA2083.jpg`)
4. Check if they're loading correctly
5. Check the file size - if very small, images might be compressed

### 6. Check Console for Errors
1. Go to **Console** tab
2. Look for any red error messages
3. These might indicate CSS loading issues

## What to Look For:

✅ **Good Signs:**
- `filter: none`
- `backdrop-filter: none`
- No `scale()` transforms on images
- Images loading correctly

❌ **Bad Signs:**
- `filter: blur(...)`
- `backdrop-filter: blur(...)`
- `transform: scale(...)` on images
- CSS files not loading
- Images showing as very small file sizes

