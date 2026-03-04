import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Free People — Amazigh Identity & Territory in North Africa | Dancing with Lions',
  description: 'Amazigh people predate Arab conquest by millennia. Language distribution, territorial presence from Morocco to Egypt, and the politics of indigenous identity in North Africa.',
  openGraph: {
    title: 'The Free People — Amazigh Identity & Territory in North Africa | Dancing with Lions',
    description: 'Amazigh people predate Arab conquest by millennia. Language distribution, territorial presence from Morocco to Egypt, and the politics of indigenous identity in North Africa.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-free-people' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Free People',
    description: 'The Amazigh mapped. Language, territory, identity. The indigenous people who outlasted every empire.',
    url: 'https://dancingwiththelions.com/data/the-free-people',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'Amazigh, Berber, free people, language, territory, identity, map, indigenous',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 101 — The Free People',
    description: 'The Amazigh mapped. Language, territory, identity. The indigenous people who outlasted every empire.',
    url: 'https://dancingwiththelions.com/data/the-free-people',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["Amazigh", "Berber", "free people", "language", "territory", "identity", "map", "indigenous"],
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