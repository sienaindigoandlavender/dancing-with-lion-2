import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Geometry of Culture — Architecture & Design | Dancing with Lions',
  description: 'The six star families of Islamic geometric art. Mathematical construction, cultural meaning, and Moroccan applications.',
  openGraph: {
    title: 'The Geometry of Culture | Dancing with Lions',
    description: 'The six star families of Islamic geometric art. Mathematical construction, cultural meaning, and Moroccan applications.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/geometry-of-culture' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Geometry of Culture',
    description: 'The six star families of Islamic geometric art. Mathematical construction, cultural meaning, and Moroccan applications.',
    url: 'https://dancingwiththelions.com/data/geometry-of-culture',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'geometry, Islamic art, star, pattern, mathematics, zellige, arabesque, construction',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 083 — The Geometry of Culture',
    description: 'The six star families of Islamic geometric art. Mathematical construction, cultural meaning, and Moroccan applications.',
    url: 'https://dancingwiththelions.com/data/geometry-of-culture',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "geometry, Islamic art, star, pattern, mathematics, zellige, arabesque, construction",
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