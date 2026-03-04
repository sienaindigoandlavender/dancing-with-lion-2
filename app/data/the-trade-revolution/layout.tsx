import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Trade Revolution — AfCFTA: 54 Countries. $3.4 Trillion. The World\'s Largest Free Trade Area. | Dancing with Lions',
  description: 'The African Continental Free Trade Area connects 1.4 billion people in a $3.4 trillion market. Intra-African trade at just 15%. AfCFTA, PAPSS, customs barriers, trade corridors. Investment-grade trade intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Trade Revolution',
    description: 'AfCFTA connects 54 countries, 1.4 billion people, $3.4 trillion combined GDP — the world largest free trade area by member states. Intra-African trade just 15% vs Europe 60%, Asia 50%. Radial SVG trade compass: who Africa trades with (EU 29%, China 21%, intra-Africa 15%, India 8%',
    url: 'https://dancingwiththelions.com/data/the-trade-revolution',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'trade, AfCFTA, free trade, intra-African, tariff, customs, PAPSS, payment',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 159 — The Trade Revolution',
    description: 'AfCFTA connects 54 countries, 1.4 billion people, $3.4 trillion combined GDP — the world largest free trade area by member states. Intra-African trade just 15% vs Europe 60%, Asia 50%. Radial SVG trade compass: who Africa trades with (EU 29%, China 21%, intra-Africa 15%, India 8%',
    url: 'https://dancingwiththelions.com/data/the-trade-revolution',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["trade", "AfCFTA", "free trade", "intra-African", "tariff", "customs", "PAPSS", "payment"],
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