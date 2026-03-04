import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Tea Road — From China to Morocco | Dancing with Lions',
  description: 'Morocco imports more Chinese tea than all of North America combined. 81,000 metric tons in 2024 — China\'s single largest tea customer. The atay ceremony is gunpowder green + fresh mint + sugar, poured from height. A $7.55 billion global trade built on leaves.',
  openGraph: {
    title: 'The Tea Road',
    description: 'Morocco is China\'s #1 tea export destination: 81,000 metric tons (2024). More than all of North America combined.',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-tea-road' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Tea Road — From China to Morocco | Dancing with Lions',
    description: 'Morocco imports more Chinese tea than all of North America combined. 81,000 metric tons in 2024 — China\\',
    url: 'https://dancingwiththelions.com/data/the-tea-road',
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