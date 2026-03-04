import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '37.8 Million People — Morocco Population Density 3D — Dancing with Lions',
  description: 'Morocco population density as a 3D bar map. Each grid cell extruded by people per square kilometre. The Atlantic corridor, the empty Sahara, the Casablanca megacity. Interactive, draggable.',
  openGraph: {
    title: '37.8 Million People — Morocco 3D Population Density',
    description: 'Every grid cell of Morocco extruded by population density. The Atlantic corridor vs. the empty south.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/morocco-3d-population' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco Population Density 3D',
    description: 'Morocco population density as a 3D bar map. Each grid cell extruded by people per square kilometre. The Atlantic corridor, the empty Sahara, the Casablanca megacity.',
    url: 'https://dancingwiththelions.com/data/morocco-3d-population',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Urban Life',
    keywords: 'population, 3D, density, map, Casablanca, Atlantic, Sahara, interactive',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 070 — Morocco Population Density 3D',
    description: 'Morocco population density as a 3D bar map. Each grid cell extruded by people per square kilometre. The Atlantic corridor, the empty Sahara, the Casablanca megacity.',
    url: 'https://dancingwiththelions.com/data/morocco-3d-population',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['population', '3D', 'density', 'map', 'Casablanca', 'Atlantic', 'Sahara', 'interactive'],
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