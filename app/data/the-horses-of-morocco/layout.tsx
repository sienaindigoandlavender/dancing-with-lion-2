import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Horses of Morocco — From Numidian Cavalry to the Thoroughbred | Dancing with Lions',
  description: 'The Barb horse of North Africa is 3,500 years old, shaped every major breed on Earth, and remains the most underrated horse in history. From the Numidian cavalry that won Cannae to the Godolphin Barb that founded the Thoroughbred — Morocco\'s equestrian story is the hidden engine of global horse culture.',
  openGraph: {
    title: 'The Horses of Morocco — From Numidian Cavalry to the Thoroughbred',
    description: 'The Barb horse: 3,500 years old, progenitor of the Thoroughbred, Andalusian, Mustang, Quarter Horse. The most influential breed nobody talks about.',
    type: 'article',
    url: 'https://dancingwithlions.com/data/the-horses-of-morocco',
  },
  ["Barb horse", "Barbary horse", "Morocco horses", "Berber horse", "Arab-Barb", "Numidian cavalry", "Thoroughbred foundation", "Godolphin Arabian", "Godolphin Barb", "Andalusian", "Lusitano", "Mustang", "Quarter Horse", "Appaloosa", "Criollo", "SOREC", "Tbourida", "Fantasia", "UNESCO", "Meknes stud", "El Jadida horse show", "Moulay Ismail", "Hannibal", "Cannae", "Masinissa", "Maghreb", "equestrian", "horse breeds", "North Africa", "cavalry", "bareback"],
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Horses of Morocco',
    description: '3,500 years of horse culture. The Numidian cavalry rode without saddles and decided Cannae. The Barb breed crossed into Iberia in 711 and created the Andalusian. A Barb from the Meknes stud became the Godolphin — one of three foundation sires of every Thoroughbred alive. Tbourida',
    url: 'https://dancingwiththelions.com/data/the-horses-of-morocco',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Culture & Heritage',
    keywords: 'Barb, horse, Morocco, Numidian, cavalry, Tbourida, Fantasia, Godolphin',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 137 — The Horses of Morocco',
    description: '3,500 years of horse culture. The Numidian cavalry rode without saddles and decided Cannae. The Barb breed crossed into Iberia in 711 and created the Andalusian. A Barb from the Meknes stud became the Godolphin — one of three foundation sires of every Thoroughbred alive. Tbourida',
    url: 'https://dancingwiththelions.com/data/the-horses-of-morocco',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ["Barb", "horse", "Morocco", "Numidian", "cavalry", "Tbourida", "Fantasia", "Godolphin"],
    isAccessibleForFree: true,
    inLanguage: 'en',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      {children}
    </>
  )
}