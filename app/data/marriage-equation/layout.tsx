import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Marriage Equation — Demographics & Society | Dancing with Lions',
  description: 'Marriage and divorce in Morocco. Rates, trends, regional data. The shifting equation of Moroccan family life.',
  openGraph: {
    title: 'The Marriage Equation | Dancing with Lions',
    description: 'Marriage and divorce in Morocco. Rates, trends, regional data. The shifting equation of Moroccan family life.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/marriage-equation' },
}

export default function MarriageEquationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
