import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline of Morocco — History | Dancing with Lions',
  description: 'The complete timeline of Morocco. From Jebel Irhoud to the present. Every dynasty, every turning point, every layer.',
  openGraph: {
    title: 'Timeline of Morocco | Dancing with Lions',
    description: 'The complete timeline of Morocco. From Jebel Irhoud to the present. Every dynasty, every turning point, every layer.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/timeline-of-morocco' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Timeline of Morocco',
    description: 'The complete timeline of Morocco. From Jebel Irhoud to the present. Every dynasty, every turning point, every layer.',
    url: 'https://dancingwiththelions.com/data/timeline-of-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'timeline, history, dynasty, chronology, complete, Idrisid, Almoravid, Almohad',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 104 — Timeline of Morocco',
    description: 'The complete timeline of Morocco. From Jebel Irhoud to the present. Every dynasty, every turning point, every layer.',
    url: 'https://dancingwiththelions.com/data/timeline-of-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['timeline', 'history', 'dynasty', 'chronology', 'complete', 'Idrisid', 'Almoravid', 'Almohad'],
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