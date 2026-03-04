import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ungovernable Pattern — Why Peoples Who Refuse Empires Keep Inventing the Same Structure | Dancing with Lions',
  description: 'Amazigh. Kurds. Mongols. Haudenosaunee. Sámi. Pashtun. Mapuche. Roma. Tuareg. Nine peoples across five continents who never built centralised states — and independently invented the same political architecture: tribal confederations, rotating leadership, customary law, decentralised governance. Not a connection. Convergent political evolution. The terrain that resists empires produces the same answer every time.',
  openGraph: {
    title: 'The Ungovernable Pattern — Dancing with Lions',
    description: 'Nine peoples, five continents, one political architecture. Why the peoples who refuse empires keep inventing the same governance structure.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-ungovernable-pattern' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Ungovernable Pattern',
    description: 'Nine peoples across five continents who never built centralised states — Amazigh, Kurds, Mongols, Haudenosaunee, Sámi, Pashtun, Mapuche, Roma, Tuareg — and independently invented the same political architecture: assembly governance, rotating leadership, customary law, confederati',
    url: 'https://dancingwiththelions.com/data/the-ungovernable-pattern',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'governance, assembly, jemaa, jirga, kurultai, Grand Council, siida, Kris',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 128 — The Ungovernable Pattern',
    description: 'Nine peoples across five continents who never built centralised states — Amazigh, Kurds, Mongols, Haudenosaunee, Sámi, Pashtun, Mapuche, Roma, Tuareg — and independently invented the same political architecture: assembly governance, rotating leadership, customary law, confederati',
    url: 'https://dancingwiththelions.com/data/the-ungovernable-pattern',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "governance, assembly, jemaa, jirga, kurultai, Grand Council, siida, Kris",
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