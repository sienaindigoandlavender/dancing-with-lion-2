import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'A Diamond Is Not Forever — De Beers & the Collapse | Dancing with Lions',
  description: 'De Beers: $9.2B → $2.3B in three years. $6.8B in writedowns. Lab-grown diamonds now 50% of US engagement rings. The 138-year monopoly is ending. The company that invented desire is being sold for parts.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A Diamond Is Not Forever',
    description: 'Visual intelligence module with D3 interactive charts. Frances Gerety wrote four words in 1947. Anglo American posted a $3.7B loss in 2026 and put De Beers up for sale. Waterfall chart: $15.6B to $2.3B value destruction. Streamgraph: 125 years of market share dissolving — De Beer',
    url: 'https://dancingwiththelions.com/data/a-diamond-is-not-forever',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Resource Economics & Geopolitical Intelligence',
    keywords: 'De Beers, diamond, diamonds, Cecil Rhodes, Anglo American, Botswana, Debswana, lab-grown',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 144 — A Diamond Is Not Forever',
    description: 'Visual intelligence module with D3 interactive charts. Frances Gerety wrote four words in 1947. Anglo American posted a $3.7B loss in 2026 and put De Beers up for sale. Waterfall chart: $15.6B to $2.3B value destruction. Streamgraph: 125 years of market share dissolving — De Beer',
    url: 'https://dancingwiththelions.com/data/a-diamond-is-not-forever',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["De Beers", "diamond", "diamonds", "Cecil Rhodes", "Anglo American", "Botswana", "Debswana", "lab-grown"],
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