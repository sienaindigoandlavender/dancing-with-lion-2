import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Conservation Deficit — Economics of Africa\'s Wildlife Crisis | Dancing with Lions',
  description: 'Africa\'s wildlife generates $29.3B in tourism GDP. The illegal trade extracts $23B. Conservation funding: $1.1B. 94% of threatened species receive zero dedicated support. Six species, six trajectories, one structural failure. Investment-grade intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Conservation Deficit — Economics of Africa\\',
    description: 'Africa\\',
    url: 'https://dancingwiththelions.com/data/the-conservation-deficit',
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