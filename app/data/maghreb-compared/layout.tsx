import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Maghreb Compared — Dancing with Lions',
  description: 'Morocco, Tunisia, and Algeria side by side. Population, GDP, tourism, investment, and demographics visualized. Sources: World Bank, IMF, HCP.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/maghreb-compared' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Maghreb Compared',
    description: 'Morocco, Tunisia, and Algeria side by side. Population, GDP, tourism, investment, demographics.',
    url: 'https://dancingwiththelions.com/data/maghreb-compared',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Comparative',
    keywords: 'morocco, tunisia, algeria, gdp, population, comparison, north africa, maghreb',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 001 — The Maghreb Compared',
    description: 'Morocco, Tunisia, and Algeria side by side. Population, GDP, tourism, investment, demographics.',
    url: 'https://dancingwiththelions.com/data/maghreb-compared',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "morocco, tunisia, algeria, gdp, population, comparison, north africa, maghreb",
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