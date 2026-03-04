import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Medina Atlas — Urban Life | Dancing with Lions',
  description: 'Mapbox atlas of Morocco\'s historic medinas. Gates, fondouks, mosques, hammams, souks.',
  openGraph: {
    title: 'The Medina Atlas | Dancing with Lions',
    description: 'Mapbox atlas of Morocco\'s historic medinas. Gates, fondouks, mosques, hammams, souks.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/medina-atlas' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Medina Atlas — Urban Life | Dancing with Lions',
    description: 'Mapbox atlas of Morocco\\',
    url: 'https://dancingwiththelions.com/data/medina-atlas',
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