import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not All Desert Is Sand — Erg, Reg, Hammada, Oued | Dancing with Lions',
  description: 'Only 25% of the Sahara is sand. Four desert types: erg (dune sea), reg (gravel plain), hammada (rocky plateau), oued (dry valley). Morocco\'s Saharan margin.',
  openGraph: {
    title: 'Not All Desert Is Sand | Dancing with Lions',
    description: 'Erg, reg, hammada, oued. The four desert types. Only 25% of the Sahara is sand.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/not-all-desert-is-sand' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Not All Desert Is Sand',
    description: 'Erg, reg, hammada, oued. Four desert types. Only 25% of the Sahara is sand. Erg Chebbi 150m dunes.',
    url: 'https://dancingwiththelions.com/data/not-all-desert-is-sand',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Geography & Environment',
    keywords: 'desert, Sahara, erg, reg, hammada, oued, wadi, sand',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 047 — Not All Desert Is Sand',
    description: 'Erg, reg, hammada, oued. Four desert types. Only 25% of the Sahara is sand. Erg Chebbi 150m dunes.',
    url: 'https://dancingwiththelions.com/data/not-all-desert-is-sand',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["desert", "Sahara", "erg", "reg", "hammada", "oued", "wadi", "sand"],
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