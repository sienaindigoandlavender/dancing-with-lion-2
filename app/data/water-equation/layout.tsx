import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Water Equation — Geography & Environment | Dancing with Lions',
  description: 'Dam storage, aquifer depletion, river basin fill rates. The water equation Morocco must solve before 2030.',
  openGraph: {
    title: 'The Water Equation | Dancing with Lions',
    description: 'Dam storage, aquifer depletion, river basin fill rates. The water equation Morocco must solve before 2030.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/water-equation' },
}

export default function WaterEquationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
