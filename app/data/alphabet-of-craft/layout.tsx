import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Alphabet of Craft — Craft & Textiles | Dancing with Lions',
  description: 'Morocco\'s craft traditions from A to Z. Each letter, a material. Each material, a region. The alphabet of making.',
  openGraph: {
    title: 'The Moroccan Alphabet of Craft | Dancing with Lions',
    description: 'Morocco\'s craft traditions from A to Z. Each letter, a material. Each material, a region. The alphabet of making.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/alphabet-of-craft' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Moroccan Alphabet of Craft — Craft & Textiles | Dancing with Lions',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/alphabet-of-craft',
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