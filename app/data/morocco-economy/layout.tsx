import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Economy in One Page — Dancing with Lions',
  description: 'GDP, exports, FDI, tourism, remittances, key sectors. The essential economic snapshot of Morocco, updated annually. Data from IMF, World Bank, HCP, Office des Changes.',
  openGraph: {
    title: 'Morocco Economy in One Page — Dancing with Lions',
    description: 'The essential economic snapshot every journalist grabs. GDP $183B, automotive exports #1, 17.4M tourists, $12.4B tourism revenue, $11.9B diaspora remittances.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/morocco-economy' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco Economy in One Page',
    description: 'GDP, exports, FDI, tourism, remittances, key sectors. The essential economic snapshot.',
    url: 'https://dancingwiththelions.com/data/morocco-economy',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Economy & Trade',
    keywords: 'gdp, economy, exports, fdi, tourism revenue, remittances, phosphate, automotive',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 004 — Morocco Economy in One Page',
    description: 'GDP, exports, FDI, tourism, remittances, key sectors. The essential economic snapshot.',
    url: 'https://dancingwiththelions.com/data/morocco-economy',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "gdp, economy, exports, fdi, tourism revenue, remittances, phosphate, automotive",
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