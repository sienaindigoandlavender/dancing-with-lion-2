import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Food Equation — 60% of the World\'s Arable Land. $65B Food Import Bill. | Dancing with Lions',
  description: 'Africa owns 60% of uncultivated arable land, spends $65B importing food. Yields at 25% potential. Radial import wheel, yield gap analysis, Morocco Plan Maroc Vert, $1T agribusiness target. Investment-grade food intelligence by Dancing with Lions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Food Equation',
    description: 'Africa owns 60% of the world uncultivated arable land but spends $65 billion importing food it could grow. Crop yields at 25% of potential. Radial SVG import wheel: $65B SSA food imports by category (cereals $21.9B, oils $8.5B, fish $6.2B, sugar $5.1B, beverages $3.6B, dairy $3.4',
    url: 'https://dancingwiththelions.com/data/the-food-equation',
    author: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    publisher: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    articleSection: 'Africa Progression',
    keywords: 'food, agriculture, farming, hunger, famine, import, cereal, wheat',
    isPartOf: { '@type': 'CreativeWorkSeries', name: 'Dancing with Lions Intelligence Modules', url: 'https://dancingwiththelions.com/data' },
    inLanguage: 'en',
  }
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Module 158 — The Food Equation',
    description: 'Africa owns 60% of the world uncultivated arable land but spends $65 billion importing food it could grow. Crop yields at 25% of potential. Radial SVG import wheel: $65B SSA food imports by category (cereals $21.9B, oils $8.5B, fish $6.2B, sugar $5.1B, beverages $3.6B, dairy $3.4',
    url: 'https://dancingwiththelions.com/data/the-food-equation',
    creator: { '@type': 'Organization', name: 'Dancing with Lions', url: 'https://dancingwiththelions.com' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    keywords: ['food', 'agriculture', 'farming', 'hunger', 'famine', 'import', 'cereal', 'wheat'],
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