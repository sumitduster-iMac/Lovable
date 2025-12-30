# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the Lovable Desktop App.

## Workflows

### 1. Build and Release (`build.yml`)

**Triggers:**
- Push to `main` or any `copilot/**` branch
- Push of version tags (e.g., `v1.0.0`)
- Pull requests to `main`
- Manual workflow dispatch

**Jobs:**

#### Build Job
- Runs on: macOS latest
- Steps:
  1. Checkout code
  2. Setup Node.js 20 with npm caching
  3. Install dependencies
  4. Build the application
  5. Upload build artifacts (`.app`, `.dmg`, `.zip`)
- Artifacts are retained for 7 days

#### Release Job
- Runs on: macOS latest
- Condition: Only runs when a version tag is pushed (e.g., `v1.0.0`)
- Steps:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies
  4. Build DMG installer
  5. Create GitHub release with DMG and ZIP files
  6. Auto-generate release notes

**Usage:**
```bash
# Create a release
git tag v1.0.0
git push origin v1.0.0
```

### 2. Continuous Integration (`ci.yml`)

**Triggers:**
- Push to `main` or any `copilot/**` branch
- Pull requests to `main`

**Jobs:**

#### Validate Job
- Runs on: Ubuntu latest
- Steps:
  1. Checkout code
  2. Setup Node.js 20 with npm caching
  3. Install dependencies
  4. Check JavaScript syntax (main.js, preload.js)
  5. Validate package.json format
  6. Verify project structure (all required files present)
  7. Check HTML structure (webview, loading screen, nav bar, status bar)
  8. Check CSS features (animations, gradients, glassmorphism)

**Purpose:**
Ensures code quality and validates that all required components are present before merging.

## Setting Up

No additional setup is required. The workflows will run automatically based on their triggers.

### For Releases

To create a new release:
1. Update version in `package.json`
2. Commit the change
3. Create and push a tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
4. The workflow will automatically build and create a GitHub release

## Build Artifacts

Build artifacts from the Build workflow include:
- `Lovable.app` - macOS application bundle
- `Lovable.dmg` - DMG installer
- `Lovable-mac-x64.zip` - Zipped application

These are available in the Actions tab after each successful build.

## Status Badges

Add these to your README.md:

```markdown
![Build](https://github.com/sumitduster-iMac/Lovable/workflows/Build%20and%20Release/badge.svg)
![CI](https://github.com/sumitduster-iMac/Lovable/workflows/CI/badge.svg)
```
