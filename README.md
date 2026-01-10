
<div align="center">
  
![Build](https://github.com/sumitduster-iMac/Lovable/workflows/Build%20and%20Release/badge.svg)
![CI](https://github.com/sumitduster-iMac/Lovable/workflows/CI/badge.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20Intel-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

<img src="assets/icon.svg" alt="Lovable App Icon" width="250" height="250" />

### ✨ A beautiful native Intel Mac application for [Lovable.dev](https://lovable.dev/)

*Experience lovable.dev with a clean, native desktop application built specifically for Mac*

</div>

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

## 🖼️ Application Window

The app provides a clean, minimal interface:
- **Instant Launch**: Opens directly to lovable.dev without delays
- **Full-Featured Webview**: Complete access to all Lovable platform features
- **Seamless Integration**: Native macOS window controls and behavior
- **Persistent Sessions**: Your work is automatically saved across app launches
- **Clean Interface**: No unnecessary chrome, just the tools you need

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
3. Open lovable.dev instantly in the webview

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
2. **Clean Interface** - Minimal chrome and distractions, maximum workspace
3. **Beautiful Icon** - Tahoe-style liquid glass heart with gradient design
4. **Native Feel** - Seamless macOS integration with system fonts and controls
5. **Performance First** - Optimized for fast, responsive interaction
6. **Persistent State** - Work is automatically saved across sessions

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