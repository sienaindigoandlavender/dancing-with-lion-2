import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Jewish Atlas — Sacred & Spiritual | Dancing with Lions',
  description: 'Jewish Morocco. The Toshavim and Megorashim. Mellahs, synagogues, cemeteries, saints. 250,000 Jews in 1948. Fewer than 2,000 today.',
  openGraph: {
    title: 'The Jewish Atlas | Dancing with Lions',
    description: 'Jewish Morocco. The Toshavim and Megorashim. Mellahs, synagogues, cemeteries, saints. 250,000 Jews in 1948. Fewer than 2,000 today.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/jewish-atlas' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Jewish Atlas',
    description: 'Jewish Morocco. The Toshavim and Megorashim. Mellahs, synagogues, cemeteries, saints. 250,000 Jews in 1948. Fewer than 2,000 today.',
    url: 'https://dancingwiththelions.com/data/jewish-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Sacred & Spiritual',
    keywords: 'Jewish, mellah, synagogue, Toshavim, Megorashim, Sephardic, Israel, diaspora',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 065 — The Jewish Atlas',
    description: 'Jewish Morocco. The Toshavim and Megorashim. Mellahs, synagogues, cemeteries, saints. 250,000 Jews in 1948. Fewer than 2,000 today.',
    url: 'https://dancingwiththelions.com/data/jewish-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "Jewish, mellah, synagogue, Toshavim, Megorashim, Sephardic, Israel, diaspora",
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