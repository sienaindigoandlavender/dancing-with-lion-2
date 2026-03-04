import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather Portraits — Living Data | Dancing with Lions',
  description: 'Live weather for 8 Moroccan cities. Open-Meteo integration, NASA satellite imagery toggle.',
  openGraph: {
    title: 'Weather Portraits | Dancing with Lions',
    description: 'Live weather for 8 Moroccan cities. Open-Meteo integration, NASA satellite imagery toggle.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/weather-portraits' },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Weather Portraits',
    description: 'Live weather for 8 Moroccan cities. Open-Meteo integration, NASA satellite imagery toggle.',
    url: 'https://dancingwiththelions.com/data/weather-portraits',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Living Data',
    keywords: 'weather, temperature, climate, satellite, nasa, live, marrakech, casablanca',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 041 — Weather Portraits',
    description: 'Live weather for 8 Moroccan cities. Open-Meteo integration, NASA satellite imagery toggle.',
    url: 'https://dancingwiththelions.com/data/weather-portraits',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    ["weather", "temperature", "climate", "satellite", "nasa", "live", "marrakech", "casablanca"],
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