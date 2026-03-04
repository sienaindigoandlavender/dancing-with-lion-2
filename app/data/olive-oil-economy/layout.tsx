import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Olive Oil Economy — Regions, Production, Cooperatives & Export Markets | Dancing with Lions',
  description: 'Morocco\'s 1.2 million hectares of olive trees mapped. Production data, Picholine Marocaine dominance, women-led cooperatives, US tariff advantage, and drought resilience.',
  openGraph: {
    title: 'The Olive Oil Economy | Dancing with Lions',
    description: 'From Volubilis to global markets. Six olive regions, four cultivars, and the data behind Morocco\'s green gold.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/olive-oil-economy' },
}

export default function OliveOilEconomyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Olive Oil Economy — Regions, Production, Cooperatives & Export Markets | Dancing with Lions',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/olive-oil-economy',
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