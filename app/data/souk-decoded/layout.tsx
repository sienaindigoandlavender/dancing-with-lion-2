import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Souk Decoded — How a Moroccan Market Works | Dancing with Lions',
  description: 'Guilds, spatial logic, negotiation patterns, the Amine, the Mohtasib. 18 named souks mapped. 40,000 artisans. How a medina market is really organized.',
  openGraph: {
    title: 'The Souk Decoded | Dancing with Lions',
    description: '18 souks, 5 guild ranks, 7 negotiation steps, 6 spatial rules. The operating system of a Moroccan market.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/souk-decoded' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Souk Decoded',
    description: 'How a Moroccan market is organized. Guilds, pricing logic, negotiation patterns, spatial architecture.',
    url: 'https://dancingwiththelions.com/data/souk-decoded',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Urban Life',
    keywords: 'souk, market, medina, trade, guild, craft, negotiation, commerce',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 050 — The Souk Decoded',
    description: 'How a Moroccan market is organized. Guilds, pricing logic, negotiation patterns, spatial architecture.',
    url: 'https://dancingwiththelions.com/data/souk-decoded',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["souk", "market", "medina", "trade", "guild", "craft", "negotiation", "commerce"],
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