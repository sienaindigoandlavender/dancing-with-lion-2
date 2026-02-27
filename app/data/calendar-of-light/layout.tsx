import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Calendar of Light — Living Data | Dancing with Lions',
  description: 'Daylight hours by month across Morocco. Latitude, solar angle, golden hour. The astronomical calendar that shapes daily life.',
  openGraph: {
    title: 'The Calendar of Light | Dancing with Lions',
    description: 'Daylight hours by month across Morocco. Latitude, solar angle, golden hour. The astronomical calendar that shapes daily life.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/calendar-of-light' },
}

export default function CalendarOfLightLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
