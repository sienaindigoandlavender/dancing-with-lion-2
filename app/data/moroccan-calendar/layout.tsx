import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Moroccan Calendar — Culture & Identity | Dancing with Lions',
  description: 'Three calendars in one country. Gregorian, Hijri, Amazigh. Festivals, harvests, and sacred dates mapped through the year.',
  openGraph: {
    title: 'The Moroccan Calendar | Dancing with Lions',
    description: 'Three calendars in one country. Gregorian, Hijri, Amazigh. Festivals, harvests, and sacred dates mapped through the year.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/moroccan-calendar' },
}

export default function MoroccanCalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
