import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Poaching Economics — A Ranger Earns $200. A Poacher Earns $5,000. | Dancing with Lions',
  description: 'The labour market of wildlife crime. Five-level price chain from poacher to consumer. Rhino horn at $60,000/kg — more valuable than gold. The salary gap that drives recruitment. Why $74M in enforcement failed at Kruger. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Poaching Economics',
    description: 'A ranger earns $200 a month. A poacher earns $5,000 for one rhino horn. The syndicate captures 90-95% of value. The consumer pays $60,000/kg — more than gold. Four visualizations: five-level price ladder (poacher to consumer, $600 to $400,000/kg), salary gap bars (ranger $200/mo ',
    url: 'https://dancingwiththelions.com/data/the-poaching-economics',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'poaching, economics, ranger, salary, poverty, inequality, rhino horn, ivory',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 153 — The Poaching Economics',
    description: 'A ranger earns $200 a month. A poacher earns $5,000 for one rhino horn. The syndicate captures 90-95% of value. The consumer pays $60,000/kg — more than gold. Four visualizations: five-level price ladder (poacher to consumer, $600 to $400,000/kg), salary gap bars (ranger $200/mo ',
    url: 'https://dancingwiththelions.com/data/the-poaching-economics',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "poaching, economics, ranger, salary, poverty, inequality, rhino horn, ivory",
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