import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Pulse of the Medina — Urban Life | Dancing with Lions',
  description: 'The medina as a living organism. Activity patterns, foot traffic, commerce rhythms. How the old city breathes through the day.',
  openGraph: {
    title: 'The Pulse of the Medina | Dancing with Lions',
    description: 'The medina as a living organism. Activity patterns, foot traffic, commerce rhythms. How the old city breathes through the day.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/pulse-medina' },
}

export default function PulseMedinaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
