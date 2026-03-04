import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Seven Saints of Marrakech — Sacred & Spiritual | Dancing with Lions',
  description: 'Sab\'atou Rijāl — the seven patron saints of Marrakech. The ziyara pilgrimage circuit mapped. Sufi history and sacred sites.',
  openGraph: {
    title: 'The Seven Saints of Marrakech | Dancing with Lions',
    description: 'Sab\'atou Rijāl — the seven patron saints of Marrakech. The ziyara pilgrimage circuit mapped. Sufi history and sacred sites.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/seven-saints' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Seven Saints of Marrakech — Sacred & Spiritual | Dancing with Lions',
    description: 'Sab\\',
    url: 'https://dancingwiththelions.com/data/seven-saints',
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