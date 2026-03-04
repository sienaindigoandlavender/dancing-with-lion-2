import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Urbanisation Wave — Lagos to 88 Million. 14 Megacities by 2050. Building Cities That Don\'t Exist Yet. | Dancing with Lions',
  description: 'Africa will add 950 million urban residents by 2050. Lagos projected 88M by 2100. 14 megacities. Most infrastructure does not exist yet. Investment-grade urbanisation intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Urbanisation Wave',
    description: 'Africa will add 950 million urban residents by 2050 — more than Europe and North America combined. Lagos projected 88M by 2100. 50 cities will exceed 5M by 2050. Interactive SVG bubble chart: 8 megacities with current vs projected populations (inner solid circle = now, outer dash',
    url: 'https://dancingwiththelions.com/data/the-urbanisation-wave',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'urbanisation, urbanization, cities, megacity, Lagos, Kinshasa, Cairo, Dar es Salaam',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 161 — The Urbanisation Wave',
    description: 'Africa will add 950 million urban residents by 2050 — more than Europe and North America combined. Lagos projected 88M by 2100. 50 cities will exceed 5M by 2050. Interactive SVG bubble chart: 8 megacities with current vs projected populations (inner solid circle = now, outer dash',
    url: 'https://dancingwiththelions.com/data/the-urbanisation-wave',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["urbanisation", "urbanization", "cities", "megacity", "Lagos", "Kinshasa", "Cairo", "Dar es Salaam"],
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