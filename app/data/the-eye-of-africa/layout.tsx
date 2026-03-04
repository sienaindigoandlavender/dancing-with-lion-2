import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Eye of Africa — Richat Structure, Mauritania | Dancing with Lions',
  description: 'The Richat Structure: 40 kilometres wide, 100 million years old, and still unexplained. Geological data, formation hypotheses, and the African Humid Period connection.',
  openGraph: {
    title: 'The Eye of Africa — Richat Structure | Dancing with Lions',
    description: 'Module 133: The Richat Structure, Mauritania. 40km diameter, 100Ma age, zero confirmed craters. The largest geological mystery in the Sahara.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/the-eye-of-africa' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Eye of Africa — Richat Structure, Mauritania',
    description: 'The Richat Structure: 40 kilometres wide, 100 million years old. Geological data, ring dike formations, carbonatite intrusions, and formation hypotheses.',
    url: 'https://dancingwiththelions.com/data/the-eye-of-africa',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geological Intelligence',
    keywords: 'Richat Structure, Eye of Africa, Mauritania, Sahara, geology, impact crater',
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
