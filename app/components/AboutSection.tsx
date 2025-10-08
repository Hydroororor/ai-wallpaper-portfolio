'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageCircle, 
  Youtube, 
  Heart, 
  Coffee,
  Zap,
  Palette,
  Camera,
  Code
} from 'lucide-react'

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const tools = [
    { name: 'ChatGPT', icon: <MessageCircle className="w-6 h-6" />, description: 'Prompt Engineering' },
    { name: 'Leonardo AI', icon: <Palette className="w-6 h-6" />, description: 'Image Generation' },
    { name: 'Whisk', icon: <Camera className="w-6 h-6" />, description: 'AI Video Creation' },
    { name: 'Custom Scripts', icon: <Code className="w-6 h-6" />, description: 'Automation Tools' },
  ]

  const socialLinks = [
    {
      name: 'Discord',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://discord.gg/your-discord-invite',
      color: 'from-indigo-500 to-purple-600',
      description: 'Join our community'
    },
    {
      name: 'TikTok',
      icon: <Zap className="w-6 h-6" />,
      url: 'https://tiktok.com/@your-username',
      color: 'from-pink-500 to-red-500',
      description: 'Follow for daily content'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: 'https://youtube.com/@your-channel',
      color: 'from-red-500 to-pink-500',
      description: 'Tutorials & behind-the-scenes'
    },
    {
      name: 'Ko-fi',
      icon: <Coffee className="w-6 h-6" />,
      url: 'https://ko-fi.com/your-username',
      color: 'from-yellow-500 to-orange-500',
      description: 'Support my work'
    },
  ]

  return (
    <section id="about" className="py-20 relative">
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
            <span className="gradient-text">About</span> My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From curiosity to creativity, discover the story behind my AI art journey 
            and the tools that make it all possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* My Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  It all started with a simple curiosity about artificial intelligence and its 
                  potential to create art. What began as weekend experiments with AI tools 
                  quickly evolved into a passion for pushing the boundaries of digital creativity.
                </p>
                <p>
                  I discovered that AI wasn't just a tool—it was a collaborator. By combining 
                  human creativity with machine intelligence, I could create wallpapers that 
                  captured emotions, told stories, and transported viewers to otherworldly realms.
                </p>
                <p>
                  Today, I'm dedicated to sharing this knowledge with others. Through tutorials, 
                  guides, and community building, I help aspiring creators unlock their own 
                  potential in the world of AI art.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tools I Use */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Tools I Use
              </h3>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-dark-surface/50 hover:bg-dark-surface transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg flex items-center justify-center text-white">
                      {tool.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {tool.name}
                      </h4>
                      <p className="text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6 gradient-text">
            Let's Connect
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join me on this creative journey! Follow for daily inspiration, tutorials, 
            and exclusive content that you won't find anywhere else.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="glass rounded-xl p-6 text-center hover:bg-gradient-to-r hover:from-dark-surface hover:to-dark-surface/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {social.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Support Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-2" />
              <h4 className="text-2xl font-bold gradient-text">
                Support My Work
              </h4>
            </div>
            <p className="text-gray-300 mb-6">
              If you enjoy my content and want to support my creative journey, 
              consider buying me a coffee or checking out my premium guides. 
              Every bit of support helps me create more amazing content for you!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://ko-fi.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button flex items-center"
              >
                <Coffee className="mr-2" size={20} />
                Buy Me Coffee
              </a>
              <a
                href="#guide"
                className="neon-button flex items-center"
              >
                <BookOpen className="mr-2" size={20} />
                Get Premium Guide
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
