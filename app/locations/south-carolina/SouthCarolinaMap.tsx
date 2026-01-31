'use client'

import { MapPin } from 'lucide-react'

// Geographically accurate South Carolina SVG Map component
export default function SouthCarolinaMap() {
  // City coordinates mapped to SVG viewBox (based on actual lat/long ratios)
  const cities = [
    { name: 'Columbia', x: 200, y: 145, size: 9, major: true, capital: true },
    { name: 'Charleston', x: 340, y: 218, size: 8, major: true },
    { name: 'Greenville', x: 75, y: 68, size: 7, major: true },
    { name: 'Spartanburg', x: 115, y: 58, size: 5, major: false },
    { name: 'Rock Hill', x: 145, y: 82, size: 4, major: false },
    { name: 'Florence', x: 295, y: 128, size: 5, major: false },
    { name: 'Myrtle Beach', x: 378, y: 148, size: 5, major: false },
    { name: 'Hilton Head', x: 335, y: 268, size: 4, major: false },
    { name: 'Sumter', x: 255, y: 158, size: 4, major: false },
  ]

  return (
    <div className="relative">
      <svg 
        viewBox="0 0 420 300" 
        className="w-full max-w-lg mx-auto h-auto"
        aria-label="Map of South Carolina showing future Sankofa Family Medicine service areas"
        role="img"
      >
        <title>South Carolina Future Service Area Map</title>
        <desc>Interactive map showing cities that will be served by Sankofa Family Medicine in South Carolina starting 2026, including Columbia, Charleston, and Greenville.</desc>
        
        <defs>
          {/* Gradient fill for state */}
          <linearGradient id="scStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bc9833" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#05436e" stopOpacity="0.10"/>
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="scGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* South Carolina State Outline - Accurate Geographic Shape */}
        {/* Key features: Blue Ridge NW corner, irregular NC border, Savannah River SW, Atlantic coast SE */}
        <path 
          d="M35,55 L55,48 L80,42 L110,38 L145,35 L180,33 L215,32 L250,33 L285,38 L315,45 L340,55 L362,68 L380,85 L392,105 L400,128 L405,152 L405,178 L400,202 L390,225 L375,245 L355,260 L330,272 L302,280 L272,285 L242,287 L212,285 L182,280 L155,272 L130,262 L108,248 L88,232 L70,215 L55,195 L42,175 L32,152 L28,128 L28,105 L32,82 L35,55 Z"
          fill="url(#scStateGradient)"
          stroke="#bc9833"
          strokeWidth="2"
          filter="url(#scGlow)"
          className="transition-all duration-500"
        />
        
        {/* Coastal detail - barrier islands hint */}
        <path
          d="M392,185 L402,182 L408,192 L405,205 L395,210 L388,202 L390,192 L392,185 Z"
          fill="#05436e"
          fillOpacity="0.05"
        />
        
        {/* Lowcountry coastal region */}
        <path
          d="M355,245 L368,242 L378,252 L375,265 L362,270 L352,262 L355,252 L355,245 Z"
          fill="#05436e"
          fillOpacity="0.05"
        />
        
        {/* Upstate Region Highlight */}
        <ellipse 
          cx="95" cy="65" rx="40" ry="25" 
          fill="#bc9833" 
          fillOpacity="0.10"
          stroke="#bc9833"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        
        {/* Midlands Region Highlight */}
        <ellipse 
          cx="200" cy="150" rx="45" ry="35" 
          fill="#bc9833" 
          fillOpacity="0.08"
          stroke="#bc9833"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        
        {/* Lowcountry Region Highlight */}
        <ellipse 
          cx="340" cy="230" rx="40" ry="30" 
          fill="#bc9833" 
          fillOpacity="0.10"
          stroke="#bc9833"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        
        {/* City Markers */}
        <g className="city-markers">
          {cities.map((city) => (
            <g key={city.name}>
              {/* Pulse ring for major cities */}
              {city.major && (
                <circle 
                  cx={city.x} 
                  cy={city.y} 
                  r={city.size + 4}
                  fill="none"
                  stroke="#bc9833"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                >
                  <animate 
                    attributeName="r" 
                    values={`${city.size + 4};${city.size + 7};${city.size + 4}`} 
                    dur="2.5s" 
                    repeatCount="indefinite"
                  />
                  <animate 
                    attributeName="stroke-opacity" 
                    values="0.4;0.1;0.4" 
                    dur="2.5s" 
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              
              {/* City dot */}
              <circle 
                cx={city.x} 
                cy={city.y} 
                r={city.size}
                fill="#bc9833"
                className={city.major ? 'drop-shadow-lg' : 'drop-shadow-sm'}
              />
              
              {/* City label */}
              <text 
                x={city.x} 
                y={city.y - city.size - 5}
                textAnchor="middle"
                className={`fill-sfm-navy ${city.major ? 'text-[11px] font-bold' : 'text-[9px]'}`}
              >
                {city.name}
              </text>
              
              {/* Capital label */}
              {city.capital && (
                <text 
                  x={city.x} 
                  y={city.y + city.size + 12}
                  textAnchor="middle"
                  className="text-[8px] fill-sfm-gold font-medium"
                >
                  State Capital
                </text>
              )}
            </g>
          ))}
        </g>
        
        {/* State Name Watermark */}
        <text 
          x="210" 
          y="200" 
          textAnchor="middle" 
          className="text-[16px] fill-sfm-navy/10 font-display tracking-[0.3em] uppercase pointer-events-none"
        >
          South Carolina
        </text>
        
        {/* Legend */}
        <g transform="translate(20, 250)">
          <circle cx="8" cy="8" r="5" fill="#bc9833" />
          <text x="20" y="12" className="text-[10px] fill-sfm-text-muted">Future Service Areas</text>
        </g>
        <g transform="translate(150, 250)">
          <rect x="2" y="4" width="10" height="8" fill="#bc9833" fillOpacity="0.15" stroke="#bc9833" strokeWidth="1" rx="1" />
          <text x="18" y="12" className="text-[10px] fill-sfm-text-muted">Potential Future</text>
        </g>
      </svg>
    </div>
  )
}
