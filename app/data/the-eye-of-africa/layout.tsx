import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Eye of Africa — The Richat Structure | Dancing with Lions',
  description: 'The Richat Structure is a 40-kilometre geological dome in the Mauritanian Sahara, 100 million years old. Satellite imagery, geological anatomy, Atlantis hypothesis examined, and timeline. IUGS Geological Heritage Site.',
  openGraph: {
    title: 'The Eye of Africa — The Richat Structure',
    description: '100 million years. 40 kilometres. One question. The Richat Structure mapped, measured, and examined.',
    type: 'article',
    url: 'https://dancingwithlions.com/data/the-eye-of-africa',
  },
  keywords: [
    'Richat Structure', 'Eye of Africa', 'Eye of Sahara', 'Mauritania', 'Atlantis',
    'geological dome', 'Cretaceous', 'satellite', 'concentric rings', 'carbonatite',
    'kimberlite', 'gabbro', 'quartzite', 'IUGS', 'Geological Heritage Site',
    'Plato', 'Green Sahara', 'Acheulean', 'NASA', 'Adrar Plateau',
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
