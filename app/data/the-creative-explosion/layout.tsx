import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Creative Explosion — Africa's Creative Economy | Dancing with Lions',
  description: 'Africa's creative economy: 13.5B Afrobeats streams, Nollywood $1.2B revenue, projected $50B by 2030. Data on the continent's fastest-growing cultural industry.',
  openGraph: {
    title: 'The Creative Explosion — Africa's Creative Economy | Dancing with Lions',
    description: 'Africa's creative economy: 13.5B Afrobeats streams, Nollywood $1.2B revenue, projected $50B by 2030. Data on the continent's fastest-growing cultural industry.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-creative-explosion' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Creative Explosion — Africa',
    description: 'Africa',
    url: 'https://dancingwiththelions.com/data/the-creative-explosion',
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