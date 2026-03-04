import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Geometry of Zellige — Mathematics of Moroccan Tilework | Dancing with Lions',
  description: 'Star patterns, tessellation, 17 wallpaper groups, compass-and-straightedge construction. The mathematics behind Morocco\'s most iconic craft.',
  openGraph: {
    title: 'The Geometry of Zellige | Dancing with Lions',
    description: '5 star families, 4 symmetry types, 17 wallpaper groups. How Islamic geometry becomes Moroccan tilework.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/geometry-of-zellige' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Geometry of Zellige',
    description: 'Star patterns, tessellation, 17 wallpaper groups, compass-and-straightedge construction. The mathematics behind Moroccan tilework.',
    url: 'https://dancingwiththelions.com/data/geometry-of-zellige',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'zellige, geometry, mathematics, symmetry, tessellation, star, islamic, pattern',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 018 — The Geometry of Zellige',
    description: 'Star patterns, tessellation, 17 wallpaper groups, compass-and-straightedge construction. The mathematics behind Moroccan tilework.',
    url: 'https://dancingwiththelions.com/data/geometry-of-zellige',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['zellige', 'geometry', 'mathematics', 'symmetry', 'tessellation', 'star', 'islamic', 'pattern'],
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