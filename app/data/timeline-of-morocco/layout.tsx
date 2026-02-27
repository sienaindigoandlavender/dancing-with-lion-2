import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline of Morocco — History | Dancing with Lions',
  description: 'The complete timeline of Morocco. From Jebel Irhoud to the present. Every dynasty, every turning point, every layer.',
  openGraph: {
    title: 'Timeline of Morocco | Dancing with Lions',
    description: 'The complete timeline of Morocco. From Jebel Irhoud to the present. Every dynasty, every turning point, every layer.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/timeline-of-morocco' },
}

export default function TimelineOfMoroccoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
