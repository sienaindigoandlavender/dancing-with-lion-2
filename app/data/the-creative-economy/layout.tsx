import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Creative Economy — Afrobeats, Nollywood, and the $4.2 Billion Cultural Export Machine | Dancing with Lions',
  description: 'Afrobeats is the fastest-growing genre globally. Nollywood produces 2,500 films/year. African fashion on global runways. The creative economy as Africa\'s soft power engine. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Creative Economy',
    description: 'Afrobeats is the fastest-growing music genre on Earth. Nollywood produces 2,500 films/year. $4.2B+ creative economy. Radial SVG sector wheel: music $1.4B (Afrobeats), film $660M (Nollywood), fashion $600M, visual art $450M, gaming $350M, publishing $250M. Timeline: 8 milestones f',
    url: 'https://dancingwiththelions.com/data/the-creative-economy',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'creative, culture, Afrobeats, Nollywood, music, film, fashion, art',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 162 — The Creative Economy',
    description: 'Afrobeats is the fastest-growing music genre on Earth. Nollywood produces 2,500 films/year. $4.2B+ creative economy. Radial SVG sector wheel: music $1.4B (Afrobeats), film $660M (Nollywood), fashion $600M, visual art $450M, gaming $350M, publishing $250M. Timeline: 8 milestones f',
    url: 'https://dancingwiththelions.com/data/the-creative-economy',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["creative", "culture", "Afrobeats", "Nollywood", "music", "film", "fashion", "art"],
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