import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Shadow State — Al-Shabaab, IS Somalia & the Horn of Africa | Dancing with Lions',
  description: '$200M+/year revenue. 7,000-12,000 fighters. Within 40km of Mogadishu. IS Somalia is ISIS global financial hub. Structured intelligence by Dancing with Lions.',
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Shadow State — Al-Shabaab, IS Somalia & the Horn of Africa | Dancing with Lions',
    description: '$200M+/year revenue. 7,000-12,000 fighters. Within 40km of Mogadishu. IS Somalia is ISIS global financial hub. Structured intelligence by Dancing with Lions.',
    url: 'https://dancingwiththelions.com/data/the-shadow-state',
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