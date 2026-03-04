import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2030 World Cup Infrastructure Map — Morocco, Spain, Portugal — Dancing with Lions',
  description: 'Every stadium, highway, rail line, airport, and hotel project for the 2030 FIFA World Cup across Morocco, Spain, and Portugal. 20 stadiums, 17 cities, $41B in infrastructure. Construction status, budgets, timelines. Updated quarterly.',
  openGraph: {
    title: '2030 World Cup Infrastructure Map',
    description: '20 stadiums across 17 cities. $41B in Moroccan infrastructure. The complete picture of the first World Cup across two continents.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/world-cup-2030' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '2030 World Cup Infrastructure',
    description: 'Stadium builds, transport upgrades, hotel capacity, host city readiness for FIFA 2030.',
    url: 'https://dancingwiththelions.com/data/world-cup-2030',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Tourism',
    keywords: 'world cup, 2030, fifa, stadium, casablanca, rabat, marrakech, infrastructure',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 014 — 2030 World Cup Infrastructure',
    description: 'Stadium builds, transport upgrades, hotel capacity, host city readiness for FIFA 2030.',
    url: 'https://dancingwiththelions.com/data/world-cup-2030',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["world cup", "2030", "fifa", "stadium", "casablanca", "rabat", "marrakech", "infrastructure"],
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