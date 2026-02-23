'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { SEARCH_INDEX } from '@/lib/search-index'

/* ═══════════════════════════════════════════════════════
   HOMEPAGE — Dancing with Lions
   Cultural Intelligence for Al Maghrib
   ═══════════════════════════════════════════════════════ */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const LATEST = SEARCH_INDEX.slice(-6).reverse()

const CATEGORIES = SEARCH_INDEX.reduce((acc, m) => {
  acc[m.category] = (acc[m.category] || 0) + 1
  return acc
}, {} as Record<string, number>)

const TOP_CATEGORIES = Object.entries(CATEGORIES)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6)

export default function HomePage() {
  return (
    <div className="pt-16" style={{ background: '#ffffff', color: '#0a0a0a' }}>

      {/* ── Hero ── */}
      <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <Fade>
          <h1 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: '#0a0a0a',
            margin: '0 0 32px',
          }}>
            Dancing<br />with Lions
          </h1>
        </Fade>
        <Fade delay={0.15}>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            lineHeight: 1.7,
            color: '#262626',
            maxWidth: 560,
            margin: '0 0 40px',
            fontFamily: "'IBM Plex Mono', monospace",
          }}>
            Data, research, and structured intelligence about Morocco, 
            the Maghreb, and the cultural systems that connect Africa, 
            the Middle East, and the Mediterranean.
          </p>
        </Fade>
        <Fade delay={0.25}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/data" style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#0a0a0a',
              color: '#ffffff',
              fontSize: 11,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 600,
            }}>
              Explore {SEARCH_INDEX.length} Data Stories →
            </Link>
            <Link href="/about" style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: 'transparent',
              color: '#0a0a0a',
              fontSize: 11,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 600,
              border: '1px solid #e5e5e5',
            }}>
              About
            </Link>
          </div>
        </Fade>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}><div style={{ borderTop: '1px solid #e5e5e5' }} /></div>

      {/* ── Numbers ── */}
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '32px' }}>
          {[
            { n: String(SEARCH_INDEX.length), label: 'Data stories' },
            { n: '40+', label: 'Countries mapped' },
            { n: '75,000', label: 'Years of history' },
            { n: String(Object.keys(CATEGORIES).length), label: 'Categories' },
          ].map((stat, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div>
                <span style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1,
                  color: '#0a0a0a',
                }}>{stat.n}</span>
                <p style={{
                  fontSize: 11,
                  color: '#737373',
                  marginTop: 6,
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>{stat.label}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}><div style={{ borderTop: '1px solid #e5e5e5' }} /></div>

      {/* ── Latest Stories ── */}
      <section style={{ padding: '60px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <Fade>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
            <h2 style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 400,
              fontStyle: 'italic',
            }}>
              Latest
            </h2>
            <Link href="/data" style={{
              fontSize: 11,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#737373',
              textDecoration: 'none',
            }}>
              View all →
            </Link>
          </div>
        </Fade>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 1, background: '#e5e5e5' }}>
          {LATEST.map((m, i) => (
            <Fade key={m.id} delay={i * 0.06}>
              <Link href={m.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '28px 24px',
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
                >
                  <div>
                    <p style={{
                      fontSize: 10,
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8B6914',
                      marginBottom: 10,
                    }}>
                      {m.category} · #{m.number}
                    </p>
                    <h3 style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      lineHeight: 1.25,
                      marginBottom: 10,
                      color: '#0a0a0a',
                    }}>
                      {m.title}
                    </h3>
                    <p style={{
                      fontSize: 12,
                      color: '#525252',
                      lineHeight: 1.6,
                      fontFamily: "'IBM Plex Mono', monospace",
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {m.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}><div style={{ borderTop: '1px solid #e5e5e5' }} /></div>

      {/* ── Categories ── */}
      <section style={{ padding: '60px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <Fade>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            marginBottom: 32,
          }}>
            By Category
          </h2>
        </Fade>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {TOP_CATEGORIES.map(([cat, count], i) => (
            <Fade key={cat} delay={i * 0.05}>
              <Link href="/data" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  padding: '20px',
                  border: '1px solid #e5e5e5',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#0a0a0a')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e5e5')}
                >
                  <p style={{
                    fontSize: 14,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 600,
                    color: '#0a0a0a',
                    marginBottom: 4,
                  }}>{cat}</p>
                  <p style={{
                    fontSize: 11,
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: '#737373',
                  }}>{count} stories</p>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </section>

      {/* ── Thesis ── */}
      <section style={{ padding: '80px 24px', maxWidth: 720, margin: '0 auto' }}>
        <Fade>
          <div style={{ borderLeft: '3px solid #8B6914', padding: '16px 24px' }}>
            <p style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: '#0a0a0a',
            }}>
              Every map tells a story. Every dataset holds a culture. 
              Every number was once someone{"'"}s life.
            </p>
          </div>
        </Fade>
      </section>

    </div>
  )
}
