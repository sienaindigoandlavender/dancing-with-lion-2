import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Moroccan Fashion Intelligence — Caftan, Djellaba, Babouche | Dancing with Lions',
  description: 'Eight centuries of dress. Caftan (UNESCO 2025), djellaba, takchita, babouche. Sfifa, aakad, three embroidery schools. Contemporary designers. $4.25B textile industry.',
  openGraph: {
    title: 'Moroccan Fashion Intelligence | Dancing with Lions',
    description: 'The garments that dressed dynasties. Caftan to couture. Tradition to runway.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/moroccan-fashion' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Moroccan Fashion Intelligence',
    description: 'Caftan, djellaba, babouche, takchita. Six core garments, three embroidery schools. UNESCO 2025. $4.25B textile industry.',
    url: 'https://dancingwiththelions.com/data/moroccan-fashion',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'fashion, caftan, djellaba, babouche, takchita, sfifa, aakad, embroidery',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 038 — Moroccan Fashion Intelligence',
    description: 'Caftan, djellaba, babouche, takchita. Six core garments, three embroidery schools. UNESCO 2025. $4.25B textile industry.',
    url: 'https://dancingwiththelions.com/data/moroccan-fashion',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["fashion", "caftan", "djellaba", "babouche", "takchita", "sfifa", "aakad", "embroidery"],
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