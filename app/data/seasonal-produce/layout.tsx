import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Grows When — Dancing with Lions',
  description: 'Seasonal calendar of Moroccan fruits and vegetables. 32 crops mapped across 12 months with Darija names, growing regions, and peak seasons. Interactive radial wheel + illustrated guide.',
  openGraph: {
    title: 'What Grows When — Dancing with Lions',
    description: 'The souk calendar. 32 Moroccan fruits and vegetables by season with Darija names and growing regions.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/seasonal-produce' },
}

export default function SeasonalProduceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Grows When — Dancing with Lions',
    description: 'Seasonal calendar of Moroccan fruits and vegetables. 32 crops mapped across 12 months with Darija names, growing regions, and peak seasons. Interactive radial wheel + illustrated guide.',
    url: 'https://dancingwiththelions.com/data/seasonal-produce',
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