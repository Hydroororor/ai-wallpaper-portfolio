import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'
import Cursor from './components/Cursor'
import BackgroundEffects from './components/BackgroundEffects'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'AI Wallpaper Portfolio | Cinematic Digital Art',
  description: 'Explore stunning AI-generated wallpapers, learn to create your own, and join our exclusive Discord community.',
  keywords: 'AI art, wallpapers, digital art, dreamcore, abstract art, AI creativity',
  authors: [{ name: 'AI Wallpaper Creator' }],
  openGraph: {
    title: 'AI Wallpaper Portfolio | Cinematic Digital Art',
    description: 'Explore stunning AI-generated wallpapers, learn to create your own, and join our exclusive Discord community.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark-bg text-white`}>
        <Cursor />
        <BackgroundEffects />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
