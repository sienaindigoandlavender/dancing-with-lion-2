import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Tech Leapfrog — 1.1 Billion Mobile Users. $1.1 Trillion in Transactions. Nine Unicorns. | Dancing with Lions',
  description: 'Africa skipped landlines and went straight to mobile. Skipped banks and went straight to M-Pesa. $1.1T in mobile payments. 9 unicorns (8 fintech). Flutterwave $3B, OPay $2B, Wave $1.7B. VC peaked $4.9B then corrected. Lagos, Nairobi, Cape Town, Cairo, Kigali. Investment-grade tech intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Tech Leapfrog',
    description: 'Africa skipped landlines and went straight to mobile. Skipped bank branches and went straight to M-Pesa. 1.1 billion mobile users. $1.1 trillion in mobile transactions. Nine unicorns (8 fintech). Flutterwave $3B, OPay $2B, Wave $1.7B. VC peaked $4.9B (2021) then corrected 55% to ',
    url: 'https://dancingwiththelions.com/data/the-tech-leapfrog',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'tech, fintech, leapfrog, mobile, M-Pesa, Flutterwave, OPay, Wave',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 156 — The Tech Leapfrog',
    description: 'Africa skipped landlines and went straight to mobile. Skipped bank branches and went straight to M-Pesa. 1.1 billion mobile users. $1.1 trillion in mobile transactions. Nine unicorns (8 fintech). Flutterwave $3B, OPay $2B, Wave $1.7B. VC peaked $4.9B (2021) then corrected 55% to ',
    url: 'https://dancingwiththelions.com/data/the-tech-leapfrog',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["tech", "fintech", "leapfrog", "mobile", "M-Pesa", "Flutterwave", "OPay", "Wave"],
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