import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Route of a Thousand Kasbahs — Aït Benhaddou to Skoura | Dancing with Lions',
  description: 'Fortified mud-brick architecture of the Drâa-Tafilalet. 4,000+ earthen settlements. Aït Benhaddou, Telouet, Taourirt, Amridil. The Glaoui dynasty. 370km from Atlas to Sahara.',
  openGraph: {
    title: 'The Route of a Thousand Kasbahs | Dancing with Lions',
    description: 'The architecture that rises from the earth it stands on. Rammed earth, Amazigh geometry, Glaoui power, Hollywood\'s desert.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/route-thousand-kasbahs' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Route of a Thousand Kasbahs',
    description: 'Aït Benhaddou to Skoura. Fortified mud-brick architecture of the Drâa-Tafilalet. 4,000+ earthen settlements. Glaoui dynasty.',
    url: 'https://dancingwiththelions.com/data/route-thousand-kasbahs',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'kasbah, ksar, Ait Benhaddou, Telouet, Taourirt, Skoura, Ouarzazate, Glaoui',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 039 — The Route of a Thousand Kasbahs',
    description: 'Aït Benhaddou to Skoura. Fortified mud-brick architecture of the Drâa-Tafilalet. 4,000+ earthen settlements. Glaoui dynasty.',
    url: 'https://dancingwiththelions.com/data/route-thousand-kasbahs',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["kasbah", "ksar", "Ait Benhaddou", "Telouet", "Taourirt", "Skoura", "Ouarzazate", "Glaoui"],
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