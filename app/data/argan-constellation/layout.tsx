import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Argan Constellation — Economy & Trade | Dancing with Lions',
  description: 'Argan oil extraction: every manual step mapped. The labour, the cooperatives, the women. Sustainability and the argan triangle.',
  openGraph: {
    title: 'The Argan Constellation | Dancing with Lions',
    description: 'Argan oil extraction: every manual step mapped. The labour, the cooperatives, the women. Sustainability and the argan triangle.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/argan-constellation' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Argan Constellation',
    description: 'Argan oil extraction: every manual step mapped. The labour, the cooperatives, the women. Sustainability and the argan triangle.',
    url: 'https://dancingwiththelions.com/data/argan-constellation',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Economy & Trade',
    keywords: 'argan, oil, cooperative, women, labour, Souss, sustainability, extraction',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 110 — The Argan Constellation',
    description: 'Argan oil extraction: every manual step mapped. The labour, the cooperatives, the women. Sustainability and the argan triangle.',
    url: 'https://dancingwiththelions.com/data/argan-constellation',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["argan", "oil", "cooperative", "women", "labour", "Souss", "sustainability", "extraction"],
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