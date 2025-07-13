# Image Assets

Place the following images in the `public/` directory:

1. **AyurSage logo design.png** - Main logo for the application
2. **ayursage-hero-background.jpg** - Background image for the hero section
3. **Ashwagandha dried ro.png** - Image of Ashwagandha plant
4. **holy basil or tulsi .png** - Image of Tulsi plant

## Current Status

The application is configured to look for these images in the public directory. If the images are not found, they will show as broken image placeholders.

## Recommended Image Specifications

- **Logo**: 400x400px PNG with transparent background
- **Hero Background**: 1920x1080px JPG for best quality
- **Plant Images**: 300x300px PNG with transparent or white background

## Adding New Images

To add new plant images:

1. Place the image file in the `public/` directory
2. Update the `plants` array in `src/components/PlantCarousel.jsx`
3. Add the image path (e.g., "/new-plant-image.png")

The application will automatically display the new plants in the carousel.