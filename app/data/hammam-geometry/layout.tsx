import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Hammam Geometry — Architecture & Design | Dancing with Lions',
  description: 'The architectural geometry of the Moroccan hammam. Floor plan, hypocaust system, dome oculi, heat flow. Engineering diagram.',
  openGraph: {
    title: 'The Hammam Geometry | Dancing with Lions',
    description: 'The architectural geometry of the Moroccan hammam. Floor plan, hypocaust system, dome oculi, heat flow. Engineering diagram.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/hammam-geometry' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Hammam Geometry',
    description: 'The architectural geometry of the Moroccan hammam. Floor plan, hypocaust system, dome oculi, heat flow. Engineering diagram.',
    url: 'https://dancingwiththelions.com/data/hammam-geometry',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'hammam, architecture, geometry, hypocaust, dome, bath, floor plan, engineering',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 085 — The Hammam Geometry',
    description: 'The architectural geometry of the Moroccan hammam. Floor plan, hypocaust system, dome oculi, heat flow. Engineering diagram.',
    url: 'https://dancingwiththelions.com/data/hammam-geometry',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["hammam", "architecture", "geometry", "hypocaust", "dome", "bath", "floor plan", "engineering"],
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