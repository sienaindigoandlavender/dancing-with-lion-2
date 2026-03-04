import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Shadow of the Moucharabieh — Architecture & Design | Dancing with Lions',
  description: 'The moucharabieh — carved wooden screens that filter light and cool air. Traditional passive cooling vs modern heat. Architecture as climate control.',
  openGraph: {
    title: 'The Shadow of the Moucharabieh | Dancing with Lions',
    description: 'The moucharabieh — carved wooden screens that filter light and cool air. Traditional passive cooling vs modern heat. Architecture as climate control.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/shadow-moucharabieh' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Shadow of the Moucharabieh',
    description: 'The moucharabieh — carved wooden screens that filter light and cool air. Traditional passive cooling vs modern heat. Architecture as climate control.',
    url: 'https://dancingwiththelions.com/data/shadow-moucharabieh',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'moucharabieh, mashrabiya, screen, shadow, cooling, ventilation, architecture, light',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 096 — The Shadow of the Moucharabieh',
    description: 'The moucharabieh — carved wooden screens that filter light and cool air. Traditional passive cooling vs modern heat. Architecture as climate control.',
    url: 'https://dancingwiththelions.com/data/shadow-moucharabieh',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "moucharabieh, mashrabiya, screen, shadow, cooling, ventilation, architecture, light",
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