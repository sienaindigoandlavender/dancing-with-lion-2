'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ROUTE_COUNTRIES, PIPELINE_ROUTE_COORDS, TSGP_ROUTE_COORDS,
  PIPELINE_COMPARISON, TIMELINE, SOURCES,
} from './data'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

// ── SCROLL STEPS ──────────────────────────────────
// Each step = one text panel. The map responds to whichever step is active.

interface ScrollStep {
  id: string
  flyTo?: { center: [number, number]; zoom: number; pitch?: number; bearing?: number; speed?: number }
  mapAction?: string
  title: string
  text: string
  stat?: string
  statLabel?: string
}

const SCROLL_STEPS: ScrollStep[] = [
  {
    id: 'intro',
    flyTo: { center: [-5, 15], zoom: 2.6, pitch: 0, bearing: 0, speed: 0.8 },
    mapAction: 'show-nothing',
    title: 'The Problem',
    text: 'Nigeria holds Africa\'s largest gas reserves — 206 trillion cubic feet. Most of it is flared or reinjected. Europe needs gas that doesn\'t come from Russia. Every country between Lagos and Tangier needs electricity.',
    stat: '206.53', statLabel: 'trillion cubic feet — Nigeria\'s proven reserves',
  },
  {
    id: 'two-routes',
    flyTo: { center: [-5, 15], zoom: 2.6, speed: 0.6 },
    mapAction: 'show-both-routes',
    title: 'Two Pipelines. One Resource.',
    text: 'Two competing projects aim to move Nigerian gas to Europe. The gold line runs along the Atlantic coast through 13 countries to Morocco. The red line crosses the Sahara through Niger to Algeria. Only one will likely reach completion.',
  },
  {
    id: 'nigeria',
    flyTo: { center: [3.4, 6.5], zoom: 6.5, pitch: 30, speed: 0.7 },
    mapAction: 'highlight-country-0',
    title: 'Lagos — Origin',
    text: 'The pipeline begins in Nigeria\'s Niger Delta, connecting to the existing Escravos–Lagos system. Nigeria\'s 230 million people sit on gas reserves that could power the continent. NNPCL holds 50% equity in the project.',
    stat: '230M', statLabel: 'population — Africa\'s most populous country',
  },
  {
    id: 'wagp',
    flyTo: { center: [0.5, 5.9], zoom: 5.5, pitch: 20, speed: 0.7 },
    mapAction: 'show-wagp-segment',
    title: 'The Existing Spine',
    text: 'The West African Gas Pipeline — 678 km, operational since 2011 — already carries Nigerian gas to Benin, Togo, and Ghana. The NMGP extends this westward. Not starting from scratch. Building on what exists.',
    stat: '678 km', statLabel: 'already operational (WAGP since 2011)',
  },
  {
    id: 'west-africa-francophone',
    flyTo: { center: [-8, 8], zoom: 4.5, pitch: 15, speed: 0.7 },
    mapAction: 'show-francophone',
    title: 'The Francophone Gap',
    text: 'From Côte d\'Ivoire to Senegal — six francophone countries, one lusophone, two anglophone. No other infrastructure project on the continent crosses all three linguistic zones. Guinea holds the world\'s largest bauxite reserves but no gas to process it. This pipeline changes that equation.',
    stat: '3', statLabel: 'linguistic zones crossed (EN · FR · PT)',
  },
  {
    id: 'liberia-sierra-leone',
    flyTo: { center: [-12, 7.5], zoom: 6, pitch: 20, speed: 0.7 },
    mapAction: 'highlight-low-access',
    title: 'The Darkest Stretch',
    text: 'Liberia: 28% electricity access. Sierra Leone: 26%. Among the lowest on Earth. For these post-conflict nations, gas-to-power isn\'t an upgrade — it\'s the difference between darkness and light. Pipeline transit revenue alone could exceed current government budgets.',
    stat: '26–28%', statLabel: 'electricity access — Liberia & Sierra Leone',
  },
  {
    id: 'mauritania-pivot',
    flyTo: { center: [-16, 18], zoom: 5.5, pitch: 15, speed: 0.7 },
    mapAction: 'show-phase1',
    title: 'The Northern Hinge',
    text: 'Mauritania sits where West Africa bends toward the Maghreb. Greater Tortue Ahmeyim reached first gas in late 2024. BirAllah holds 50+ trillion cubic feet — among Africa\'s largest undeveloped reserves. Phase 1 connects Morocco, Mauritania, and Senegal first.',
    stat: '50+ tcf', statLabel: 'BirAllah reserves — Mauritania',
  },
  {
    id: 'morocco-segment',
    flyTo: { center: [-10, 30], zoom: 4.8, pitch: 25, bearing: 10, speed: 0.7 },
    mapAction: 'show-morocco-segment',
    title: 'The Moroccan Backbone',
    text: '1,672 km from Nador in the northeast to Dakhla in the southwest. $6 billion for Phase 1. The Moroccan segment was the first to enter construction preparation. It connects to the existing Maghreb–Europe Pipeline at Tangier — and from there, directly into the European gas network.',
    stat: '$6B', statLabel: 'Phase 1 investment — Morocco segment',
  },
  {
    id: 'tangier-terminus',
    flyTo: { center: [-5.8, 35.76], zoom: 8, pitch: 45, bearing: -20, speed: 0.6 },
    mapAction: 'highlight-terminus',
    title: 'Tangier — The Gateway',
    text: 'Fourteen kilometres from Spain. The pipeline terminates here, connecting to the Maghreb–Europe Pipeline and the European gas network. Moroccan gas meets European demand. The Atlantic meets the Mediterranean. Africa meets Europe.',
    stat: '14 km', statLabel: 'from Europe — Strait of Gibraltar',
  },
  {
    id: 'rival',
    flyTo: { center: [5, 20], zoom: 3.2, pitch: 0, speed: 0.7 },
    mapAction: 'show-rival-route',
    title: 'The Saharan Rival',
    text: 'Algeria\'s Trans-Saharan Gas Pipeline: 4,128 km, $13 billion — shorter and cheaper. But it crosses the Sahel through military junta territory (AES). Russian security contractors have replaced Western forces. In February 2026, Algeria and Niger reconciled specifically to restart this project. Sonatrach will begin construction post-Ramadan.',
    stat: '$13B', statLabel: 'TSGP cost (vs $25B for NMGP)',
  },
  {
    id: 'zero-sum',
    flyTo: { center: [-2, 18], zoom: 2.8, pitch: 0, speed: 0.6 },
    mapAction: 'show-both-pulse',
    title: 'Only One Will Win',
    text: 'There is likely only enough Nigerian gas and European demand to justify one trans-continental pipeline. The Atlantic route is longer but politically stable, backed by the US and European institutions. The Saharan route is shorter but crosses the world\'s most volatile conflict zone, aligned with Russian-leaning security architecture.',
  },
  {
    id: 'finale',
    flyTo: { center: [-5, 15], zoom: 2.6, pitch: 0, speed: 0.5 },
    mapAction: 'show-full-network',
    title: '400 Million People',
    text: '16 countries. 3 landlocked nations via internal branches. 500 million people gaining electricity access through gas-to-power. Green hydrogen transport potential. The largest energy infrastructure project in African history — and it is being built now.',
    stat: '~400M', statLabel: 'people connected across 16 countries',
  },
]

