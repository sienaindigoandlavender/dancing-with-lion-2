import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Empty Quarter — Saharan Ecology & Desert Geography | Dancing with Lions",
  description: "The Sahara is not empty. Sand dunes, rock platforms, oases, and adapted life. Climate data and the geography of North Africa's desert systems from Morocco to Egypt.",
  openGraph: {
    title: "The Empty Quarter | Dancing with Lions",
    description: "The Sahara is not empty. Desert ecology, climate data, and the geography of North Africa's desert systems.",
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-empty-quarter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "The Empty Quarter — Saharan Ecology",
    description: "The Sahara is not empty. Desert ecology, climate data, and the geography of North Africa desert systems.",
    url: 'https://dancingwiththelions.com/data/the-empty-quarter',
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
