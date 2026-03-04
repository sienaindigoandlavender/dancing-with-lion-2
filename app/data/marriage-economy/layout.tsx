import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Marriage Economy — Demographics & Society | Dancing with Lions',
  description: 'The economics of Moroccan marriage. Mahr, trousseau, ceremony costs, regional variations. What a wedding really costs.',
  openGraph: {
    title: 'The Marriage Economy | Dancing with Lions',
    description: 'The economics of Moroccan marriage. Mahr, trousseau, ceremony costs, regional variations. What a wedding really costs.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/marriage-economy' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Marriage Economy',
    description: 'The economics of Moroccan marriage. Mahr, trousseau, ceremony costs, regional variations. What a wedding really costs.',
    url: 'https://dancingwiththelions.com/data/marriage-economy',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'marriage, wedding, mahr, dowry, economy, cost, ceremony, social',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 088 — The Marriage Economy',
    description: 'The economics of Moroccan marriage. Mahr, trousseau, ceremony costs, regional variations. What a wedding really costs.',
    url: 'https://dancingwiththelions.com/data/marriage-economy',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["marriage", "wedding", "mahr", "dowry", "economy", "cost", "ceremony", "social"],
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