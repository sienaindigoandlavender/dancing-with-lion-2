import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Dynasties of Morocco — History | Dancing with Lions',
  description: 'Idrisids to Alaouites. 1,200 years of Moroccan rulers, capitals, and power shifts.',
  openGraph: {
    title: 'The Dynasties of Morocco | Dancing with Lions',
    description: 'Idrisids to Alaouites. 1,200 years of Moroccan rulers, capitals, and power shifts.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/dynasty-timeline' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Dynasties of Morocco',
    description: 'Idrisids to Alaouites. 1,200 years of Moroccan rulers, capitals, and power shifts.',
    url: 'https://dancingwiththelions.com/data/dynasty-timeline',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'dynasty, history, idrisids, almoravids, almohads, marinids, saadians, alaouites',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 007 — The Dynasties of Morocco',
    description: 'Idrisids to Alaouites. 1,200 years of Moroccan rulers, capitals, and power shifts.',
    url: 'https://dancingwiththelions.com/data/dynasty-timeline',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "dynasty, history, idrisids, almoravids, almohads, marinids, saadians, alaouites",
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