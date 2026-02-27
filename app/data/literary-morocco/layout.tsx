import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Literary Morocco — Bowles, Burroughs, Choukri, Canetti | Dancing with Lions',
  description: '12 writers who lived, wrote, or set stories in Morocco. From Ibn Battuta to Tahar Ben Jelloun. The Interzone, the Beats, and Moroccan voices.',
  openGraph: {
    title: 'Literary Morocco | Dancing with Lions',
    description: 'Bowles, Burroughs, Choukri, Canetti, Mrabet, Genet, Eberhardt, Ben Jelloun. Morocco\'s literary geography.',
    siteName: 'Dancing with Lions',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/literary-morocco' },
}

export default function LiteraryMoroccoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
