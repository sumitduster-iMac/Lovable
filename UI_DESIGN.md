# UI Design Documentation

## Overview
The Lovable Desktop App features a modern, enhanced UI with a beautiful loading screen showcasing a centered app icon, followed by a clean webview interface.

## Loading Screen (New!)

### Purpose
Provides a professional, branded experience while the application initializes.

### Features
- **Centered App Icon**: 200x200px SVG icon with beautiful Tahoe-style gradient
- **Full-screen overlay**: Covers entire window during initialization
- **Animated Elements**: Multiple smooth animations for professional feel
- **Auto-dismiss**: Fades out after 2.5 seconds

### Design Elements
- **Background**: Dark navy gradient (#0F172A to #1E293B)
- **Icon Display**: Centered, large, with drop shadow
- **Title**: "Lovable" with blue-to-pink gradient text
- **Loading Indicators**: Three animated dots with staggered bounce
- **Status Text**: "Initializing your creative workspace..."

### Animations
1. **Icon Pulse** (2s infinite)
   - Scale: 1.0 → 1.05 → 1.0
   - Opacity: 1.0 → 0.9 → 1.0
   
2. **Title Shimmer** (3s infinite)
   - Opacity wave effect
   
3. **Dot Bounce** (1.4s infinite, staggered)
   - Vertical translation: 0 → -15px → 0
   - Stagger: 0s, 0.2s, 0.4s delays
   
4. **Fade In Up** (0.8s)
   - Initial appearance animation
   - Opacity: 0 → 1
   - Transform: translateY(20px) → translateY(0)
   
5. **Fade Out** (0.5s)
   - Exit animation triggered after timeout
   - Opacity: 1 → 0

### Technical Implementation
- Fixed positioning (z-index: 9999)
- Flexbox centering
- CSS transitions and keyframe animations
- JavaScript timeout for auto-dismiss
- Hardware-accelerated transforms

---

## Color Scheme
- **Primary Background**: Dark navy gradient (#0F172A to #1E293B)
- **Accent Colors**: Blue to Pink gradient (#3B82F6 to #EC4899)
- **Text Primary**: Light gray (#E2E8F0)
- **Text Secondary**: Muted gray (#94A3B8)
- **Icon Glow**: Pink with transparency (rgba(236, 72, 153, 0.3))

## UI Components

### 0. Loading Screen (⭐ New!)
- **Location**: Full-screen overlay at app launch
- **Duration**: 2.5 seconds + 0.5s fade-out
- **Features**:
  - Centered app icon (200x200px) with pulse animation
  - Gradient title text with shimmer effect
  - Three-dot loading indicator with staggered bounce
  - Status message
  - Drop shadow on icon for depth
- **Purpose**: Professional branded loading experience

### 1. Main Content Area
- **Location**: Full window (after loading screen)
- **Features**:
  - Full webview displaying lovable.dev
  - No borders or navigation chrome
  - Seamless integration
- **Functionality**: Complete access to all Lovable features

## Animations

### Loading Screen Animations (⭐ New!)
1. **fadeInUp**: Content slides up and fades in (0.8s ease)
2. **pulse**: Icon pulses with scale and opacity (2s infinite)
3. **bounce**: Dot spinner bounce effect (1.4s infinite, staggered 0s/0.2s/0.4s)
4. **shimmer**: Title text shimmer effect (3s infinite)
5. **fade-out**: Screen exit animation (0.5s ease)

### Transitions
- Loading screen fade out: 0.5s ease
- All animations: Hardware-accelerated for smooth performance

## Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Loading Title**: 3rem (48px), weight 700, gradient text
- **Loading Text**: 0.95rem, muted gray (#94A3B8)

## Layout Structure

### Loading Screen (First 2.5 seconds)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│              ╔════════╗                 │
│              ║        ║                 │
│              ║  Icon  ║  ← 200x200px   │
│              ║        ║     Centered    │
│              ╚════════╝     Animated    │
│                                         │
│             L o v a b l e               │
│          (gradient text)                │
│                                         │
│               • • •                     │
│          (bouncing dots)                │
│                                         │
│   Initializing your creative...        │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### Main Window (After loading)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│          Lovable.dev Webview            │
│        (Full application access)        │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

## Special Effects

### Icon Drop Shadow (⭐ New!)
- Applied to centered app icon on loading screen
- `filter: drop-shadow(0 10px 30px rgba(236, 72, 153, 0.3))`
- Creates pink glow matching icon gradient
- Adds depth and visual interest

### Gradients
- Logo and accent colors use linear gradients
- Direction: 135deg (diagonal)
- Smooth color transitions from blue (#3B82F6) to pink (#EC4899)
- Applied to icon, title text, and loading dots

### Custom Scrollbars
- Width: 8px
- Track: Dark semi-transparent (rgba(30, 41, 59, 0.5))
- Thumb: Blue accent with transparency (rgba(59, 130, 246, 0.5))
- Hover: Increased opacity (rgba(59, 130, 246, 0.7))

## Responsive Behavior
- Default window size: 1400x900 pixels
- Minimum window size: 800x600 pixels
- Loading screen scales to any window size (flexbox centering)
- Icon maintains 200x200px size
- All UI elements remain visible at minimum size

## MacOS Integration
- **Title Bar**: Standard macOS window chrome
- **Window Controls**: Native macOS traffic lights (red, yellow, green)
- **Center Window**: Opens centered on screen
- **Smooth Animations**: Hardware-accelerated rendering
- **Loading Screen**: Displays before showing main window

## Accessibility
- High contrast text on dark backgrounds
- Large, clear app icon (200x200px)
- Smooth animations at reasonable speeds
- Alt text on icon image
- Clear visual feedback during loading

## User Experience Flow

1. **App Launch**
   - Window opens with loading screen
   - Centered app icon immediately visible
   - Animations begin (pulse, shimmer, bounce)
   
2. **Loading Period (2.5s)**
   - Icon pulses with scale/opacity animation
   - Title shimmers
   - Dots bounce in sequence
   - Status text displayed
   
3. **Transition (0.5s)**
   - Loading screen fades out smoothly
   - Webview becomes visible underneath
   
4. **Main Application**
   - Full lovable.dev interface
   - Clean, frameless experience
   - All platform features available
