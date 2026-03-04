import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Date Palm Oases — Draa, Ziz, Tafilalet | Dancing with Lions',
  description: 'Oasis ecology, 453 cultivars, Bayoud disease, khettara irrigation. 4.8 million palms, 10 million lost. The three-tier system that feeds the desert.',
  openGraph: {
    title: 'The Date Palm Oases | Dancing with Lions',
    description: 'Draa Valley, Ziz Valley, Tafilalet. The ecology, the threat, the resistance.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/date-palm-oases' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Date Palm Oases',
    description: 'Draa Valley, Ziz Valley, Tafilalet. Three-tier oasis ecology, 453 cultivars, Bayoud disease, khettara irrigation.',
    url: 'https://dancingwiththelions.com/data/date-palm-oases',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Food & Agriculture',
    keywords: 'date palm, oasis, Draa, Ziz, Tafilalet, Mejhoul, Medjool, Bayoud',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 035 — The Date Palm Oases',
    description: 'Draa Valley, Ziz Valley, Tafilalet. Three-tier oasis ecology, 453 cultivars, Bayoud disease, khettara irrigation.',
    url: 'https://dancingwiththelions.com/data/date-palm-oases',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['date palm', 'oasis', 'Draa', 'Ziz', 'Tafilalet', 'Mejhoul', 'Medjool', 'Bayoud'],
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