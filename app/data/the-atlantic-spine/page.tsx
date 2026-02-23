'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ROUTE_COUNTRIES, LANDLOCKED_COUNTRIES, PIPELINE_ROUTE_COORDS, TSGP_ROUTE_COORDS,
  PIPELINE_COMPARISON, TIMELINE, KEY_NUMBERS, GEOPOLITICS, SOURCES,
} from './data'

/* ═══ Mapbox token — same as other modules ═══ */
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

/* ═══ Intersection observer hook ═══ */
function useReveal() {
  const [visible, setVisible] = useState<Set<string>>(new Set())
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible((prev) => new Set(prev).add(e.target.getAttribute('data-sid') || ''))
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('[data-sid]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return visible
}

export default function TheAtlanticSpine() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const visibleSections = useReveal()

  /* ═══ MAP ═══ */
  useEffect(() => {
    if (!mapContainer.current || !MAPBOX_TOKEN || mapRef.current) return

    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css'; document.head.appendChild(link)
    const script = document.createElement('script'); script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js'
    script.onload = () => {
      const mapboxgl = (window as any).mapboxgl; if (!mapboxgl) return
      mapboxgl.accessToken = MAPBOX_TOKEN

      const map = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-8, 18],
        zoom: 2.8,
        pitch: 0,
        interactive: true,
        attributionControl: false,
      })
      mapRef.current = map

      map.addControl(new mapboxgl.NavigationControl(), 'top-right')

      map.on('load', () => {
        // NMGP Route — gold/amber line
        map.addSource('nmgp-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: PIPELINE_ROUTE_COORDS,
            },
          },
        })

        // Glow layer
        map.addLayer({
          id: 'nmgp-glow',
          type: 'line',
          source: 'nmgp-route',
          paint: {
            'line-color': '#F59E0B',
            'line-width': 8,
            'line-opacity': 0.3,
            'line-blur': 6,
          },
        })

        // Main line
        map.addLayer({
          id: 'nmgp-line',
          type: 'line',
          source: 'nmgp-route',
          paint: {
            'line-color': '#F59E0B',
            'line-width': 3,
            'line-opacity': 0.9,
          },
        })

        // TSGP Rival Route — red dashed line
        map.addSource('tsgp-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: TSGP_ROUTE_COORDS,
            },
          },
        })

        map.addLayer({
          id: 'tsgp-line',
          type: 'line',
          source: 'tsgp-route',
          paint: {
            'line-color': '#EF4444',
            'line-width': 2.5,
            'line-opacity': 0.7,
            'line-dasharray': [4, 3],
          },
        })

        // Country markers — NMGP route
        ROUTE_COUNTRIES.forEach((c) => {
          const el = document.createElement('div')
          el.style.width = c.id === 'nigeria' || c.id === 'morocco' ? '14px' : '10px'
          el.style.height = c.id === 'nigeria' || c.id === 'morocco' ? '14px' : '10px'
          el.style.borderRadius = '50%'
          el.style.backgroundColor = c.id === 'nigeria' || c.id === 'morocco' ? '#F59E0B' : '#FCD34D'
          el.style.border = '2px solid rgba(0,0,0,0.4)'
          el.style.cursor = 'pointer'
          el.style.boxShadow = '0 0 8px rgba(245,158,11,0.5)'

          const popup = new mapboxgl.Popup({ offset: 12, maxWidth: '260px' }).setHTML(`
            <div style="font-family: system-ui; padding: 4px 0;">
              <p style="font-size: 13px; font-weight: 700; color: #0a0a0a; margin: 0 0 4px;">${c.name}</p>
              <p style="font-size: 11px; color: #666; margin: 0 0 6px;">${c.role}</p>
              <p style="font-size: 10px; color: #888; margin: 0; line-height: 1.4;">${c.note}</p>
            </div>
          `)

          new mapboxgl.Marker(el).setLngLat(c.coords).setPopup(popup).addTo(map)
        })

        // Legend overlay
        const legend = document.createElement('div')
        legend.innerHTML = `
          <div style="position:absolute;bottom:16px;left:16px;background:rgba(0,0,0,0.75);padding:10px 14px;border-radius:4px;font-family:monospace;font-size:11px;color:#ccc;line-height:1.8;z-index:10;">
            <span style="display:inline-block;width:20px;height:3px;background:#F59E0B;vertical-align:middle;margin-right:6px;"></span> NMGP — Atlantic Route<br/>
            <span style="display:inline-block;width:20px;height:3px;background:#EF4444;vertical-align:middle;margin-right:6px;border-bottom:2px dashed #EF4444;height:0;"></span> TSGP — Trans-Saharan Route
          </div>
        `
        mapContainer.current?.appendChild(legend)
      })
    }
    document.head.appendChild(script)

    return () => { mapRef.current?.remove(); mapRef.current = null }
  }, [])

  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-8 md:px-[8%] lg:px-[12%] pb-16" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1006 100%)' }}>
        <div className="relative z-10 max-w-wide">
          <p className="text-[11px] uppercase tracking-[0.12em] mb-6" style={{ color: '#F59E0B' }}>
            Module 138 — Energy &amp; Geopolitical Intelligence
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.85] tracking-[-0.03em] text-white">
            The Atlantic<br /><em>Spine</em>
          </h1>
          <div className="mt-10 max-w-[620px]">
            <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              5,660 kilometres of pipeline. 13 countries. $25 billion. Lagos to Tangier 
              along the Atlantic coast. The largest energy infrastructure project in 
              African history — and it is racing against a rival that crosses the Sahara.
            </p>
          </div>
        </div>

        {/* Hero stat bar */}
        <div className="relative z-10 mt-16 pt-8 border-t" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {[
              ['5,660 km', 'Pipeline length'],
              ['$25B', 'Estimated cost'],
              ['30 bcm/yr', 'Gas capacity'],
              ['13', 'Countries'],
              ['~400M', 'People served'],
            ].map(([val, lab]) => (
              <div key={lab}>
                <p className="font-serif text-[24px] md:text-[28px] italic text-white">{val}</p>
                <p className="text-[10px] uppercase tracking-[0.1em] mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE PREMISE ═══ */}
      <section className="bg-white">
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="micro-label mb-4">001 — The Premise</p>
          <h2 className="font-serif text-[28px] md:text-[40px] italic text-dwl-black leading-[1.05] max-w-[720px]">
            Two pipelines. One resource. A continent&rsquo;s energy future.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px]">
            <p className="text-[14px] text-dwl-body leading-relaxed">
              Nigeria holds Africa&rsquo;s largest proven natural gas reserves &mdash; 206.53 trillion 
              cubic feet. Most of it is flared, reinjected into oil wells, or sits untapped. Europe 
              needs gas that does not come from Russia. Every country between Lagos and Tangier needs 
              electricity. The math is obvious. The execution is not.
            </p>
            <p className="text-[14px] text-dwl-body leading-relaxed">
              Two competing pipeline projects aim to move Nigerian gas to Europe. One runs along the 
              Atlantic coast through 13 West African countries to Morocco. The other crosses the 
              Sahara through Niger to Algeria. Only one will likely reach completion. The outcome will 
              reshape the energy map of Africa and determine which North African nation controls 
              the continent&rsquo;s gas gateway to Europe.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <section>
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="micro-label mb-4">002 — The Route</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic text-dwl-black leading-[1.05] mb-8">
            Lagos to Tangier — 5,660 km along the Atlantic coast
          </h2>
          <p className="text-[14px] text-dwl-body leading-relaxed max-w-[620px] mb-10">
            The gold line traces the Nigeria-Morocco Gas Pipeline (NMGP) &mdash; the Atlantic route. 
            The red dashed line traces the Trans-Saharan Gas Pipeline (TSGP) &mdash; Algeria&rsquo;s 
            rival. Both originate in Nigeria. Both target Europe. They diverge at the Atlantic coast.
          </p>
        </div>
        <div
          ref={mapContainer}
          className="w-full relative"
          style={{ height: '70vh', minHeight: '500px' }}
        />
        <div className="max-w-wide mx-auto px-6 md:px-10 py-4">
          <p className="text-[10px] text-dwl-muted">
            Map: Dancing with Lions. Pipeline routes approximate based on published feasibility data. 
            Click markers for country details.
          </p>
        </div>
      </section>

      {/* ═══ EVERY COUNTRY ═══ */}
      <section style={{ background: '#0a0a0a' }}>
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: '#F59E0B' }}>003 — The Route Countries</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic leading-[1.05] mb-4 text-white">
            13 countries. 3 languages. One pipeline.
          </h2>
          <p className="text-[14px] max-w-[560px] leading-relaxed mb-12" style={{ color: 'rgba(255,255,255,0.7)' }}>
            The NMGP crosses anglophone, francophone, and lusophone Africa. No other infrastructure 
            project on the continent spans all three linguistic zones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#1a1a1a' }}>
            {ROUTE_COUNTRIES.map((c, i) => {
              const isVis = visibleSections.has(`country-${i}`)
              return (
                <div
                  key={c.id}
                  data-sid={`country-${i}`}
                  className="p-6 md:p-8 transition-all duration-700"
                  style={{
                    background: '#0a0a0a',
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <p className="text-[16px] font-semibold text-white">{c.name}</p>
                    <span className="text-[9px] uppercase tracking-[0.1em] px-2 py-1" style={{
                      color: c.language === 'Francophone' ? '#60A5FA' : c.language === 'Lusophone' ? '#34D399' : c.language === 'Bilingual' ? '#F59E0B' : '#D4D4D4',
                      border: `1px solid ${c.language === 'Francophone' ? 'rgba(96,165,250,0.3)' : c.language === 'Lusophone' ? 'rgba(52,211,153,0.3)' : c.language === 'Bilingual' ? 'rgba(245,158,11,0.3)' : 'rgba(212,212,212,0.2)'}`,
                    }}>
                      {c.language}
                    </span>
                  </div>
                  <p className="text-[11px] mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Pop. {c.population} · {c.gasAccess}
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {c.note}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Landlocked */}
          <div className="mt-8 pt-8" style={{ borderTop: '1px solid #1a1a1a' }}>
            <p className="text-[10px] uppercase tracking-[0.1em] mb-4" style={{ color: '#666' }}>
              + 3 landlocked countries via internal branches
            </p>
            <div className="flex flex-wrap gap-6">
              {LANDLOCKED_COUNTRIES.map((c) => (
                <div key={c.name} className="flex items-baseline gap-3">
                  <p className="text-[14px] text-white font-semibold">{c.name}</p>
                  <p className="text-[11px]" style={{ color: '#666' }}>{c.population}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE RACE — COMPARISON TABLE ═══ */}
      <section className="bg-white">
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="micro-label mb-4">004 — The Race</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic text-dwl-black leading-[1.05] mb-4">
            Atlantic vs. Saharan — head to head
          </h2>
          <p className="text-[14px] text-dwl-body max-w-[560px] leading-relaxed mb-10">
            Two pipelines competing for the same Nigerian gas and the same European market. 
            Only one will likely reach full completion. The Atlantic route is longer and more 
            expensive. The Saharan route is shorter but crosses the world&rsquo;s most volatile conflict zone.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-dwl-black">
                  <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.08em] text-dwl-muted w-[28%]">Metric</th>
                  <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.08em]" style={{ color: '#F59E0B' }}>
                    NMGP — Atlantic Route
                  </th>
                  <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.08em]" style={{ color: '#EF4444' }}>
                    TSGP — Trans-Saharan Route
                  </th>
                </tr>
              </thead>
              <tbody>
                {PIPELINE_COMPARISON.map((row, i) => (
                  <tr key={row.metric} className="border-b border-dwl-border">
                    <td className="py-3 pr-4 text-[12px] text-dwl-muted font-medium">{row.metric}</td>
                    <td className="py-3 pr-4 text-[13px] text-dwl-black">{row.nmgp}</td>
                    <td className="py-3 pr-4 text-[13px] text-dwl-body">{row.tsgp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ GEOPOLITICAL QUOTE ═══ */}
      <section style={{ background: '#F5F0E8' }}>
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="font-serif text-[24px] md:text-[32px] italic text-dwl-black leading-[1.4]">
              &ldquo;There is likely only enough Nigerian gas and European demand to 
              justify the full-scale realisation of one major trans-continental pipeline.&rdquo;
            </p>
            <p className="text-[12px] mt-6 text-dwl-muted">
              — Geopolitical analysis, multiple sources (Fitch Solutions, Geopolitical Monitor, Ecofin Agency)
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="bg-white">
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="micro-label mb-4">005 — Timeline</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic text-dwl-black leading-[1.05] mb-12">
            40 years from concept to construction
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] md:left-[100px] top-0 bottom-0 w-px" style={{ background: '#e5e5e5' }} />

            {TIMELINE.map((t, i) => {
              const isVis = visibleSections.has(`tl-${i}`)
              const color = t.significance === 'milestone' ? '#F59E0B'
                : t.significance === 'rivalry' ? '#EF4444'
                : t.significance === 'setback' ? '#737373'
                : t.significance === 'current' ? '#22C55E'
                : '#3B82F6'
              return (
                <div
                  key={i}
                  data-sid={`tl-${i}`}
                  className="flex gap-4 md:gap-8 mb-6 transition-all duration-700"
                  style={{
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <div className="hidden md:block w-[80px] shrink-0 text-right">
                    <p className="font-mono text-[13px] font-bold" style={{ color }}>{t.year}</p>
                  </div>
                  <div className="relative shrink-0">
                    <div className="w-[14px] h-[14px] rounded-full border-2" style={{ borderColor: color, background: t.significance === 'current' ? color : 'transparent' }} />
                  </div>
                  <div className="pb-2">
                    <p className="md:hidden font-mono text-[11px] font-bold mb-1" style={{ color }}>{t.year}</p>
                    <p className="text-[13px] text-dwl-body leading-relaxed">{t.event}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ THE GEOPOLITICS ═══ */}
      <section style={{ background: '#0a0a0a' }}>
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: '#F59E0B' }}>006 — The Geopolitics</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic leading-[1.05] mb-12 text-white">
            More than a pipeline. An alignment map.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: '#1a1a1a' }}>
            {[
              ['The Algeria Rivalry', GEOPOLITICS.algeriaRivalry],
              ['The Zero-Sum Game', GEOPOLITICS.zeroSumGame],
              ['ECOWAS Integration', GEOPOLITICS.ecowasIntegration],
              ['US Strategic Interest', GEOPOLITICS.trumpInterest],
              ['Western Sahara', GEOPOLITICS.westernSahara],
              ['The AES Risk', GEOPOLITICS.aesRisk],
            ].map(([title, text], i) => {
              const isVis = visibleSections.has(`geo-${i}`)
              return (
                <div
                  key={title}
                  data-sid={`geo-${i}`}
                  className="p-8 md:p-10 transition-all duration-700"
                  style={{
                    background: '#0a0a0a',
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <h3 className="text-[14px] text-white font-semibold mb-4">{title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ KEY NUMBERS ═══ */}
      <section className="bg-white">
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="micro-label mb-8">007 — Key Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: '#e5e5e5' }}>
            {KEY_NUMBERS.map((n) => (
              <div key={n.label} className="bg-white p-6 md:p-8">
                <p className="font-serif text-[32px] md:text-[40px] italic text-dwl-black leading-none">{n.value}</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-dwl-muted mt-3">{n.label}</p>
                <p className="text-[12px] text-dwl-body mt-2 leading-relaxed">{n.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOURCES ═══ */}
      <section className="border-t border-dwl-border">
        <div className="max-w-wide mx-auto px-6 md:px-10 py-section">
          <p className="micro-label mb-8">Sources &amp; Attribution</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOURCES.map((s) => (
              <div key={s.name} className="text-[12px]">
                <p className="text-dwl-black font-medium">{s.name}</p>
                <p className="text-dwl-muted mt-1">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-dwl-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[12px] text-dwl-muted">
              Data visualisation, cartography, and analysis: <strong className="text-dwl-black">Dancing with Lions</strong>
            </p>
            <p className="text-[11px] text-dwl-muted">
              &copy; Dancing with Lions 2026. All rights reserved.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
