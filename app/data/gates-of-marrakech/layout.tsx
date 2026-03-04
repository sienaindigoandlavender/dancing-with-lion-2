import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 19 Gates of Marrakech — Architecture & Design | Dancing with Lions',
  description: 'The gates and walls of the Marrakech medina. Each bab mapped with its history, construction date, and role in the city defence.',
  openGraph: {
    title: 'The 19 Gates of Marrakech | Dancing with Lions',
    description: 'The gates and walls of the Marrakech medina. Each bab mapped with its history, construction date, and role in the city defence.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/gates-of-marrakech' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The 19 Gates of Marrakech',
    description: 'The gates and walls of the Marrakech medina. Each bab mapped with its history, construction date, and role in the city defence.',
    url: 'https://dancingwiththelions.com/data/gates-of-marrakech',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Architecture & Design',
    keywords: 'gates, bab, Marrakech, medina, walls, ramparts, Almohad, urban',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 061 — The 19 Gates of Marrakech',
    description: 'The gates and walls of the Marrakech medina. Each bab mapped with its history, construction date, and role in the city defence.',
    url: 'https://dancingwiththelions.com/data/gates-of-marrakech',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['gates', 'bab', 'Marrakech', 'medina', 'walls', 'ramparts', 'Almohad', 'urban'],
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