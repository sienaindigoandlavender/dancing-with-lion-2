import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bird Atlas — Geography & Environment | Dancing with Lions',
  description: 'North Africa\'s bird preservation areas and migration flyways. 27 IBAs, 3 flyways, 509 species.',
  openGraph: {
    title: 'The Bird Atlas | Dancing with Lions',
    description: 'North Africa\'s bird preservation areas and migration flyways. 27 IBAs, 3 flyways, 509 species.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/bird-atlas' },
}

export default function BirdAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Bird Atlas — Geography & Environment | Dancing with Lions',
    description: 'North Africa\\',
    url: 'https://dancingwiththelions.com/data/bird-atlas',
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