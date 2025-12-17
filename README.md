# 🌟 Abdelrahman Ayman - Modern Portfolio Website

A stunning, fully-featured Arabic RTL portfolio website showcasing modern web development practices. Built with vanilla JavaScript, this portfolio demonstrates expertise in creating beautiful, accessible, and performant web applications.

## ✨ Features

### 🎨 **Customization**
- **Theme Switching**: Light/Dark mode with smooth transitions
- **Custom Color Schemes**: 8 unique color palettes (Indigo, Blue, Green, Orange, Pink, Purple, Red, Teal)
- **Font Selection**: Choose between Alexandria, Tajawal (default), and Cairo fonts
- **Persistent Settings**: All preferences saved to localStorage

### 🚀 **Performance & Accessibility**
- Fully responsive design (mobile-first approach)
- Smooth scroll animations
- Optimized image loading with lazy loading
- ARIA labels and semantic HTML
- Keyboard navigation support
- SEO optimized with meta tags

### 🎯 **Interactive Components**
- **Auto-playing Testimonials Carousel**: Smooth transitions with manual controls
- **Portfolio Filter System**: Dynamic project filtering by category
- **Active Navigation**: Auto-highlights current section on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll to Top**: Animated rocket button
- **Custom Select Dropdowns**: Styled form elements

### 📱 **Sections**
1. **Hero Section**: Animated introduction with tech stack badges
2. **About Section**: Professional bio with code terminal display
3. **Skills Section**: Technology proficiency with progress bars
4. **Portfolio Section**: Filterable project showcase (9 projects)
5. **Experience Section**: Timeline of professional journey
6. **Testimonials Section**: Auto-rotating client reviews
7. **Statistics Section**: Key metrics and achievements
8. **Contact Section**: Comprehensive contact form with custom dropdowns
9. **Footer**: Quick links and social media

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Tailwind CSS**: Utility-first styling
- **Font Awesome**: Icon library
- **Google Fonts**: Arabic typography (Alexandria, Tajawal, Cairo)

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Abdelrahman968/Portfolio-Route.git
cd portfolio-website
```

2. **Project Structure**
```
portfolio-website/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css      # Tailwind CSS
│   │   └── main.css       # Custom styles
│   ├── js/
│   │   └── index.js       # Main JavaScript
│   └── imgs/
│       ├── favicon.png
│       ├── profile-Img.jpg
│       ├── portfolio-*.webp
│       └── avatar-*.webp
└── README.md
```

3. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server:
npx serve
# or
python -m http.server 8000
```

## 🎨 Customization Guide

### Changing Colors
The website uses CSS custom properties for colors. Edit the `config.colors` array in `index.js`:

```javascript
colors: [
  {
    name: 'indigo',
    primary: '#6366f1',
    secondary: '#a855f7',
    accent: '#ec4899',
  },
  // Add more color schemes...
]
```

### Adding Portfolio Projects
Add new projects to the HTML in the `#portfolio-grid` section:

```html
<div class="portfolio-item" data-category="web">
  <!-- Project content -->
</div>
```

### Modifying Content
All content is in Arabic RTL format in `index.html`. Update text directly in the HTML file.

## ⚙️ Configuration

Key configuration options in `assets/js/index.js`:

```javascript
var config = {
  carouselAutoplayDelay: 5000,    // Testimonials autoplay speed
  scrollToHeader: 100,             // Scroll-to-top button threshold
  navbarOffset: 100,               // Navigation highlight offset
  colors: [/* color schemes */]    // Available color themes
};
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select branch and root folder
4. Your site will be live at `[https://abdelrahman968.github.io/portfolio-route/]`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/` (root)
4. Deploy!

### Vercel
```bash
npm i -g vercel
vercel
```

## 📄 File Descriptions

### `index.html`
Main HTML file containing all sections and content. Includes meta tags for SEO, Open Graph, and Twitter Cards.

### `assets/js/index.js`
Core JavaScript functionality:
- `activeNavigation()`: Highlights active section in navbar
- `themeToggle()`: Handles dark/light mode switching
- `mobileMenu()`: Mobile hamburger menu functionality
- `tabsFilters()`: Portfolio filtering system
- `settingsSidebar()`: Customization panel logic
- `testimonialsCarousel()`: Testimonials auto-rotation
- `scrollToTop()`: Scroll-to-top button

### `assets/css/`
- `style.css`: Tailwind CSS framework
- `main.css`: Custom styles and animations

## 🎯 Key Features Explained

### 1. **Settings Sidebar**
Slide-in panel for customization:
- Font family selection
- Color scheme picker
- Reset to defaults

### 2. **Testimonials Carousel**
- Auto-plays every 5 seconds
- Pauses on hover
- Manual navigation with arrows
- Indicator dots for direct access
- Responsive (1 card on mobile, 2 on tablet, 3 on desktop)

### 3. **Portfolio Filtering**
- Click filter buttons to show specific categories
- Smooth fade in/out animations
- Categories: All, Web, App, Design, E-commerce

### 4. **Dark Mode**
- Toggle with animated button in navbar
- Persists across sessions
- Smooth color transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Abdelrahman Ayman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Abdelrahman Ayman**
- Portfolio: [abdelrahmanayman.dev](https://abdelrahman968.github.io/portfolio-route/)
- Email: se.abdelrahman968@gmail.com
- Phone: +20 15 5679 0812
- Location: Al-Mansoura, Egypt

## 🙏 Acknowledgments

- **Font Awesome**: Icon library
- **Google Fonts**: Arabic typography
- **Tailwind CSS**: Utility-first CSS framework
- **Unsplash/Pexels**: Image assets (if applicable)

## 📊 Project Stats

- **Lines of Code**: ~3,500+
- **Sections**: 9 main sections
- **Portfolio Projects**: 9 showcased projects
- **Testimonials**: 6 client reviews
- **Color Schemes**: 8 theme options
- **Font Options**: 3 Arabic fonts

## 🔮 Future Enhancements

- [ ] Blog section integration
- [ ] Multi-language support (English)
- [ ] Contact form backend integration
- [ ] Project detail modal popups
- [ ] Animation on scroll effects
- [ ] Performance analytics dashboard
- [ ] CMS integration for easy content updates

## 📞 Support

If you have any questions or need help with the project:
- Open an issue on GitHub
- Email: se.abdelrahman968@gmail.com
- Phone: +20 15 5679 0812

---

⭐ **If you found this project helpful, please give it a star!** ⭐

**Made with ❤️ by Abdelrahman Ayman**
