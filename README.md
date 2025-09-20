# EPK - Electronic Press Kit

A modern, responsive Next.js application with Tailwind CSS designed for electronic press kits. Features a full-screen background image with overlay navigation.

## Features

- **Responsive Design**: 
  - Desktop: Full-screen background image with contained app window
  - Mobile/Tablet: Black background with optional image overlay
- **Non-scrollable Main Page**: Background remains fixed while overlays are scrollable
- **Overlay Navigation**: Menu items open scrollable splash screens
- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS 4

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and layout
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
└── components/
    ├── BackgroundImage.tsx   # Responsive background image component
    ├── Navigation.tsx        # Top navigation with menu items
    └── Overlay.tsx          # Scrollable overlay/splash screens
```

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your background image**:
   - Replace `public/background-image.jpg` with your actual background image
   - Recommended size: 1920x1080 or higher for desktop
   - Optional: Add `public/background-mobile.jpg` for mobile-specific image

3. **Customize content**:
   - Edit `src/components/Navigation.tsx` to modify menu items
   - Edit `src/components/Overlay.tsx` to customize overlay content
   - Update metadata in `src/app/layout.tsx`

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Adding New Menu Items

1. Update the `menuItems` array in `src/components/Navigation.tsx`
2. Add corresponding case in `src/components/Overlay.tsx`

### Adding Videos

Videos can be added to overlay components in `src/components/Overlay.tsx`:

```tsx
<video 
  className="w-full h-auto rounded-lg"
  controls
  preload="metadata"
>
  <source src="/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Responsive Behavior

- **Desktop (lg+)**: Background image covers full screen, app content is overlaid
- **Mobile/Tablet (<lg)**: Black background with optional image overlay
- **Overlays**: Always scrollable regardless of device size

## Deployment

This is a static website that can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

For static export, add to `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes