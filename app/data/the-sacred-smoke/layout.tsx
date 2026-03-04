import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sacred Smoke — Data Module | Dancing with Lions',
  description: 'Every civilisation burned something precious and called it prayer. 12 traditions across 6 continents, at least 5 with no shared origin. Starting from Morocco\'s bkhour tradition.',
  openGraph: {
    title: 'The Sacred Smoke',
    description: '12 sacred smoke traditions. 6 continents. The same instinct, everywhere.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-sacred-smoke' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Sacred Smoke — Data Module | Dancing with Lions',
    description: 'Every civilisation burned something precious and called it prayer. 12 traditions across 6 continents, at least 5 with no shared origin. Starting from Morocco\\',
    url: 'https://dancingwiththelions.com/data/the-sacred-smoke',
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