import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Four Imperial Cities — Fez, Marrakech, Meknès, Rabat | Dancing with Lions',
  description: 'Each dynasty chose its capital. Seven dynasties, four cities, 1,233 years of power shifts mapped. The political architecture of Morocco.',
  openGraph: {
    title: 'The Four Imperial Cities | Dancing with Lions',
    description: 'Fez, Marrakech, Meknès, Rabat. Each dynasty chose its capital. The power map of Morocco.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/imperial-cities' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Four Imperial Cities',
    description: 'Fes, Marrakech, Meknes, Rabat. Each dynasty chose its capital. The power map of Morocco.',
    url: 'https://dancingwiththelions.com/data/imperial-cities',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'fes, marrakech, meknes, rabat, imperial, capital, dynasty, history',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 023 — The Four Imperial Cities',
    description: 'Fes, Marrakech, Meknes, Rabat. Each dynasty chose its capital. The power map of Morocco.',
    url: 'https://dancingwiththelions.com/data/imperial-cities',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "fes, marrakech, meknes, rabat, imperial, capital, dynasty, history",
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