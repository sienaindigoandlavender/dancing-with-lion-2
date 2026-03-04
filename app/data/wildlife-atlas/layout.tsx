import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Wildlife Atlas — Geography & Environment | Dancing with Lions',
  description: 'Morocco\'s wildlife mapped. Endangered species, national parks, habitats. From Barbary macaque to Saharan cheetah.',
  openGraph: {
    title: 'The Wildlife Atlas | Dancing with Lions',
    description: 'Morocco\'s wildlife mapped. Endangered species, national parks, habitats. From Barbary macaque to Saharan cheetah.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/wildlife-atlas' },
}

export default function WildlifeAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Wildlife Atlas — Geography & Environment | Dancing with Lions',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/wildlife-atlas',
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