import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Stone Language — When Every Culture Stacks Rocks | Dancing with Lions',
  description: 'Kerkour in the Atlas. Inuksuit in the Arctic. Ovoo in Mongolia. Apachetas in the Andes. When the landscape has no trees, no wood, no signposts — humans stack rocks. The same solution, invented independently at least nine times across five continents. Not a connection. A proof.',
    alternates: { canonical: 'https://dancingwiththelions.com/data/the-stone-language' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
