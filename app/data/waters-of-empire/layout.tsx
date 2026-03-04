import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waters of Empire — How Rome Exported Bathing Culture | Dancing with Lions',
  description: 'The hammam is not Arab. It is Roman — inherited, transformed, and kept alive while Europe forgot how to wash. From thermae to hammam across 2,600 years.',
  openGraph: {
    title: 'Waters of Empire — How Rome Exported Bathing Culture',
    description: 'From Roman thermae to Islamic hammam. 15 archaeological sites, 6 civilizations, 2,600 years. The three-room sequence never changed.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/waters-of-empire' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Waters of Empire',
    description: 'The hammam is not Arab. It is Roman — inherited, transformed, and kept alive while Europe forgot how to wash. 15 archaeological sites, 6 civilizations, 2,600 years. From thermae to hammam.',
    url: 'https://dancingwiththelions.com/data/waters-of-empire',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'hammam, Roman, thermae, bath, bathing, hypocaust, Volubilis, Carthage',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 059 — Waters of Empire',
    description: 'The hammam is not Arab. It is Roman — inherited, transformed, and kept alive while Europe forgot how to wash. 15 archaeological sites, 6 civilizations, 2,600 years. From thermae to hammam.',
    url: 'https://dancingwiththelions.com/data/waters-of-empire',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "hammam, Roman, thermae, bath, bathing, hypocaust, Volubilis, Carthage",
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