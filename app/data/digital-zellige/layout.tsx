import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Zellige — Architecture & Design | Dancing with Lions',
  description: 'Zellige in the digital age. Geometric patterns, mathematical principles, and the American pivot towards Moroccan tilework.',
  openGraph: {
    title: 'Digital Zellige | Dancing with Lions',
    description: 'Zellige in the digital age. Geometric patterns, mathematical principles, and the American pivot towards Moroccan tilework.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/digital-zellige' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Digital Zellige',
    description: 'Zellige in the digital age. Geometric patterns, mathematical principles, and the American pivot towards Moroccan tilework.',
    url: 'https://dancingwiththelions.com/data/digital-zellige',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'zellige, tile, geometry, pattern, Islamic, design, mosaic, Fez',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 081 — Digital Zellige',
    description: 'Zellige in the digital age. Geometric patterns, mathematical principles, and the American pivot towards Moroccan tilework.',
    url: 'https://dancingwiththelions.com/data/digital-zellige',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "zellige, tile, geometry, pattern, Islamic, design, mosaic, Fez",
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