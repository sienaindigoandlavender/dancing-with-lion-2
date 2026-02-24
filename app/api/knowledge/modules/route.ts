import { NextResponse } from 'next/server'
import { SEARCH_INDEX } from '@/lib/search-index'

export async function GET() {
  const modules = SEARCH_INDEX.map(m => ({
    number: m.number,
    title: m.title,
    category: m.category,
    description: m.description,
    tags: m.tags,
    url: `https://dancingwiththelions.com${m.href}`,
  }))

  const response = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: 'Dancing with Lions Intelligence Modules',
    description: `${modules.length} interactive data intelligence modules about Africa — economics, demographics, trade, agriculture, energy, conservation, security, heritage, and culture.`,
    url: 'https://dancingwiththelions.com/data',
    creator: {
      '@type': 'Organization',
      name: 'Dancing with Lions',
      url: 'https://dancingwiththelions.com',
    },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    numberOfItems: modules.length,
    dataset: modules,
    dateModified: new Date().toISOString(),
  }

  return NextResponse.json(response, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'application/ld+json',
    },
  })
}
