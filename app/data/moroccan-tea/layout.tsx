import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Anatomy of Moroccan Tea — Gunpowder, Mint, Sugar | Dancing with Lions',
  description: 'Chinese gunpowder green tea, fresh nanah mint, colonial sugar. How it arrived, how it\'s made, why it matters. Morocco imports 60,000 tonnes of tea a year and grows none.',
  openGraph: {
    title: 'The Anatomy of Moroccan Tea | Dancing with Lions',
    description: 'Three ingredients from three continents. How a diplomatic gift became a national ritual.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/moroccan-tea' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Anatomy of Moroccan Tea — Gunpowder, Mint, Sugar | Dancing with Lions',
    description: 'Chinese gunpowder green tea, fresh nanah mint, colonial sugar. How it arrived, how it\\',
    url: 'https://dancingwiththelions.com/data/moroccan-tea',
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