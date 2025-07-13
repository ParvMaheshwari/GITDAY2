# AyurSage - React Application

A modern React application showcasing India's ancient herbal wisdom through interactive learning, guided tours, and expert advice.

## Features

- **DravyaDarshan**: Explore medicinal plants
- **VanaspatiYatra**: Virtual tours of herbal gardens
- **ArogyaSutra**: Health remedies and guidance
- **SasyaKosha**: Personal garden management
- **VaidyaBodh**: Consult with Ayurvedic doctors

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Theme**: Herbal-inspired color palette

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ayursage-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
ayursage-react/
├── public/
│   └── assets/           # Static images and assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── PlantCarousel.jsx
│   │   ├── Footer.jsx
│   │   └── WelcomeModal.jsx
│   ├── App.jsx          # Main application component
│   ├── index.css        # Tailwind CSS and custom styles
│   └── main.jsx         # Application entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Custom Tailwind Theme

The application uses a custom color palette inspired by Ayurvedic themes:

- `herbal-green`: #094d2a (Primary dark green)
- `herbal-light`: #326739 (Light green)
- `herbal-accent`: #22ff00d5 (Accent green)
- `herbal-bg`: #f7fdf5 (Background)
- `herbal-card`: #e9f5ec (Card backgrounds)
- `golden`: #ffd700 (Golden accents)

## Components

### Navbar
Navigation bar with logo and menu items for different sections.

### Hero
Hero section with background image and call-to-action button.

### PlantCarousel
Displays featured medicinal plants with images and descriptions.

### Footer
Comprehensive footer with links, contact information, and social media icons.

### WelcomeModal
Modal that appears on page load to welcome users.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint (if configured)

## Assets

Place your images in the `public/` directory:
- `AyurSage logo design.png`: Main logo
- `ayursage-hero-background.jpg`: Hero background image
- `Ashwagandha dried ro.png`: Ashwagandha plant image
- `holy basil or tulsi .png`: Tulsi plant image

## Customization

### Adding New Plants
Edit the `plants` array in `src/components/PlantCarousel.jsx`:

```javascript
const plants = [
  {
    image: "/path-to-image.png",
    name: "Plant Name",
    description: "Plant description"
  },
  // Add more plants...
];
```

### Styling
Customize the theme by editing `tailwind.config.js` or add custom CSS classes in `src/index.css`.

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: info@ayursage.com
- Phone: +91 6395615241
- Address: 123 Herbal Lane, Agra, UP, India

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vite for the fast development experience
- The ancient wisdom of Ayurveda for inspiration
