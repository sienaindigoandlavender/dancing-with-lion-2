import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The French Protectorate — 1912–1956 | Dancing with Lions',
  description: 'Treaty of Fez to independence. Lyautey, Henri Prost, the dual city. Abd el-Krim, Istiqlal, Mohammed V\'s exile. 44 years that shaped modern Morocco.',
  openGraph: {
    title: 'The French Protectorate | Dancing with Lions',
    description: '1912–1956. How France built the villes nouvelles, how Morocco won them back.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/french-protectorate' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The French Protectorate',
    description: '1912–1956. Treaty of Fez, Lyautey, villes nouvelles, Rif War, Berber Dahir, Istiqlal, Mohammed V exile, independence.',
    url: 'https://dancingwiththelions.com/data/french-protectorate',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'History',
    keywords: 'protectorate, France, Lyautey, Prost, ville nouvelle, colonialism, independence, Istiqlal',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 029 — The French Protectorate',
    description: '1912–1956. Treaty of Fez, Lyautey, villes nouvelles, Rif War, Berber Dahir, Istiqlal, Mohammed V exile, independence.',
    url: 'https://dancingwiththelions.com/data/french-protectorate',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["protectorate", "France", "Lyautey", "Prost", "ville nouvelle", "colonialism", "independence", "Istiqlal"],
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