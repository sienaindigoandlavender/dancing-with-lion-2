import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Solar Compass — Energy | Dancing with Lions',
  description: 'Noor-Ouarzazate and Morocco\'s concentrated solar power. Molten salt storage, MW output, the mechanics of solar energy in the Sahara.',
  openGraph: {
    title: 'The Solar Compass | Dancing with Lions',
    description: 'Noor-Ouarzazate and Morocco\'s concentrated solar power. Molten salt storage, MW output, the mechanics of solar energy in the Sahara.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/solar-compass' },
}

export default function SolarCompassLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Solar Compass — Energy | Dancing with Lions',
    description: 'Noor-Ouarzazate and Morocco\\',
    url: 'https://dancingwiththelions.com/data/solar-compass',
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