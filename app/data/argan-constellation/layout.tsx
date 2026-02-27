import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Argan Constellation — Economy & Trade | Dancing with Lions',
  description: 'Argan oil extraction: every manual step mapped. The labour, the cooperatives, the women. Sustainability and the argan triangle.',
  openGraph: {
    title: 'The Argan Constellation | Dancing with Lions',
    description: 'Argan oil extraction: every manual step mapped. The labour, the cooperatives, the women. Sustainability and the argan triangle.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/argan-constellation' },
}

export default function ArganConstellationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
