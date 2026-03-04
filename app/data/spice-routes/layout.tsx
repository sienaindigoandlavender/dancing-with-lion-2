import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Spice Routes — Morocco's Aromatic Trade | Dancing with Lions",
  description: "Saffron, cumin, cinnamon, pepper, turmeric. How Morocco's spice economy connects Sub-Saharan Africa, the Arabian Peninsula, and the Atlantic trade.",
  openGraph: {
    title: "Spice Routes | Dancing with Lions",
    description: "Saffron, cumin, cinnamon, pepper, turmeric. The geography of Moroccan spice trade.",
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/spice-routes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Spice Routes — Morocco's Aromatic Trade",
    description: "Saffron, cumin, cinnamon, pepper, turmeric. Morocco's spice trade routes connecting Africa, Arabia, and the Atlantic.",
    url: 'https://dancingwiththelions.com/data/spice-routes',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  )
}
