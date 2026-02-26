'use client'

import Link from 'next/link'
import { getAllConnections } from '@/lib/module-connections'
import { SEARCH_INDEX } from '@/lib/search-index'

interface ConnectedIntelligenceProps {
  moduleId: string
  max?: number
}

export default function ConnectedIntelligence({ moduleId, max = 6 }: ConnectedIntelligenceProps) {
  const connections = getAllConnections(moduleId).slice(0, max)

  if (connections.length === 0) return null

  // Build a lookup from search index for titles
  const titleMap: Record<string, string> = {}
  for (const entry of SEARCH_INDEX) {
    titleMap[entry.id] = entry.title
  }

  return (
    <div className="mt-10 pt-8 border-t border-[#f0f0f0]">
      <p className="text-[10px] uppercase tracking-[0.12em] text-[#a3a3a3] mb-4">Connected Intelligence</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {connections.map((link) => {
          const title = titleMap[link.id] || link.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          return (
            <Link
              key={link.id}
              href={`/data/${link.id}`}
              className="block p-3 bg-[#fafafa] hover:bg-[#f0f0f0] transition-colors"
            >
              <p className="font-serif text-[13px] italic text-[#0a0a0a] leading-tight">{title}</p>
              <p className="text-[9px] text-[#a3a3a3] mt-1">{link.reason}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
