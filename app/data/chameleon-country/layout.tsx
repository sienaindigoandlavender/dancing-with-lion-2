import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Chameleon Country — Culture & Identity | Dancing with Lions',
  description: 'Morocco changes colour depending on where you stand. 12 regions, each with its own identity, economy, and personality. Cultural cartography.',
  openGraph: {
    title: 'The Chameleon Country | Dancing with Lions',
    description: 'Morocco changes colour depending on where you stand. 12 regions, each with its own identity, economy, and personality. Cultural cartography.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/chameleon-country' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Chameleon Country',
    description: 'Morocco changes colour depending on where you stand. 12 regions, each with its own identity, economy, and personality. Cultural cartography.',
    url: 'https://dancingwiththelions.com/data/chameleon-country',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'regions, Casablanca, Marrakech, Fez, Tangier, Agadir, identity, culture',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 078 — The Chameleon Country',
    description: 'Morocco changes colour depending on where you stand. 12 regions, each with its own identity, economy, and personality. Cultural cartography.',
    url: 'https://dancingwiththelions.com/data/chameleon-country',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["regions", "Casablanca", "Marrakech", "Fez", "Tangier", "Agadir", "identity", "culture"],
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