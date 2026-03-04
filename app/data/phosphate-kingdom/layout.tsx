import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Phosphate Kingdom — Morocco\'s Geological Empire | Dancing with Lions',
  description: 'Morocco holds 70% of world phosphate reserves. OCP Group, Khouribga mines, Jorf Lasfar processing, global fertilizer flows. $9.76B revenue. The geology that feeds the planet.',
  openGraph: {
    title: 'The Phosphate Kingdom | Dancing with Lions',
    description: '5 mines, 2 processing hubs, 50 billion tonnes of reserves. How Morocco controls the mineral that feeds the world.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/phosphate-kingdom' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Phosphate Kingdom',
    description: 'Morocco holds 70% of world phosphate reserves. OCP Group, Khouribga mines, Jorf Lasfar processing, global fertilizer flows.',
    url: 'https://dancingwiththelions.com/data/phosphate-kingdom',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Economy & Trade',
    keywords: 'phosphate, ocp, mining, khouribga, fertilizer, jorf lasfar, industry, export',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 012 — The Phosphate Kingdom',
    description: 'Morocco holds 70% of world phosphate reserves. OCP Group, Khouribga mines, Jorf Lasfar processing, global fertilizer flows.',
    url: 'https://dancingwiththelions.com/data/phosphate-kingdom',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["phosphate", "ocp", "mining", "khouribga", "fertilizer", "jorf lasfar", "industry", "export"],
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