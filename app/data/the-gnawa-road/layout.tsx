import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Gnawa Road — From West Africa to Morocco to the World — Dancing with Lions",
  description: "Trans-Saharan slavery. Guembri. Seven spirit colours. Lila ceremony. Maalem lineages. The road from Timbuktu to Essaouira — and its parallels in Haiti, Brazil, Tunisia, and Nigeria.",
  openGraph: {
    title: "The Gnawa Road — Dancing with Lions",
    description: "One spiritual technology — music-driven possession trance — left West Africa through forced migration and produced distinct traditions on three continents. Gnawa is one branch.",
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Gnawa Road',
    description: 'From West Africa to Morocco to the world. Trans-Saharan slave routes. Guembri. Seven spirit colours. Lila ceremony. Maalem lineages. Source kingdoms. The diaspora: Stambali, Bori, Vodou, Candomblé, Santería — one root, many branches.',
    url: 'https://dancingwiththelions.com/data/the-gnawa-road',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Sacred & Spiritual',
    keywords: 'Gnawa, Gnaoua, maalem, guembri, sintir, qraqeb, lila, derdeba',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 120 — The Gnawa Road',
    description: 'From West Africa to Morocco to the world. Trans-Saharan slave routes. Guembri. Seven spirit colours. Lila ceremony. Maalem lineages. Source kingdoms. The diaspora: Stambali, Bori, Vodou, Candomblé, Santería — one root, many branches.',
    url: 'https://dancingwiththelions.com/data/the-gnawa-road',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["Gnawa", "Gnaoua", "maalem", "guembri", "sintir", "qraqeb", "lila", "derdeba"],
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