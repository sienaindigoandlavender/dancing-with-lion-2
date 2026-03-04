import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Four Peaks — Geography & Environment | Dancing with Lions',
  description: 'Morocco\'s highest mountains. Toubkal, M\'Goun, Ayachi, Sirwa. Elevation profiles, geography, and scale comparison.',
  openGraph: {
    title: 'Four Peaks | Dancing with Lions',
    description: 'Morocco\'s highest mountains. Toubkal, M\'Goun, Ayachi, Sirwa. Elevation profiles, geography, and scale comparison.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/four-peaks' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Four Peaks — Geography & Environment | Dancing with Lions',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/four-peaks',
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