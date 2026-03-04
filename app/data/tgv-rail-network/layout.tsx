import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The TGV & Rail Network — Al Boraq & ONCF | Dancing with Lions',
  description: 'Africa\'s only high-speed rail. 55 million passengers. 320 km/h. Al Boraq, conventional network, planned extensions, the 2040 Rail Strategy.',
  openGraph: {
    title: 'The TGV & Rail Network | Dancing with Lions',
    description: 'Al Boraq high-speed rail, ONCF conventional network, Marrakech extension, $9.5B investment plan, Strait of Gibraltar tunnel.',
    siteName: 'Dancing with Lions',
  },
}

export default function TGVRailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The TGV & Rail Network — Al Boraq & ONCF | Dancing with Lions',
    description: 'Africa\\',
    url: 'https://dancingwiththelions.com/data/tgv-rail-network',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}