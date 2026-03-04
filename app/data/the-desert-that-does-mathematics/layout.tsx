import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Desert That Does Mathematics — Namibia\'s Fairy Circles | Dancing with Lions',
  description: 'Millions of perfectly spaced bare circles in the Namib Desert grasslands, arranged in hexagonal grids across 2,400 km. Alan Turing predicted self-organising patterns in 1952. Scientists still debate the cause: termites, vegetation self-organisation, or both. The desert that runs a spatial algorithm.',
  openGraph: {
    title: 'The Desert That Does Mathematics — Namibia\'s Fairy Circles',
    description: 'Millions of circles. One equation. No consensus.',
    type: 'article',
    url: 'https://dancingwithlions.com/data/the-desert-that-does-mathematics',
  },
  keywords: "fairy circles, Namibia, Namib Desert, NamibRand, Stipagrostis, Turing pattern, Alan Turing, morphogenesis, reaction-diffusion, self-organization, vegetation patterns, hexagonal, termites, Psammotermes, sand termites, Getzin, Jürgens, Bonachela, water stress, ecohydrology, Himba, Pilbara, Australia, swarm intelligence, ecosystem engineering, arid grasslands",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Desert That Does Mathematics — Namibia\\',
    description: 'Millions of perfectly spaced bare circles in the Namib Desert grasslands, arranged in hexagonal grids across 2,400 km. Alan Turing predicted self-organising patterns in 1952. Scientists still debate the cause: termites, vegetation self-organisation, ',
    url: 'https://dancingwiththelions.com/data/the-desert-that-does-mathematics',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}