import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bread of Morocco — Khobz, Msemen, Baghrir, Rghaif, Harcha | Dancing with Lions',
  description: 'Eight breads that define a nation. Communal ovens, wheat dependency, bread etiquette. 60%+ of wheat imported. 9.6M tonnes annual demand. The sacred food.',
  openGraph: {
    title: 'The Bread of Morocco | Dancing with Lions',
    description: 'Khobz means bread. Khobz means livelihood. Khobz means life.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/bread-of-morocco' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Bread of Morocco',
    description: 'Khobz, msemen, baghrir, rghaif, harcha. Eight breads. Communal ovens. Wheat dependency — 60%+ imported. The sacred food.',
    url: 'https://dancingwiththelions.com/data/bread-of-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Food & Agriculture',
    keywords: 'bread, khobz, msemen, baghrir, rghaif, harcha, ferran, oven',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 045 — The Bread of Morocco',
    description: 'Khobz, msemen, baghrir, rghaif, harcha. Eight breads. Communal ovens. Wheat dependency — 60%+ imported. The sacred food.',
    url: 'https://dancingwiththelions.com/data/bread-of-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "bread, khobz, msemen, baghrir, rghaif, harcha, ferran, oven",
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