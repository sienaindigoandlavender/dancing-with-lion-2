'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Cultural Intelligence for Al Maghrib
   ═══════════════════════════════════════════════════════ */

const LATEST = SEARCH_INDEX.slice(-8).reverse()

const CATEGORIES = SEARCH_INDEX.reduce((acc, m) => {
  acc[m.category] = (acc[m.category] || 0) + 1
  return acc
}, {} as Record<string, number>)

const TOP_CATS = Object.entries(CATEGORIES).sort((a, b) => b[1] - a[1]).slice(0, 8)

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-8 md:px-[8%] lg:px-[12%] pb-16">
        {/* Oversized number — ghost in background */}
        <div className="absolute top-[10%] right-[5%] select-none pointer-events-none opacity-[0.03]">
          <span className="font-serif text-[clamp(15rem,40vw,50rem)] leading-none font-normal">
            {SEARCH_INDEX.length}
          </span>
        </div>

        <div className="relative z-10 max-w-wide">
          <p className="micro-label mb-6 animate-fade-up delay-1">Cultural Intelligence</p>

          <h1 className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-[-0.03em] text-dwl-black animate-fade-up delay-2">
            Dancing<br /><em>with Lions</em>
          </h1>

          <div className="mt-12 max-w-[580px] animate-fade-up delay-4">
            <p className="text-body text-dwl-body leading-relaxed">
              {SEARCH_INDEX.length} data stories about Morocco, the Maghreb, and the cultural 
              systems that connect Africa, the Middle East, and the Mediterranean. Built for 
              analysts, researchers, and anyone who needs depth.
            </p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap animate-fade-up delay-5">
            <Link
              href="/data"
              className="inline-block px-8 py-4 bg-dwl-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-100"
            >
              Explore the Data →
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 border border-dwl-border text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-100 hover:border-dwl-black transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TICKER BAR ═══ */}
      <section className="border-y border-dwl-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { n: String(SEARCH_INDEX.length), l: 'Data modules' },
            { n: '40+', l: 'Countries' },
            { n: '75,000', l: 'Years of history' },
            { n: String(TOP_CATS.length + '+'), l: 'Categories' },
          ].map((s, i) => (
            <div key={i} className={`px-8 py-8 ${i < 3 ? 'border-r border-dwl-border' : ''} ${i < 2 ? 'border-b md:border-b-0 border-dwl-border' : ''}`}>
              <span className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-dwl-black leading-none">
                {s.n}
              </span>
              <p className="micro-label mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ LATEST ═══ */}
      <section className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <p className="micro-label mb-3">New</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-dwl-black leading-[0.95]">
              Latest <em>Stories</em>
            </h2>
          </div>
          <Link href="/data" className="meta-text hidden md:block hover:text-dwl-black transition-colors">
            View all {SEARCH_INDEX.length} →
          </Link>
        </div>

        {/* Featured — first story large */}
        <Link href={LATEST[0]?.href || '/data'} className="block group">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-dwl-border">
            <div className="md:col-span-8">
              <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                #{LATEST[0]?.number} · {LATEST[0]?.category}
              </p>
              <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-dwl-black leading-[0.95] group-hover:opacity-60 transition-opacity">
                <em>{LATEST[0]?.title}</em>
              </h3>
              <p className="text-body text-dwl-body mt-6 max-w-[580px] leading-relaxed">
                {LATEST[0]?.description}
              </p>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <span className="font-serif text-[8rem] leading-none text-dwl-border select-none opacity-40">
                {LATEST[0]?.number}
              </span>
            </div>
          </div>
        </Link>

        {/* Grid — remaining stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dwl-border mt-px">
          {LATEST.slice(1, 7).map((m) => (
            <Link key={m.id} href={m.href} className="block group">
              <article className="bg-white p-8 min-h-[220px] flex flex-col justify-between hover:bg-dwl-offwhite transition-colors">
                <div>
                  <p className="micro-label mb-3" style={{ color: '#8B6914' }}>
                    #{m.number} · {m.category}
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

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link href="/data" className="meta-text">
            View all {SEARCH_INDEX.length} stories →
          </Link>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="border-t border-dwl-border">
        <div className="px-8 md:px-[8%] lg:px-[12%] py-24 md:py-40">
          <p className="micro-label mb-3">Browse</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-dwl-black leading-[0.95] mb-16">
            By <em>Category</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TOP_CATS.map(([cat, count]) => (
              <Link key={cat} href="/data" className="group block">
                <div className="border border-dwl-border p-6 hover:border-dwl-black transition-colors">
                  <p className="text-[14px] font-semibold text-dwl-black mb-1 group-hover:opacity-60 transition-opacity">
                    {cat}
                  </p>
                  <p className="text-[11px] text-dwl-muted tracking-wide">
                    {count} {count === 1 ? 'story' : 'stories'}
                  </p>
                </div>
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
                Protect the past in the present so that we have a future.
              </p>
              <p className="text-body text-dwl-body mt-8 leading-relaxed max-w-[520px]">
                Every data story begins with a question someone asked and nobody had 
                answered well enough. We build the answers — interactive, citable, deep — 
                so they exist for anyone who needs them next.
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
              {SEARCH_INDEX.length} stories. No paywall. No login. Just depth.
            </p>
          </div>
          <Link
            href="/data"
            className="inline-block px-10 py-4 bg-white text-dwl-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
          >
            Browse Data Stories →
          </Link>
        </div>
      </section>

    </div>
  )
}
