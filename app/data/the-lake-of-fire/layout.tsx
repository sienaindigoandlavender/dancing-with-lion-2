import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Lake of Fire — Boko Haram, ISWAP & the Lake Chad Basin | Dancing with Lions',
  description: '50,000+ dead since 2009. Africa\'s longest jihadi insurgency. Boko Haram resurgent. ISWAP adopting drones. The conflicts are merging. Structured intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Lake of Fire — Boko Haram, ISWAP & the Lake Chad Basin | Dancing with Lions',
    description: '50,000+ dead since 2009. Africa\\',
    url: 'https://dancingwiththelions.com/data/the-lake-of-fire',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}