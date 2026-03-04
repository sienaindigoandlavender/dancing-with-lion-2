import type { Metadata } from 'next'
import Link from 'next/link'
import { SEARCH_INDEX } from '@/lib/search-index'

export const metadata: Metadata = {
  title: 'All Intelligence Modules — Dancing with Lions',
  description:
    'Complete index of all 164+ Dancing with Lions intelligence modules. Africa economics, demographics, trade corridors, cultural systems, conservation, security, geography, history, and heritage.',
  alternates: { canonical: 'https://dancingwiththelions.com/data/all' },
  openGraph: {
    title: 'All Intelligence Modules — Dancing with Lions',
    description: '164+ data modules covering Africa: economics, demographics, trade, culture, conservation, and security.',
    siteName: 'Dancing with Lions',
  },
  robots: { index: true, follow: true },
}

// Group modules by category, preserving order within each group
function groupByCategory(modules: typeof SEARCH_INDEX) {
  const order: string[] = []
  const groups: Record<string, typeof SEARCH_INDEX> = {}
  for (const mod of modules) {
    if (!groups[mod.category]) {
      groups[mod.category] = []
      order.push(mod.category)
    }
    groups[mod.category].push(mod)
  }
  return order.map((cat) => ({ category: cat, modules: groups[cat] }))
}

export default function AllModulesPage() {
  const groups = groupByCategory(SEARCH_INDEX)

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: '0 auto',
        padding: '4rem 2rem 6rem',
        fontFamily: 'var(--font-plex-mono, monospace)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid #e5e5e5' }}>
        <nav
          style={{
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#737373',
            marginBottom: '1.5rem',
          }}
        >
          <Link href="/" style={{ color: '#737373' }}>
            Dancing with Lions
          </Link>
          {' / '}
          <Link href="/data" style={{ color: '#737373' }}>
            Intelligence Modules
          </Link>
          {' / All'}
        </nav>

        <h1
          style={{
            fontFamily: 'var(--font-plex-mono, monospace)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#0a0a0a',
            marginBottom: '0.5rem',
          }}
        >
          All Modules
        </h1>
        <p style={{ fontSize: 13, color: '#737373', lineHeight: 1.6 }}>
          {SEARCH_INDEX.length} intelligence modules ·{' '}
          {groups.length} categories ·{' '}
          <Link href="/data" style={{ color: '#0a0a0a' }}>
            Back to module browser →
          </Link>
        </p>
      </div>

      {/* Category groups */}
      {groups.map(({ category, modules }) => (
        <section key={category} style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#737373',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            {category}
            <span style={{ fontWeight: 400, marginLeft: '0.75rem', opacity: 0.5 }}>
              {modules.length}
            </span>
          </h2>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {modules.map((mod) => {
              const isExternal = mod.href === '#'
              return (
                <li
                  key={mod.id}
                  style={{
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  {isExternal ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1.25rem',
                        padding: '0.9rem 0',
                        opacity: 0.4,
                      }}
                    >
                      <span style={{ fontSize: 10, color: '#aaa', width: 28, flexShrink: 0 }}>
                        {mod.number}
                      </span>
                      <span>
                        <span style={{ fontSize: 13, color: '#0a0a0a', display: 'block' }}>
                          {mod.title}
                        </span>
                        <span style={{ fontSize: 11, color: '#737373', fontStyle: 'italic' }}>
                          Coming soon
                        </span>
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={mod.href}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1.25rem',
                        padding: '0.9rem 0',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          color: '#aaa',
                          width: 28,
                          flexShrink: 0,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {mod.number}
                      </span>
                      <span style={{ flex: 1, minWidth: 0 }}>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: '#0a0a0a',
                            display: 'block',
                            lineHeight: 1.3,
                            marginBottom: '0.2rem',
                          }}
                        >
                          {mod.title}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            color: '#737373',
                            lineHeight: 1.5,
                            display: 'block',
                          }}
                        >
                          {mod.description}
                        </span>
                      </span>
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      ))}

      {/* Footer note */}
      <div
        style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid #e5e5e5',
          fontSize: 11,
          color: '#aaa',
        }}
      >
        <p>
          Source: Dancing with Lions (
          <a href="https://dancingwiththelions.com" style={{ color: '#737373' }}>
            dancingwiththelions.com
          </a>
          ) · Citation: CC BY-NC-ND 4.0
        </p>
      </div>
    </div>
  )
}
