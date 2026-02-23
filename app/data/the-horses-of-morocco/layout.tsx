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
  keywords: [
    'Barb horse', 'Barbary horse', 'Morocco horses', 'Berber horse', 'Arab-Barb',
    'Numidian cavalry', 'Thoroughbred foundation', 'Godolphin Arabian', 'Godolphin Barb',
    'Andalusian', 'Lusitano', 'Mustang', 'Quarter Horse', 'Appaloosa', 'Criollo',
    'SOREC', 'Tbourida', 'Fantasia', 'UNESCO', 'Meknes stud', 'El Jadida horse show',
    'Moulay Ismail', 'Hannibal', 'Cannae', 'Masinissa', 'Maghreb',
    'equestrian', 'horse breeds', 'North Africa', 'cavalry', 'bareback',
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
