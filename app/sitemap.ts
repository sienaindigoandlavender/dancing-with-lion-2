import { MetadataRoute } from 'next'
import { dataModules } from '@/lib/search-index'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dancingwiththelions.com'
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/data`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const modulePages: MetadataRoute.Sitemap = dataModules.map(m => ({
    url: `${base}${m.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...modulePages]
}
