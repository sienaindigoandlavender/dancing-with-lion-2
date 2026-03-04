import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Carpet Atlas — Regional Rug Traditions of Morocco | Dancing with Lions',
  description: '12 weaving traditions mapped. Beni Ourain, Azilal, Boujaad, Boucherouite, Kilim, Zanafi, Taznakht. Amazigh symbols, natural dyes, tribal origins.',
  openGraph: {
    title: 'The Carpet Atlas | Dancing with Lions',
    description: 'Every diamond is a womb. Every zigzag is water. Every rug is a diary. The complete map of Moroccan weaving traditions.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/carpet-atlas' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Carpet Atlas',
    description: 'Regional rug traditions mapped. Beni Ourain, Azilal, Boucherouite, Kilim, Hanbel — origins and motifs.',
    url: 'https://dancingwiththelions.com/data/carpet-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Craft & Textiles',
    keywords: 'carpet, rug, beni ourain, azilal, boucherouite, kilim, weaving, craft',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 020 — The Carpet Atlas',
    description: 'Regional rug traditions mapped. Beni Ourain, Azilal, Boucherouite, Kilim, Hanbel — origins and motifs.',
    url: 'https://dancingwiththelions.com/data/carpet-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "carpet, rug, beni ourain, azilal, boucherouite, kilim, weaving, craft",
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