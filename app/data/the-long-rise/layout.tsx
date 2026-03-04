import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Long Rise — Tourism | Dancing with Lions',
  description: 'Morocco tourism arrivals and revenue over time. The long rise from 2 million to 17 million visitors. Growth charted.',
  openGraph: {
    title: 'The Long Rise | Dancing with Lions',
    description: 'Morocco tourism arrivals and revenue over time. The long rise from 2 million to 17 million visitors. Growth charted.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-long-rise' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Long Rise',
    description: 'Morocco tourism arrivals and revenue over time. The long rise from 2 million to 17 million visitors. Growth charted.',
    url: 'https://dancingwiththelions.com/data/the-long-rise',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Tourism',
    keywords: 'tourism, arrivals, revenue, growth, chart, visitors, history, trend',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 102 — The Long Rise',
    description: 'Morocco tourism arrivals and revenue over time. The long rise from 2 million to 17 million visitors. Growth charted.',
    url: 'https://dancingwiththelions.com/data/the-long-rise',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["tourism", "arrivals", "revenue", "growth", "chart", "visitors", "history", "trend"],
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