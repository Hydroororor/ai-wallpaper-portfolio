'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import WallpaperGallery from './components/WallpaperGallery'
import GuideSection from './components/GuideSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <WallpaperGallery />
      <GuideSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
