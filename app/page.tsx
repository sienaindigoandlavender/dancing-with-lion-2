'use client'

import Link from 'next/link'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Cultural intelligence studio for Africa
   ═══════════════════════════════════════════════════════ */

const LATEST = SEARCH_INDEX.slice(-6).reverse()

const CATEGORIES = (() => {
  const counts: Record<string, number> = {}
  SEARCH_INDEX.forEach(m => {
    const cat = m.category
    counts[cat] = (counts[cat] || 0) + 1
  })
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => ({ name, count }))
})()

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-8 md:px-[8%] lg:px-[12%] pb-16">
        <div className="relative z-10 max-w-wide">
          <p className="micro-label mb-6 animate-fade-up delay-1">Cultural Intelligence Studio</p>

          <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] tracking-[-0.03em] text-dwl-black animate-fade-up delay-2">
            Dancing<br /><em>with Lions</em>
          </h1>

          <div className="mt-12 max-w-[560px] animate-fade-up delay-4">
            <p className="text-body text-dwl-body leading-relaxed">
              Data-driven stories about Africa. Interactive research, satellite maps, 
              structured datasets. The intelligence layer for a continent that 
              deserves better than PDFs and paywalls.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-up delay-5">
            <Link
              href="/data"
              className="inline-block px-8 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-100"
            >
              Browse Stories →
            </Link>
            <Link
              href="/about"
              className="meta-text hover:text-dwl-black transition-colors"
            >
              About the studio
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ COUNTER BAR ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-6 flex flex-wrap gap-x-12 gap-y-3">
          <div>
            <span className="font-serif text-[32px] italic text-dwl-black">{SEARCH_INDEX.length}</span>
            <span className="text-[11px] text-dwl-muted uppercase tracking-[0.1em] ml-2">Data Stories</span>
          </div>
          <div>
            <span className="font-serif text-[32px] italic text-dwl-black">30+</span>
            <span className="text-[11px] text-dwl-muted uppercase tracking-[0.1em] ml-2">Satellite Maps</span>
          </div>
          <div>
            <span className="font-serif text-[32px] italic text-dwl-black">12</span>
            <span className="text-[11px] text-dwl-muted uppercase tracking-[0.1em] ml-2">Countries</span>
          </div>
        </div>
      </section>

      {/* ═══ LATEST ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="flex items-baseline justify-between mb-16">
            <div>
              <p className="micro-label mb-3">Recent</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-dwl-black leading-[0.95]">
                Latest <em>Stories</em>
              </h2>
            </div>
            <Link href="/data" className="meta-text hidden md:block hover:text-dwl-black transition-colors">
              View all →
            </Link>
          </div>

          {/* Featured — first story large */}
          {LATEST[0] && (
            <Link href={LATEST[0].href} className="block group">
              <div className="pb-16 border-b border-dwl-border">
                <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                  {LATEST[0].category}
                </p>
                <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-dwl-black leading-[0.95] group-hover:opacity-60 transition-opacity">
                  <em>{LATEST[0].title}</em>
                </h3>
                <p className="text-body text-dwl-body mt-6 max-w-[620px] leading-relaxed">
                  {LATEST[0].description}
                </p>
              </div>
            </Link>
          )}

          {/* Grid — remaining stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dwl-border mt-px">
            {LATEST.slice(1).map((m) => (
              <Link key={m.id} href={m.href} className="block group">
                <article className="bg-white p-8 min-h-[200px] flex flex-col justify-between hover:bg-dwl-offwhite transition-colors">
                  <div>
                    <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                      {m.category}
                    </p>
                    <h3 className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-dwl-black leading-snug group-hover:opacity-60 transition-opacity">
                      <em>{m.title}</em>
                    </h3>
                  </div>
                  <p className="text-[12px] text-dwl-muted leading-relaxed mt-4 line-clamp-3">
                    {m.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/data" className="meta-text">
              View all stories →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-16">
          <p className="micro-label mb-8">Coverage</p>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(c => (
              <Link
                key={c.name}
                href="/data"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dwl-border hover:border-dwl-black transition-colors"
              >
                <span className="text-[13px] text-dwl-black">{c.name}</span>
                <span className="font-serif text-[15px] italic text-dwl-muted">{c.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THESIS ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="max-w-[720px]">
            <div className="border-l-[3px] border-dwl-black pl-8 md:pl-12">
              <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-dwl-black leading-[1.35] italic">
                Africa is the most written-about and least understood continent on earth.
              </p>
              <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[520px]">
                The gap is not in opinion. It is in structured, current, beautiful 
                intelligence that decision-makers can actually use. Every story we 
                publish adds to the record. Every dataset we structure makes the 
                next one more valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STUDIO CTA ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-4">Stories</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-white leading-[0.95] italic">
                Start exploring
              </h2>
              <p className="text-[14px] text-white/50 mt-4 max-w-[400px] leading-relaxed">
                {SEARCH_INDEX.length} interactive data stories. Satellite maps, timelines, 
                visualisations. No paywall. No login.
              </p>
              <Link
                href="/data"
                className="inline-block mt-8 px-10 py-4 bg-white text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
              >
                Browse Stories →
              </Link>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] mb-4">Studio</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-[1.1] italic">
                Work with us
              </h2>
              <p className="text-[14px] text-white/50 mt-4 max-w-[400px] leading-relaxed">
                Data storytelling for organisations with research on Africa. 
                We take your data and build the story.
              </p>
              <Link
                href="/about"
                className="inline-block mt-8 px-10 py-4 border border-white/20 text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-dwl-black transition-all"
              >
                About the Studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
