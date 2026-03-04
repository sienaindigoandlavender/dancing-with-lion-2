import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Demographic Dividend — 1 in 4 Humans Will Be African by 2050 | Dancing with Lions',
  description: 'Africa\'s median age is 19.3. Population doubles to 2.5B by 2050. By 2035, more young Africans enter the workforce than the rest of the world combined. Lagos reaches 88M by 2100. Only 10 of 54 countries in dividend window. Dividend or time bomb? Investment-grade demographic intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Demographic Dividend',
    description: 'By 2050, one in four humans will be African. Median age 19.3. Population doubles from 1.53B to 2.5B. By 2035, more young Africans enter the workforce than the rest of the world combined. Lagos 200,000 (1960) → 88 million (2100). Only 10 of 54 countries in demographic window. Nige',
    url: 'https://dancingwiththelions.com/data/the-demographic-dividend',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'demographics, population, youth, median age, fertility, dividend, time bomb, megacity',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 155 — The Demographic Dividend',
    description: 'By 2050, one in four humans will be African. Median age 19.3. Population doubles from 1.53B to 2.5B. By 2035, more young Africans enter the workforce than the rest of the world combined. Lagos 200,000 (1960) → 88 million (2100). Only 10 of 54 countries in demographic window. Nige',
    url: 'https://dancingwiththelions.com/data/the-demographic-dividend',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["demographics", "population", "youth", "median age", "fertility", "dividend", "time bomb", "megacity"],
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