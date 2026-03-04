import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Blood Gold — Wagner Group & Africa Corps Operations | Dancing with Lions',
  description: '7 countries. $2.5B+ in gold. 1,800+ civilians killed. Zero taxes paid. The economics of Russian paramilitary extraction in Africa. Structured intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Blood Gold',
    description: 'Wagner Group and Africa Corps operations across 7 African countries — Mali, CAR, Libya, Sudan, Burkina Faso, Niger, Mozambique. $2.5B+ in gold extracted. 1,800+ civilians killed. 0% tax paid to host governments. Operations database, gold extraction economics, ACLED civilian targe',
    url: 'https://dancingwiththelions.com/data/the-blood-gold',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Security & Conflict Intelligence',
    keywords: 'Wagner, Wagner Group, Africa Corps, Russia, Prigozhin, gold, Mali, CAR',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 139 — The Blood Gold',
    description: 'Wagner Group and Africa Corps operations across 7 African countries — Mali, CAR, Libya, Sudan, Burkina Faso, Niger, Mozambique. $2.5B+ in gold extracted. 1,800+ civilians killed. 0% tax paid to host governments. Operations database, gold extraction economics, ACLED civilian targe',
    url: 'https://dancingwiththelions.com/data/the-blood-gold',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "Wagner, Wagner Group, Africa Corps, Russia, Prigozhin, gold, Mali, CAR",
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