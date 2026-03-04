import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ship of the Desert — Dancing with Lions',
  description: 'Three camel species. Two trade routes. One animal that built civilisation across the most hostile terrain on earth. Dromedary vs Bactrian vs Wild Bactrian — 46 million years of evolution mapped from Morocco outward.',
  openGraph: {
    title: 'The Ship of the Desert — Dancing with Lions',
    description: 'Three camel species. Two trade routes. 40 million animals. 950 wild survivors. The data story of how a North American emigrant built the Silk Road and the Saharan caravans.',
    type: 'article',
    siteName: 'Dancing with Lions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ship of the Desert — Dancing with Lions',
    description: 'Three camel species. Two trade routes. 40 million animals. 950 wild survivors.',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-ship-of-the-desert' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Ship of the Desert',
    description: 'Three camel species. Two trade routes. One animal that built civilisation across the most hostile terrain on earth. Dromedary (94% of 40M camels), domestic Bactrian (Silk Road), and wild Bactrian — a separate species, 950 left, survived 43 nuclear tests at Lop Nur, drinks salt wa',
    url: 'https://dancingwiththelions.com/data/the-ship-of-the-desert',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'camel, dromedary, Bactrian, Camelus dromedarius, Camelus bactrianus, Camelus ferus, wild camel, Gobi',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 130 — The Ship of the Desert',
    description: 'Three camel species. Two trade routes. One animal that built civilisation across the most hostile terrain on earth. Dromedary (94% of 40M camels), domestic Bactrian (Silk Road), and wild Bactrian — a separate species, 950 left, survived 43 nuclear tests at Lop Nur, drinks salt wa',
    url: 'https://dancingwiththelions.com/data/the-ship-of-the-desert',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["camel", "dromedary", "Bactrian", "Camelus dromedarius", "Camelus bactrianus", "Camelus ferus", "wild camel", "Gobi"],
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