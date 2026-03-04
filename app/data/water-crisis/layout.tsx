import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco\'s Water Crisis — & the Rains That Broke It | Dancing with Lions',
  description: 'Seven years of drought (2018–2025), then the rains came. Dam fill rates, basin-by-basin recovery, desalination mega-projects, and the structural crisis that remains.',
  openGraph: {
    title: 'Morocco\'s Water Crisis | Dancing with Lions',
    description: 'From 28% to 70.7% — Morocco\'s dam recovery in 12 months. But the water crisis isn\'t over.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/water-crisis' },
}

export default function WaterCrisisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco\\',
    description: 'Seven years of drought (2018–2025), then the rains came. Dam fill rates, basin-by-basin recovery, desalination mega-projects, and the structural crisis that remains.',
    url: 'https://dancingwiththelions.com/data/water-crisis',
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