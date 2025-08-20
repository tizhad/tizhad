# Tizhad - Personal Branding Website

A modern, responsive personal branding website built with Angular 20, featuring a beautiful home page and blog section.

## Features

- **Modern Design**: Clean, professional design with smooth animations and gradients
- **Responsive Layout**: Fully responsive design that works on all devices
- **Home Page**: Hero section, about me, featured projects, and contact information
- **Blog Section**: Category-filtered blog posts with modern card layout
- **Navigation**: Sticky header with smooth navigation between pages
- **Performance**: Optimized for fast loading and smooth user experience

## Tech Stack

- **Frontend**: Angular 20
- **Styling**: SCSS with CSS custom properties
- **Routing**: Angular Router
- **Architecture**: Standalone components with modern Angular patterns

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tizhad
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.scss
│   │   └── blog/
│   │       ├── blog.component.ts
│   │       ├── blog.component.html
│   │       └── blog.component.scss
│   ├── app.config.ts
│   ├── app.html
│   ├── app.routes.ts
│   ├── app.scss
│   └── app.ts
├── index.html
├── main.ts
└── styles.scss
```

## Customization

### Colors

The website uses CSS custom properties for easy color customization. You can modify the colors in the `:root` section of the SCSS files:

```scss
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  // ... other colors
}
```

### Content

- Update the personal information in the home component
- Modify blog posts in the blog component
- Customize navigation links in the app.html file

## Features in Detail

### Home Page

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal description and skills showcase
- **Projects Section**: Featured projects with technology tags
- **Contact Section**: Contact information and social links

### Blog

- **Category Filtering**: Filter posts by category
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Featured Posts**: Highlight important blog posts
- **Newsletter Signup**: Email subscription form

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:

- Email: hello@tizhad.com
- LinkedIn: [Tizhad](https://linkedin.com/in/tizhad)
- GitHub: [Tizhad](https://github.com/tizhad)
