import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cinema Morocco — Ouarzawood, Atlas Studios, Game of Thrones | Dancing with Lions',
  description: 'Six decades. 20+ blockbusters. The world\'s largest film studio. From Lawrence of Arabia to Gladiator II — Morocco\'s cinema economy.',
  openGraph: {
    title: 'Cinema Morocco | Dancing with Lions',
    description: 'Atlas Studios, Ouarzazate. Game of Thrones, Gladiator, Kingdom of Heaven. 30% cash rebate. The Hollywood of Africa.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/cinema-morocco' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cinema Morocco',
    description: 'Ouarzazate studios, filmed-in-Morocco productions, Game of Thrones locations, Atlas Corporation.',
    url: 'https://dancingwiththelions.com/data/cinema-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'cinema, film, ouarzazate, gladiator, game of thrones, hollywood, studio, atlas',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 027 — Cinema Morocco',
    description: 'Ouarzazate studios, filmed-in-Morocco productions, Game of Thrones locations, Atlas Corporation.',
    url: 'https://dancingwiththelions.com/data/cinema-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["cinema", "film", "ouarzazate", "gladiator", "game of thrones", "hollywood", "studio", "atlas"],
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