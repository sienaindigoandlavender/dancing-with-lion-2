import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Agricultural Exports — Dancing with Lions',
  description: 'What Morocco grows and sends to the world. Tomatoes, berries, citrus, olives, argan oil, seafood — illustrated export data by value.',
  openGraph: {
    title: 'Morocco Agricultural Exports — Dancing with Lions',
    description: 'Illustrated chart: $6.5B in agri-food and seafood exports. Tomatoes, berries, citrus, olives, argan, avocados, sardines. The #1 non-EU supplier to Europe.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/morocco-agriculture' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Morocco Grows & Sends to the World',
    description: 'Radial harvest wheel. Tomatoes, berries, citrus, olives, argan, seafood — ranked by export value.',
    url: 'https://dancingwiththelions.com/data/morocco-agriculture',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Food & Agriculture',
    keywords: 'agriculture, exports, tomatoes, berries, citrus, olives, argan, seafood',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 005 — What Morocco Grows & Sends to the World',
    description: 'Radial harvest wheel. Tomatoes, berries, citrus, olives, argan, seafood — ranked by export value.',
    url: 'https://dancingwiththelions.com/data/morocco-agriculture',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['agriculture', 'exports', 'tomatoes', 'berries', 'citrus', 'olives', 'argan', 'seafood'],
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