import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Education Gap — 100 Million Children Out of School. But the Fastest-Growing University System on Earth. | Dancing with Lions',
  description: 'Africa has 100M+ children out of school yet fastest university expansion globally. Coding academies, remote work, brain drain. The education paradox that shapes everything. Investment-grade education intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Education Gap',
    description: '98 million children out of school. 86% learning poverty (cannot read a simple story at age 10). 15 million teachers needed by 2030. But university enrollment tripled since 2000 (8M→24M). 700+ coding academies. $800M EdTech investment. Split paradox cards: The Gap (98M out of scho',
    url: 'https://dancingwiththelions.com/data/the-education-gap',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'education, school, literacy, learning poverty, teacher, university, coding, academy',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 163 — The Education Gap',
    description: '98 million children out of school. 86% learning poverty (cannot read a simple story at age 10). 15 million teachers needed by 2030. But university enrollment tripled since 2000 (8M→24M). 700+ coding academies. $800M EdTech investment. Split paradox cards: The Gap (98M out of scho',
    url: 'https://dancingwiththelions.com/data/the-education-gap',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["education", "school", "literacy", "learning poverty", "teacher", "university", "coding", "academy"],
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