import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Lion Economics — Conservation Economics of Africa\'s Apex Predator | Dancing with Lions',
  description: '200,000 → 23,000. Extinct in 26 countries. 7% of historical range. Lions drive 8.5% of Africa\'s GDP yet 90% of protected areas are underfunded. The economics of a species being allowed to disappear. Structured intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Lion Economics — Conservation Economics of Africa\\',
    description: '200,000 → 23,000. Extinct in 26 countries. 7% of historical range. Lions drive 8.5% of Africa\\',
    url: 'https://dancingwiththelions.com/data/the-lion-economics',
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