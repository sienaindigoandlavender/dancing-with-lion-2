import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco\'s Musical Traditions — Gnawa, Andalusi, Amazigh, Chaabi, Raï | Dancing with Lions',
  description: 'Five traditions mapped by region and lineage. Gnawa trance, Andalusi nuba, Amazigh ahwash, Chaabi protest, Raï rebellion. Instruments, artists, rituals.',
  openGraph: {
    title: 'Morocco\'s Musical Traditions | Dancing with Lions',
    description: 'From the guembri of Essaouira to the oud of Fez to the bendir of the Atlas. The complete sound map.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/musical-traditions' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco\\',
    description: 'Five traditions mapped by region and lineage. Gnawa trance, Andalusi nuba, Amazigh ahwash, Chaabi protest, Raï rebellion. Instruments, artists, rituals.',
    url: 'https://dancingwiththelions.com/data/musical-traditions',
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