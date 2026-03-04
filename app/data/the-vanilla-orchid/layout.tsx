import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Vanilla Orchid — Madagascar, Mauritius, and the Most Expensive Spice on Earth | Dancing with Lions',
  description: 'A 12-year-old enslaved boy on Réunion discovered hand-pollination in 1841. Today Madagascar produces 80% of the world\'s vanilla. Prices have swung from $20/kg to $600/kg. 600 hand-pollinated flowers make 1kg of cured beans. The second most expensive spice after saffron.',
  openGraph: {
    title: 'The Vanilla Orchid',
    description: 'Madagascar produces 80% of the world\'s vanilla. A 12-year-old boy discovered the technique that made it possible. Prices: $20 to $600/kg.',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-vanilla-orchid' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Vanilla Orchid',
    description: 'A 12-year-old enslaved boy on Réunion discovered hand-pollination in 1841. Edmond Albius — never compensated. Madagascar produces 80% of world vanilla. SAVA region: 80,000 smallholder farmers. Price swings from $20/kg (2007) to $600/kg (2018 peak) to $220–260/kg (2025). Market $1',
    url: 'https://dancingwiththelions.com/data/the-vanilla-orchid',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Cultural Intelligence',
    keywords: 'vanilla, Madagascar, Mauritius, Réunion, Edmond Albius, hand-pollination, orchid, SAVA',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 172 — The Vanilla Orchid',
    description: 'A 12-year-old enslaved boy on Réunion discovered hand-pollination in 1841. Edmond Albius — never compensated. Madagascar produces 80% of world vanilla. SAVA region: 80,000 smallholder farmers. Price swings from $20/kg (2007) to $600/kg (2018 peak) to $220–260/kg (2025). Market $1',
    url: 'https://dancingwiththelions.com/data/the-vanilla-orchid',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["vanilla", "Madagascar", "Mauritius", "Réunion", "Edmond Albius", "hand-pollination", "orchid", "SAVA"],
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