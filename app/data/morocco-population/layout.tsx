import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Population Density — Dancing with Lions',
  description: 'Interactive visualization of Morocco population density by region. 2024 census data. Sources: HCP Morocco, 2024 Census.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/morocco-population' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Morocco Population Density — Dancing with Lions',
    description: 'Interactive visualization of Morocco population density by region. 2024 census data. Sources: HCP Morocco, 2024 Census.',
    url: 'https://dancingwiththelions.com/data/morocco-population',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}