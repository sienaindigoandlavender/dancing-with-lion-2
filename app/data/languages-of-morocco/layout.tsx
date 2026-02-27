import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Languages of Morocco — Culture & Identity | Dancing with Lions',
  description: 'Darija, Tashelhit, Tamazight, Tarifit, French, Spanish, English. The linguistic landscape of Morocco mapped.',
  openGraph: {
    title: 'The Languages of Morocco | Dancing with Lions',
    description: 'Darija, Tashelhit, Tamazight, Tarifit, French, Spanish, English. The linguistic landscape of Morocco mapped.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/languages-of-morocco' },
}

export default function LanguagesOfMoroccoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
