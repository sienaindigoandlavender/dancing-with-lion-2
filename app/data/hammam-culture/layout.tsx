import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hammam Culture — The Social Architecture of the Bathhouse | Dancing with Lions',
  description: 'Three rooms, six steps, five neighbourhood elements. How the Moroccan hammam works, what it means, and why it persists.',
  openGraph: {
    title: 'Hammam Culture | Dancing with Lions',
    description: 'The social architecture of the Moroccan bathhouse. Design, ritual, products, neighbourhood role.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/hammam-culture' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hammam Culture',
    description: 'The social architecture of the Moroccan bathhouse. Three rooms, six steps, five neighbourhood elements. Design, ritual, products.',
    url: 'https://dancingwiththelions.com/data/hammam-culture',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Identity',
    keywords: 'hammam, bathhouse, savon beldi, black soap, kessa, ghassoul, argan oil, ritual',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 030 — Hammam Culture',
    description: 'The social architecture of the Moroccan bathhouse. Three rooms, six steps, five neighbourhood elements. Design, ritual, products.',
    url: 'https://dancingwiththelions.com/data/hammam-culture',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["hammam", "bathhouse", "savon beldi", "black soap", "kessa", "ghassoul", "argan oil", "ritual"],
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