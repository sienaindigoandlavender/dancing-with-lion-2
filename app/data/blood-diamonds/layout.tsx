import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blood Diamonds — Conflict, Death & the Kimberley Process Failure | Dancing with Lions',
  description: '4 million dead. Wars in Sierra Leone, Angola, DRC, CAR. The Kimberley Process was designed to produce a statistic, not solve a problem. Conflict diamonds persist. The human cost of the world\'s most marketed stone.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blood Diamonds',
    description: 'Visual intelligence module with D3 interactive charts. In 2008, the Zimbabwean army killed 200+ miners at Marange. The Kimberley Process said it didnt count. Death toll bars on logarithmic scale — DRC at 6M+ breaks the chart. ACLED grouped columns: conflict events vs fatalities a',
    url: 'https://dancingwiththelions.com/data/blood-diamonds',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Security & Conflict Intelligence',
    keywords: 'blood diamond, conflict diamond, Kimberley Process, KP, Sierra Leone, RUF, Angola, UNITA',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 145 — Blood Diamonds',
    description: 'Visual intelligence module with D3 interactive charts. In 2008, the Zimbabwean army killed 200+ miners at Marange. The Kimberley Process said it didnt count. Death toll bars on logarithmic scale — DRC at 6M+ breaks the chart. ACLED grouped columns: conflict events vs fatalities a',
    url: 'https://dancingwiththelions.com/data/blood-diamonds',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["blood diamond", "conflict diamond", "Kimberley Process", "KP", "Sierra Leone", "RUF", "Angola", "UNITA"],
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