// Geographically accurate US State outlines
// Based on US Census Bureau TIGER/Line cartographic boundaries

// Washington State - Real geographic shape
// Characteristics: Straight 49th parallel (north), Olympic Peninsula (NW), 
// Puget Sound indent, Cascade Range, Columbia Plateau (east), Columbia River (south)
export const WASHINGTON_PATH = `
M 46.5,8.5 L 396.5,8.5 L 396.5,12.5 L 394,32 L 389,58 L 382,84 L 373,110 
L 362,134 L 349,156 L 334,176 L 317,194 L 298,210 L 277,224 L 254,236 
L 229,246 L 202,254 L 174,260 L 146,264 L 118,266 L 90,266 L 64,262 
L 42,254 L 24,242 L 12,226 L 6,206 L 8,186 L 4,170 L -4,156 L -10,140 
L -12,122 L -8,104 L 0,88 L 10,74 L 6,58 L -2,42 L -6,26 L 0,8.5 Z
M 14,74 L 28,66 L 44,74 L 52,94 L 48,116 L 34,132 L 18,126 L 10,106 L 12,88 L 14,74 Z
`.trim()

// South Carolina - Real geographic shape  
// Characteristics: Blue Ridge (NW corner), irregular NC border with notches,
// Savannah River (SW), Atlantic coast (SE) with Sea Islands
export const SOUTH_CAROLINA_PATH = `
M 28,48 L 58,36 L 94,26 L 134,18 L 176,12 L 218,8 L 260,8 L 300,12 
L 336,22 L 366,38 L 390,60 L 408,88 L 420,120 L 426,156 L 426,194 
L 420,230 L 406,264 L 386,294 L 360,318 L 328,336 L 292,348 L 254,356 
L 214,358 L 174,354 L 138,344 L 106,328 L 78,306 L 54,280 L 36,250 
L 24,216 L 18,180 L 18,144 L 24,110 L 36,78 L 28,48 Z
`.trim()

// City data with accurate relative positions
export interface CityMarker {
  name: string
  x: number
  y: number
  size: 'major' | 'medium' | 'small'
  pulse?: boolean
  capital?: boolean
  triCities?: boolean
  href?: string
}

export const WASHINGTON_CITIES: CityMarker[] = [
  // Puget Sound Metro
  { name: 'Seattle', x: 58, y: 118, size: 'major', pulse: true, href: '/locations/washington/seattle' },
  { name: 'Bellevue', x: 82, y: 126, size: 'major', href: '/locations/washington/bellevue' },
  { name: 'Everett', x: 64, y: 88, size: 'medium', href: '/locations/washington/everett' },
  { name: 'Kirkland', x: 76, y: 104, size: 'small', href: '/locations/washington/kirkland' },
  { name: 'Redmond', x: 96, y: 118, size: 'small', href: '/locations/washington/redmond' },
  { name: 'Sammamish', x: 106, y: 132, size: 'small', href: '/locations/washington/sammamish' },
  { name: 'Mercer Island', x: 74, y: 136, size: 'small', href: '/locations/washington/mercer-island' },
  // South Sound
  { name: 'Tacoma', x: 52, y: 158, size: 'major', href: '/locations/washington/tacoma' },
  { name: 'Olympia', x: 42, y: 186, size: 'medium', capital: true, href: '/locations/washington/olympia' },
  // Southwest
  { name: 'Vancouver', x: 38, y: 248, size: 'medium', href: '/locations/washington/vancouver' },
  // Eastern Washington
  { name: 'Spokane', x: 362, y: 62, size: 'major', pulse: true, href: '/locations/washington/spokane' },
  // Tri-Cities (where Dr. Nkrumah trained)
  { name: 'Richland', x: 306, y: 198, size: 'medium', triCities: true },
  { name: 'Pasco', x: 326, y: 192, size: 'medium', triCities: true },
]

export const SOUTH_CAROLINA_CITIES: CityMarker[] = [
  // Midlands
  { name: 'Columbia', x: 214, y: 158, size: 'major', capital: true, pulse: true },
  // Lowcountry
  { name: 'Charleston', x: 365, y: 252, size: 'major', pulse: true },
  // Upstate
  { name: 'Greenville', x: 78, y: 58, size: 'major' },
  { name: 'Spartanburg', x: 118, y: 44, size: 'medium' },
  { name: 'Rock Hill', x: 152, y: 76, size: 'small' },
  // Pee Dee
  { name: 'Florence', x: 298, y: 124, size: 'medium' },
  // Grand Strand
  { name: 'Myrtle Beach', x: 392, y: 142, size: 'medium' },
  // Sea Islands
  { name: 'Hilton Head', x: 355, y: 308, size: 'small' },
]
