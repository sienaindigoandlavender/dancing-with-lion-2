import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Almohad Atlas — Architecture & Design | Dancing with Lions',
  description: 'The Almohad Empire in stone. Caliphs, territories, monuments from Marrakech to Seville. The empire that built the Koutoubia, the Giralda, and the Hassan Tower.',
  openGraph: {
    title: 'The Almohad Atlas | Dancing with Lions',
    description: 'The Almohad Empire in stone. Caliphs, territories, monuments from Marrakech to Seville. The empire that built the Koutoubia, the Giralda, and the Hassan Tower.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/almohad-atlas' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Almohad Atlas',
    description: 'The Almohad Empire in stone. Caliphs, territories, monuments from Marrakech to Seville. The empire that built the Koutoubia, the Giralda, and the Hassan Tower.',
    url: 'https://dancingwiththelions.com/data/almohad-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'Almohad, empire, caliphate, Koutoubia, Giralda, Hassan Tower, Marrakech, Seville',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 062 — The Almohad Atlas',
    description: 'The Almohad Empire in stone. Caliphs, territories, monuments from Marrakech to Seville. The empire that built the Koutoubia, the Giralda, and the Hassan Tower.',
    url: 'https://dancingwiththelions.com/data/almohad-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Almohad", "empire", "caliphate", "Koutoubia", "Giralda", "Hassan Tower", "Marrakech", "Seville"],
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