import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Colour Index — Architecture & Design | Dancing with Lions',
  description: 'Morocco in pigments. Majorelle blue, saffron yellow, Tamegroute green, henna red. The cultural meaning of every colour mapped to its source.',
  openGraph: {
    title: 'The Colour Index | Dancing with Lions',
    description: 'Morocco in pigments. Majorelle blue, saffron yellow, Tamegroute green, henna red. The cultural meaning of every colour mapped to its source.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/colour-index' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Colour Index',
    description: 'Morocco in pigments. Majorelle blue, saffron yellow, Tamegroute green, henna red. The cultural meaning of every colour mapped to its source.',
    url: 'https://dancingwiththelions.com/data/colour-index',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'colour, color, pigment, Majorelle blue, saffron, Tamegroute green, henna, indigo',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 079 — The Colour Index',
    description: 'Morocco in pigments. Majorelle blue, saffron yellow, Tamegroute green, henna red. The cultural meaning of every colour mapped to its source.',
    url: 'https://dancingwiththelions.com/data/colour-index',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['colour', 'color', 'pigment', 'Majorelle blue', 'saffron', 'Tamegroute green', 'henna', 'indigo'],
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      {children}
    </>
  )
}