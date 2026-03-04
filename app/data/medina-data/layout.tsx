import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Medina Data — Infrastructure | Dancing with Lions',
  description: 'Medina infrastructure mapped. Seven concentric rings from the mosque to the gates. Density, services, commerce, craft.',
  openGraph: {
    title: 'The Medina Data | Dancing with Lions',
    description: 'Medina infrastructure mapped. Seven concentric rings from the mosque to the gates. Density, services, commerce, craft.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/medina-data' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Medina Data',
    description: 'Medina infrastructure mapped. Seven concentric rings from the mosque to the gates. Density, services, commerce, craft.',
    url: 'https://dancingwiththelions.com/data/medina-data',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Infrastructure',
    keywords: 'medina, data, infrastructure, rings, mosque, souk, craft, density',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 090 — The Medina Data',
    description: 'Medina infrastructure mapped. Seven concentric rings from the mosque to the gates. Density, services, commerce, craft.',
    url: 'https://dancingwiththelions.com/data/medina-data',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['medina', 'data', 'infrastructure', 'rings', 'mosque', 'souk', 'craft', 'density'],
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