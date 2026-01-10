# Lovable Desktop App

<div align="center">
  
![Build](https://github.com/sumitduster-iMac/Lovable/workflows/Build%20and%20Release/badge.svg)
![CI](https://github.com/sumitduster-iMac/Lovable/workflows/CI/badge.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20Intel-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

<img src="assets/icon.svg" alt="Lovable App Icon" width="250" height="250" />

### ✨ A beautiful native Intel Mac application for [Lovable.dev](https://lovable.dev/)

*Experience lovable.dev with a clean, native desktop application built specifically for Mac*

[Features](#-features) • [Quick Start](#-quick-start) • [Installation](#-installation) • [Building](#-building-the-app) • [Development](#️-development)

</div>

---

## 📋 System Requirements

- **Operating System**: macOS 10.13 (High Sierra) or later
- **Architecture**: Intel x64 (64-bit)
- **Node.js**: v16 or higher
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: ~200MB for app installation

---

## 🎯 Features

<table>
  <tr>
    <td align="center" width="50%">
      <h3>🚀 Native macOS Experience</h3>
      Built specifically for Intel Mac computers with native integration and optimized performance
    </td>
    <td align="center" width="50%">
      <h3>🌐 Full Web Access</h3>
      Complete access to lovable.dev with all features, functionality, and seamless integration
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>⚡ Fast & Responsive</h3>
      Instant startup with optimized performance using the Electron framework
    </td>
    <td align="center">
      <h3>🔒 Secure</h3>
      Context isolation, sandboxed environment, and Content Security Policy for maximum security
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>🎨 Beautiful Design</h3>
      Clean, modern interface with a stunning Tahoe-style liquid glass heart icon
    </td>
    <td align="center">
      <h3>💾 Persistent Sessions</h3>
      Your work and sessions are saved automatically between app launches
    </td>
  </tr>
</table>

---

## ✨ App Icon

<div align="center">
  <img src="assets/icon.svg" alt="Lovable App Icon" width="300" height="300" />
  
  **Beautiful Tahoe-style liquid glass heart design with gradient**
  
  *This stunning icon represents the Lovable brand with its modern, clean aesthetic*
</div>

---

## 💡 Why Use This App?

Using Lovable Desktop App instead of the web browser provides several advantages:

- **🎯 Dedicated Workspace**: Keep Lovable separate from your browser tabs for better focus
- **⚡ Instant Access**: Launch directly to Lovable without opening a browser first
- **🔔 Native Integration**: Appears in Dock, Cmd+Tab, and macOS app switcher like any native app
- **💾 Session Persistence**: Login state and work sessions automatically persist between launches
- **🖥️ System Integration**: Full macOS integration with native window controls and behavior
- **🎨 Clean Interface**: No browser chrome, address bar, or bookmarks bar - just your workspace

---

## 🖼️ Application Window

The app provides a clean, minimal interface:
- **Instant Launch**: Opens directly to lovable.dev
- **Full-Featured Webview**: Complete access to all Lovable platform features
- **Seamless Integration**: Native macOS window controls and behavior
- **Persistent Sessions**: Your login and work sessions persist between app launches
- **Clean Interface**: Full-screen webview with no extra chrome

---

## 🚀 Quick Start

Get up and running in under 2 minutes:

```bash
# Clone the repository
git clone https://github.com/sumitduster-iMac/Lovable.git
cd Lovable

# Install dependencies
npm install

# Launch the app
npm start
```

That's it! The app will launch instantly and open lovable.dev.

---

## 📦 Installation

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **macOS** (Intel-based Mac) - Required for building and running

### Detailed Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sumitduster-iMac/Lovable.git
cd Lovable
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

This will install:
- Electron framework
- Electron Builder (for packaging)
- Icon generation utilities

#### 3️⃣ Run in Development Mode

```bash
npm start
```

The app will:
1. Generate required icons from SVG source
2. Launch the Electron application
3. Load lovable.dev in a full-screen webview

---

### 📦 Building the App

#### Build macOS Application (.app)

```bash
npm run build
```

Creates a macOS `.app` bundle in the `dist` folder:
- Ready to move to Applications folder
- Includes all assets and icons
- Optimized for Intel x64 architecture

#### Build DMG Installer

```bash
npm run build-dmg
```

Creates a distributable DMG file:
- Professional installer format
- Easy drag-and-drop installation
- Includes app icon and branding

---

## 🛠️ Development

### Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Electron** | Cross-platform desktop app framework |
| **HTML/CSS/JS** | Native web technologies, no frameworks needed |
| **Modern CSS** | Gradients, animations, and effects |
| **SVG** | Scalable app icon with beautiful gradient design |

### Project Structure

```
Lovable/
├── .github/
│   └── workflows/         # GitHub Actions CI/CD workflows
├── assets/
│   ├── icon.svg          # App icon (SVG source with gradient)
│   └── icon.png          # Generated PNG icon
├── scripts/
│   └── generate-icons.mjs # Icon generation utility
├── main.js               # Main Electron process
├── preload.js            # Preload script for security
├── index.html            # Main HTML with webview
├── styles.css            # Application styling and theme
└── package.json          # Project configuration
```

### Key Files

- **`index.html`**: Main application HTML with webview container
- **`styles.css`**: Application styling and theme
- **`assets/icon.svg`**: Beautiful gradient app icon (Tahoe-style liquid glass design)
- **`main.js`**: Electron main process configuration

---

## CI/CD

The project includes automated GitHub Actions workflows:

- **Build and Release** - Automatically builds the app on pushes and creates releases when version tags are pushed
- **CI** - Validates code quality, syntax, and project structure on every push and pull request

See [.github/workflows/README.md](.github/workflows/README.md) for detailed workflow documentation.

To create a release:
```bash
# Update version in package.json, then:
git tag v1.0.1
git push origin v1.0.1
```

## 🎨 Design & User Experience

The app provides a premium desktop experience with a focus on performance and usability:

### Design Philosophy
1. **Instant Startup** - Opens directly to lovable.dev for immediate productivity
2. **Minimal Interface** - Full-screen webview with no distractions
3. **Beautiful Icon** - Tahoe-style liquid glass heart with gradient design
4. **Native Feel** - Seamless macOS integration with native window controls
5. **Performance First** - Optimized for fast, responsive interaction
6. **Persistent Sessions** - Login and work sessions persist between launches

### App Icon Design

<div align="center">
  <img src="assets/icon.svg" alt="Lovable App Icon Detail" width="200" height="200" />
  
  **Tahoe-style liquid glass heart with gradient**
</div>

The app icon features:
- Modern liquid glass aesthetic
- Beautiful blue-to-pink gradient (#3B82F6 to #EC4899)
- Heart shape symbolizing creativity and passion
- Scalable SVG format for crisp display at any size
- Automatically generated in multiple resolutions for macOS

---

## 🐛 Troubleshooting

### Common Issues

#### App won't start
- Ensure all dependencies are installed: `npm install`
- Verify Node.js is installed: `node --version` (should be v16+)
- Try clearing and reinstalling dependencies:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

#### Webview shows blank page
- Check your internet connection
- Verify lovable.dev is accessible in your web browser
- Try restarting the app

#### Build fails
- Ensure `electron-builder` is installed
- On macOS, install Xcode Command Line Tools: `xcode-select --install`
- Check that you have sufficient disk space

#### Icons not generating
- The app will work without generated icons using the SVG fallback
- Ensure `@resvg/resvg-js` is installed: `npm install`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Maintain the existing code style
- Test on Intel Mac before submitting
- Update documentation for new features
- Ensure compatibility with the latest Electron version

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🌟 Acknowledgments

- **App Icon**: Beautiful Tahoe-style liquid glass heart design with gradient
- **Lovable.dev**: The amazing platform this app connects to
- **Electron**: Making cross-platform desktop apps possible

---

<div align="center">

### Made with ❤️ for the Lovable community

<img src="assets/icon.svg" alt="Lovable App Icon" width="150" height="150" />

**[⬆ Back to Top](#lovable-desktop-app)**

</div>