import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Seven Saints of Marrakech — Sacred & Spiritual | Dancing with Lions',
  description: 'Sab\'atou Rijāl — the seven patron saints of Marrakech. The ziyara pilgrimage circuit mapped. Sufi history and sacred sites.',
  openGraph: {
    title: 'The Seven Saints of Marrakech | Dancing with Lions',
    description: 'Sab\'atou Rijāl — the seven patron saints of Marrakech. The ziyara pilgrimage circuit mapped. Sufi history and sacred sites.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/seven-saints' },
}

export default function SevenSaintsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
