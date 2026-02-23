import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dancing with Lions — Data, Business & Cultural Intelligence for Africa',
  description: 'The intelligence platform for Africa. Structured datasets, interactive research, and deep-context briefings on markets, demographics, infrastructure, heritage, and emerging economies.',
  metadataBase: new URL('https://dancingwiththelions.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Dancing with Lions',
    description: 'Data, business, and cultural intelligence for Africa.',
    url: 'https://dancingwiththelions.com',
    siteName: 'Dancing with Lions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dancing with Lions',
    description: 'The intelligence platform for Africa.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plexMono.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P1CGE62ZD4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', 'G-P1CGE62ZD4');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
