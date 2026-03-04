import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Rhino Underground — 2,000 Rhinos, One Failed Auction, and an Arrest | Dancing with Lions',
  description: 'The largest wildlife translocation in history. 2,000 captive rhinos being rewilded across Africa after a failed auction. 376 moved in Year 1. 33 calves born wild. Then the breeder was arrested for trafficking the horns. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Rhino Underground',
    description: 'One man bred 2,000 rhinos. Nobody bid when he put them up for auction. A conservation NGO bought them all and launched the largest wildlife translocation in history. Then the breeder was arrested for trafficking the horns. Four visualizations: Hume-to-handcuffs timeline (1996-202',
    url: 'https://dancingwiththelions.com/data/the-rhino-underground',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'rhino, white rhino, Rhino Rewild, African Parks, John Hume, Platinum Rhino, poaching, trafficking',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 152 — The Rhino Underground',
    description: 'One man bred 2,000 rhinos. Nobody bid when he put them up for auction. A conservation NGO bought them all and launched the largest wildlife translocation in history. Then the breeder was arrested for trafficking the horns. Four visualizations: Hume-to-handcuffs timeline (1996-202',
    url: 'https://dancingwiththelions.com/data/the-rhino-underground',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "rhino, white rhino, Rhino Rewild, African Parks, John Hume, Platinum Rhino, poaching, trafficking",
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