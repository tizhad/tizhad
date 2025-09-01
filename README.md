A modern, responsive personal website built with Angular 20, featuring a beautiful home page and blog section.

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

For questions or support, please contact:

- Email: hello@tizhad.com
- LinkedIn: [Tizhad](https://linkedin.com/in/tizhad)
- GitHub: [Tizhad](https://github.com/tizhad)
