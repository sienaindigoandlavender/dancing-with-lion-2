import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco\'s Surf Coast — 15 Breaks Mapped | Dancing with Lions',
  description: 'Anchor Point, Killer Point, The Bay, Sidi Kaouki, Safi. 15 surf breaks mapped with swell data, season guide, and the economics of Morocco\'s surf boom.',
  openGraph: {
    title: 'Morocco\'s Surf Coast | Dancing with Lions',
    description: 'From Safi to Sidi Kaouki — 15 surf spots, swell conditions, seasonal guide, and the $50K-guest-per-year surf economy of Taghazout.',
    siteName: 'Dancing with Lions',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco\\',
    description: 'Anchor Point, Killer Point, The Bay, Sidi Kaouki, Safi. 15 surf breaks mapped with swell data, season guide, and the economics of Morocco\\',
    url: 'https://dancingwiththelions.com/data/surf-coast',
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