// ── PAGE ────────────────────────────────────────

export default function TheAtlanticSpine() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [mapLoaded, setMapLoaded] = useState(false)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // ── SCROLLAMA-STYLE OBSERVER ──
  useEffect(() => {
    if (!mapLoaded) return
    const observers: IntersectionObserver[] = []
    stepRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting && entry.intersectionRatio > 0.4) setActiveStep(i) },
        { threshold: [0.4], rootMargin: '-30% 0px -30% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [mapLoaded])

  // ── MAP INIT ──
  useEffect(() => {
    if (!mapContainer.current || mapRef.current || !MAPBOX_TOKEN) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'; link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js'
    script.onload = () => {
      const mapboxgl = (window as any).mapboxgl
      if (!mapboxgl) return
      mapboxgl.accessToken = MAPBOX_TOKEN

      const map = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-5, 15], zoom: 2.6, pitch: 0, bearing: 0,
        interactive: true, attributionControl: false,
      })
      mapRef.current = map
      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')

      map.on('load', () => {
        // ── NMGP route ──
        map.addSource('nmgp-route', {
          type: 'geojson',
          data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: PIPELINE_ROUTE_COORDS } },
        })
        map.addLayer({ id: 'nmgp-glow', type: 'line', source: 'nmgp-route', paint: { 'line-color': '#F59E0B', 'line-width': 10, 'line-opacity': 0, 'line-blur': 8 } })
        map.addLayer({ id: 'nmgp-line', type: 'line', source: 'nmgp-route', paint: { 'line-color': '#F59E0B', 'line-width': 3, 'line-opacity': 0 } })

        // ── TSGP rival route ──
        map.addSource('tsgp-route', {
          type: 'geojson',
          data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: TSGP_ROUTE_COORDS } },
        })
        map.addLayer({ id: 'tsgp-line', type: 'line', source: 'tsgp-route', paint: { 'line-color': '#EF4444', 'line-width': 2.5, 'line-opacity': 0, 'line-dasharray': [4, 3] } })

        // ── WAGP existing segment (Lagos to Takoradi) ──
        map.addSource('wagp-route', {
          type: 'geojson',
          data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: PIPELINE_ROUTE_COORDS.slice(0, 5) } },
        })
        map.addLayer({ id: 'wagp-line', type: 'line', source: 'wagp-route', paint: { 'line-color': '#22C55E', 'line-width': 4, 'line-opacity': 0 } })

        // ── Phase 1 segment (Senegal to Morocco) ──
        map.addSource('phase1-route', {
          type: 'geojson',
          data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: PIPELINE_ROUTE_COORDS.slice(12) } },
        })
        map.addLayer({ id: 'phase1-line', type: 'line', source: 'phase1-route', paint: { 'line-color': '#60A5FA', 'line-width': 4, 'line-opacity': 0 } })

        // ── Country markers ──
        ROUTE_COUNTRIES.forEach((c) => {
          const el = document.createElement('div')
          const isTerminus = c.id === 'nigeria' || c.id === 'morocco'
          el.style.cssText = `width:${isTerminus ? 12 : 8}px;height:${isTerminus ? 12 : 8}px;border-radius:50%;background:#F59E0B;border:2px solid rgba(0,0,0,0.5);box-shadow:0 0 6px rgba(245,158,11,0.4);opacity:0;transition:opacity 0.6s;`
          el.setAttribute('data-country', c.id)
          const popup = new mapboxgl.Popup({ offset: 10, maxWidth: '240px', closeButton: false }).setHTML(
            `<div style="font-family:system-ui;padding:2px 0;"><p style="font-size:13px;font-weight:700;color:#0a0a0a;margin:0 0 3px;">${c.name}</p><p style="font-size:10px;color:#666;margin:0;line-height:1.4;">${c.note}</p></div>`
          )
          new mapboxgl.Marker(el).setLngLat(c.coords).setPopup(popup).addTo(map)
        })

        setMapLoaded(true)
      })
    }
    document.head.appendChild(script)
    return () => { mapRef.current?.remove(); mapRef.current = null }
  }, [])

  // ── MAP REACTIONS TO SCROLL ──
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapLoaded) return
    const step = SCROLL_STEPS[activeStep]
    if (!step) return

    if (step.flyTo) map.flyTo({ ...step.flyTo, essential: true })

    const setOp = (layer: string, val: number) => { try { map.setPaintProperty(layer, 'line-opacity', val) } catch {} }

    // Reset
    setOp('nmgp-glow', 0); setOp('nmgp-line', 0); setOp('tsgp-line', 0); setOp('wagp-line', 0); setOp('phase1-line', 0)
    document.querySelectorAll('[data-country]').forEach((el) => { (el as HTMLElement).style.opacity = '0' })

    const a = step.mapAction || ''
    const showMarkers = (ids: string[]) => ids.forEach((id) => { const el = document.querySelector(`[data-country="${id}"]`) as HTMLElement; if (el) el.style.opacity = '1' })
    const showAllMarkers = () => document.querySelectorAll('[data-country]').forEach((el) => { (el as HTMLElement).style.opacity = '1' })

    if (a === 'show-both-routes' || a === 'show-both-pulse' || a === 'show-full-network') {
      setOp('nmgp-glow', 0.35); setOp('nmgp-line', 0.9); setOp('tsgp-line', 0.6); showAllMarkers()
      if (a === 'show-full-network') { setOp('wagp-line', 0.5); setOp('phase1-line', 0.5) }
    }
    if (a === 'show-rival-route') { setOp('tsgp-line', 0.8); setOp('nmgp-line', 0.2); setOp('nmgp-glow', 0.1) }
    if (a === 'highlight-country-0') { setOp('nmgp-glow', 0.2); setOp('nmgp-line', 0.5); showMarkers(['nigeria']) }
    if (a === 'show-wagp-segment') { setOp('wagp-line', 0.9); setOp('nmgp-line', 0.25); setOp('nmgp-glow', 0.1); showMarkers(['nigeria', 'benin', 'togo', 'ghana']) }
    if (a === 'show-francophone') {
      setOp('nmgp-glow', 0.2); setOp('nmgp-line', 0.6)
      showMarkers(ROUTE_COUNTRIES.filter(c => c.language === 'Francophone' || c.language === 'Lusophone').map(c => c.id))
    }
    if (a === 'highlight-low-access') { setOp('nmgp-glow', 0.2); setOp('nmgp-line', 0.5); showMarkers(['liberia', 'sierra-leone']) }
    if (a === 'show-phase1') { setOp('phase1-line', 0.9); setOp('nmgp-line', 0.2); setOp('nmgp-glow', 0.1); showMarkers(['senegal', 'mauritania', 'morocco']) }
    if (a === 'show-morocco-segment') { setOp('nmgp-glow', 0.3); setOp('nmgp-line', 0.8); showMarkers(['morocco']) }
    if (a === 'highlight-terminus') { setOp('nmgp-glow', 0.35); setOp('nmgp-line', 0.9); showMarkers(['morocco']) }
  }, [activeStep, mapLoaded])

  return (
    <div className="pt-16">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-8 md:px-[8%] lg:px-[12%] pb-16" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1006 100%)' }}>
        <div className="relative z-10">
          <p className="text-[11px] uppercase tracking-[0.12em] mb-6" style={{ color: '#F59E0B' }}>Module 138 — Energy &amp; Geopolitical Intelligence</p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.85] tracking-[-0.03em] text-white">
            The Atlantic<br /><em>Spine</em>
          </h1>
          <p className="mt-10 max-w-[520px] text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            5,660 kilometres of pipeline. 13 countries. $25 billion. Lagos to Tangier 
            along the Atlantic coast. The largest energy infrastructure project in 
            African history — racing against a rival that crosses the Sahara.
          </p>
          <div className="mt-12 flex items-center gap-3">
            <div className="w-5 h-px" style={{ background: '#F59E0B' }} />
            <p className="text-[11px] uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.4)' }}>Scroll to explore the route</p>
          </div>
        </div>
      </section>

      {/* ═══ SCROLLYTELLING: STICKY MAP + TEXT PANELS ═══ */}
      <section className="relative" style={{ background: '#0a0a0a' }}>
        <div className="flex flex-col md:flex-row">

          {/* STICKY MAP — right 58% on desktop */}
          <div className="md:sticky md:top-0 md:h-screen md:w-[58%] w-full h-[50vh] md:order-2" style={{ zIndex: 1 }}>
            <div ref={mapContainer} className="w-full h-full" />
            {/* Legend */}
            <div className="absolute bottom-4 left-4 px-3 py-2 rounded" style={{ background: 'rgba(0,0,0,0.8)', fontFamily: 'monospace', fontSize: 10, color: '#ccc', lineHeight: 2.2, zIndex: 10 }}>
              <span style={{ display: 'inline-block', width: 16, height: 3, background: '#F59E0B', verticalAlign: 'middle', marginRight: 6 }} /> NMGP — Atlantic<br/>
              <span style={{ display: 'inline-block', width: 16, height: 0, borderBottom: '2px dashed #EF4444', verticalAlign: 'middle', marginRight: 6 }} /> TSGP — Trans-Saharan<br/>
              <span style={{ display: 'inline-block', width: 16, height: 3, background: '#22C55E', verticalAlign: 'middle', marginRight: 6 }} /> WAGP — Existing<br/>
              <span style={{ display: 'inline-block', width: 16, height: 3, background: '#60A5FA', verticalAlign: 'middle', marginRight: 6 }} /> Phase 1
            </div>
            {/* Step indicator */}
            <div className="absolute top-4 left-4 flex gap-1" style={{ zIndex: 10 }}>
              {SCROLL_STEPS.map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-500" style={{
                  width: activeStep === i ? 20 : 6, height: 6,
                  background: activeStep === i ? '#F59E0B' : 'rgba(255,255,255,0.2)',
                }} />
              ))}
            </div>
          </div>

          {/* SCROLL PANELS — left 42% */}
          <div className="md:w-[42%] w-full relative" style={{ zIndex: 2 }}>
            {SCROLL_STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[i] = el }}
                className="min-h-[85vh] flex items-center px-6 md:px-10 lg:px-14"
              >
                <div
                  className="max-w-[420px] py-12 transition-all duration-700"
                  style={{ opacity: activeStep === i ? 1 : 0.12, transform: activeStep === i ? 'translateY(0)' : 'translateY(12px)' }}
                >
                  {step.stat && (
                    <p className="font-serif text-[48px] md:text-[56px] italic leading-none mb-2" style={{ color: '#F59E0B' }}>
                      {step.stat}
                    </p>
                  )}
                  {step.statLabel && (
                    <p className="text-[10px] uppercase tracking-[0.1em] mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {step.statLabel}
                    </p>
                  )}
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-4 leading-tight">{step.title}</h3>
                  <p className="text-[14px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.78)' }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-4">Head to Head</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-12">Atlantic vs. Saharan</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr style={{ borderBottom: '2px solid #0a0a0a' }}>
                  <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.08em] text-[#737373] w-[28%]">Metric</th>
                  <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.08em]" style={{ color: '#B45309' }}>NMGP — Atlantic</th>
                  <th className="text-left py-3 pr-4 text-[10px] uppercase tracking-[0.08em]" style={{ color: '#DC2626' }}>TSGP — Saharan</th>
                </tr>
              </thead>
              <tbody>
                {PIPELINE_COMPARISON.map((row) => (
                  <tr key={row.metric} style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <td className="py-3 pr-4 text-[12px] text-[#737373] font-medium">{row.metric}</td>
                    <td className="py-3 pr-4 text-[13px] text-[#0a0a0a]">{row.nmgp}</td>
                    <td className="py-3 pr-4 text-[13px] text-[#525252]">{row.tsgp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section style={{ background: '#fafafa', borderTop: '1px solid #e5e5e5' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-4">Timeline</p>
          <h2 className="font-serif text-[28px] md:text-[36px] italic text-[#0a0a0a] leading-[1.05] mb-12">1982 — 2026</h2>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#e5e5e5]" />
            {TIMELINE.map((t, i) => {
              const color = t.significance === 'milestone' ? '#B45309' : t.significance === 'rivalry' ? '#DC2626' : t.significance === 'setback' ? '#737373' : t.significance === 'current' ? '#16A34A' : '#2563EB'
              return (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="shrink-0">
                    <div className="w-[14px] h-[14px] rounded-full border-2" style={{ borderColor: color, background: t.significance === 'current' ? color : 'transparent' }} />
                  </div>
                  <div className="pb-1">
                    <p className="font-mono text-[11px] font-bold mb-1" style={{ color }}>{t.year}</p>
                    <p className="text-[13px] text-[#525252] leading-relaxed">{t.event}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ SOURCES ═══ */}
      <section className="bg-white" style={{ borderTop: '1px solid #e5e5e5' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16">
          <p className="text-[10px] uppercase tracking-[0.12em] text-[#737373] mb-8">Sources &amp; Attribution</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOURCES.map((s) => (
              <div key={s.name} className="text-[12px]">
                <p className="text-[#0a0a0a] font-medium">{s.name}</p>
                <p className="text-[#737373] mt-1">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderTop: '1px solid #e5e5e5' }}>
            <p className="text-[12px] text-[#737373]">Data visualisation, cartography, and analysis: <strong className="text-[#0a0a0a]">Dancing with Lions</strong></p>
            <p className="text-[11px] text-[#737373]">&copy; Dancing with Lions 2026</p>
          </div>
        </div>
      </section>
    </div>
  )
}
