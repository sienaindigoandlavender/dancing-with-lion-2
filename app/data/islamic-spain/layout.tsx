import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Islamic Spain — 781 Years of Al-Andalus | Dancing with Lions',
  description: 'From Tariq ibn Ziyad\'s 711 crossing to the fall of Granada in 1492. Interactive timeline and map of 781 years of Muslim rule in the Iberian Peninsula.',
  openGraph: {
    title: 'Islamic Spain — 781 Years of Al-Andalus | Dancing with Lions',
    description: 'Interactive timeline and Mapbox map: trace the conquest, golden age, and fall of Al-Andalus across 781 years of history.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/islamic-spain' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Islamic Spain — 781 Years of Al-Andalus | Dancing with Lions',
    description: 'From Tariq ibn Ziyad\\',
    url: 'https://dancingwiththelions.com/data/islamic-spain',
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