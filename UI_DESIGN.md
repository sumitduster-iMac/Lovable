# UI Design Documentation

## Overview
The Lovable Desktop App features a modern, enhanced UI with the following components:

## Color Scheme
- **Primary Background**: Dark navy gradient (#0F172A to #1E293B)
- **Accent Colors**: Blue to Pink gradient (#3B82F6 to #EC4899)
- **Text**: Light gray (#E2E8F0) with muted secondary text (#94A3B8)
- **Status Indicator**: Green gradient (#10B981 to #34D399)

## UI Components

### 1. Loading Screen
- **Location**: Full screen overlay on app launch
- **Features**:
  - Animated SVG logo with gradient fill
  - Pulsing animation on logo
  - Three-dot loading spinner with staggered animation
  - Shimmer effect on title text
  - Fades out after 2 seconds
- **Colors**: Blue to pink gradient on dark background

### 2. Navigation Bar
- **Location**: Top of window
- **Features**:
  - Draggable area for window movement (macOS native behavior)
  - Back/Forward navigation buttons
  - Refresh button
  - Home button
  - Central URL display with icon
  - Glassmorphism effect (frosted glass backdrop)
  - Hover animations on buttons
- **Style**: Semi-transparent dark background with blue accent borders

### 3. Main Content Area
- **Location**: Center of window (fills available space)
- **Features**:
  - Full webview displaying lovable.dev
  - No borders or frames
  - Seamless integration
- **Functionality**: Complete access to all Lovable features

### 4. Status Bar
- **Location**: Bottom of window
- **Features**:
  - Connection status indicator (animated green dot)
  - "Connected" status text
  - App version display
  - Glassmorphism effect
- **Style**: Semi-transparent dark background

## Animations

### Loading Screen Animations
1. **fadeInUp**: Content slides up and fades in (0.8s)
2. **pulse**: Logo and status indicator pulse (2s infinite)
3. **bounce**: Dot spinner bounce effect (1.4s infinite, staggered)
4. **shimmer**: Title text shimmer effect (3s infinite)

### Navigation Animations
- Button hover: Slight lift effect with color intensification
- Button press: Momentary scale down
- Disabled state: Reduced opacity

### Transitions
- Loading screen fade out: 0.5s ease
- All hover effects: 0.3s ease

## Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Loading Title**: 3rem, weight 700
- **Body Text**: 0.9-0.95rem, weight 400
- **Status Text**: 0.8rem

## Layout Structure
```
┌─────────────────────────────────────────┐
│         Navigation Bar (Draggable)      │
│  ◄ ► ⟳    🌐 lovable.dev           🏠   │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│          Main Content Area              │
│        (Lovable.dev Webview)            │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│ ● Connected        v1.0.0               │
└─────────────────────────────────────────┘
```

## Special Effects

### Glassmorphism
- Applied to navigation bar and status bar
- `backdrop-filter: blur(10px)`
- Semi-transparent backgrounds with colored borders
- Creates depth and modern aesthetic

### Gradients
- Logo and accent colors use linear gradients
- Direction: 135deg (diagonal)
- Smooth color transitions
- Applied to buttons, borders, and text

### Custom Scrollbars
- Width: 8px
- Track: Dark semi-transparent
- Thumb: Blue accent with transparency
- Hover: Increased opacity

## Responsive Behavior
- Minimum window size: 800x600
- Default size: 1400x900
- All UI elements scale proportionally
- Navigation controls remain accessible at all sizes

## MacOS Integration
- **Title Bar**: Hidden inset style for modern look
- **Window Controls**: Native macOS traffic lights
- **Draggable Region**: Navigation bar is draggable
- **Center Window**: Opens centered on screen
- **Smooth Animations**: Hardware-accelerated rendering

## Accessibility
- High contrast text on dark backgrounds
- Clear visual indicators for interactive elements
- Hover states for all buttons
- Disabled states clearly differentiated
- Status indicators with both icon and text
