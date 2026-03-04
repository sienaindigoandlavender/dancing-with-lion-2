import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Before the Sahara — Desertification & the Green Frontier | Dancing with Lions',
  description: 'Two-thirds of Morocco\'s oases have vanished. 93% of territory affected by desertification. NDVI vegetation data, climate zones, oasis collapse, and green belt projects mapped.',
  openGraph: {
    title: 'Before the Sahara | Dancing with Lions',
    description: 'The land between Atlas and sand. NDVI data 1984–2025, 6 threatened oases, 6 green projects, and a $2.1 billion annual cost.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/before-the-sahara' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Before the Sahara',
    description: 'Desertification, NDVI vegetation data, oasis collapse, green belt projects. The land between Atlas and sand.',
    url: 'https://dancingwiththelions.com/data/before-the-sahara',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'desert, sahara, desertification, oasis, ndvi, vegetation, climate, drought',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 052 — Before the Sahara',
    description: 'Desertification, NDVI vegetation data, oasis collapse, green belt projects. The land between Atlas and sand.',
    url: 'https://dancingwiththelions.com/data/before-the-sahara',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["desert", "sahara", "desertification", "oasis", "ndvi", "vegetation", "climate", "drought"],
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      {children}
    </>
  )
}