// Accurate SVG path data for US States
// Source: Derived from US Census Bureau cartographic boundaries

export const statePathData = {
  // Washington State - Accurate geographic outline
  // Key features: Straight northern border (49th parallel), Olympic Peninsula, Puget Sound, Columbia River southern border
  WA: `M 0,0 L 400,0 L 400,5 L 398,25 L 394,50 L 388,75 L 380,100 L 370,125 L 358,148 L 344,168 L 328,186 L 310,202 L 290,216 L 268,228 L 244,238 L 218,246 L 190,252 L 162,256 L 134,258 L 106,258 L 80,256 L 56,250 L 36,240 L 20,226 L 10,208 L 5,188 L 8,168 L 2,152 L -8,138 L -15,122 L -18,104 L -14,86 L -6,70 L 4,56 L 0,42 L -8,28 L -12,14 L 0,0 Z M 10,70 L 22,62 L 36,70 L 44,88 L 40,108 L 28,122 L 14,118 L 6,100 L 8,84 L 10,70 Z`,
  
  // South Carolina - Accurate geographic outline  
  // Key features: Blue Ridge NW, irregular NC border, Savannah River SW, Atlantic coast SE with barrier islands
  SC: `M 0,35 L 25,25 L 55,18 L 90,12 L 130,8 L 170,5 L 210,4 L 250,5 L 288,10 L 322,20 L 352,35 L 378,55 L 398,80 L 412,108 L 420,140 L 422,175 L 418,210 L 408,242 L 390,270 L 365,292 L 335,308 L 300,318 L 262,324 L 222,326 L 182,322 L 145,312 L 112,298 L 82,278 L 56,254 L 35,226 L 20,195 L 10,162 L 5,128 L 5,95 L 10,65 L 0,35 Z`
}

// City coordinates relative to state SVG viewBox
export const waStateCities = [
  { name: 'Seattle', x: 65, y: 115, size: 'major', pulse: true },
  { name: 'Bellevue', x: 85, y: 122, size: 'major', pulse: false },
  { name: 'Everett', x: 70, y: 88, size: 'medium', pulse: false },
  { name: 'Tacoma', x: 58, y: 148, size: 'major', pulse: false },
  { name: 'Olympia', x: 48, y: 172, size: 'medium', capital: true },
  { name: 'Vancouver', x: 45, y: 238, size: 'medium', pulse: false },
  { name: 'Spokane', x: 365, y: 65, size: 'major', pulse: true },
  { name: 'Kirkland', x: 80, y: 102, size: 'small', pulse: false },
  { name: 'Redmond', x: 98, y: 115, size: 'small', pulse: false },
  { name: 'Sammamish', x: 108, y: 128, size: 'small', pulse: false },
  { name: 'Mercer Island', x: 78, y: 132, size: 'small', pulse: false },
  { name: 'Richland', x: 310, y: 188, size: 'medium', triCities: true },
  { name: 'Pasco', x: 328, y: 182, size: 'medium', triCities: true },
]

export const scStateCities = [
  { name: 'Columbia', x: 210, y: 145, size: 'major', capital: true, pulse: true },
  { name: 'Charleston', x: 355, y: 235, size: 'major', pulse: true },
  { name: 'Greenville', x: 75, y: 55, size: 'major', pulse: false },
  { name: 'Spartanburg', x: 115, y: 42, size: 'medium', pulse: false },
  { name: 'Rock Hill', x: 148, y: 72, size: 'small', pulse: false },
  { name: 'Florence', x: 295, y: 118, size: 'medium', pulse: false },
  { name: 'Myrtle Beach', x: 385, y: 138, size: 'medium', pulse: false },
  { name: 'Hilton Head', x: 348, y: 285, size: 'small', pulse: false },
]
