import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Stork's Eye View — White Stork Migration in Morocco | Dancing with Lions",
  description: "White storks nest on every minaret in Morocco. Migration corridors, nesting site data, population trends, and the cultural geography of Ciconia ciconia in the Maghreb.",
  openGraph: {
    title: "Stork's Eye View | Dancing with Lions",
    description: "White storks and Morocco. Migration corridors, nesting data, cultural geography.",
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/storks-eye-view' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Stork's Eye View — White Stork Migration in Morocco",
    description: "White storks nest on minarets across Morocco. Migration corridors, nesting site data, and population trends.",
    url: 'https://dancingwiththelions.com/data/storks-eye-view',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  )
}
