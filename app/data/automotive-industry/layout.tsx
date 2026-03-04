import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco\'s Automotive Revolution — Africa\'s #1 Producer | Dancing with Lions',
  description: 'Renault Tangier, Stellantis Kenitra, SOMACA Casablanca. How Morocco became Africa\'s largest car producer and the EU\'s top automotive exporter. Production data, supplier ecosystem, export markets, EV investments.',
  openGraph: {
    title: 'Morocco\'s Automotive Revolution | Dancing with Lions',
    description: 'From 35 suppliers in 2000 to 270+ in 2025. $17B in exports. 1M+ vehicle capacity. The data behind Africa\'s automotive powerhouse.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/automotive-industry' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco\\',
    description: 'Renault Tangier, Stellantis Kenitra, SOMACA Casablanca. How Morocco became Africa\\',
    url: 'https://dancingwiththelions.com/data/automotive-industry',
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