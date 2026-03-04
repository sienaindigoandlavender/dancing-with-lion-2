import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Wedding — A Multi-Day Atlas | Dancing with Lions',
  description: 'Seven days, seven outfits. The khotba, hammam, henna night, hdiyya, contract, amariya entrance, and the feast. Regional variations, key roles, bridal wardrobe, and cost breakdown.',
  openGraph: {
    title: 'The Moroccan Wedding | Dancing with Lions',
    description: 'A multi-day ceremony mapped: henna night to dawn feast. 7 bridal outfits, 6 regional traditions, the negafa, the amariya, and what it all costs.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/wedding-atlas' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Moroccan Wedding',
    description: 'Seven days, seven outfits. Henna night, hammam, amariya, negafa, the feast. Regional variations and cost breakdown.',
    url: 'https://dancingwiththelions.com/data/wedding-atlas',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Tourism',
    keywords: 'wedding, marriage, henna, negafa, amariya, caftan, ceremony, tradition',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 049 — The Moroccan Wedding',
    description: 'Seven days, seven outfits. Henna night, hammam, amariya, negafa, the feast. Regional variations and cost breakdown.',
    url: 'https://dancingwiththelions.com/data/wedding-atlas',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['wedding', 'marriage', 'henna', 'negafa', 'amariya', 'caftan', 'ceremony', 'tradition'],
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