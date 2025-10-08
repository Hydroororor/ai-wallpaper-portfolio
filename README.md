# AI Wallpaper Portfolio

A modern, cinematic portfolio website for AI-generated wallpapers built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Cinematic Design**: Dark theme with glowing gradients and neon accents
- ✨ **Smooth Animations**: Framer Motion animations and transitions
- 🖼️ **Interactive Gallery**: Filterable wallpaper gallery with hover effects
- 🛒 **Digital Product Page**: Guide sales page with testimonials
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎯 **Custom Cursor**: Animated cursor with trail effects
- 🌟 **Background Effects**: Floating particles and gradient animations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins & Inter

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `neon-purple`: #8B5CF6
- `neon-blue`: #06B6D4
- `neon-pink`: #EC4899
- `neon-green`: #10B981

### Content
Update the following files to customize content:
- `app/components/HeroSection.tsx` - Hero section content
- `app/components/WallpaperGallery.tsx` - Wallpaper data
- `app/components/GuideSection.tsx` - Product information
- `app/components/AboutSection.tsx` - About content and social links

### Links
Replace placeholder links with your actual URLs:
- Discord invite link
- Social media profiles
- Product purchase links (Gumroad/Ko-fi)

## Deployment

Deploy to Vercel:
```bash
npm run build
```

Or deploy to Firebase Hosting:
```bash
npm run build
firebase deploy
```

## License

MIT License - feel free to use this template for your own projects!
