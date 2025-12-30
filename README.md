# 💌 Wedding Invitation Website Template

A beautiful, modern, and fully customizable wedding invitation website template with comment features, guest management, and elegant design.

[![GitHub repo size](https://img.shields.io/github/repo-size/sakib-maho/undangan?color=brightgreen)](https://github.com/sakib-maho/undangan)
[![GitHub License](https://img.shields.io/github/license/sakib-maho/undangan?color=brightgreen)](https://github.com/sakib-maho/undangan/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/sakib-maho/undangan?style=social)](https://github.com/sakib-maho/undangan)
[![GitHub forks](https://img.shields.io/github/forks/sakib-maho/undangan?style=social)](https://github.com/sakib-maho/undangan)

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme** - Automatic theme switching based on system preferences
- **Smooth Animations** - Beautiful fade-in, slide-in, and scale animations
- **Loading Skeletons** - Modern loading states for better UX
- **Progressive Image Loading** - Optimized image loading with shimmer effects
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support

### 💬 Interactive Features
- **Guest Comments** - Allow guests to leave messages and well-wishes
- **Presence Confirmation** - Guests can confirm their attendance
- **Like System** - Instagram-style like functionality for comments
- **GIF Support** - Add GIFs to comments using Tenor API
- **Reply System** - Nested comment replies
- **Edit/Delete** - Guests can edit or delete their own comments

### 📊 Admin Dashboard
- **Statistics Dashboard** - View comments, likes, and attendance statistics
- **Comment Management** - Moderate and manage guest comments
- **Settings Configuration** - Customize features and permissions
- **Access Key Management** - Generate and manage guest access keys
- **Data Export** - Download comments as CSV file

### 🎵 Media Features
- **Background Music** - Optional background music player
- **Image Gallery** - Beautiful carousel gallery
- **Video Support** - Embed love story videos
- **Image Modal** - Full-screen image viewer

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sakib-maho/undangan.git
   cd undangan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuration

### Basic Setup

1. **Edit `index.html`**
   - Update couple names, dates, and personal information
   - Replace placeholder images with your own
   - Customize wedding details

2. **Configure API (for comments)**
   
   In `index.html`, update the `<body>` tag:
   ```html
   <body 
     data-key="YOUR_ACCESS_KEY" 
     data-url="YOUR_API_URL" 
     data-audio="./assets/music/your-music.mp3" 
     data-confetti="true" 
     data-time="2026-01-17 11:00:00">
   ```
   
   **Note on `data-time` format:**
   - Format: `"YYYY-MM-DD HH:MM:SS"` (assumes JST/UTC+9 if no timezone specified)
   - Or use ISO 8601 with timezone: `"2026-01-17T11:00:00+09:00"`
   - The countdown automatically handles timezone conversion

   In `dashboard.html`:
   ```html
   <body data-url="YOUR_API_URL">
   ```

### API Setup Options

#### Option 1: Self-Hosted Backend (Recommended)
This project uses a Node.js/Express/PostgreSQL backend. See the [wedding-backend](../wedding-backend) directory for the complete backend implementation.

**Backend Features:**
- Node.js with Express.js
- PostgreSQL database
- JWT authentication for admin
- Access key authentication for guests
- Docker support for easy deployment
- AWS EC2 deployment ready

**Quick Setup:**
1. Navigate to the backend directory: `cd ../wedding-backend`
2. Copy `env.example` to `.env` and configure your settings
3. Start with Docker: `docker-compose up -d`
4. Get your access key from the database or admin dashboard
5. Update `data-url` and `data-key` in `index.html`

See [wedding-backend/README.md](../wedding-backend/README.md) for detailed setup instructions.

#### Option 2: Free Trial API
1. Sign up at [https://trial.ulems.my.id](https://trial.ulems.my.id)
2. Get your API URL and Access Key
3. Update the `data-url` and `data-key` attributes

#### Option 3: Without Comments
- Remove `data-key` and `data-url` attributes from `index.html`
- Website works completely offline

### Optional Features

**Tenor GIF Support:**
1. Get API key from [Tenor Developers](https://developers.google.com/tenor/guides/quickstart)
2. Login to dashboard
3. Go to Settings → Tenor Key
4. Enter your API key and save

**Background Music:**
- Place your music file in `assets/music/`
- Update `data-audio` attribute in `index.html`

## 📦 Build for Production

```bash
npm run build:public
```

This creates a `public` folder with optimized files ready for deployment.

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build:public`
2. Drag and drop the `public` folder to [Netlify](https://app.netlify.com)
3. Your site is live!

### Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build:public`
3. Set output directory: `public`
4. Deploy!

### GitHub Pages (Current Setup)
This project is deployed on GitHub Pages:
- **Live Site**: [https://sakib-maho.github.io/undangan](https://sakib-maho.github.io/undangan)
- Automated deployment via GitHub Actions
- Backend API: AWS EC2 instance

**Deployment Steps:**
1. Build the project: `npm run build:public`
2. Push changes to `main` branch
3. GitHub Actions automatically builds and deploys to `gh-pages`
4. Site updates automatically

### Other Hosting
Upload the `public` folder contents to any static hosting service.

## 🎨 Customization

### Colors & Themes
Edit `css/customization.css` to customize:
- Primary colors
- Font sizes
- Spacing
- Border radius
- Shadows

### Animations
Use animation classes from `css/animation.css`:
```html
<div class="animate-fade-in-up animate-delay-2">
  Your content
</div>
```

### Fonts
- Default: Josefin Sans
- Decorative: Sacramento
- Arabic: Noto Naskh Arabic

Change fonts in `index.html` head section.

## 📱 Features Breakdown

### Guest Page (`index.html`)
- Welcome screen with loading animation
- Home section with couple introduction
- Bride & Groom section
- Quranic verses section
- Love story timeline
- Wedding date with countdown timer (timezone-aware, handles past events)
- Image gallery
- Love gift section (bank transfer, QRIS, physical gifts)
- Comments section
- Bottom navigation

### Admin Dashboard (`dashboard.html`)
- Statistics overview
- Comment management
- User settings
- Access key management
- Feature toggles
- Password change

## 🛠️ Tech Stack

### Frontend
- **Frontend Framework**: Vanilla JavaScript (ES6+)
- **CSS Framework**: Bootstrap 5.3.8
- **Animations**: AOS 2.3.4, Custom CSS animations
- **Icons**: Font Awesome 7.1.0
- **Effects**: Canvas Confetti 1.9.3
- **Fonts**: Google Fonts (Josefin Sans, Sacramento, Noto Naskh Arabic)
- **Build Tool**: esbuild
- **Package Manager**: npm

### Backend (See [wedding-backend](../wedding-backend))
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 4.18.2
- **Database**: PostgreSQL 16
- **Authentication**: JWT (jsonwebtoken), bcryptjs
- **Deployment**: Docker, Docker Compose
- **Hosting**: AWS EC2

## 🎯 Design Improvements

This template includes enhanced design features:

- ✅ **Animation Variants** - Fade, slide, scale animations
- ✅ **Accessibility** - WCAG compliant, keyboard navigation
- ✅ **Loading Skeletons** - Modern shimmer loading states
- ✅ **Image Optimization** - Progressive loading with blur-up effect
- ✅ **Customization Options** - CSS variables for easy theming
- ✅ **Countdown Timer Fix** - Timezone support and proper past event handling

See [DESIGN_IMPROVEMENTS.md](./DESIGN_IMPROVEMENTS.md) for detailed documentation.
See [COUNTDOWN_ISSUES.md](./COUNTDOWN_ISSUES.md) for countdown timer improvements.

## 📝 Project Structure

```
undangan/
├── assets/
│   ├── images/          # Images (banner, photos, icons)
│   ├── music/           # Background music files
│   └── video/           # Video files
├── css/
│   ├── admin.css        # Admin dashboard styles
│   ├── animation.css    # Animation keyframes and classes
│   ├── common.css       # Shared styles and utilities
│   ├── customization.css # Customization variables
│   └── guest.css        # Guest page styles
├── js/
│   ├── app/
│   │   ├── admin/       # Admin functionality
│   │   ├── components/   # Reusable components
│   │   └── guest/        # Guest page functionality
│   ├── common/           # Shared utilities
│   ├── connection/       # API connection layer
│   └── libs/             # Third-party libraries
├── index.html            # Main guest page
├── dashboard.html         # Admin dashboard
├── package.json
└── README.md
```

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Build public folder
npm run build:public

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Lint HTML
npm run lint:html
```

### Code Style
- ESLint for JavaScript
- Stylelint for CSS
- HTMLHint for HTML

## 📚 API Endpoints

If using your own backend, implement these endpoints:

- `POST /api/session` - User authentication
- `GET /api/user` - Get user details
- `PATCH /api/user` - Update user settings
- `GET /api/v2/config` - Get public configuration
- `GET /api/v2/comment` - List comments
- `POST /api/comment` - Create comment
- `PUT /api/comment/{uuid}` - Update comment
- `DELETE /api/comment/{uuid}` - Delete comment
- `POST /api/comment/{uuid}` - Like comment
- `PATCH /api/comment/{uuid}` - Unlike comment
- `GET /api/stats` - Get statistics
- `PUT /api/key` - Regenerate access key
- `GET /api/download` - Download comments CSV

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Original template by [dewanakl](https://github.com/dewanakl/undangan)
- Visual assets from [Pixabay](https://pixabay.com)
- Music from [Pixabay Music](https://pixabay.com/music)

## 📞 Support

For questions, issues, or contributions:
- Open an issue on [GitHub](https://github.com/sakib-maho/undangan/issues)
- Check existing discussions

## ⭐ Show Your Support

If you find this project helpful, please give it a star! ⭐

---

**Made with ❤️ for your special day**
