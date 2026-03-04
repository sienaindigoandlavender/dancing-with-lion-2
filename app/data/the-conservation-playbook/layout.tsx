import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Conservation Playbook — Five Mechanisms, Ten Models, Four Success Stories | Dancing with Lions',
  description: 'Every working conservation programme in Africa shares the same structural DNA. Every failure is missing the same pieces. Rwanda gorillas, Namibia conservancies, Lion Guardians, Gorongosa restoration, African Parks network — scored, compared, and mapped. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Conservation Playbook',
    description: 'The field guide to what actually works in African conservation — and why it has not been replicated. Five mechanisms (community ownership, direct economic benefit, professional management, cultural integration, governance). Ten models scored against all five: Rwanda gorilla permi',
    url: 'https://dancingwiththelions.com/data/the-conservation-playbook',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'conservation, playbook, model, mechanism, Rwanda, Namibia, Lion Guardians, Gorongosa',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 150 — The Conservation Playbook',
    description: 'The field guide to what actually works in African conservation — and why it has not been replicated. Five mechanisms (community ownership, direct economic benefit, professional management, cultural integration, governance). Ten models scored against all five: Rwanda gorilla permi',
    url: 'https://dancingwiththelions.com/data/the-conservation-playbook',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "conservation, playbook, model, mechanism, Rwanda, Namibia, Lion Guardians, Gorongosa",
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