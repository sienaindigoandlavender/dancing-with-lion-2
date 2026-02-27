import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jewish Heritage in Morocco — Mellahs, Synagogues, the Departure | Dancing with Lions',
  description: '265,000 in 1948. ~1,000 in 2025. 2,000 years of Jewish life in Morocco. Mellahs, synagogues, cemeteries, Operation Yachin, the legacy that stayed.',
  openGraph: {
    title: 'Jewish Heritage in Morocco | Dancing with Lions',
    description: 'The 250,000 who left. The legacy that stayed. 110 synagogues restored.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/jewish-heritage' },
}

export default function JewishHeritageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
