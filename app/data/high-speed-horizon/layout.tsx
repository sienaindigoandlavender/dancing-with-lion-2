import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The High-Speed Horizon — Infrastructure | Dancing with Lions',
  description: 'Morocco\'s high-speed rail network. Al Boraq and the melting map of travel times. How TGV shrinks distance.',
  openGraph: {
    title: 'The High-Speed Horizon | Dancing with Lions',
    description: 'Morocco\'s high-speed rail network. Al Boraq and the melting map of travel times. How TGV shrinks distance.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/high-speed-horizon' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The High-Speed Horizon — Infrastructure | Dancing with Lions',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/high-speed-horizon',
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