'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, CheckCircle, Star, ExternalLink, Zap } from 'lucide-react'

export default function GuideSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Prompt Engineering",
      description: "Master the art of crafting perfect prompts for stunning results"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Tool Mastery",
      description: "Learn to use ChatGPT, Leonardo AI, and other cutting-edge tools"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Style Techniques",
      description: "Discover advanced techniques for dreamcore, abstract, and cinematic styles"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Enhancement",
      description: "Professional tips for upscaling and perfecting your creations"
    }
  ]

  const previewImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop',
  ]

  return (
    <section id="guide" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">How to Make</span> Custom AI Wallpapers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn the secrets behind creating stunning AI-generated wallpapers. 
            From prompt engineering to final touches, master the art of AI creativity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Master AI Art Creation
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                This comprehensive guide will teach you everything you need to know about creating 
                professional-quality AI wallpapers. Whether you're a beginner or looking to refine 
                your skills, this guide has something for everyone.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold gradient-text">$29</span>
                    <span className="text-gray-400 ml-2">One-time purchase</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-2 text-gray-300">4.9/5</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="https://gumroad.com/your-product-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 neon-button text-center flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Buy Now on Gumroad
                  </a>
                  <a
                    href="https://ko-fi.com/your-product-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 neon-button text-center flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Buy on Ko-fi
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Preview Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {previewImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Preview {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-neon-pink/30 to-neon-green/30 rounded-full blur-xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Digital Artist",
                content: "This guide completely transformed my AI art workflow. The prompt engineering techniques are game-changing!",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                role: "Content Creator",
                content: "Finally, a comprehensive guide that covers everything from basics to advanced techniques. Worth every penny!",
                rating: 5
              },
              {
                name: "Mike Rodriguez",
                role: "Designer",
                content: "The quality enhancement tips alone made this purchase worthwhile. My wallpapers look professional now.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
