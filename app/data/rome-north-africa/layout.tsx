import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rome in North Africa — History | Dancing with Lions',
  description: 'The Roman Empire across North Africa. From Tangier to Cyrene. Provinces, cities, monuments, trade routes. Mapbox and timeline.',
  openGraph: {
    title: 'Rome in North Africa | Dancing with Lions',
    description: 'The Roman Empire across North Africa. From Tangier to Cyrene. Provinces, cities, monuments, trade routes. Mapbox and timeline.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/rome-north-africa' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rome in North Africa',
    description: 'The Roman Empire across North Africa. From Tangier to Cyrene. Provinces, cities, monuments, trade routes. Mapbox and timeline.',
    url: 'https://dancingwiththelions.com/data/rome-north-africa',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'Rome, Roman, North Africa, province, Leptis Magna, Carthage, Volubilis, Timgad',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 076 — Rome in North Africa',
    description: 'The Roman Empire across North Africa. From Tangier to Cyrene. Provinces, cities, monuments, trade routes. Mapbox and timeline.',
    url: 'https://dancingwiththelions.com/data/rome-north-africa',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "Rome, Roman, North Africa, province, Leptis Magna, Carthage, Volubilis, Timgad",
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