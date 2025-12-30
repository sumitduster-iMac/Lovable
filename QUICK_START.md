# Quick Start Guide

## Getting Started with Lovable Desktop App

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the App**
   ```bash
   npm start
   ```

### Building for Distribution

#### Create a Mac Application Bundle (.app)
```bash
npm run build
```
The app will be created in the `dist` folder. You can then:
- Move it to your Applications folder
- Double-click to launch
- Add to Dock for quick access

#### Create a DMG Installer
```bash
npm run build-dmg
```
This creates a distributable .dmg file that others can use to install the app.

### First Launch Experience

When you first launch the app, you'll see:

1. **Loading Screen** (2 seconds)
   - Animated Lovable logo
   - Blue-pink gradient design
   - "Initializing your creative workspace..." message

2. **Main Application Window**
   - Navigation controls at the top
   - Lovable.dev loaded in the main area
   - Connection status at the bottom

### Using the App

#### Navigation Controls
- **◄ Back**: Navigate to previous page
- **► Forward**: Navigate to next page
- **⟳ Refresh**: Reload current page
- **🏠 Home**: Return to lovable.dev homepage

#### Window Controls
- **Drag**: Click and drag the navigation bar to move the window
- **Resize**: Use window edges to resize (minimum 800x600)
- **Close**: Click red button (Cmd+Q to quit)
- **Minimize**: Click yellow button
- **Maximize**: Click green button

#### Status Bar
- **Green Dot**: Shows app is connected
- **Version**: Displays current app version (v1.0.0)

### Keyboard Shortcuts

All standard browser shortcuts work within the webview:
- **Cmd+R**: Reload page
- **Cmd+T**: New tab (if supported by site)
- **Cmd+W**: Close window
- **Cmd+Q**: Quit app
- **Cmd++**: Zoom in
- **Cmd+-**: Zoom out
- **Cmd+0**: Reset zoom

### Features

✅ **Full Lovable.dev Access**
   - All website features work seamlessly
   - Login state is preserved
   - Projects and settings are saved

✅ **Native macOS Experience**
   - Appears in Dock
   - Shows in Cmd+Tab switcher
   - Native window controls
   - macOS-style title bar

✅ **Enhanced UI**
   - Beautiful loading screen
   - Smooth animations
   - Modern gradient design
   - Glassmorphism effects

✅ **Performance**
   - Dedicated Electron process
   - Optimized for Intel Macs
   - Fast loading times

### Troubleshooting

#### App won't start
1. Make sure you've run `npm install`
2. Check that Node.js is installed: `node --version`
3. Try clearing node_modules and reinstalling:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

#### Webview shows blank page
1. Check your internet connection
2. Try clicking the refresh button
3. Check if lovable.dev is accessible in your browser

#### Build fails
1. Make sure electron-builder is installed:
   ```bash
   npm install electron-builder --save-dev
   ```
2. Check that you have Xcode Command Line Tools (for Mac builds):
   ```bash
   xcode-select --install
   ```

#### "Cannot find module" error
Make sure all dependencies are installed:
```bash
npm install
```

### Customization

#### Changing the Window Size
Edit `main.js` and modify these values:
```javascript
width: 1400,  // Change width
height: 900,  // Change height
minWidth: 800,
minHeight: 600
```

#### Changing Colors
Edit `styles.css` and modify the color variables. Main colors:
- Background: `#0F172A` and `#1E293B`
- Accent: `#3B82F6` and `#EC4899`

#### Changing Loading Time
Edit `index.html` and modify this value:
```javascript
setTimeout(() => {
  loadingScreen.classList.add('fade-out');
  // ...
}, 2000); // Change 2000 to desired milliseconds
```

### Uninstalling

1. Quit the app (Cmd+Q)
2. Move the app to Trash
3. Delete the source folder if you cloned it
4. Optional: Clear app data (usually not needed)

### Support

For issues with:
- **The Desktop App**: Check this repository's issues
- **Lovable.dev**: Visit lovable.dev/support
- **Electron**: See electron.js.org/docs

### System Requirements

- **OS**: macOS 10.13 or later
- **Architecture**: Intel x64 (64-bit)
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 200MB for app + storage for projects
- **Internet**: Required for accessing lovable.dev

### Tips for Best Experience

1. **Keep the app updated**: Pull the latest changes from the repository
2. **Use native features**: Drag the nav bar to move the window
3. **Bookmark in Dock**: Drag the app to your Dock for quick access
4. **Full screen mode**: Click the green button for full screen
5. **Multiple windows**: You can open multiple instances if needed

### What's Next?

After installation, you can:
- Start building projects on Lovable.dev
- Use all Lovable features in a native app
- Enjoy the enhanced UI experience
- Build and share the app with others

---

**Enjoy creating with Lovable! 🚀**
