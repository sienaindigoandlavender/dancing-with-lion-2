import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jewish Heritage in Morocco — Mellahs, Synagogues, the Departure | Dancing with Lions',
  description: '265,000 in 1948. ~1,000 in 2025. 2,000 years of Jewish life in Morocco. Mellahs, synagogues, cemeteries, Operation Yachin, the legacy that stayed.',
  openGraph: {
    title: 'Jewish Heritage in Morocco | Dancing with Lions',
    description: 'The 250,000 who left. The legacy that stayed. 110 synagogues restored.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/jewish-heritage' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jewish Heritage in Morocco',
    description: '265,000 in 1948. ~1,000 in 2025. Mellahs, synagogues, cemeteries. Operation Yachin, Cadima, the departure, the preservation.',
    url: 'https://dancingwiththelions.com/data/jewish-heritage',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'Jewish, mellah, synagogue, Sephardic, Operation Yachin, Cadima, emigration, Israel',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 037 — Jewish Heritage in Morocco',
    description: '265,000 in 1948. ~1,000 in 2025. Mellahs, synagogues, cemeteries. Operation Yachin, Cadima, the departure, the preservation.',
    url: 'https://dancingwiththelions.com/data/jewish-heritage',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "Jewish, mellah, synagogue, Sephardic, Operation Yachin, Cadima, emigration, Israel",
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