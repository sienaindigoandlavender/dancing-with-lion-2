import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trans-Saharan Trade Routes — Salt, Gold, Slaves, Manuscripts | Dancing with Lions',
  description: 'The ancient trade networks that built Timbuktu and Marrakech. Five routes, six commodities, ten cities mapped across 1,200 years of desert commerce.',
  openGraph: {
    title: 'Trans-Saharan Trade Routes | Dancing with Lions',
    description: 'Salt south, gold north. The desert economy that funded dynasties and spread Islam across Africa.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/trans-saharan-trade' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Trans-Saharan Trade Routes',
    description: 'Salt, gold, slaves, manuscripts. The ancient trade networks that built Timbuktu and Marrakech.',
    url: 'https://dancingwiththelions.com/data/trans-saharan-trade',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'sahara, trade, gold, salt, timbuktu, caravan, desert, trans-saharan',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 025 — Trans-Saharan Trade Routes',
    description: 'Salt, gold, slaves, manuscripts. The ancient trade networks that built Timbuktu and Marrakech.',
    url: 'https://dancingwiththelions.com/data/trans-saharan-trade',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "sahara, trade, gold, salt, timbuktu, caravan, desert, trans-saharan",
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