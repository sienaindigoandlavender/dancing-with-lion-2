import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spice Routes — Morocco's Aromatic Trade | Dancing with Lions',
  description: 'Saffron, cumin, cinnamon, pepper, turmeric. How Morocco's spice economy connects Sub-Saharan Africa, the Arabian Peninsula, and the Atlantic trade.',
  openGraph: {
    title: 'Spice Routes — Morocco's Aromatic Trade | Dancing with Lions',
    description: 'Saffron, cumin, cinnamon, pepper, turmeric. How Morocco's spice economy connects Sub-Saharan Africa, the Arabian Peninsula, and the Atlantic trade.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/spice-routes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Spice Routes — Morocco',
    description: 'Saffron, cumin, cinnamon, pepper, turmeric. How Morocco',
    url: 'https://dancingwiththelions.com/data/spice-routes',
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