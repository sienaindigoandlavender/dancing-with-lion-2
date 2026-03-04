import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Anatomy of a Riad — Deconstructing the Moroccan House Form | Dancing with Lions',
  description: 'Courtyard, fountain, zellige, tadelakt, moucharabieh, cedar, gebs. 12 architectural elements, 6 climate systems, 8 vocabulary terms. How a Moroccan riad works.',
  openGraph: {
    title: 'The Anatomy of a Riad | Dancing with Lions',
    description: '12 elements, 6 passive climate systems, 0 street-facing windows. The architecture of privacy, paradise, and thermal engineering.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/anatomy-of-a-riad' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Anatomy of a Riad',
    description: 'Courtyard, fountain, zellige, tadelakt, moucharabieh, cedar, gebs. 12 elements, 6 passive climate systems, 0 street-facing windows.',
    url: 'https://dancingwiththelions.com/data/anatomy-of-a-riad',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'riad, architecture, courtyard, zellige, tadelakt, moucharabieh, cedar, medina',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 032 — The Anatomy of a Riad',
    description: 'Courtyard, fountain, zellige, tadelakt, moucharabieh, cedar, gebs. 12 elements, 6 passive climate systems, 0 street-facing windows.',
    url: 'https://dancingwiththelions.com/data/anatomy-of-a-riad',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "riad, architecture, courtyard, zellige, tadelakt, moucharabieh, cedar, medina",
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      {children}
    </>
  )
}