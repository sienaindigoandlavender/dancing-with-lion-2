import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco\'s Port Strategy — Tanger Med, Nador West Med, Dakhla | Dancing with Lions',
  description: '11.1M TEUs. 17th globally. From Tanger Med to Dakhla Atlantique. The infrastructure behind Morocco\'s transformation into Africa\'s trade gateway.',
  openGraph: {
    title: 'Morocco\'s Port Strategy | Dancing with Lions',
    description: 'Tanger Med, Nador West Med, Dakhla Atlantique, Casablanca, Jorf Lasfar. Container throughput and trade routes.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/port-strategy' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco\\',
    description: '11.1M TEUs. 17th globally. From Tanger Med to Dakhla Atlantique. The infrastructure behind Morocco\\',
    url: 'https://dancingwiththelions.com/data/port-strategy',
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