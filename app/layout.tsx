import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const _cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DIDARGOLD | Haute Joaillerie - Paris',
  description:
    'Discover the timeless elegance of DidarGold. Exquisite high jewelry crafted in Paris since 1892. Rings, necklaces, bracelets, and earrings in gold and diamonds.',
  icons: {
    icon: '/fav.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1c1916',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
