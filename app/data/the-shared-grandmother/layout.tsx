import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Shared Grandmother — Amazigh & Sámi DNA | Dancing with Lions',
  description: 'The Sahara and the Arctic share a 9,000-year-old maternal DNA branch. Two indigenous peoples at opposite ends of a continent — genetically distinct from everyone around them — connected by a grandmother who sheltered from the ice in southwestern France.',
  openGraph: {
    title: 'The Shared Grandmother',
    description: 'Amazigh & Sámi. Sahara & Arctic. One mitochondrial DNA branch. 9,000 years.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-shared-grandmother' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Shared Grandmother',
    description: 'The Sahara and the Arctic share a 9,000-year-old maternal DNA branch. Mitochondrial haplogroup U5b1b connects the Amazigh of North Africa (~2% frequency) and the Sámi of Scandinavia (~48%). Two indigenous peoples at opposite ends of a continent — both genetic outliers, both decen',
    url: 'https://dancingwiththelions.com/data/the-shared-grandmother',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'Amazigh, Berber, Sámi, Sami, Lapland, Sápmi, DNA, mitochondrial',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 126 — The Shared Grandmother',
    description: 'The Sahara and the Arctic share a 9,000-year-old maternal DNA branch. Mitochondrial haplogroup U5b1b connects the Amazigh of North Africa (~2% frequency) and the Sámi of Scandinavia (~48%). Two indigenous peoples at opposite ends of a continent — both genetic outliers, both decen',
    url: 'https://dancingwiththelions.com/data/the-shared-grandmother',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["Amazigh", "Berber", "Sámi", "Sami", "Lapland", "Sápmi", "DNA", "mitochondrial"],
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