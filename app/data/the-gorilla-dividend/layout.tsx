import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Gorilla Dividend — How $1,500 Saved a Species | Dancing with Lions',
  description: 'Rwanda charges $1,500 for one hour with the mountain gorillas. 96 permits per day. $647M in tourism revenue (2024). Population from 254 to 1,063. The economics of conservation that actually works.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Gorilla Dividend',
    description: 'Rwanda charges $1,500 for one hour with the mountain gorillas. 96 permits per day, 12 habituated groups. $647M total tourism revenue in 2024, $200M from gorillas alone — 31% of revenue on 0.1% of land. Population from 254 (1981) to 1,063 (2020). The only great ape that is increas',
    url: 'https://dancingwiththelions.com/data/the-gorilla-dividend',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'Rwanda, gorilla, mountain gorilla, Gorilla beringei beringei, Volcanoes National Park, Virunga, permit, $1,500',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 146 — The Gorilla Dividend',
    description: 'Rwanda charges $1,500 for one hour with the mountain gorillas. 96 permits per day, 12 habituated groups. $647M total tourism revenue in 2024, $200M from gorillas alone — 31% of revenue on 0.1% of land. Population from 254 (1981) to 1,063 (2020). The only great ape that is increas',
    url: 'https://dancingwiththelions.com/data/the-gorilla-dividend',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['Rwanda', 'gorilla', 'mountain gorilla', 'Gorilla beringei beringei', 'Volcanoes National Park', 'Virunga', 'permit', '$1,500'],
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