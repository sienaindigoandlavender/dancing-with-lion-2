import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The High-Speed Horizon — Infrastructure | Dancing with Lions',
  description: 'Morocco\'s high-speed rail network. Al Boraq and the melting map of travel times. How TGV shrinks distance.',
  openGraph: {
    title: 'The High-Speed Horizon | Dancing with Lions',
    description: 'Morocco\'s high-speed rail network. Al Boraq and the melting map of travel times. How TGV shrinks distance.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/high-speed-horizon' },
}

export default function HighSpeedHorizonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
