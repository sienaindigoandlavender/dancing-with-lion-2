import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Atlantic Coast — Tangier to Dakhla | Dancing with Lions',
  description: '3,500 km of Atlantic coastline. 12 cities mapped. Africa\'s largest fishing industry, wind energy corridor, surf breaks, and a $1.6B port under construction.',
  openGraph: {
    title: 'The Atlantic Coast | Dancing with Lions',
    description: 'Tangier to Dakhla. Fishing ports, wind farms, surf breaks, and Morocco\'s gateway to West Africa.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/atlantic-coast' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Atlantic Coast',
    description: 'Tangier to Dakhla. 3,500 km of coastline, 12 cities mapped. Fishing ports, wind energy, surf breaks, $1.6B Dakhla port.',
    url: 'https://dancingwiththelions.com/data/atlantic-coast',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'coast, atlantic, tangier, dakhla, fishing, wind, surf, port',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 034 — The Atlantic Coast',
    description: 'Tangier to Dakhla. 3,500 km of coastline, 12 cities mapped. Fishing ports, wind energy, surf breaks, $1.6B Dakhla port.',
    url: 'https://dancingwiththelions.com/data/atlantic-coast',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['coast', 'atlantic', 'tangier', 'dakhla', 'fishing', 'wind', 'surf', 'port'],
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