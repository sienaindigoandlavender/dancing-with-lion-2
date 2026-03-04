import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The World Cup Blueprint — Infrastructure | Dancing with Lions',
  description: 'Morocco\'s 2030 World Cup infrastructure plan. Stadium builds, hotel rooms, jobs, investment. The economic blueprint.',
  openGraph: {
    title: 'The World Cup Blueprint | Dancing with Lions',
    description: 'Morocco\'s 2030 World Cup infrastructure plan. Stadium builds, hotel rooms, jobs, investment. The economic blueprint.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/world-cup-blueprint' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The World Cup Blueprint — Infrastructure | Dancing with Lions',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/world-cup-blueprint',
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