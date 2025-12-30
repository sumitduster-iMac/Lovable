# Lovable Desktop App

A beautiful native Intel Mac application for [Lovable.dev](https://lovable.dev/) with an enhanced, modern UI.

## Features

- 🎨 **Enhanced Modern UI** - Beautiful gradient-based design with smooth animations
- 🚀 **Native macOS Experience** - Built specifically for Intel Mac computers
- 🌐 **Full Web Access** - Complete access to lovable.dev with all features
- ⚡ **Fast & Responsive** - Optimized performance with Electron
- 🎯 **Navigation Controls** - Built-in back, forward, refresh, and home buttons
- 💫 **Smooth Animations** - Elegant loading screen and transitions
- 🔒 **Secure** - Context isolation and sandboxed environment

## Screenshots

The app features:
- A stunning loading screen with animated logo and gradient effects
- A sleek navigation bar with intuitive controls
- A full-featured webview displaying lovable.dev
- A modern status bar showing connection status

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- macOS (Intel-based Mac)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sumitduster-iMac/Lovable.git
   cd Lovable
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app in development mode:
   ```bash
   npm start
   ```

### Building the App

To build the macOS application:

```bash
npm run build
```

This will create a `.app` file in the `dist` folder that you can move to your Applications folder.

To build a DMG installer:

```bash
npm run build-dmg
```

## Development

The app is built with:
- **Electron** - Cross-platform desktop app framework
- **Native HTML/CSS/JS** - No additional frameworks needed
- **Modern CSS** - Gradients, animations, and glassmorphism effects

### Project Structure

```
Lovable/
├── main.js           # Main Electron process
├── preload.js        # Preload script for security
├── index.html        # Main HTML file with enhanced UI
├── styles.css        # Modern CSS styles with animations
├── package.json      # Project configuration
└── assets/           # App icons and resources
```

## UI Enhancements

The app includes several UI enhancements over a basic web wrapper:

1. **Custom Loading Screen** - Animated logo with gradient effects and loading spinner
2. **Navigation Bar** - Integrated controls for navigation with modern styling
3. **Gradient Theme** - Purple to pink gradient matching Lovable's brand
4. **Smooth Animations** - Fade-ins, pulses, and transitions throughout
5. **Status Bar** - Real-time connection status indicator
6. **Glassmorphism Effects** - Frosted glass effects on navigation elements
7. **Custom Scrollbars** - Styled scrollbars matching the theme

## License

MIT