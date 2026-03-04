import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 14km Gap — Morocco-Spain Strait of Gibraltar Analysis | Dancing with Lions',
  description: 'Fourteen kilometres of water between Africa and Europe. Trade flows, migration patterns, infrastructure comparisons, and the geopolitical significance of the world\'s most-watched strait.',
  openGraph: {
    title: 'The 14km Gap | Dancing with Lions',
    description: 'Morocco and Spain, separated by 14km. The Strait of Gibraltar as trade corridor, migration route, and geopolitical fault line.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/14km-gap' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The 14km Gap — Morocco-Spain Strait of Gibraltar',
    description: 'Fourteen kilometres between Africa and Europe. Trade flows, migration, infrastructure, and the geopolitics of the Strait of Gibraltar.',
    url: 'https://dancingwiththelions.com/data/14km-gap',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'Morocco, Spain, Strait of Gibraltar, Africa, Europe, migration, trade',
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
