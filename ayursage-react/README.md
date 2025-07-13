# AyurSage React Application

A modern React.js application built with Vite and Tailwind CSS that showcases India's ancient herbal wisdom through an interactive learning platform.

## Features

- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Interactive Elements**: Smooth scrolling, modal dialogs, and hover effects
- **Social Media Integration**: Links to various social media platforms
- **Newsletter Subscription**: Email subscription form in the footer

## Required Images

To run this application properly, you need to add the following images to the `public/` directory:

1. `AyurSage-logo-design.png` - Main logo
2. `ayursage-hero-background.jpg` - Hero section background image
3. `Ashwagandha-dried-ro.png` - Ashwagandha plant image
4. `holy-basil-or-tulsi.png` - Tulsi plant image

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add the required images to the `public/` directory

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section component
│   ├── PlantCarousel.jsx   # Featured plants carousel
│   ├── Footer.jsx          # Footer component
│   └── WelcomeModal.jsx    # Welcome modal dialog
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles with Tailwind
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

## Customization

The application uses Tailwind CSS classes for styling. You can customize the design by:

1. Modifying the `src/index.css` file for custom component styles
2. Updating the `tailwind.config.js` file for theme customization
3. Changing colors, spacing, and other design tokens in the Tailwind configuration

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.
