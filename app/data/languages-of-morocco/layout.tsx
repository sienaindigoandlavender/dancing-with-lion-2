import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Languages of Morocco — Culture & Identity | Dancing with Lions',
  description: 'Darija, Tashelhit, Tamazight, Tarifit, French, Spanish, English. The linguistic landscape of Morocco mapped.',
  openGraph: {
    title: 'The Languages of Morocco | Dancing with Lions',
    description: 'Darija, Tashelhit, Tamazight, Tarifit, French, Spanish, English. The linguistic landscape of Morocco mapped.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/languages-of-morocco' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Languages of Morocco',
    description: 'Darija, Tashelhit, Tamazight, Tarifit, French, Spanish, English. The linguistic landscape of Morocco mapped.',
    url: 'https://dancingwiththelions.com/data/languages-of-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'language, Darija, Arabic, Amazigh, French, Spanish, Tashelhit, Tamazight',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 087 — The Languages of Morocco',
    description: 'Darija, Tashelhit, Tamazight, Tarifit, French, Spanish, English. The linguistic landscape of Morocco mapped.',
    url: 'https://dancingwiththelions.com/data/languages-of-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "language, Darija, Arabic, Amazigh, French, Spanish, Tashelhit, Tamazight",
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