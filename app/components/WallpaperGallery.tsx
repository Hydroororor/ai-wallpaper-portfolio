'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Eye, Heart } from 'lucide-react'

const wallpaperCategories = [
  { id: 'all', name: 'All', color: 'from-neon-purple to-neon-blue' },
  { id: 'dreamcore', name: 'Dreamcore', color: 'from-neon-pink to-neon-purple' },
  { id: 'abstract', name: 'Abstract', color: 'from-neon-blue to-neon-green' },
  { id: 'vehicles', name: 'Vehicles', color: 'from-neon-green to-neon-pink' },
  { id: 'space', name: 'Space', color: 'from-neon-purple to-neon-blue' },
]

const wallpapers = [
  {
    id: 1,
    title: 'Cosmic Dreams',
    category: 'dreamcore',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    downloads: 1250,
    likes: 890
  },
  {
    id: 2,
    title: 'Neon Abyss',
    category: 'abstract',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    downloads: 980,
    likes: 756
  },
  {
    id: 3,
    title: 'Cyber Car',
    category: 'vehicles',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    downloads: 2100,
    likes: 1456
  },
  {
    id: 4,
    title: 'Galaxy Explorer',
    category: 'space',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop',
    downloads: 1890,
    likes: 1234
  },
  {
    id: 5,
    title: 'Digital Forest',
    category: 'dreamcore',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    downloads: 1456,
    likes: 987
  },
  {
    id: 6,
    title: 'Electric Storm',
    category: 'abstract',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    downloads: 1678,
    likes: 1123
  },
  {
    id: 7,
    title: 'Futuristic Bike',
    category: 'vehicles',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    downloads: 1345,
    likes: 890
  },
  {
    id: 8,
    title: 'Nebula Journey',
    category: 'space',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop',
    downloads: 1987,
    likes: 1456
  },
]

export default function WallpaperGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedWallpaper, setSelectedWallpaper] = useState<typeof wallpapers[0] | null>(null)

  const filteredWallpapers = activeCategory === 'all' 
    ? wallpapers 
    : wallpapers.filter(wallpaper => wallpaper.category === activeCategory)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="wallpapers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Wallpaper</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover my collection of AI-generated wallpapers. Each piece is crafted with precision 
            and creativity, perfect for your digital spaces.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {wallpaperCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-dark-surface text-gray-300 hover:text-white hover:bg-dark-border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Wallpaper Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredWallpapers.map((wallpaper, index) => (
            <motion.div
              key={wallpaper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-dark-surface rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedWallpaper(wallpaper)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={wallpaper.image}
                  alt={wallpaper.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <Eye className="mx-auto mb-2 text-white" size={32} />
                    <p className="text-white font-semibold">View Details</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{wallpaper.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Download className="mr-1" size={16} />
                    {wallpaper.downloads.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Heart className="mr-1" size={16} />
                    {wallpaper.likes.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Discord CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Want More Exclusive Wallpapers?
            </h3>
            <p className="text-gray-300 mb-6">
              Join our Discord community to access premium wallpapers, early releases, 
              and exclusive content not available anywhere else.
            </p>
            <a
              href="https://discord.gg/Bdjpv8KJPB"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center"
            >
              <Download className="mr-2" size={20} />
              Download Exclusives in Discord
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal for Wallpaper Details */}
      {selectedWallpaper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWallpaper(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-surface rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={selectedWallpaper.image}
                  alt={selectedWallpaper.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  {selectedWallpaper.title}
                </h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Download className="mr-2" size={20} />
                    {selectedWallpaper.downloads.toLocaleString()} downloads
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Heart className="mr-2" size={20} />
                    {selectedWallpaper.likes.toLocaleString()} likes
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  This stunning digital wallpaper combines cutting-edge technology with 
                  artistic vision to create a truly unique piece of digital art.
                </p>
                <div className="flex gap-4">
                  <button className="neon-button flex-1">
                    Download HD
                  </button>
                  <a
                    href="https://discord.gg/Bdjpv8KJPB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button flex-1 text-center"
                  >
                    Get in Discord
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
