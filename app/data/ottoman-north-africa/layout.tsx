import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ottoman Empire in North Africa — History | Dancing with Lions',
  description: 'Why Morocco was the only North African country never conquered by the Ottomans. Ottoman territories, cities, and the Moroccan exception.',
  openGraph: {
    title: 'The Ottoman Empire in North Africa | Dancing with Lions',
    description: 'Why Morocco was the only North African country never conquered by the Ottomans. Ottoman territories, cities, and the Moroccan exception.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/ottoman-north-africa' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Ottoman Empire in North Africa',
    description: 'Why Morocco was the only North African country never conquered by the Ottomans. Ottoman territories, cities, and the Moroccan exception.',
    url: 'https://dancingwiththelions.com/data/ottoman-north-africa',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'Ottoman, empire, Tunisia, Algeria, Libya, Morocco, independence, Saadian',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 066 — The Ottoman Empire in North Africa',
    description: 'Why Morocco was the only North African country never conquered by the Ottomans. Ottoman territories, cities, and the Moroccan exception.',
    url: 'https://dancingwiththelions.com/data/ottoman-north-africa',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Ottoman", "empire", "Tunisia", "Algeria", "Libya", "Morocco", "independence", "Saadian"],
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