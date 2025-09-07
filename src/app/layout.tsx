import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'White Dental Clinic - Professional Dental Care Services',
  description: 'White Dental Clinic offers comprehensive dental care services including general dentistry, cosmetic treatments, orthodontics, and oral surgery. Book your appointment today for professional dental care.',
  keywords: 'dental clinic, dentist, dental care, teeth cleaning, cosmetic dentistry, orthodontics, oral surgery, dental implants',
  authors: [{ name: 'White Dental Clinic' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'White Dental Clinic - Professional Dental Care',
    description: 'Comprehensive dental care services with experienced professionals',
    type: 'website',
    locale: 'en_US',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}