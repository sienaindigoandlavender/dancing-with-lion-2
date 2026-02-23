import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Gemstone Without a Mine — Libyan Desert Glass | Dancing with Lions',
  description: 'Libyan Desert Glass: 29 million years old, 98% pure silica, scattered across 6,500 km² of the Egypt-Libya border. Tutankhamun wore it. Scientists cannot find the crater. The Hypatia stone may be a comet fragment older than the Solar System.',
  openGraph: {
    title: 'The Gemstone Without a Mine — Libyan Desert Glass',
    description: '29 million years. 6,500 km². One pharaoh. Zero craters.',
    type: 'article',
    url: 'https://dancingwithlions.com/data/the-gemstone-without-a-mine',
  },
  keywords: [
    'Libyan Desert Glass', 'LDG', 'desert glass', 'impactite', 'tektite', 'silica glass',
    'Tutankhamun', 'scarab', 'pectoral', 'Egypt', 'Libya', 'Great Sand Sea', 'Gilf Kebir',
    'Hypatia stone', 'comet', 'meteorite', 'airburst', 'impact crater', 'Kebira',
    'lechatelierite', 'cristobalite', 'zirconia', 'ortho-II', 'shock metamorphism',
    'Patrick Clayton', 'Vincenzo de Michele', 'Kramers', 'Kovaleva', 'Koeberl',
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
