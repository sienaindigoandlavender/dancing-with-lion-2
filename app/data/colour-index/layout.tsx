import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Colour Index — Architecture & Design | Dancing with Lions',
  description: 'Morocco in pigments. Majorelle blue, saffron yellow, Tamegroute green, henna red. The cultural meaning of every colour mapped to its source.',
  openGraph: {
    title: 'The Colour Index | Dancing with Lions',
    description: 'Morocco in pigments. Majorelle blue, saffron yellow, Tamegroute green, henna red. The cultural meaning of every colour mapped to its source.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/colour-index' },
}

export default function ColourIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
