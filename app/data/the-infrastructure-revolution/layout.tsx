import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Infrastructure Revolution — $2.5 Trillion in Projects. Three Superpowers Competing. | Dancing with Lions',
  description: 'Africa is building more infrastructure than at any point in history. China invested $61.2B in 2025 (283% increase). The Nigeria-Morocco Pipeline races the Trans-Saharan. GERD, Lobito, Konza, Dangote. Twelve megaprojects worth $157B. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Infrastructure Revolution',
    description: 'Africa is building more infrastructure than at any point in human history. $2.5 trillion in projects planned. China invested $61.2B in 2025 — Africa became #1 BRI destination globally for the first time (283% increase). Two rival pipelines race to connect Nigerian gas to Europe: ',
    url: 'https://dancingwiththelions.com/data/the-infrastructure-revolution',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'infrastructure, Africa, megaproject, BRI, Belt Road Initiative, China, pipeline, NMGP',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 154 — The Infrastructure Revolution',
    description: 'Africa is building more infrastructure than at any point in human history. $2.5 trillion in projects planned. China invested $61.2B in 2025 — Africa became #1 BRI destination globally for the first time (283% increase). Two rival pipelines race to connect Nigerian gas to Europe: ',
    url: 'https://dancingwiththelions.com/data/the-infrastructure-revolution',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "infrastructure, Africa, megaproject, BRI, Belt Road Initiative, China, pipeline, NMGP",
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