import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Water Equation — Geography & Environment | Dancing with Lions',
  description: 'Dam storage, aquifer depletion, river basin fill rates. The water equation Morocco must solve before 2030.',
  openGraph: {
    title: 'The Water Equation | Dancing with Lions',
    description: 'Dam storage, aquifer depletion, river basin fill rates. The water equation Morocco must solve before 2030.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/water-equation' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Water Equation',
    description: 'Dam storage, aquifer depletion, river basin fill rates. The water equation Morocco must solve before 2030.',
    url: 'https://dancingwiththelions.com/data/water-equation',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'water, dam, aquifer, depletion, drought, river, storage, desalination',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 105 — The Water Equation',
    description: 'Dam storage, aquifer depletion, river basin fill rates. The water equation Morocco must solve before 2030.',
    url: 'https://dancingwiththelions.com/data/water-equation',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "water, dam, aquifer, depletion, drought, river, storage, desalination",
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