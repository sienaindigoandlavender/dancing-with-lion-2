import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Tanneries — 900 Years of Leather in Fez | Dancing with Lions',
  description: 'Chouara tannery. 1,200 stone basins. 500 master craftsmen. Natural dyes, manual process, medieval methods. The craft, the cost, the colour.',
  openGraph: {
    title: 'The Tanneries | Dancing with Lions',
    description: 'Fez Chouara. 86 workshops became 3. The leather that dressed the Islamic world.',
    siteName: 'Dancing with Lions',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Tanneries',
    description: 'Fez Chouara. 900 years of leather. 1,200 basins, pigeon dung, natural dyes. Process, labour, the 86 that became 3.',
    url: 'https://dancingwiththelions.com/data/tanneries',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Craft & Textiles',
    keywords: 'tannery, Chouara, Fez, Fes, leather, dye, indigo, poppy',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 036 — The Tanneries',
    description: 'Fez Chouara. 900 years of leather. 1,200 basins, pigeon dung, natural dyes. Process, labour, the 86 that became 3.',
    url: 'https://dancingwiththelions.com/data/tanneries',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['tannery', 'Chouara', 'Fez', 'Fes', 'leather', 'dye', 'indigo', 'poppy'],
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