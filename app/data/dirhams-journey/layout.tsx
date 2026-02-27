import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Dirham\ — Economy & Trade | Dancing with Lions',
  description: 'The Moroccan dirham through history. Currency, exchange rates, purchasing power, and economic transformation.',
  openGraph: {
    title: 'The Dirham\ | Dancing with Lions',
    description: 'The Moroccan dirham through history. Currency, exchange rates, purchasing power, and economic transformation.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/dirhams-journey' },
}

export default function DirhamsJourneyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
