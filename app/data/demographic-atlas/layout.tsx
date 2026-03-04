import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Demographic Atlas — Demographics & Society | Dancing with Lions',
  description: 'Morocco demographics by region. Population growth, urbanization, illiteracy, youth bulge. The numbers behind the map.',
  openGraph: {
    title: 'The Demographic Atlas | Dancing with Lions',
    description: 'Morocco demographics by region. Population growth, urbanization, illiteracy, youth bulge. The numbers behind the map.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/demographic-atlas' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Demographic Atlas',
    description: 'Morocco demographics by region. Population growth, urbanization, illiteracy, youth bulge. The numbers behind the map.',
    url: 'https://dancingwiththelions.com/data/demographic-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'demographics, population, growth, urbanization, illiteracy, youth, regions, census',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 080 — The Demographic Atlas',
    description: 'Morocco demographics by region. Population growth, urbanization, illiteracy, youth bulge. The numbers behind the map.',
    url: 'https://dancingwiththelions.com/data/demographic-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["demographics", "population", "growth", "urbanization", "illiteracy", "youth", "regions", "census"],
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