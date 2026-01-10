# Lovable Desktop App

<div align="center">
  
![Build](https://github.com/sumitduster-iMac/Lovable/workflows/Build%20and%20Release/badge.svg)
![CI](https://github.com/sumitduster-iMac/Lovable/workflows/CI/badge.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20Intel-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

<img src="assets/icon.svg" alt="Lovable App Icon" width="200" height="200" />

### ✨ A beautiful native Intel Mac application for [Lovable.dev](https://lovable.dev/)

*Experience lovable.dev with an enhanced, modern UI featuring a stunning loading screen with a centered 200x200px animated app icon*

</div>

---

## 🎯 Features

<table>
  <tr>
    <td align="center" width="50%">
      <h3>🎨 Beautiful Loading Screen</h3>
      Stunning loading screen with centered 200x200px app icon, smooth pulse animations, gradient effects, and animated loading dots
    </td>
    <td align="center" width="50%">
      <h3>🚀 Native macOS Experience</h3>
      Built specifically for Intel Mac computers with native integration and optimized performance
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>🌐 Full Web Access</h3>
      Complete access to lovable.dev with all features, functionality, and seamless integration
    </td>
    <td align="center">
      <h3>⚡ Fast & Responsive</h3>
      Optimized performance with Electron framework and hardware-accelerated animations
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>💫 Smooth Animations</h3>
      Professional animations including icon pulse, title shimmer, staggered dot bounce, and smooth transitions
    </td>
    <td align="center">
      <h3>🔒 Secure</h3>
      Context isolation, sandboxed environment, and Content Security Policy for maximum security
    </td>
  </tr>
</table>

---

## 🖼️ Screenshots

### Loading Screen with Centered App Icon
The app features a beautiful, professional loading screen that appears on launch:
- **Large Centered Icon**: 200x200px app icon prominently centered with pink glow
- **Stunning Gradient Background**: Dark navy to slate gradient (#0F172A to #1E293B)
- **Multiple Smooth Animations**: 
  - Icon pulse effect (2s cycle: scale 1.0 → 1.05 and opacity 1.0 → 0.9)
  - Title shimmer effect (3s cycle)
  - Animated loading dots with staggered bounce (1.4s cycle with 0.2s delays)
  - Fade-in entrance animation (0.8s)
  - Fade-out exit animation (0.5s)
- **Duration**: 2.5 seconds display + 0.5s fade-out = 3 seconds total
- **Message**: "Initializing your creative workspace..."

### Main Application Window
- Clean, minimal interface with no unnecessary chrome
- Full-featured webview displaying lovable.dev
- Seamless integration with the Lovable platform
- Native macOS window controls and behavior
- Persistent session state across app launches

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

That's it! The app will open with a beautiful loading screen featuring the centered app icon, then load lovable.dev.

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
3. Display the loading screen with centered app icon
4. Load lovable.dev in the webview

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
├── index.html            # Main HTML with loading screen
├── styles.css            # Modern CSS with animations
└── package.json          # Project configuration
```

### Key Files

- **`index.html`**: Contains the loading screen with centered app icon and webview
- **`styles.css`**: All styling including loading screen animations
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

## 🎨 UI Enhancements

The app provides a premium desktop experience with professional UI enhancements:

### Loading Screen ⭐ Featured!
- **Centered App Icon**: Large 200x200px icon prominently centered on screen
- **Gradient Background**: Dark navy gradient (#0F172A to #1E293B) creating visual depth
- **Icon Animations**: 
  - Pulse effect with smooth scale (1.0 → 1.05) and opacity (1.0 → 0.9) transitions
  - Pink gradient drop shadow (rgba(236, 72, 153, 0.3)) for depth
- **Title Effects**: "Lovable" text with blue-to-pink gradient and shimmer animation
- **Loading Indicator**: Three animated dots with staggered bounce effect (0s, 0.2s, 0.4s delays)
- **Smooth Transitions**: 
  - Fade-in entrance (0.8s)
  - Fade-out exit (0.5s)
- **Duration**: 2.5 seconds branded experience + 0.5s transition = 3s total
- **Auto-dismiss**: Automatically transitions to main app after loading

### Design System
1. **App Icon Display** - Prominently centered on loading screen with professional animations
2. **Gradient Theme** - Consistent blue (#3B82F6) to pink (#EC4899) gradient throughout
3. **Typography** - System fonts with gradient text effects for modern look
4. **Color Consistency** - All UI elements match the icon's gradient color scheme
5. **Hardware Acceleration** - Transform-based animations for smooth 60fps performance
6. **Modern Effects** - Drop shadows, pulse effects, shimmer, and staggered animations

### Visual Experience
```
┌────────────────────────────────────┐
│                                    │
│          [Loading Screen]          │
│                                    │
│        ╔════════════════╗          │
│        ║                ║          │
│        ║   [App Icon]   ║ ← Centered, Animated
│        ║                ║          │
│        ╚════════════════╝          │
│                                    │
│           L o v a b l e            │
│         (gradient text)            │
│                                    │
│            • • •                   │
│      (animated dots)               │
│                                    │
│  Initializing your creative...    │
│                                    │
└────────────────────────────────────┘
         ↓ Fades to ↓
┌────────────────────────────────────┐
│   lovable.dev full interface       │
│                                    │
└────────────────────────────────────┘
```

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
- Ensure the app icon displays correctly

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

![Lovable App Icon - Tahoe-style liquid glass heart with gradient](assets/icon.svg)

**[⬆ Back to Top](#lovable-desktop-app)**

</div>