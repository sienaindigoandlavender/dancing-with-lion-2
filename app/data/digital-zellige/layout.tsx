import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Zellige — Architecture & Design | Dancing with Lions',
  description: 'Zellige in the digital age. Geometric patterns, mathematical principles, and the American pivot towards Moroccan tilework.',
  openGraph: {
    title: 'Digital Zellige | Dancing with Lions',
    description: 'Zellige in the digital age. Geometric patterns, mathematical principles, and the American pivot towards Moroccan tilework.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/digital-zellige' },
}

export default function DigitalZelligeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
