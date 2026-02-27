import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Africa Rising — Economy & Trade | Dancing with Lions',
  description: 'Morocco ranked among 54 African nations. Bump chart showing competitiveness across GDP, tourism, infrastructure, education, and investment.',
  openGraph: {
    title: 'Africa Rising | Dancing with Lions',
    description: 'Morocco ranked among 54 African nations. Bump chart showing competitiveness across GDP, tourism, infrastructure, education, and investment.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/africa-rising' },
}

export default function AfricaRisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
