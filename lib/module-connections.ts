// ─────────────────────────────────────────────────
// DWL Module Connection Graph
// Maps thematic, geographic, and narrative links between all modules
// ─────────────────────────────────────────────────

export interface ModuleLink {
  id: string
  reason: string  // short label like "trade route", "same dynasty", "sequel"
}

// Each key is a module id, value is array of connected modules
// Connections are directional but should be reciprocal in most cases
export const MODULE_CONNECTIONS: Record<string, ModuleLink[]> = {

  // ═══ 001–010 ═══
  'maghreb-compared': [
    { id: 'morocco-economy', reason: 'GDP deep dive' },
    { id: 'ottoman-north-africa', reason: 'why Morocco diverged' },
    { id: 'the-empty-quarter', reason: 'Saharan nations compared' },
    { id: 'africa-rising', reason: 'continental ranking' },
  ],
  'morocco-population': [
    { id: 'morocco-3d-population', reason: '3D density view' },
    { id: 'demographic-atlas', reason: 'regional demographics' },
    { id: 'the-demographic-dividend', reason: 'Africa population arc' },
  ],
  'al-andalus': [
    { id: 'islamic-spain', reason: '781 years — the full timeline' },
    { id: 'reconquista-exodus', reason: 'the expulsion' },
    { id: 'the-14-kilometres', reason: '14 km between two worlds' },
    { id: 'almohad-atlas', reason: 'the empire that built both sides' },
    { id: 'musical-traditions', reason: 'Andalusi music survived the crossing' },
    { id: 'oldest-universities', reason: 'Al-Qarawiyyin knowledge exchange' },
  ],
  'morocco-economy': [
    { id: 'phosphate-kingdom', reason: '70% of world reserves' },
    { id: 'phosphate-equation', reason: 'geopolitics of phosphate' },
    { id: 'automotive-industry', reason: 'Africa\'s #1 car producer' },
    { id: 'port-strategy', reason: 'trade infrastructure' },
    { id: 'dirhams-journey', reason: 'the currency' },
    { id: 'africa-rising', reason: 'continental context' },
  ],
  'morocco-agriculture': [
    { id: 'seasonal-produce', reason: 'what\'s in season' },
    { id: 'harvest-calendar', reason: 'the living clock' },
    { id: 'olive-oil-economy', reason: 'olive terroirs' },
    { id: 'argan-triangle', reason: 'the argan biosphere' },
    { id: 'date-palm-oases', reason: 'oasis agriculture' },
    { id: 'the-food-equation', reason: 'Africa\'s food paradox' },
  ],
  'water-crisis': [
    { id: 'water-equation', reason: 'the dam storage data' },
    { id: 'before-the-sahara', reason: 'desertification' },
    { id: 'gardens-of-morocco', reason: 'khettara irrigation' },
    { id: 'date-palm-oases', reason: 'oasis water systems' },
    { id: 'the-vertical-migration', reason: 'agdal water management' },
  ],
  'dynasty-timeline': [
    { id: 'imperial-cities', reason: 'each dynasty chose a capital' },
    { id: 'almohad-atlas', reason: 'the empire that built everything' },
    { id: 'timeline-of-morocco', reason: 'the complete timeline' },
    { id: 'french-protectorate', reason: 'the colonial rupture' },
    { id: 'before-the-crescent', reason: 'before Islam arrived' },
  ],
  'seasonal-produce': [
    { id: 'morocco-agriculture', reason: 'export data' },
    { id: 'harvest-calendar', reason: 'the living clock' },
    { id: 'tagine-atlas', reason: 'what to cook with it' },
    { id: 'the-apothecary', reason: 'medicinal plants' },
  ],
  'medina-atlas': [
    { id: 'gates-of-marrakech', reason: 'the 19 babs' },
    { id: 'pulse-medina', reason: 'the daily rhythm' },
    { id: 'medina-data', reason: 'the seven rings' },
    { id: 'souk-decoded', reason: 'how the market works' },
    { id: 'anatomy-of-a-riad', reason: 'the courtyard house' },
  ],
  'spice-map': [
    { id: 'spice-routes', reason: 'where each spice came from' },
    { id: 'the-apothecary', reason: 'the living pharmacopoeia' },
    { id: 'the-sacred-smoke', reason: 'incense and bkhour' },
    { id: 'tagine-atlas', reason: 'spices in the tagine' },
    { id: 'scent-atlas', reason: 'Morocco in scent' },
  ],

  // ═══ 011–020 ═══
  'amazigh-identity': [
    { id: 'the-free-people', reason: 'language and territory' },
    { id: 'languages-of-morocco', reason: 'the linguistic landscape' },
    { id: 'yennayer', reason: 'the Amazigh new year' },
    { id: 'moroccan-genome', reason: 'E-M81 haplogroup' },
    { id: 'the-shared-grandmother', reason: 'DNA link to the Sámi' },
    { id: 'the-guanche-ghost', reason: 'Berbers of the Atlantic' },
    { id: 'the-ungovernable-pattern', reason: 'assembly governance' },
    { id: 'carpet-atlas', reason: 'tribal textile traditions' },
    { id: 'before-the-crescent', reason: '315,000 years before Islam' },
  ],
  'phosphate-kingdom': [
    { id: 'phosphate-equation', reason: 'the geopolitics' },
    { id: 'morocco-economy', reason: 'economic context' },
    { id: 'dust-that-feeds', reason: 'phosphorus feeds the Amazon' },
    { id: 'the-food-equation', reason: 'fertiliser feeds Africa' },
  ],
  'moroccan-diaspora': [
    { id: 'marriage-economy', reason: 'what a wedding costs' },
    { id: 'demographic-atlas', reason: 'population data' },
    { id: 'the-demographic-dividend', reason: 'Africa\'s youth bulge' },
  ],
  'world-cup-2030': [
    { id: 'world-cup-blueprint', reason: 'the economic blueprint' },
    { id: 'the-build', reason: 'infrastructure timeline' },
    { id: 'the-14-kilometres', reason: 'both shores host 2030' },
  ],
  'tgv-rail-network': [
    { id: 'high-speed-horizon', reason: 'how TGV shrinks distance' },
    { id: 'the-build', reason: 'infrastructure timeline' },
    { id: 'the-infrastructure-revolution', reason: 'Africa megaprojects' },
  ],
  'solar-atlas': [
    { id: 'solar-compass', reason: 'Noor-Ouarzazate mechanics' },
    { id: 'wind-and-sun', reason: 'all renewables mapped' },
    { id: 'the-energy-paradox', reason: 'Africa\'s solar contradiction' },
  ],
  'literary-morocco': [
    { id: 'the-creative-economy', reason: 'Africa\'s cultural output' },
    { id: 'cinema-morocco', reason: 'filmed in Morocco' },
    { id: 'languages-of-morocco', reason: 'what they wrote in' },
  ],
  'geometry-of-zellige': [
    { id: 'digital-zellige', reason: 'zellige in the digital age' },
    { id: 'geometry-of-culture', reason: 'six star families' },
    { id: 'colour-index', reason: 'the pigments' },
    { id: 'anatomy-of-a-riad', reason: 'zellige in the house' },
    { id: 'almohad-atlas', reason: 'who built the masterworks' },
  ],
  'port-strategy': [
    { id: 'morocco-economy', reason: 'trade context' },
    { id: 'automotive-industry', reason: 'export corridor' },
    { id: 'the-infrastructure-revolution', reason: 'Africa megaprojects' },
    { id: 'the-atlantic-spine', reason: 'the gas pipeline' },
    { id: 'the-trade-revolution', reason: 'AfCFTA trade flows' },
  ],
  'carpet-atlas': [
    { id: 'carpet-code', reason: 'the visual language' },
    { id: 'amazigh-identity', reason: 'tribal traditions' },
    { id: 'alphabet-of-craft', reason: 'A to Z of making' },
    { id: 'colour-index', reason: 'natural dyes' },
  ],

  // ═══ 021–030 ═══
  'musical-traditions': [
    { id: 'the-gnawa-road', reason: 'from West Africa to Essaouira' },
    { id: 'al-andalus', reason: 'Andalusi tradition crossed the strait' },
    { id: 'the-creative-economy', reason: 'Afrobeats and beyond' },
  ],
  'olive-oil-economy': [
    { id: 'morocco-agriculture', reason: 'the export picture' },
    { id: 'before-the-crescent', reason: 'Romans grew olives here' },
    { id: 'roma-africana', reason: 'olive oil fed Rome' },
  ],
  'imperial-cities': [
    { id: 'dynasty-timeline', reason: 'each dynasty, each capital' },
    { id: 'almohad-atlas', reason: 'Marrakech and Rabat' },
    { id: 'gates-of-marrakech', reason: 'the Almohad walls' },
    { id: 'medina-atlas', reason: 'mapping the old cities' },
  ],
  'ramadan-moon': [
    { id: 'moroccan-calendar', reason: 'three calendars in one country' },
    { id: 'couscous-friday', reason: 'the sacred Friday meal' },
    { id: 'bread-of-morocco', reason: 'the sacred food' },
  ],
  'trans-saharan-trade': [
    { id: 'the-gnawa-road', reason: 'slave routes and music' },
    { id: 'the-ship-of-the-desert', reason: 'the camel that made it possible' },
    { id: 'the-blood-gold', reason: 'gold extraction continues' },
    { id: 'the-cacao-equation', reason: 'commodity transplant' },
    { id: 'the-coffee-covenant', reason: 'stolen genetics' },
    { id: 'migration-routes', reason: 'routes that never closed' },
  ],
  'argan-triangle': [
    { id: 'argan-constellation', reason: 'the labour of extraction' },
    { id: 'morocco-agriculture', reason: 'export context' },
    { id: 'scent-atlas', reason: 'argan in cosmetics' },
  ],
  'cinema-morocco': [
    { id: 'literary-morocco', reason: 'the written Morocco' },
    { id: 'route-thousand-kasbahs', reason: 'filming locations' },
    { id: 'the-creative-economy', reason: 'Africa\'s creative output' },
  ],
  'moroccan-tea': [
    { id: 'the-tea-road', reason: 'China → Morocco: the full trade data' },
    { id: 'tea-ceremony', reason: 'the six-step topology' },
    { id: 'spice-routes', reason: 'trade routes to the souk' },
    { id: 'the-silk-road-into-africa', reason: 'Belt & Road tea factory' },
  ],
  'french-protectorate': [
    { id: 'dynasty-timeline', reason: 'the dynasty it interrupted' },
    { id: 'timeline-of-morocco', reason: 'the full timeline' },
    { id: 'the-14-kilometres', reason: 'the colonial crossing' },
    { id: 'languages-of-morocco', reason: 'why French persists' },
  ],
  'hammam-culture': [
    { id: 'waters-of-empire', reason: 'from Roman thermae to hammam' },
    { id: 'hammam-geometry', reason: 'the architectural diagram' },
    { id: 'anatomy-of-a-riad', reason: 'the medina home' },
    { id: 'shadow-moucharabieh', reason: 'passive cooling' },
  ],

  // ═══ 031–040 ═══
  'storks-eye-view': [
    { id: 'bird-atlas', reason: 'North Africa\'s IBAs' },
    { id: 'wildlife-atlas', reason: 'Morocco\'s species' },
    { id: 'the-14-kilometres', reason: 'Gibraltar flyway' },
  ],
  'anatomy-of-a-riad': [
    { id: 'geometry-of-zellige', reason: 'the tilework' },
    { id: 'shadow-moucharabieh', reason: 'the screens' },
    { id: 'colour-index', reason: 'the pigments' },
    { id: 'gardens-of-morocco', reason: 'the courtyard garden' },
    { id: 'hammam-culture', reason: 'the hammam element' },
    { id: 'medina-data', reason: 'the urban context' },
  ],
  'cannabis-rif': [
    { id: 'chameleon-country', reason: 'the Rif personality' },
    { id: 'amazigh-identity', reason: 'Tarifit-speaking north' },
  ],
  'atlantic-coast': [
    { id: 'surf-coast', reason: 'the surf breaks' },
    { id: 'sardine-current', reason: 'the Canary Current' },
    { id: 'port-strategy', reason: 'coastal infrastructure' },
    { id: 'wind-and-sun', reason: 'coastal wind farms' },
  ],
  'date-palm-oases': [
    { id: 'water-crisis', reason: 'the water that feeds them' },
    { id: 'before-the-sahara', reason: 'desertification threat' },
    { id: 'route-thousand-kasbahs', reason: 'Drâa-Tafilalet architecture' },
    { id: 'the-vertical-migration', reason: 'transhumance routes' },
  ],
  'tanneries': [
    { id: 'alphabet-of-craft', reason: 'the craft traditions' },
    { id: 'colour-index', reason: 'natural dyes' },
    { id: 'souk-decoded', reason: 'the guild system' },
    { id: 'moroccan-fashion', reason: 'babouche leather' },
  ],
  'jewish-heritage': [
    { id: 'jewish-atlas', reason: 'the full mapping' },
    { id: 'reconquista-exodus', reason: 'the 1492 expulsion' },
    { id: 'al-andalus', reason: 'coexistence in Iberia' },
    { id: 'what-solomon-knew', reason: 'Solomon\'s temple' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'the biblical Amazigh' },
  ],
  'moroccan-fashion': [
    { id: 'carpet-code', reason: 'textile traditions' },
    { id: 'tanneries', reason: 'the leather source' },
    { id: 'colour-index', reason: 'dye and pigment' },
    { id: 'wedding-atlas', reason: 'seven outfits' },
    { id: 'the-creative-economy', reason: 'Africa\'s fashion scene' },
  ],
  'route-thousand-kasbahs': [
    { id: 'cinema-morocco', reason: 'filming locations' },
    { id: 'date-palm-oases', reason: 'the Drâa Valley' },
    { id: 'atlas-mountains', reason: 'the geography' },
    { id: 'not-all-desert-is-sand', reason: 'desert types' },
  ],
  'couscous-friday': [
    { id: 'bread-of-morocco', reason: 'the sacred foods' },
    { id: 'tagine-atlas', reason: 'regional cooking' },
    { id: 'ramadan-moon', reason: 'ritual and food' },
    { id: 'amazigh-identity', reason: 'seksu is Amazigh' },
  ],

  // ═══ 041–060 ═══
  'automotive-industry': [
    { id: 'morocco-economy', reason: 'the industrial engine' },
    { id: 'port-strategy', reason: 'export logistics' },
    { id: 'tgv-rail-network', reason: 'Tangier-Kenitra corridor' },
  ],
  'tagine-atlas': [
    { id: 'spice-map', reason: 'what goes in' },
    { id: 'seasonal-produce', reason: 'what\'s in season' },
    { id: 'couscous-friday', reason: 'the other essential dish' },
    { id: 'olive-oil-economy', reason: 'the oil base' },
  ],
  'atlas-mountains': [
    { id: 'four-peaks', reason: 'the four summits' },
    { id: 'the-vertical-migration', reason: 'transhumance routes' },
    { id: 'route-thousand-kasbahs', reason: 'the southern slopes' },
    { id: 'not-all-desert-is-sand', reason: 'beyond the mountains' },
  ],
  'bread-of-morocco': [
    { id: 'couscous-friday', reason: 'the sacred grain' },
    { id: 'the-food-equation', reason: 'wheat imports' },
  ],
  'oldest-universities': [
    { id: 'al-andalus', reason: 'knowledge bridge' },
    { id: 'dynasty-timeline', reason: 'who built them' },
    { id: 'the-education-gap', reason: 'Africa\'s education paradox' },
  ],
  'not-all-desert-is-sand': [
    { id: 'the-empty-quarter', reason: 'Saharan nations compared' },
    { id: 'the-green-sahara', reason: 'when it was green' },
    { id: 'dust-that-feeds', reason: 'what the dust carries' },
    { id: 'the-ship-of-the-desert', reason: 'life in the desert' },
  ],
  'souk-decoded': [
    { id: 'medina-atlas', reason: 'the medina map' },
    { id: 'pulse-medina', reason: 'daily rhythms' },
    { id: 'alphabet-of-craft', reason: 'what\'s sold' },
    { id: 'spice-map', reason: 'the spice souk' },
    { id: 'dirhams-journey', reason: 'the currency' },
  ],
  'pottery-traditions': [
    { id: 'alphabet-of-craft', reason: 'A to Z of making' },
    { id: 'colour-index', reason: 'Tamegroute green, Fes blue' },
    { id: 'tanneries', reason: 'Fes craft districts' },
  ],
  'before-the-sahara': [
    { id: 'water-crisis', reason: 'the water data' },
    { id: 'the-green-sahara', reason: 'when it was green' },
    { id: 'the-vertical-migration', reason: 'agdal ecology' },
  ],
  'bird-atlas': [
    { id: 'storks-eye-view', reason: 'the stork migration' },
    { id: 'wildlife-atlas', reason: 'all species mapped' },
    { id: 'the-gorilla-dividend', reason: 'wildlife economics' },
  ],
  'islamic-spain': [
    { id: 'al-andalus', reason: 'the cultural bridge' },
    { id: 'reconquista-exodus', reason: 'the end' },
    { id: 'almohad-atlas', reason: 'the dynasty that unified both' },
    { id: 'the-14-kilometres', reason: 'the crossing' },
  ],
  'the-gnawa-road': [
    { id: 'musical-traditions', reason: 'Morocco\'s eight traditions' },
    { id: 'trans-saharan-trade', reason: 'the slave routes' },
    { id: 'seven-saints', reason: 'Sufi sacred geography' },
    { id: 'zaouia-map', reason: 'the brotherhood network' },
    { id: 'the-sacred-smoke', reason: 'incense in the lila' },
    { id: 'the-creative-economy', reason: 'Africa\'s musical export' },
  ],
  'gardens-of-morocco': [
    { id: 'water-crisis', reason: 'khettara irrigation' },
    { id: 'anatomy-of-a-riad', reason: 'the courtyard garden' },
    { id: 'almohad-atlas', reason: 'Almohad water engineering' },
    { id: 'colour-index', reason: 'Majorelle Blue' },
  ],
  'migration-routes': [
    { id: 'the-14-kilometres', reason: 'the crossing' },
    { id: 'the-demographic-dividend', reason: 'population pressure' },
    { id: 'trans-saharan-trade', reason: 'routes that never closed' },
    { id: 'the-sahel-war', reason: 'conflict drives migration' },
  ],
  'waters-of-empire': [
    { id: 'hammam-culture', reason: 'the living tradition' },
    { id: 'hammam-geometry', reason: 'the architecture' },
    { id: 'rome-north-africa', reason: 'Roman thermae' },
    { id: 'before-the-crescent', reason: 'pre-Islamic bathing' },
  ],
  'before-the-crescent': [
    { id: 'dynasty-timeline', reason: 'what came after' },
    { id: 'amazigh-identity', reason: 'the people who outlasted' },
    { id: 'carthage', reason: 'Punic North Africa' },
    { id: 'rome-north-africa', reason: 'Roman provinces' },
    { id: 'moroccan-genome', reason: 'genetic deep time' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'the biblical record' },
  ],

  // ═══ 061–080 ═══
  'gates-of-marrakech': [
    { id: 'medina-atlas', reason: 'the full medina map' },
    { id: 'almohad-atlas', reason: 'who built the walls' },
    { id: 'seven-saints', reason: 'sacred Marrakech' },
  ],
  'almohad-atlas': [
    { id: 'dynasty-timeline', reason: 'the dynasty' },
    { id: 'islamic-spain', reason: 'Seville and Rabat' },
    { id: 'gates-of-marrakech', reason: 'the walls they built' },
    { id: 'geometry-of-zellige', reason: 'the geometric art' },
    { id: 'gardens-of-morocco', reason: 'Almohad irrigation' },
  ],
  'the-14-kilometres': [
    { id: 'al-andalus', reason: 'the cultural bridge' },
    { id: 'islamic-spain', reason: '711 crossing' },
    { id: 'reconquista-exodus', reason: '1492 return' },
    { id: 'migration-routes', reason: 'modern crossings' },
    { id: 'storks-eye-view', reason: 'the flyway' },
    { id: 'sardine-current', reason: 'the current' },
    { id: 'world-cup-2030', reason: 'both shores host 2030' },
  ],
  'reconquista-exodus': [
    { id: 'al-andalus', reason: 'what was lost' },
    { id: 'islamic-spain', reason: 'the full timeline' },
    { id: 'jewish-heritage', reason: 'the Sephardic exodus' },
    { id: 'jewish-atlas', reason: 'mellahs and settlement' },
    { id: 'the-14-kilometres', reason: 'the crossing south' },
  ],
  'jewish-atlas': [
    { id: 'jewish-heritage', reason: 'the heritage overview' },
    { id: 'reconquista-exodus', reason: 'the 1492 wave' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'the biblical connection' },
    { id: 'what-solomon-knew', reason: 'Solomon and the Temple' },
  ],
  'ottoman-north-africa': [
    { id: 'maghreb-compared', reason: 'why Morocco differs' },
    { id: 'dynasty-timeline', reason: 'Saadian resistance' },
    { id: 'hannibals-march', reason: 'ancient power in North Africa' },
  ],
  'africa-rising': [
    { id: 'morocco-economy', reason: 'Morocco ranked' },
    { id: 'the-demographic-dividend', reason: 'the youth bulge' },
    { id: 'the-infrastructure-revolution', reason: 'what\'s being built' },
    { id: 'the-trade-revolution', reason: 'AfCFTA' },
    { id: 'the-tech-leapfrog', reason: 'the digital leap' },
  ],
  'tourism-flow': [
    { id: 'the-long-rise', reason: 'the growth curve' },
    { id: 'world-cup-2030', reason: 'the 2030 catalyst' },
    { id: 'the-nomad-pulse', reason: 'the digital nomad wave' },
  ],
  'carthage': [
    { id: 'hannibals-march', reason: 'the march that changed history' },
    { id: 'rome-north-africa', reason: 'what Rome built on the ruins' },
    { id: 'before-the-crescent', reason: 'pre-Islamic civilisations' },
    { id: 'sardine-current', reason: 'Phoenician fishing' },
  ],
  'rome-north-africa': [
    { id: 'roma-africana', reason: 'the complete footprint' },
    { id: 'carthage', reason: 'what came before' },
    { id: 'waters-of-empire', reason: 'Roman thermae' },
    { id: 'before-the-crescent', reason: 'pre-Islamic layering' },
    { id: 'olive-oil-economy', reason: 'the oil that fed Rome' },
    { id: 'the-horses-of-morocco', reason: 'Numidian cavalry' },
  ],
  'roma-africana': [
    { id: 'rome-north-africa', reason: 'the overview' },
    { id: 'hannibals-march', reason: 'the Punic enemy' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'Augustine, Tertullian' },
  ],
  'carpet-code': [
    { id: 'carpet-atlas', reason: 'regional traditions' },
    { id: 'amazigh-identity', reason: 'tribal motifs' },
    { id: 'colour-index', reason: 'dye sources' },
    { id: 'alphabet-of-craft', reason: 'the craft ecosystem' },
  ],
  'colour-index': [
    { id: 'geometry-of-zellige', reason: 'the tilework' },
    { id: 'pottery-traditions', reason: 'Tamegroute green' },
    { id: 'tanneries', reason: 'leather dyes' },
    { id: 'carpet-code', reason: 'wool dyes' },
    { id: 'gardens-of-morocco', reason: 'Majorelle Blue' },
  ],

  // ═══ 081–100 ═══
  'geometry-of-culture': [
    { id: 'geometry-of-zellige', reason: 'the mathematics' },
    { id: 'digital-zellige', reason: 'modern applications' },
    { id: 'almohad-atlas', reason: 'the masterworks' },
  ],
  'shadow-moucharabieh': [
    { id: 'anatomy-of-a-riad', reason: 'the house element' },
    { id: 'hammam-geometry', reason: 'passive systems' },
    { id: 'solar-atlas', reason: 'light and heat' },
  ],
  'languages-of-morocco': [
    { id: 'amazigh-identity', reason: 'the Amazigh languages' },
    { id: 'the-free-people', reason: 'language territory' },
    { id: 'literary-morocco', reason: 'what they wrote in' },
    { id: 'french-protectorate', reason: 'why French persists' },
  ],
  'seven-saints': [
    { id: 'zaouia-map', reason: 'the brotherhood network' },
    { id: 'the-gnawa-road', reason: 'Sufi connections' },
    { id: 'the-sacred-smoke', reason: 'incense in devotion' },
  ],
  'zaouia-map': [
    { id: 'seven-saints', reason: 'the Marrakech pilgrimage' },
    { id: 'the-gnawa-road', reason: 'spiritual lineage' },
    { id: 'the-sacred-smoke', reason: 'devotional practice' },
  ],
  'scent-atlas': [
    { id: 'the-sacred-smoke', reason: 'bkhour and incense' },
    { id: 'spice-map', reason: 'aromatic spices' },
    { id: 'argan-triangle', reason: 'argan in cosmetics' },
    { id: 'the-apothecary', reason: 'the pharmacopoeia' },
  ],
  'spice-routes': [
    { id: 'spice-map', reason: 'Morocco\'s spice map' },
    { id: 'trans-saharan-trade', reason: 'the trade network' },
    { id: 'the-tea-road', reason: 'tea as traded commodity' },
    { id: 'the-coffee-covenant', reason: 'coffee trade routes' },
    { id: 'the-vanilla-orchid', reason: 'vanilla as spice' },
    { id: 'the-cacao-equation', reason: 'cacao as commodity' },
  ],
  'tea-ceremony': [
    { id: 'moroccan-tea', reason: 'the anatomy' },
    { id: 'the-tea-road', reason: 'China → Morocco trade data' },
    { id: 'the-sacred-smoke', reason: 'ritual practice' },
  ],
  'the-empty-quarter': [
    { id: 'not-all-desert-is-sand', reason: 'desert types' },
    { id: 'the-green-sahara', reason: 'when it was green' },
    { id: 'maghreb-compared', reason: 'the nations' },
  ],
  'the-free-people': [
    { id: 'amazigh-identity', reason: 'language and script' },
    { id: 'the-ungovernable-pattern', reason: 'assembly governance' },
    { id: 'the-last-nomads', reason: 'nomadic Amazigh' },
    { id: 'the-guanche-ghost', reason: 'the Atlantic Berbers' },
    { id: 'yennayer', reason: 'the calendar' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'in the Bible' },
  ],
  'the-nomad-pulse': [
    { id: 'tourism-flow', reason: 'visitor flows' },
    { id: 'the-tech-leapfrog', reason: 'digital infrastructure' },
  ],
  'timeline-of-morocco': [
    { id: 'dynasty-timeline', reason: 'the dynasties' },
    { id: 'before-the-crescent', reason: 'pre-Islamic era' },
    { id: 'french-protectorate', reason: 'the colonial chapter' },
  ],
  'who-is-the-goat': [
    { id: 'trans-saharan-trade', reason: 'Ibn Battuta\'s routes' },
    { id: 'the-silk-road-into-africa', reason: 'the modern Silk Road' },
    { id: 'the-ship-of-the-desert', reason: 'the caravan animal' },
  ],
  'wildlife-atlas': [
    { id: 'the-last-lions', reason: 'the Barbary lion' },
    { id: 'bird-atlas', reason: 'the avian atlas' },
    { id: 'the-horses-of-morocco', reason: 'equine heritage' },
    { id: 'the-conservation-deficit', reason: 'the funding gap' },
  ],

  // ═══ 101–120 ═══
  'alphabet-of-craft': [
    { id: 'carpet-atlas', reason: 'textiles' },
    { id: 'tanneries', reason: 'leather' },
    { id: 'pottery-traditions', reason: 'ceramics' },
    { id: 'souk-decoded', reason: 'where it\'s sold' },
  ],
  'the-apothecary': [
    { id: 'spice-map', reason: 'the aromatic overlap' },
    { id: 'scent-atlas', reason: 'olfactory Morocco' },
    { id: 'the-sacred-smoke', reason: 'harmel and fassoukh' },
    { id: 'the-health-leapfrog', reason: 'traditional meets modern' },
  ],
  'dust-that-feeds': [
    { id: 'the-green-sahara', reason: 'prequel: when it was green' },
    { id: 'phosphate-kingdom', reason: 'phosphorus connection' },
    { id: 'not-all-desert-is-sand', reason: 'desert science' },
    { id: 'eye-of-africa', reason: 'Saharan geology' },
    { id: 'the-food-equation', reason: 'feeding systems' },
  ],
  'phosphate-equation': [
    { id: 'phosphate-kingdom', reason: 'the reserves' },
    { id: 'dust-that-feeds', reason: 'phosphorus cycles' },
    { id: 'the-food-equation', reason: 'fertiliser and food' },
  ],
  'sardine-current': [
    { id: 'atlantic-coast', reason: 'the coastline' },
    { id: 'the-14-kilometres', reason: 'the strait' },
    { id: 'carthage', reason: 'Phoenician fishing' },
    { id: 'the-food-equation', reason: 'food security' },
  ],
  'the-14-kilometres-dup': [],  // skip duplicates in search index
  'the-gnawa-road-dup': [],
  'the-last-lions': [
    { id: 'the-lions-road', reason: 'how the lion symbol travelled' },
    { id: 'wildlife-atlas', reason: 'Morocco\'s species' },
    { id: 'the-conservation-deficit', reason: 'the funding gap' },
    { id: 'the-horses-of-morocco', reason: 'Barbary animals' },
    { id: 'the-lion-guardians', reason: 'saving lions elsewhere' },
  ],
  'hannibals-march': [
    { id: 'carthage', reason: 'the empire he fought for' },
    { id: 'rome-north-africa', reason: 'the enemy' },
    { id: 'the-horses-of-morocco', reason: 'Numidian cavalry at Cannae' },
    { id: 'the-ship-of-the-desert', reason: 'the elephants' },
  ],
  'yennayer': [
    { id: 'amazigh-identity', reason: 'the people' },
    { id: 'the-free-people', reason: 'language and territory' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'Sheshonq in the Bible' },
    { id: 'moroccan-calendar', reason: 'three calendars' },
    { id: 'the-guanche-ghost', reason: 'the Atlantic Berbers' },
  ],
  'the-green-sahara': [
    { id: 'dust-that-feeds', reason: 'sequel: the dust that remains' },
    { id: 'not-all-desert-is-sand', reason: 'desert types' },
    { id: 'the-memory-in-the-stone', reason: 'rock art from the green era' },
    { id: 'eye-of-africa', reason: 'Saharan geology' },
    { id: 'the-ship-of-the-desert', reason: 'life after the green' },
  ],
  'from-the-land-of-the-setting-sun': [
    { id: 'amazigh-identity', reason: 'the Amazigh people' },
    { id: 'yennayer', reason: 'Sheshonq in Jerusalem' },
    { id: 'what-solomon-knew', reason: 'Solomon\'s temple' },
    { id: 'the-queen-who-did-not-kneel', reason: 'Sheba in the Bible' },
    { id: 'the-son-who-took-the-fire', reason: 'the Kebra Nagast' },
    { id: 'before-the-crescent', reason: 'pre-Islamic North Africa' },
    { id: 'roma-africana', reason: 'Augustine and Tertullian' },
  ],
  'the-shared-grandmother': [
    { id: 'amazigh-identity', reason: 'Amazigh genetics' },
    { id: 'moroccan-genome', reason: 'DNA deep dive' },
    { id: 'the-ungovernable-pattern', reason: 'Amazigh + Sámi governance' },
    { id: 'the-last-nomads', reason: 'Sámi herders' },
  ],
  'the-guanche-ghost': [
    { id: 'amazigh-identity', reason: 'Berber origins' },
    { id: 'yennayer', reason: 'shared heritage' },
    { id: 'the-free-people', reason: 'the diaspora' },
    { id: 'the-cacao-equation', reason: 'colonial template for the Americas' },
    { id: 'the-vanilla-orchid', reason: 'colonial plantation model' },
  ],
  'the-ungovernable-pattern': [
    { id: 'amazigh-identity', reason: 'the jemâa assembly' },
    { id: 'the-free-people', reason: 'the Amazigh case' },
    { id: 'the-last-nomads', reason: 'mobile peoples' },
    { id: 'the-shared-grandmother', reason: 'Amazigh + Sámi' },
    { id: 'the-stone-language', reason: 'convergent evolution' },
    { id: 'the-vertical-migration', reason: 'agdal governance' },
  ],
  'the-sacred-smoke': [
    { id: 'the-queen-who-did-not-kneel', reason: 'frankincense trade' },
    { id: 'what-solomon-knew', reason: 'the Temple incense' },
    { id: 'spice-map', reason: 'aromatic ingredients' },
    { id: 'scent-atlas', reason: 'olfactory map' },
    { id: 'the-gnawa-road', reason: 'incense in the lila' },
    { id: 'the-stone-language', reason: 'convergent sacred practice' },
    { id: 'trans-saharan-trade', reason: 'incense routes' },
  ],
  'the-ship-of-the-desert': [
    { id: 'trans-saharan-trade', reason: 'the trade it enabled' },
    { id: 'the-last-nomads', reason: 'nomadic pastoralism' },
    { id: 'not-all-desert-is-sand', reason: 'desert ecology' },
    { id: 'hannibals-march', reason: 'elephants too' },
    { id: 'the-lions-road', reason: 'Silk Road animals' },
  ],
  'the-last-nomads': [
    { id: 'the-vertical-migration', reason: 'Atlas transhumance' },
    { id: 'the-ship-of-the-desert', reason: 'the camel' },
    { id: 'the-ungovernable-pattern', reason: 'decentralised governance' },
    { id: 'the-shared-grandmother', reason: 'Sámi herders' },
    { id: 'amazigh-identity', reason: 'the Amazigh case' },
  ],
  'the-vertical-migration': [
    { id: 'atlas-mountains', reason: 'the geography' },
    { id: 'the-last-nomads', reason: 'nomadic context' },
    { id: 'the-ungovernable-pattern', reason: 'agdal as governance' },
    { id: 'the-memory-in-the-stone', reason: 'Oukaïmeden rock art' },
    { id: 'water-crisis', reason: 'water management' },
  ],
  'eye-of-africa': [
    { id: 'the-green-sahara', reason: 'Saharan deep time' },
    { id: 'gemstone-without-a-mine', reason: 'geological mystery' },
    { id: 'dust-that-feeds', reason: 'Saharan geology' },
    { id: 'not-all-desert-is-sand', reason: 'desert science' },
  ],
  'gemstone-without-a-mine': [
    { id: 'eye-of-africa', reason: 'geological mysteries' },
    { id: 'the-green-sahara', reason: 'Saharan deep time' },
  ],
  'the-desert-that-does-mathematics': [
    { id: 'the-stone-language', reason: 'convergent natural patterns' },
    { id: 'geometry-of-zellige', reason: 'mathematical beauty' },
    { id: 'the-namibia-model', reason: 'Namibian ecology' },
  ],
  'the-memory-in-the-stone': [
    { id: 'the-green-sahara', reason: 'rock art from the green era' },
    { id: 'the-vertical-migration', reason: 'Oukaïmeden engravings' },
    { id: 'the-stone-language', reason: 'convergent monument-making' },
    { id: 'amazigh-identity', reason: 'indigenous record' },
  ],
  'the-horses-of-morocco': [
    { id: 'hannibals-march', reason: 'Numidian cavalry at Cannae' },
    { id: 'rome-north-africa', reason: 'Numidian allies' },
    { id: 'the-last-lions', reason: 'Barbary megafauna' },
    { id: 'the-creative-economy', reason: 'Tbourida cultural heritage' },
  ],
  'the-atlantic-spine': [
    { id: 'the-infrastructure-revolution', reason: 'Africa megaprojects' },
    { id: 'port-strategy', reason: 'Morocco\'s gateway' },
    { id: 'the-energy-paradox', reason: 'energy access' },
    { id: 'the-silk-road-into-africa', reason: 'rival infrastructure' },
    { id: 'the-sahel-war', reason: 'pipeline security' },
  ],

  // ═══ SECURITY & CONFLICT ═══
  'the-blood-gold': [
    { id: 'the-sahel-war', reason: 'the conflict' },
    { id: 'the-lake-of-fire', reason: 'connected insurgencies' },
    { id: 'the-silk-road-into-africa', reason: 'rival powers' },
    { id: 'trans-saharan-trade', reason: 'gold routes' },
    { id: 'blood-diamonds', reason: 'resource extraction' },
  ],
  'the-sahel-war': [
    { id: 'the-blood-gold', reason: 'Wagner operations' },
    { id: 'the-lake-of-fire', reason: 'merging conflicts' },
    { id: 'the-shadow-state', reason: 'Horn of Africa parallel' },
    { id: 'migration-routes', reason: 'displacement' },
    { id: 'the-infrastructure-revolution', reason: 'what war destroys' },
  ],
  'the-lake-of-fire': [
    { id: 'the-sahel-war', reason: 'the merging front' },
    { id: 'the-shadow-state', reason: 'Horn of Africa' },
    { id: 'the-blood-gold', reason: 'resource extraction' },
    { id: 'the-demographic-dividend', reason: 'Nigeria\'s population' },
  ],
  'the-shadow-state': [
    { id: 'the-sahel-war', reason: 'connected conflicts' },
    { id: 'the-lake-of-fire', reason: 'Lake Chad link' },
    { id: 'the-blood-gold', reason: 'Wagner/Africa Corps' },
    { id: 'the-poaching-economics', reason: 'charcoal extraction' },
  ],

  // ═══ AFRICA PROGRESSION ═══
  'the-silk-road-into-africa': [
    { id: 'the-tea-road', reason: 'Belt & Road tea factory' },
    { id: 'the-infrastructure-revolution', reason: 'BRI megaprojects' },
    { id: 'the-atlantic-spine', reason: 'rival pipelines' },
    { id: 'the-blood-gold', reason: 'Russian competition' },
    { id: 'the-trade-revolution', reason: 'AfCFTA context' },
    { id: 'port-strategy', reason: 'port investments' },
  ],
  'a-diamond-is-not-forever': [
    { id: 'blood-diamonds', reason: 'the human cost' },
    { id: 'the-namibia-model', reason: 'Namibia\'s diamonds' },
    { id: 'the-conservation-deficit', reason: 'Botswana dependency' },
  ],
  'blood-diamonds': [
    { id: 'a-diamond-is-not-forever', reason: 'market collapse' },
    { id: 'the-blood-gold', reason: 'resource extraction' },
    { id: 'the-sahel-war', reason: 'conflict zones' },
  ],

  // ═══ CONSERVATION ═══
  'the-gorilla-dividend': [
    { id: 'the-conservation-playbook', reason: 'what works' },
    { id: 'the-conservation-deficit', reason: 'the funding gap' },
    { id: 'the-namibia-model', reason: 'another success' },
    { id: 'the-lion-guardians', reason: 'community model' },
  ],
  'the-conservation-deficit': [
    { id: 'the-gorilla-dividend', reason: 'what success looks like' },
    { id: 'the-namibia-model', reason: 'the Namibia success' },
    { id: 'the-lion-guardians', reason: 'the Maasai model' },
    { id: 'the-poaching-economics', reason: 'the economics' },
    { id: 'the-conservation-playbook', reason: 'the field guide' },
    { id: 'the-last-lions', reason: 'what was lost' },
  ],
  'the-lion-guardians': [
    { id: 'the-last-lions', reason: 'the Barbary lion story' },
    { id: 'the-lions-road', reason: 'the lion as symbol' },
    { id: 'the-conservation-playbook', reason: 'the playbook' },
    { id: 'the-gorilla-dividend', reason: 'another success' },
    { id: 'the-namibia-model', reason: 'community conservation' },
  ],
  'the-namibia-model': [
    { id: 'the-conservation-playbook', reason: 'the playbook' },
    { id: 'the-gorilla-dividend', reason: 'the Rwanda model' },
    { id: 'the-lion-guardians', reason: 'community approach' },
    { id: 'the-desert-that-does-mathematics', reason: 'Namibian ecology' },
    { id: 'the-conservation-deficit', reason: 'the wider crisis' },
  ],
  'the-conservation-playbook': [
    { id: 'the-gorilla-dividend', reason: 'Rwanda permits' },
    { id: 'the-namibia-model', reason: 'Namibia conservancies' },
    { id: 'the-lion-guardians', reason: 'Maasai warriors' },
    { id: 'the-gorongosa-resurrection', reason: 'Mozambique rebirth' },
    { id: 'the-rhino-underground', reason: 'the breeding paradox' },
    { id: 'the-conservation-deficit', reason: 'the funding crisis' },
  ],
  'the-gorongosa-resurrection': [
    { id: 'the-conservation-playbook', reason: 'the playbook' },
    { id: 'the-coffee-covenant', reason: 'Gorongosa grows coffee' },
    { id: 'the-conservation-deficit', reason: 'the wider picture' },
  ],
  'the-rhino-underground': [
    { id: 'the-poaching-economics', reason: 'the money' },
    { id: 'the-conservation-playbook', reason: 'what works' },
    { id: 'the-conservation-deficit', reason: 'the crisis' },
  ],
  'the-poaching-economics': [
    { id: 'the-rhino-underground', reason: 'the rhino case' },
    { id: 'the-conservation-deficit', reason: 'the bigger picture' },
    { id: 'the-blood-gold', reason: 'extraction economics' },
    { id: 'the-lion-guardians', reason: 'economic alternatives' },
  ],

  // ═══ AFRICA PROGRESSION ═══
  'the-infrastructure-revolution': [
    { id: 'the-silk-road-into-africa', reason: 'China\'s BRI' },
    { id: 'the-atlantic-spine', reason: 'the gas pipeline' },
    { id: 'the-build', reason: 'Morocco\'s infrastructure' },
    { id: 'tgv-rail-network', reason: 'Africa\'s only HSR' },
    { id: 'port-strategy', reason: 'Tanger Med' },
    { id: 'the-energy-paradox', reason: 'energy projects' },
  ],
  'the-demographic-dividend': [
    { id: 'the-urbanisation-wave', reason: 'where they\'re going' },
    { id: 'the-education-gap', reason: 'the education equation' },
    { id: 'migration-routes', reason: 'the pressure valve' },
    { id: 'the-food-equation', reason: 'feeding 2.5 billion' },
    { id: 'africa-rising', reason: 'continental competitiveness' },
  ],
  'the-tech-leapfrog': [
    { id: 'the-trade-revolution', reason: 'PAPSS payments' },
    { id: 'the-energy-paradox', reason: 'off-grid solar' },
    { id: 'the-health-leapfrog', reason: 'Zipline drones' },
    { id: 'the-creative-economy', reason: 'digital distribution' },
    { id: 'africa-rising', reason: 'continental context' },
  ],
  'the-energy-paradox': [
    { id: 'solar-atlas', reason: 'Morocco\'s solar' },
    { id: 'wind-and-sun', reason: 'Morocco renewables' },
    { id: 'the-infrastructure-revolution', reason: 'energy megaprojects' },
    { id: 'the-atlantic-spine', reason: 'gas pipeline' },
    { id: 'the-food-equation', reason: 'energy for agriculture' },
  ],
  'the-food-equation': [
    { id: 'morocco-agriculture', reason: 'Morocco\'s agriculture' },
    { id: 'bread-of-morocco', reason: 'wheat imports' },
    { id: 'the-demographic-dividend', reason: 'feeding 2.5 billion' },
    { id: 'dust-that-feeds', reason: 'natural fertiliser' },
    { id: 'phosphate-equation', reason: 'man-made fertiliser' },
    { id: 'the-coffee-covenant', reason: 'Ethiopia\'s coffee economy' },
    { id: 'the-cacao-equation', reason: 'cacao economics' },
    { id: 'the-vanilla-orchid', reason: 'vanilla economics' },
  ],
  'the-trade-revolution': [
    { id: 'the-silk-road-into-africa', reason: 'who trades with Africa' },
    { id: 'port-strategy', reason: 'Morocco as gateway' },
    { id: 'the-tech-leapfrog', reason: 'PAPSS digital payments' },
    { id: 'africa-rising', reason: 'continental competitiveness' },
    { id: 'the-tea-road', reason: 'Morocco as trade hub' },
  ],
  'the-health-leapfrog': [
    { id: 'the-tech-leapfrog', reason: 'Zipline drones' },
    { id: 'the-apothecary', reason: 'traditional medicine' },
    { id: 'the-education-gap', reason: 'health worker training' },
  ],
  'the-urbanisation-wave': [
    { id: 'the-demographic-dividend', reason: 'population growth' },
    { id: 'morocco-population', reason: 'Morocco density' },
    { id: 'medina-data', reason: 'the old urban model' },
    { id: 'the-infrastructure-revolution', reason: 'what must be built' },
  ],
  'the-creative-economy': [
    { id: 'musical-traditions', reason: 'Morocco\'s eight traditions' },
    { id: 'the-gnawa-road', reason: 'from Gnawa to global' },
    { id: 'cinema-morocco', reason: 'Nollywood and beyond' },
    { id: 'moroccan-fashion', reason: 'fashion scene' },
    { id: 'the-tech-leapfrog', reason: 'digital distribution' },
  ],
  'the-education-gap': [
    { id: 'the-demographic-dividend', reason: 'the youth bulge' },
    { id: 'oldest-universities', reason: 'the oldest tradition' },
    { id: 'the-tech-leapfrog', reason: 'coding academies' },
    { id: 'the-health-leapfrog', reason: 'health worker gap' },
  ],

  // ═══ CULTURAL INTELLIGENCE (164–173) ═══
  'what-solomon-knew': [
    { id: 'the-queen-who-did-not-kneel', reason: 'the queen arrives' },
    { id: 'the-son-who-took-the-fire', reason: 'the son departs' },
    { id: 'the-sacred-smoke', reason: 'Temple incense' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'Sheshonq sacked the Temple' },
    { id: 'jewish-heritage', reason: 'the Solomonic tradition' },
    { id: 'oldest-universities', reason: 'ancient knowledge systems' },
    { id: 'geometry-of-zellige', reason: 'sacred geometry' },
  ],
  'the-queen-who-did-not-kneel': [
    { id: 'what-solomon-knew', reason: 'prequel: what Solomon built' },
    { id: 'the-son-who-took-the-fire', reason: 'sequel: their son' },
    { id: 'the-sacred-smoke', reason: 'frankincense monopoly' },
    { id: 'trans-saharan-trade', reason: 'the incense trade' },
    { id: 'the-coffee-covenant', reason: 'Ethiopia\'s other treasure' },
    { id: 'the-churches-that-swallowed-the-mountain', reason: 'Ethiopian Christianity' },
  ],
  'the-son-who-took-the-fire': [
    { id: 'what-solomon-knew', reason: 'the father' },
    { id: 'the-queen-who-did-not-kneel', reason: 'the mother' },
    { id: 'the-churches-that-swallowed-the-mountain', reason: 'New Jerusalem at Lalibela' },
    { id: 'from-the-land-of-the-setting-sun', reason: 'the biblical thread' },
    { id: 'the-coffee-covenant', reason: 'Ethiopia\'s Aksumite heritage' },
  ],
  'the-churches-that-swallowed-the-mountain': [
    { id: 'the-son-who-took-the-fire', reason: 'why New Jerusalem' },
    { id: 'the-queen-who-did-not-kneel', reason: 'the Solomonic claim' },
    { id: 'geometry-of-zellige', reason: 'sacred geometry in stone' },
    { id: 'the-memory-in-the-stone', reason: 'stone as record' },
    { id: 'the-coffee-covenant', reason: 'the same highland Ethiopia' },
    { id: 'the-sacred-smoke', reason: 'incense liturgy in Ge\'ez' },
  ],
  'the-lions-road': [
    { id: 'the-last-lions', reason: 'the Barbary lion extinction' },
    { id: 'the-lion-guardians', reason: 'saving lions today' },
    { id: 'the-ship-of-the-desert', reason: 'Silk Road animals' },
    { id: 'the-silk-road-into-africa', reason: 'the modern Silk Road' },
    { id: 'the-stone-language', reason: 'convergent symbol transmission' },
    { id: 'the-conservation-deficit', reason: 'lion population collapse' },
  ],
  'the-stone-language': [
    { id: 'the-ungovernable-pattern', reason: 'convergent cultural evolution' },
    { id: 'the-sacred-smoke', reason: 'same problem, same answer' },
    { id: 'the-desert-that-does-mathematics', reason: 'pattern without contact' },
    { id: 'the-memory-in-the-stone', reason: 'stone as human record' },
    { id: 'the-last-nomads', reason: 'nomadic navigation' },
    { id: 'the-vertical-migration', reason: 'mountain landmarks' },
  ],
  'the-coffee-covenant': [
    { id: 'the-queen-who-did-not-kneel', reason: 'Ethiopia\'s other treasure' },
    { id: 'the-churches-that-swallowed-the-mountain', reason: 'same highlands' },
    { id: 'the-tea-road', reason: 'rival ceremony, rival commodity' },
    { id: 'the-cacao-equation', reason: 'parallel stolen genetics' },
    { id: 'the-vanilla-orchid', reason: 'commodity from the Global South' },
    { id: 'the-food-equation', reason: 'Africa\'s agricultural wealth' },
    { id: 'the-gorongosa-resurrection', reason: 'Gorongosa coffee project' },
    { id: 'spice-routes', reason: 'global commodity routes' },
    { id: 'the-silk-road-into-africa', reason: 'Ethiopia $14.5B BRI loans' },
    { id: 'trans-saharan-trade', reason: 'ancient trade networks' },
  ],
  'the-tea-road': [
    { id: 'moroccan-tea', reason: 'the anatomy of Moroccan tea' },
    { id: 'tea-ceremony', reason: 'the six-step topology' },
    { id: 'the-coffee-covenant', reason: 'rival commodity, rival ceremony' },
    { id: 'the-silk-road-into-africa', reason: 'Belt & Road tea factory' },
    { id: 'the-trade-revolution', reason: 'Morocco as trade gateway' },
    { id: 'spice-routes', reason: 'global trade routes' },
    { id: 'port-strategy', reason: 'Casablanca gateway' },
    { id: 'the-cacao-equation', reason: 'colonial commodity' },
    { id: 'the-vanilla-orchid', reason: 'Global South commodity' },
  ],
  'the-vanilla-orchid': [
    { id: 'the-coffee-covenant', reason: 'parallel commodity story' },
    { id: 'the-cacao-equation', reason: 'colonial plantation model' },
    { id: 'the-tea-road', reason: 'Global South trade' },
    { id: 'spice-routes', reason: 'the spice trade' },
    { id: 'the-guanche-ghost', reason: 'colonial template' },
    { id: 'the-food-equation', reason: 'agricultural economics' },
    { id: 'the-poaching-economics', reason: 'extraction economics parallel' },
  ],
  'the-cacao-equation': [
    { id: 'the-coffee-covenant', reason: 'parallel stolen crop' },
    { id: 'the-vanilla-orchid', reason: 'colonial plantation model' },
    { id: 'the-tea-road', reason: 'commodity trade' },
    { id: 'trans-saharan-trade', reason: 'routes of extraction' },
    { id: 'the-blood-gold', reason: 'extraction economics' },
    { id: 'the-guanche-ghost', reason: 'colonial template for the Americas' },
    { id: 'the-food-equation', reason: 'who grows, who profits' },
    { id: 'the-trade-revolution', reason: 'AfCFTA and value retention' },
    { id: 'the-demographic-dividend', reason: 'West Africa\'s youth' },
    { id: 'the-sahel-war', reason: 'Côte d\'Ivoire/Ghana instability' },
  ],
}

// Utility: get connections for a module, or empty array
export function getConnections(moduleId: string): ModuleLink[] {
  return MODULE_CONNECTIONS[moduleId] || []
}

// Utility: get reverse connections (who links TO this module)
export function getReverseConnections(moduleId: string): ModuleLink[] {
  const results: ModuleLink[] = []
  for (const [fromId, links] of Object.entries(MODULE_CONNECTIONS)) {
    for (const link of links) {
      if (link.id === moduleId) {
        results.push({ id: fromId, reason: link.reason })
      }
    }
  }
  return results
}

// Utility: merge both directions, deduplicated
export function getAllConnections(moduleId: string): ModuleLink[] {
  const forward = getConnections(moduleId)
  const reverse = getReverseConnections(moduleId)
  const seen = new Set(forward.map(l => l.id))
  const merged = [...forward]
  for (const r of reverse) {
    if (!seen.has(r.id)) {
      merged.push(r)
      seen.add(r.id)
    }
  }
  return merged
}
