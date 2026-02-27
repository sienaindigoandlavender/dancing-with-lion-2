import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Jewish Atlas — Sacred & Spiritual | Dancing with Lions',
  description: 'Jewish Morocco. The Toshavim and Megorashim. Mellahs, synagogues, cemeteries, saints. 250,000 Jews in 1948. Fewer than 2,000 today.',
  openGraph: {
    title: 'The Jewish Atlas | Dancing with Lions',
    description: 'Jewish Morocco. The Toshavim and Megorashim. Mellahs, synagogues, cemeteries, saints. 250,000 Jews in 1948. Fewer than 2,000 today.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/jewish-atlas' },
}

export default function JewishAtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
