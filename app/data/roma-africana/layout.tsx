import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roma Africana — History | Dancing with Lions',
  description: 'Roman Africa — the complete imperial footprint. From Tangier to Cyrene. Cities, trade, grain, gladiators, and the provinces that fed Rome.',
  openGraph: {
    title: 'Roma Africana | Dancing with Lions',
    description: 'Roman Africa — the complete imperial footprint. From Tangier to Cyrene. Cities, trade, grain, gladiators, and the provinces that fed Rome.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/roma-africana' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Roma Africana',
    description: 'Roman Africa — the complete imperial footprint. From Tangier to Cyrene. Cities, trade, grain, gladiators, and the provinces that fed Rome.',
    url: 'https://dancingwiththelions.com/data/roma-africana',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'Rome, Africa, province, grain, trade, Leptis, Carthage, Mediterranean',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 077 — Roma Africana',
    description: 'Roman Africa — the complete imperial footprint. From Tangier to Cyrene. Cities, trade, grain, gladiators, and the provinces that fed Rome.',
    url: 'https://dancingwiththelions.com/data/roma-africana',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['Rome', 'Africa', 'province', 'grain', 'trade', 'Leptis', 'Carthage', 'Mediterranean'],
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