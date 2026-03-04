import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Zaouia Map — Sacred & Spiritual | Dancing with Lions',
  description: 'The Sufi geography of Morocco. Zaouias, brotherhoods, spiritual centres. The invisible architecture of faith.',
  openGraph: {
    title: 'The Zaouia Map | Dancing with Lions',
    description: 'The Sufi geography of Morocco. Zaouias, brotherhoods, spiritual centres. The invisible architecture of faith.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/zaouia-map' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Zaouia Map',
    description: 'The Sufi geography of Morocco. Zaouias, brotherhoods, spiritual centres. The invisible architecture of faith.',
    url: 'https://dancingwiththelions.com/data/zaouia-map',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Sacred & Spiritual',
    keywords: 'zaouia, Sufi, brotherhood, Tijani, Qadiri, Boutchichi, spiritual, sacred',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 094 — The Zaouia Map',
    description: 'The Sufi geography of Morocco. Zaouias, brotherhoods, spiritual centres. The invisible architecture of faith.',
    url: 'https://dancingwiththelions.com/data/zaouia-map',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "zaouia, Sufi, brotherhood, Tijani, Qadiri, Boutchichi, spiritual, sacred",
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