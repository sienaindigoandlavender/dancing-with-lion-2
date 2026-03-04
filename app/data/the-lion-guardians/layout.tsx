import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Lion Guardians — How Maasai Warriors Became Lion Protectors | Dancing with Lions',
  description: 'In 2006, the Maasai of Amboseli killed 42 lions. Today, 65+ warriors patrol 1 million acres, lion killing has dropped 99%, and the population has tripled. The idea came from the warriors themselves. Investment-grade cultural intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Lion Guardians',
    description: 'In 2006, the Maasai of Amboseli speared or poisoned 42 lions. Today, 65+ warriors patrol 1 million acres, lion killing has dropped 99%, and the population has tripled. The idea came from the warriors themselves. Founded by Dr Leela Hazzah and Dr Stephanie Dolrenry. Six visualizat',
    url: 'https://dancingwiththelions.com/data/the-lion-guardians',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Conservation Economics',
    keywords: 'Lion Guardians, Leela Hazzah, Stephanie Dolrenry, Maasai, Amboseli, Tsavo, Kenya, Tanzania',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 148 — The Lion Guardians',
    description: 'In 2006, the Maasai of Amboseli speared or poisoned 42 lions. Today, 65+ warriors patrol 1 million acres, lion killing has dropped 99%, and the population has tripled. The idea came from the warriors themselves. Founded by Dr Leela Hazzah and Dr Stephanie Dolrenry. Six visualizat',
    url: 'https://dancingwiththelions.com/data/the-lion-guardians',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: "Lion Guardians, Leela Hazzah, Stephanie Dolrenry, Maasai, Amboseli, Tsavo, Kenya, Tanzania",
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