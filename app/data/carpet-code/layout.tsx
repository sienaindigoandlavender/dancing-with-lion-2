import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Carpet Code — Craft & Textiles | Dancing with Lions',
  description: 'Moroccan carpet traditions decoded. Tribal motifs, weaving techniques, regional styles. The visual language of the loom.',
  openGraph: {
    title: 'The Carpet Code | Dancing with Lions',
    description: 'Moroccan carpet traditions decoded. Tribal motifs, weaving techniques, regional styles. The visual language of the loom.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/carpet-code' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Carpet Code',
    description: 'Moroccan carpet traditions decoded. Tribal motifs, weaving techniques, regional styles. The visual language of the loom.',
    url: 'https://dancingwiththelions.com/data/carpet-code',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Craft & Textiles',
    keywords: 'carpet, rug, textile, weaving, tribal, motif, Beni Ourain, Azilal',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 074 — The Carpet Code',
    description: 'Moroccan carpet traditions decoded. Tribal motifs, weaving techniques, regional styles. The visual language of the loom.',
    url: 'https://dancingwiththelions.com/data/carpet-code',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["carpet", "rug", "textile", "weaving", "tribal", "motif", "Beni Ourain", "Azilal"],
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