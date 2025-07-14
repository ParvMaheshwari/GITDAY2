# Herbal Remedies Guide - React App

A modern, responsive web application showcasing natural herbal remedies for common health problems. Built with React.js, Tailwind CSS, and Vite 4.0.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Video Support**: Embedded instructional videos for each remedy
- **Organized Content**: Well-structured sections for different health categories:
  - Digestive Health
  - Stress Relief
  - Immune Support
  - Skin Health

## Technologies Used

- **React.js**: Modern JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Vite 4.0**: Fast build tool and development server
- **HTML5 Video**: Native video support for instructional content

## Installation

1. Clone the repository or navigate to the project directory
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
herbal-remedies-guide/
├── public/
│   ├── images/           # Image assets
│   │   └── video/        # Video assets
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── HerbalRemediesGuide.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Assets

To use the application with images and videos, place your media files in the following structure:

```
public/
├── images/
│   ├── ayursage.jpg
│   ├── peppermint tea.jpg
│   ├── ginger infusion.jpg
│   ├── Chamomile Tea.jpg
│   ├── Tulsi (Holy Basil) Tea.jpg
│   ├── Turmeric Milk.jpg
│   ├── garlic infusion.jpg
│   ├── Aloe Vera Gel.jpg
│   ├── Calendula Infused Oil.png
│   └── video/
│       ├── peppermint tea video.mp4
│       ├── Soothing_Ginger_Tea_Recipe-VEED.mp4_1752256170281.mp4
│       ├── Chamomile Tea.mp4
│       ├── Tulsi (Holy Basil) Tea.mp4
│       ├── Turmeric Milk.mp4
│       ├── Garlic Infusion.mp4
│       ├── aloe vera.mp4
│       └── healing oil.mp4
```

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This application is for educational purposes only. Always consult with a healthcare professional before using herbal remedies, especially if pregnant, nursing, or on medication.