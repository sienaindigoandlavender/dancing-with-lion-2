import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Namibia Model — The Country That Put Conservation in Its Constitution | Dancing with Lions',
  description: '86 communal conservancies. 20% of the country managed by communities. 45.6% under conservation. Elephants tripled. Desert lions returned to the Skeleton Coast. Then drought, COVID, and a cull tested everything. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Namibia Model',
    description: 'The country that put conservation in its constitution. 86 communal conservancies covering 20% of Namibia. 45.6% of the country under conservation management — third-largest continuous conservation landscape on Earth. Elephants 7,000→26,000. Desert lions returned to the Skeleton C',
    url: 'https://dancingwiththelions.com/data/the-namibia-model',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'Namibia, conservancy, communal conservancy, CBNRM, NACSO, MEFT, Torra, Khoadi-Hoas',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 149 — The Namibia Model',
    description: 'The country that put conservation in its constitution. 86 communal conservancies covering 20% of Namibia. 45.6% of the country under conservation management — third-largest continuous conservation landscape on Earth. Elephants 7,000→26,000. Desert lions returned to the Skeleton C',
    url: 'https://dancingwiththelions.com/data/the-namibia-model',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['Namibia', 'conservancy', 'communal conservancy', 'CBNRM', 'NACSO', 'MEFT', 'Torra', 'Khoadi-Hoas'],
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