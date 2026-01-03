// State Configuration System for Sankofa Family Medicine
// Manages multi-state expansion with different statuses

export type StateStatus = 'active' | 'coming-soon' | 'interest-only'

export interface StateConfig {
  code: string
  name: string
  status: StateStatus
  foundingMemberSpots?: number
  launchDate?: string
  licensureStatus: 'licensed' | 'pending' | 'not-started'
  telemedicineNotes?: string
  majorCities: string[]
  timezone: string
  coordinates: {
    lat: number
    lng: number
  }
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
}

export const stateConfigs: Record<string, StateConfig> = {
  WA: {
    code: 'WA',
    name: 'Washington',
    status: 'active',
    foundingMemberSpots: 30,
    licensureStatus: 'licensed',
    telemedicineNotes: 'Full telemedicine services available statewide. In-person component required for sports physicals per WA regulations.',
    majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Federal Way', 'Kirkland'],
    timezone: 'America/Los_Angeles',
    coordinates: {
      lat: 47.6062,
      lng: -122.3321
    },
    metadata: {
      title: 'Virtual Primary Care in Washington State',
      description: 'Sankofa Family Medicine offers virtual-first direct primary care across Washington State. Same-day appointments, direct physician access, transparent pricing.',
      keywords: ['Washington virtual doctor', 'Seattle telemedicine', 'WA direct primary care', 'Washington State concierge medicine', 'virtual primary care Washington']
    }
  },
  SC: {
    code: 'SC',
    name: 'South Carolina',
    status: 'coming-soon',
    foundingMemberSpots: 50,
    launchDate: '2026',
    licensureStatus: 'pending',
    telemedicineNotes: 'Licensure in progress. Join the waitlist for priority access when we launch.',
    majorCities: ['Charleston', 'Columbia', 'Greenville', 'Rock Hill', 'Mount Pleasant', 'Summerville', 'Hilton Head', 'Spartanburg'],
    timezone: 'America/New_York',
    coordinates: {
      lat: 33.8361,
      lng: -81.1637
    },
    metadata: {
      title: 'Virtual Primary Care Coming to South Carolina',
      description: 'Sankofa Family Medicine is expanding to South Carolina in 2026. Join the founding member waitlist for priority enrollment and exclusive benefits.',
      keywords: ['South Carolina virtual doctor', 'Charleston telemedicine', 'SC direct primary care', 'South Carolina concierge medicine coming soon']
    }
  }
}

// All US states for expansion interest form
export const allUSStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' }
]

// Helper functions
export function getActiveStates(): StateConfig[] {
  return Object.values(stateConfigs).filter(s => s.status === 'active')
}

export function getComingSoonStates(): StateConfig[] {
  return Object.values(stateConfigs).filter(s => s.status === 'coming-soon')
}

export function getStateByCode(code: string): StateConfig | undefined {
  return stateConfigs[code]
}

export function isStateActive(code: string): boolean {
  return stateConfigs[code]?.status === 'active'
}

export function getExpansionStates(): { code: string; name: string }[] {
  const configuredCodes = Object.keys(stateConfigs)
  return allUSStates.filter(s => !configuredCodes.includes(s.code))
}
