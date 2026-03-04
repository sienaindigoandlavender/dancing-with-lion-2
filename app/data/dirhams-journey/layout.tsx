import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Dirham\ — Economy & Trade | Dancing with Lions',
  description: 'The Moroccan dirham through history. Currency, exchange rates, purchasing power, and economic transformation.',
  openGraph: {
    title: 'The Dirham\ | Dancing with Lions',
    description: 'The Moroccan dirham through history. Currency, exchange rates, purchasing power, and economic transformation.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/dirhams-journey' },
}

export default function DirhamsJourneyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Dirham\\ — Economy & Trade | Dancing with Lions',
    description: 'The Moroccan dirham through history. Currency, exchange rates, purchasing power, and economic transformation.',
    url: 'https://dancingwiththelions.com/data/dirhams-journey',
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