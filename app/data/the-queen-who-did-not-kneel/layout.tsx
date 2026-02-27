import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Queen Who Did Not Kneel — Bilqis and the Geopolitics Behind the Visit | Dancing with Lions',
  description: 'Bilqis ruled the wealthiest trade monopoly on earth. She controlled the only product the ancient world could not live without. She did not go to Jerusalem because she was smitten. She went because Solomon was building a fleet that would destroy her economy.',
  openGraph: {
    title: 'The Queen Who Did Not Kneel',
    description: 'Bilqis, the Incense Road, and the geopolitics behind the visit to Solomon.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-queen-who-did-not-kneel' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
