import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Genome — Demographics & Society | Dancing with Lions',
  description: 'The genetic ancestry of Morocco. E-M81 haplogroup, Amazigh DNA, admixture analysis. What the genome reveals about 315,000 years of migration.',
  openGraph: {
    title: 'The Moroccan Genome | Dancing with Lions',
    description: 'The genetic ancestry of Morocco. E-M81 haplogroup, Amazigh DNA, admixture analysis. What the genome reveals about 315,000 years of migration.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/moroccan-genome' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Moroccan Genome',
    description: 'The genetic ancestry of Morocco. E-M81 haplogroup, Amazigh DNA, admixture analysis. What the genome reveals about 315,000 years of migration.',
    url: 'https://dancingwiththelions.com/data/moroccan-genome',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Demographics & Society',
    keywords: 'genome, DNA, genetics, E-M81, haplogroup, Amazigh, ancestry, admixture',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 092 — The Moroccan Genome',
    description: 'The genetic ancestry of Morocco. E-M81 haplogroup, Amazigh DNA, admixture analysis. What the genome reveals about 315,000 years of migration.',
    url: 'https://dancingwiththelions.com/data/moroccan-genome',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["genome", "DNA", "genetics", "E-M81", "haplogroup", "Amazigh", "ancestry", "admixture"],
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