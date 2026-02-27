import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ottoman Empire in North Africa — History | Dancing with Lions',
  description: 'Why Morocco was the only North African country never conquered by the Ottomans. Ottoman territories, cities, and the Moroccan exception.',
  openGraph: {
    title: 'The Ottoman Empire in North Africa | Dancing with Lions',
    description: 'Why Morocco was the only North African country never conquered by the Ottomans. Ottoman territories, cities, and the Moroccan exception.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/ottoman-north-africa' },
}

export default function OttomanNorthAfricaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
