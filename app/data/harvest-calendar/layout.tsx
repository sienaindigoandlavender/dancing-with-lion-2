import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Harvest Calendar — Living Data | Dancing with Lions',
  description: 'A living clock of Moroccan agriculture. 32 crops, auto-highlights current month, play/pause.',
  openGraph: {
    title: 'The Harvest Calendar | Dancing with Lions',
    description: 'A living clock of Moroccan agriculture. 32 crops, auto-highlights current month, play/pause.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/harvest-calendar' },
}

export default function HarvestCalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
