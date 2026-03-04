import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Silk Road Into Africa — China\'s Belt & Road Initiative | Dancing with Lions',
  description: '$182.3B in loans. $61.2B in 2025 alone (+283%). 10,000km of railways. ~100 ports. 52 African countries signed. The largest infrastructure programme in human history, mapped. Structured intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Silk Road Into Africa — China\\',
    description: '$182.3B in loans. $61.2B in 2025 alone (+283%). 10,000km of railways. ~100 ports. 52 African countries signed. The largest infrastructure programme in human history, mapped. Structured intelligence by Dancing with Lions.',
    url: 'https://dancingwiththelions.com/data/the-silk-road-into-africa',
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