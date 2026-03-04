import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Tea Ceremony — Moroccan Mint Tea Ritual | Dancing with Lions',
  description: 'Three pours, three glasses, one ritual. The cultural mechanics of Moroccan mint tea: green gunpowder tea from China, fresh mint, sugar, and a ceremony of hospitality.',
  openGraph: {
    title: 'The Tea Ceremony — Moroccan Mint Tea Ritual | Dancing with Lions',
    description: 'Three pours, three glasses, one ritual. The cultural mechanics of Moroccan mint tea: green gunpowder tea from China, fresh mint, sugar, and a ceremony of hospitality.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/tea-ceremony' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Tea Ceremony Topology',
    description: 'The six steps of Moroccan tea. Gunpowder green, fresh mint, sugar. A topology of the ceremony that runs the country.',
    url: 'https://dancingwiththelions.com/data/tea-ceremony',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Food & Agriculture',
    keywords: 'tea, ceremony, mint, gunpowder, sugar, atay, ritual, hospitality',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 099 — The Tea Ceremony Topology',
    description: 'The six steps of Moroccan tea. Gunpowder green, fresh mint, sugar. A topology of the ceremony that runs the country.',
    url: 'https://dancingwiththelions.com/data/tea-ceremony',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['tea', 'ceremony', 'mint', 'gunpowder', 'sugar', 'atay', 'ritual', 'hospitality'],
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