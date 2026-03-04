import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Gardens of Morocco — Landscape & Water Intelligence | Dancing with Lions',
  description: 'Majorelle, Agdal, Menara, Jnan Sbil. Islamic garden design principles. Khettara water systems. Almohad engineering. UNESCO heritage. 500 hectares of productive paradise.',
  openGraph: {
    title: 'The Gardens of Morocco | Dancing with Lions',
    description: 'Four gardens, nine centuries. Water as sacred element. Geometry as divine order. The garden as earthly paradise.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/gardens-of-morocco' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Gardens of Morocco',
    description: 'Majorelle, Agdal, Menara, Jnan Sbil. Islamic garden design. Khettara water systems. Almohad engineering. 500 hectares of productive paradise. Majorelle Blue #6050DC.',
    url: 'https://dancingwiththelions.com/data/gardens-of-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'garden, Majorelle, Agdal, Menara, Jnan Sbil, Marrakech, Fez, Islamic garden',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 057 — The Gardens of Morocco',
    description: 'Majorelle, Agdal, Menara, Jnan Sbil. Islamic garden design. Khettara water systems. Almohad engineering. 500 hectares of productive paradise. Majorelle Blue #6050DC.',
    url: 'https://dancingwiththelions.com/data/gardens-of-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['garden', 'Majorelle', 'Agdal', 'Menara', 'Jnan Sbil', 'Marrakech', 'Fez', 'Islamic garden'],
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