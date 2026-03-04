import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Nomad Pulse — Living Data | Dancing with Lions',
  description: 'Digital nomads in Morocco. Co-living, remote work infrastructure, visa policy. The pulse of the mobile workforce 2025–2026.',
  openGraph: {
    title: 'The Nomad Pulse | Dancing with Lions',
    description: 'Digital nomads in Morocco. Co-living, remote work infrastructure, visa policy. The pulse of the mobile workforce 2025–2026.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-nomad-pulse' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Nomad Pulse',
    description: 'Digital nomads in Morocco. Co-living, remote work infrastructure, visa policy. The pulse of the mobile workforce 2025–2026.',
    url: 'https://dancingwiththelions.com/data/the-nomad-pulse',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Living Data',
    keywords: 'nomad, digital, remote work, co-living, visa, Marrakech, Essaouira, Tangier',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 103 — The Nomad Pulse',
    description: 'Digital nomads in Morocco. Co-living, remote work infrastructure, visa policy. The pulse of the mobile workforce 2025–2026.',
    url: 'https://dancingwiththelions.com/data/the-nomad-pulse',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['nomad', 'digital', 'remote work', 'co-living', 'visa', 'Marrakech', 'Essaouira', 'Tangier'],
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