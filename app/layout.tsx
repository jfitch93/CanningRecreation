import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Canning & District Recreational Commission',
  description: 'Recreation, community events, and natural beauty in the heart of Nova Scotia\'s Annapolis Valley.',
  openGraph: {
    title: 'Canning & District Recreational Commission',
    description: 'Recreation and community in the Annapolis Valley, Nova Scotia.',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Runs before paint — sets data-season with zero flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var m=new Date().getMonth();document.documentElement.setAttribute('data-season',m===11||m<=1?'winter':m<=4?'spring':m<=8?'summer':'fall')})()` }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
