import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Pottery Traditions — Regional Ceramics of Morocco | Dancing with Lions',
  description: 'Fes blue, Safi polychrome, Tamegroute green, Rif Berber, Salé contemporary, Meknes zellige. Six regional pottery traditions mapped with production data, technique documentation, and interactive Mapbox.',
  openGraph: {
    title: 'The Pottery Traditions — Regional Ceramics of Morocco | Dancing with Lions',
    description: 'Six regional pottery traditions of Morocco mapped and documented. From 6,000-year-old Berber ceramics to the zellige masters of Meknes.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/pottery-traditions' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Pottery Traditions',
    description: 'Fes blue, Safi polychrome, Tamegroute green, Rif pottery. Regional ceramics mapped.',
    url: 'https://dancingwiththelions.com/data/pottery-traditions',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Craft & Textiles',
    keywords: 'pottery, ceramics, fes, safi, tamegroute, craft, blue, green',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 051 — The Pottery Traditions',
    description: 'Fes blue, Safi polychrome, Tamegroute green, Rif pottery. Regional ceramics mapped.',
    url: 'https://dancingwiththelions.com/data/pottery-traditions',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["pottery", "ceramics", "fes", "safi", "tamegroute", "craft", "blue", "green"],
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