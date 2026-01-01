'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

// Geographically accurate Washington State SVG Map component
export default function WashingtonMap() {
  // City coordinates mapped to SVG viewBox (based on actual lat/long ratios)
  const cities = [
    { name: 'Seattle', x: 78, y: 128, size: 10, major: true },
    { name: 'Bellevue', x: 95, y: 132, size: 7, major: true },
    { name: 'Everett', x: 82, y: 108, size: 5, major: false },
    { name: 'Tacoma', x: 72, y: 155, size: 6, major: true },
    { name: 'Olympia', x: 62, y: 175, size: 5, major: false, capital: true },
    { name: 'Vancouver', x: 58, y: 248, size: 5, major: false },
    { name: 'Spokane', x: 398, y: 85, size: 8, major: true },
    { name: 'Kirkland', x: 88, y: 118, size: 4, major: false },
    { name: 'Redmond', x: 105, y: 125, size: 5, major: false },
    { name: 'Sammamish', x: 115, y: 135, size: 4, major: false },
    { name: 'Mercer Island', x: 88, y: 142, size: 3, major: false },
    { name: 'Richland', x: 335, y: 195, size: 5, major: false, triCities: true },
    { name: 'Pasco', x: 350, y: 190, size: 5, major: false, triCities: true },
  ]

  return (
    <div className="relative">
      <svg 
        viewBox="0 0 450 300" 
        className="w-full h-auto"
        aria-label="Map of Washington State showing Sankofa Family Medicine service areas"
        role="img"
      >
        <title>Washington State Service Area Map</title>
        <desc>Interactive map showing cities served by Sankofa Family Medicine across Washington State, including Seattle, Bellevue, Spokane, and the Tri-Cities area where Dr. Nkrumah completed residency training.</desc>
        
        <defs>
          {/* Gradient fill for state */}
          <linearGradient id="waStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#05436e" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#bc9833" stopOpacity="0.08"/>
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="waGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Pulse animation for major cities */}
          <radialGradient id="pulseGradient">
            <stop offset="0%" stopColor="#bc9833" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#bc9833" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Washington State Outline - Accurate Geographic Shape */}
        {/* Key features: Straight 49th parallel north, Olympic Peninsula NW, Puget Sound indent, Columbia Plateau east */}
        <path 
          d="M10,28 L430,28 L430,32 L428,50 L425,72 L420,95 L412,118 L402,142 L390,165 L375,188 L358,208 L338,225 L315,240 L290,252 L262,260 L232,265 L200,268 L168,268 L138,265 L110,260 L85,252 L65,242 L50,228 L40,212 L35,195 L38,178 L32,165 L22,155 L15,142 L12,128 L15,112 L22,98 L32,85 L28,72 L18,58 L12,45 L10,28 Z"
          fill="url(#waStateGradient)"
          stroke="#05436e"
          strokeWidth="2"
          filter="url(#waGlow)"
          className="transition-all duration-500"
        />
        
        {/* Olympic Peninsula detail */}
        <path
          d="M22,98 L35,92 L48,98 L55,112 L52,128 L42,142 L32,148 L22,142 L18,128 L20,112 L22,98 Z"
          fill="#05436e"
          fillOpacity="0.05"
          stroke="#05436e"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        
        {/* Puget Sound water indication */}
        <path
          d="M48,98 L58,108 L65,122 L62,138 L52,152 L42,148 L48,132 L50,118 L48,98 Z"
          fill="#05436e"
          fillOpacity="0.08"
        />
        
        {/* Puget Sound Metro Region Highlight */}
        <ellipse 
          cx="85" cy="135" rx="45" ry="40" 
          fill="#bc9833" 
          fillOpacity="0.12"
          stroke="#bc9833"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        
        {/* Tri-Cities Region Highlight */}
        <ellipse 
          cx="342" cy="192" rx="25" ry="20" 
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
                    values={`${city.size + 4};${city.size + 8};${city.size + 4}`} 
                    dur="2s" 
                    repeatCount="indefinite"
                  />
                  <animate 
                    attributeName="stroke-opacity" 
                    values="0.4;0.1;0.4" 
                    dur="2s" 
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
                x={city.x + (city.name === 'Seattle' || city.name === 'Tacoma' || city.name === 'Olympia' ? -15 : city.name === 'Spokane' ? 0 : 12)} 
                y={city.y + (city.name === 'Spokane' ? -15 : city.name === 'Bellevue' ? -10 : 4)}
                textAnchor={city.name === 'Seattle' || city.name === 'Tacoma' || city.name === 'Olympia' ? 'end' : city.name === 'Spokane' || city.name === 'Bellevue' ? 'middle' : 'start'}
                className={`fill-sfm-navy ${city.major ? 'text-[11px] font-bold' : 'text-[9px]'}`}
              >
                {city.name}
              </text>
              
              {/* Special labels */}
              {city.capital && (
                <text 
                  x={city.x - 15} 
                  y={city.y + 14}
                  textAnchor="end"
                  className="text-[8px] fill-sfm-gold font-medium"
                >
                  Capital
                </text>
              )}
              {city.triCities && city.name === 'Richland' && (
                <text 
                  x={342} 
                  y={212}
                  textAnchor="middle"
                  className="text-[8px] fill-sfm-azure font-medium"
                >
                  Tri-Cities
                </text>
              )}
            </g>
          ))}
        </g>
        
        {/* State Name Watermark */}
        <text 
          x="240" 
          y="160" 
          textAnchor="middle" 
          className="text-[20px] fill-sfm-navy/10 font-display tracking-[0.4em] uppercase pointer-events-none"
        >
          Washington
        </text>
        
        {/* Legend */}
        <g transform="translate(300, 245)">
          <circle cx="8" cy="8" r="5" fill="#bc9833" />
          <text x="20" y="12" className="text-[10px] fill-sfm-text-muted">Service Areas</text>
        </g>
        <g transform="translate(300, 262)">
          <ellipse cx="8" cy="6" rx="8" ry="5" fill="#bc9833" fillOpacity="0.12" stroke="#bc9833" strokeWidth="1" strokeDasharray="3,2" />
          <text x="20" y="10" className="text-[10px] fill-sfm-text-muted">Metro Regions</text>
        </g>
        <g transform="translate(300, 279)">
          <rect x="2" y="2" width="12" height="8" fill="#05436e" fillOpacity="0.15" stroke="#05436e" strokeWidth="1" rx="1" />
          <text x="20" y="10" className="text-[10px] fill-sfm-text-muted">Statewide Virtual Care</text>
        </g>
      </svg>
      
      {/* City Links Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
        {[
          { name: 'Seattle', href: '/locations/washington/seattle' },
          { name: 'Bellevue', href: '/locations/washington/bellevue' },
          { name: 'Kirkland', href: '/locations/washington/kirkland' },
          { name: 'Redmond', href: '/locations/washington/redmond' },
          { name: 'Sammamish', href: '/locations/washington/sammamish' },
          { name: 'Mercer Island', href: '/locations/washington/mercer-island' },
          { name: 'Everett', href: '/locations/washington/everett' },
          { name: 'Tacoma', href: '/locations/washington/tacoma' },
          { name: 'Olympia', href: '/locations/washington/olympia' },
          { name: 'Vancouver', href: '/locations/washington/vancouver' },
          { name: 'Spokane', href: '/locations/washington/spokane' },
        ].map((city) => (
          <Link 
            key={city.name}
            href={city.href}
            className="flex items-center gap-2 px-3 py-2 bg-sfm-cream dark:bg-sfm-surface rounded-lg hover:bg-sfm-gold/10 transition-colors group"
          >
            <MapPin className="w-3 h-3 text-sfm-gold" />
            <span className="text-sm text-sfm-navy group-hover:text-sfm-gold transition-colors">{city.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
