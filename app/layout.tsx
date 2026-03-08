import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Isa Ebrahim | Online Fitness Coach - Transform Your Body',
  description: 'Train with Isa Ebrahim - 7+ years coaching experience, 500+ clients transformed. Structured fitness programs for fat loss, strength building, and body recomposition. Start your transformation today.',
  keywords: ['fitness coach', 'online training', 'fat loss', 'strength training', 'personal trainer', 'Bahrain', 'body transformation', 'muscle building'],
  authors: [{ name: 'Isa Ebrahim' }],
  creator: 'Isa Ebrahim',
  openGraph: {
    title: 'Isa Ebrahim | Online Fitness Coach',
    description: 'Structured fitness programs for real results. 7+ years experience, 500+ transformations.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Isa Ebrahim Fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isa Ebrahim | Online Fitness Coach',
    description: 'Structured fitness programs for real results',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
