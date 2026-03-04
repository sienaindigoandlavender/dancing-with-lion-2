import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Gemstone Without a Mine — Libyan Desert Glass | Dancing with Lions',
  description: 'Libyan Desert Glass: 29 million years old, 98% pure silica, 6,500 km² strewn field, zero confirmed source craters. Tutankhamun wore one. The geology of the rarest natural glass on Earth.',
  openGraph: {
    title: 'The Gemstone Without a Mine | Dancing with Lions',
    description: 'Module 134: Libyan Desert Glass. 29Ma, 98% SiO₂, zero craters. The geological mystery inside Tutankhamun\'s pectoral.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-gemstone-without-a-mine' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Gemstone Without a Mine — Libyan Desert Glass',
    description: 'Libyan Desert Glass: 29 million years, 98% silica purity, 6500km² strewn field. Impact or airburst? The geological mystery Tutankhamun carried.',
    url: 'https://dancingwiththelions.com/data/the-gemstone-without-a-mine',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geological Intelligence',
    keywords: 'Libyan Desert Glass, Tutankhamun, Egypt, Libya, geology, impact, silica',
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
