'use client'

import Link from 'next/link'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Morocco like you have never seen before
   ═══════════════════════════════════════════════════════ */

const LATEST = SEARCH_INDEX.slice(-6).reverse()

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-8 md:px-[8%] lg:px-[12%] pb-16">
        <div className="relative z-10 max-w-wide">
          <p className="micro-label mb-6 animate-fade-up delay-1">Cultural Intelligence</p>

          <h1 className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-[-0.03em] text-dwl-black animate-fade-up delay-2">
            Dancing<br /><em>with Lions</em>
          </h1>

          <div className="mt-12 max-w-[520px] animate-fade-up delay-4">
            <p className="text-body text-dwl-body leading-relaxed">
              Morocco like you have never seen before. The history underneath 
              the surface. The systems behind the beauty. The stories nobody 
              else is telling.
            </p>
          </div>

          <div className="mt-10 animate-fade-up delay-5">
            <Link
              href="/data"
              className="inline-block px-8 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-100"
            >
              Enter →
            </Link>
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
          <Link href={LATEST[0]?.href || '/data'} className="block group">
            <div className="pb-16 border-b border-dwl-border">
              <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                {LATEST[0]?.category}
              </p>
              <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-dwl-black leading-[0.95] group-hover:opacity-60 transition-opacity">
                <em>{LATEST[0]?.title}</em>
              </h3>
              <p className="text-body text-dwl-body mt-6 max-w-[620px] leading-relaxed">
                {LATEST[0]?.description}
              </p>
            </div>
          </Link>

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

      {/* ═══ THESIS ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <div className="max-w-[720px]">
            <div className="border-l-[3px] border-dwl-black pl-8 md:pl-12">
              <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-dwl-black leading-[1.35] italic">
                Protect the past in the present so that we have a future.
              </p>
              <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[520px]">
                Every story begins with a question someone asked and nobody had 
                answered well enough. We build the answers — interactive, citable, 
                deep — so they exist for anyone who needs them next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-dwl-black">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-white leading-[0.95] italic">
              Start exploring
            </h2>
            <p className="text-[14px] text-white/50 mt-3 max-w-[400px]">
              No paywall. No login. Just depth.
            </p>
          </div>
          <Link
            href="/data"
            className="inline-block px-10 py-4 bg-white text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
          >
            Browse Stories →
          </Link>
        </div>
      </section>

    </div>
  )
}
