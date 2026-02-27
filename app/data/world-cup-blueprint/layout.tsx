import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The World Cup Blueprint — Infrastructure | Dancing with Lions',
  description: 'Morocco\'s 2030 World Cup infrastructure plan. Stadium builds, hotel rooms, jobs, investment. The economic blueprint.',
  openGraph: {
    title: 'The World Cup Blueprint | Dancing with Lions',
    description: 'Morocco\'s 2030 World Cup infrastructure plan. Stadium builds, hotel rooms, jobs, investment. The economic blueprint.',
    siteName: 'Dancing with Lions',
  },
  alternates: { canonical: 'https://dancingwiththelions.com/data/world-cup-blueprint' },
}

export default function WorldCupBlueprintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
