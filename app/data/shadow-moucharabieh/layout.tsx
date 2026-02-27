import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Shadow of the Moucharabieh — Architecture & Design | Dancing with Lions',
  description: 'The moucharabieh — carved wooden screens that filter light and cool air. Traditional passive cooling vs modern heat. Architecture as climate control.',
  openGraph: {
    title: 'The Shadow of the Moucharabieh | Dancing with Lions',
    description: 'The moucharabieh — carved wooden screens that filter light and cool air. Traditional passive cooling vs modern heat. Architecture as climate control.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/shadow-moucharabieh' },
}

export default function ShadowMoucharabiehLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
