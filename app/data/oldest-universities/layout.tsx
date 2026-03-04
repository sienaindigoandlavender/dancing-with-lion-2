import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The World\'s Oldest Universities — Al-Qarawiyyin, Ibn Yusuf, Bologna, Oxford | Dancing with Lions',
  description: 'Morocco\'s claim to the oldest continuously operating university. Al-Qarawiyyin (859 CE). Founded by Fatima al-Fihri. 229 years before Bologna. 4,000+ manuscripts.',
  openGraph: {
    title: 'The World\'s Oldest Universities | Dancing with Lions',
    description: 'Al-Qarawiyyin. 859 CE. Founded by a woman. 229 years before Bologna, 237 before Oxford.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/oldest-universities' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The World\\',
    description: 'Morocco\\',
    url: 'https://dancingwiththelions.com/data/oldest-universities',
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