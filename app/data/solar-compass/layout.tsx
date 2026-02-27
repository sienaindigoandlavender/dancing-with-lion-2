import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Solar Compass — Energy | Dancing with Lions',
  description: 'Noor-Ouarzazate and Morocco\'s concentrated solar power. Molten salt storage, MW output, the mechanics of solar energy in the Sahara.',
  openGraph: {
    title: 'The Solar Compass | Dancing with Lions',
    description: 'Noor-Ouarzazate and Morocco\'s concentrated solar power. Molten salt storage, MW output, the mechanics of solar energy in the Sahara.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/solar-compass' },
}

export default function SolarCompassLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
