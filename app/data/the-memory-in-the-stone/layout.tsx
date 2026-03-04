import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Memory in the Stone — Rock Art Across Africa | Dancing with Lions',
  description: 'Africa holds the oldest, densest, and most diverse rock art on Earth. 50,000+ sites spanning 75,000 years document climate change, migration, and spiritual practice across the continent.',
  keywords: "African rock art, rock art Africa, Saharan rock art, cave paintings Africa, Tassili n Ajjer, petroglyphs Africa, San rock art, Drakensberg paintings, Twyfelfontein, Laas Geel, Dabous giraffes, Apollo 11 Cave, Blombos Cave, Tadrart Acacus, Ennedi Massif, Tsodilo Hills, Matobo Hills, Kondoa, Chongoni, Brandberg White Lady, Cave of Swimmers, Green Sahara, UNESCO rock art, prehistoric art Africa, therianthrope, San bushmen art, climate archive rock art, oldest art Africa, Dancing with Lions",
  openGraph: {
    title: 'The Memory in the Stone — Rock Art Across Africa',
    description: '75,000 years. 50,000+ sites. 2 million images. The longest documentation project in human history.',
    type: 'article',
  },
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-memory-in-the-stone' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Memory in the Stone — Rock Art Across Africa | Dancing with Lions',
    description: 'Africa holds the oldest, densest, and most diverse rock art on Earth. 50,000+ sites spanning 75,000 years document climate change, migration, and spiritual practice across the continent.',
    url: 'https://dancingwiththelions.com/data/the-memory-in-the-stone',
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