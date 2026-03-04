import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Marriage Equation — Demographics & Society | Dancing with Lions',
  description: 'Marriage and divorce in Morocco. Rates, trends, regional data. The shifting equation of Moroccan family life.',
  openGraph: {
    title: 'The Marriage Equation | Dancing with Lions',
    description: 'Marriage and divorce in Morocco. Rates, trends, regional data. The shifting equation of Moroccan family life.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/marriage-equation' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Marriage Equation',
    description: 'Marriage and divorce in Morocco. Rates, trends, regional data. The shifting equation of Moroccan family life.',
    url: 'https://dancingwiththelions.com/data/marriage-equation',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'marriage, divorce, family, statistics, trends, Moudawana, women, social',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 089 — The Marriage Equation',
    description: 'Marriage and divorce in Morocco. Rates, trends, regional data. The shifting equation of Moroccan family life.',
    url: 'https://dancingwiththelions.com/data/marriage-equation',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['marriage', 'divorce', 'family', 'statistics', 'trends', 'Moudawana', 'women', 'social'],
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