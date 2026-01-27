'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, AlertTriangle, Heart, Brain, Wind, AlertCircle, Skull, 
  HeartPulse, ChevronDown, Download, MapPin, Clock, ArrowRight, 
  Shield, Building2, PhoneCall
} from 'lucide-react'

// ============================================================
// DATA - Emergency Resources
// ============================================================

const EMERGENCY_CONDITIONS = [
  {
    id: 'chest-pain',
    title: 'Chest Pain / Heart Attack',
    icon: Heart,
    severity: '911',
    alert: 'CALL 911 IMMEDIATELY',
    signs: [
      'Chest pain, pressure, squeezing, or tightness',
      'Pain spreading to arm, neck, jaw, or back',
      'Shortness of breath',
      'Cold sweats, nausea, or lightheadedness',
      'Feeling of doom or that something is very wrong',
    ],
    note: 'Women may have different symptoms like unusual tiredness, back pain, or stomach discomfort instead of chest pain.',
    checklist: [
      'Sit or lie down in a comfortable position',
      'Chew one aspirin (325 mg) if not allergic and no bleeding problems',
      'Loosen any tight clothing',
      'Stay calm and try to breathe slowly',
      'Unlock your door so paramedics can get in',
    ],
  },
  {
    id: 'stroke',
    title: 'Stroke - Act F.A.S.T.',
    icon: Brain,
    severity: '911',
    alert: 'CALL 911 - Every minute matters!',
    signs: [
      'F - Face Drooping: Ask them to smile. Does one side droop?',
      'A - Arm Weakness: Can they raise both arms? Does one drift down?',
      'S - Speech Difficulty: Is speech slurred or hard to understand?',
      'T - Time to Call 911: Note when symptoms started!',
      'Sudden severe headache, confusion, vision problems',
    ],
    checklist: [
      'Note the exact time symptoms started - tell paramedics',
      'Help them lie down with head slightly raised',
      'Do NOT give anything to eat or drink',
      'If unconscious, turn them on their side',
      'Gather medications to show paramedics',
    ],
  },
  {
    id: 'breathing',
    title: 'Difficulty Breathing',
    icon: Wind,
    severity: '911',
    alert: 'CALL 911 IF SEVERE',
    signs: [
      'Cannot catch breath or talk in full sentences',
      'Lips, fingernails, or skin turning blue or gray',
      'Gasping for air or wheezing sounds',
      'Breathing very fast (more than 30 breaths/minute)',
      'Ribs pulling in with each breath',
    ],
    checklist: [
      'Sit upright - do not lie flat',
      'Use inhaler or rescue medication if prescribed',
      'Loosen tight clothing around chest and neck',
      'Try to stay calm - anxiety makes breathing harder',
      'Move to fresh air if possible',
    ],
  },
  {
    id: 'allergic',
    title: 'Severe Allergic Reaction',
    icon: AlertCircle,
    severity: '911',
    alert: 'Use EpiPen if available, then CALL 911',
    signs: [
      'Throat tightening or swelling',
      'Trouble breathing or swallowing',
      'Swelling of lips, tongue, or face',
      'Hives spreading over the body',
      'Dizziness, fainting, feeling very weak',
    ],
    checklist: [
      'Use EpiPen immediately (inject into outer thigh)',
      'Call 911 even after using EpiPen - you still need medical care',
      'Lie down with legs raised (sit up if trouble breathing)',
      'Take antihistamine (Benadryl) if can swallow safely',
      'Remove trigger if possible (stinger, food, etc.)',
    ],
  },
  {
    id: 'poisoning',
    title: 'Poisoning / Overdose',
    icon: Skull,
    severity: '911',
    alert: 'Poison Control: 1-800-222-1222',
    signs: [
      'Unconscious or very drowsy',
      'Difficulty breathing',
      'Vomiting or seizures',
      'Burns around mouth (chemical)',
      'Unusual behavior or confusion',
    ],
    note: 'If unconscious or not breathing, CALL 911 first. Do NOT make them vomit unless told. Use Narcan for suspected opioid overdose.',
    checklist: [
      'Call Poison Control or 911',
      'Have ready: substance name, amount, time taken, age/weight',
      'Keep the container to show responders',
      'If conscious, follow Poison Control instructions',
      'If unconscious, place on side to prevent choking',
    ],
  },
  {
    id: 'mental-health',
    title: 'Mental Health Crisis',
    icon: HeartPulse,
    severity: 'crisis',
    alert: 'You are not alone. Help is available 24/7.',
    signs: [
      'Thoughts of hurting yourself or others',
      'Feeling hopeless or like a burden',
      'Severe anxiety or panic attacks',
      'Hearing or seeing things others don\'t',
      'Unable to care for yourself',
    ],
    note: 'Mental health emergencies are real medical emergencies. There is no shame in asking for help.',
    checklist: [
      'Call 988 (Suicide & Crisis Lifeline) or text HOME to 741741',
      'Remove or secure items you could use to hurt yourself',
      'Reach out to someone you trust',
      'Go somewhere you feel safe',
      'Try grounding: Name 5 things you see, 4 you hear, 3 you can touch',
    ],
  },
]

const WA_CRISIS_LINES = [
  { name: 'Washington Recovery Help Line', phone: '1-866-789-1511', hours: '24/7' },
  { name: 'King County Crisis Line', phone: '206-461-3222', hours: '24/7' },
  { name: 'Snohomish County Crisis', phone: '800-584-3578', hours: '24/7' },
  { name: 'Pierce County Crisis', phone: '800-576-7764', hours: '24/7' },
  { name: 'Spokane Regional Crisis', phone: '1-877-266-1818', hours: '24/7' },
  { name: 'Clark County Crisis', phone: '360-696-9560', hours: '24/7' },
  { name: 'Thurston County Crisis', phone: '360-586-2800', hours: '24/7' },
  { name: 'Kitsap County Crisis', phone: '1-888-910-0416', hours: '24/7' },
  { name: 'Whatcom County Crisis', phone: '360-676-2222', hours: '24/7' },
  { name: 'Yakima Crisis Line', phone: '509-575-4200', hours: '24/7' },
  { name: 'Tri-Cities Crisis', phone: '509-783-0500', hours: '24/7' },
  { name: 'Native & Strong Lifeline', phone: '988 (Press 4)', hours: '24/7' },
  { name: 'Teen Link', phone: '1-866-833-6546', hours: '6pm-10pm' },
]

const SC_CRISIS_LINES = [
  { name: 'SC Mobile Crisis (Statewide)', phone: '1-833-364-2274', hours: '24/7' },
  { name: 'SC Crisis Text Line', phone: 'Text HOPE4SC to 741741', hours: '24/7' },
  { name: 'Charleston County Crisis', phone: '843-414-2350', hours: '24/7' },
  { name: 'Columbia/Midlands Crisis', phone: '803-765-9110', hours: '24/7' },
  { name: 'Greenville Crisis Line', phone: '864-271-8888', hours: '24/7' },
  { name: 'Tri-County Crisis', phone: '864-225-1481', hours: '24/7' },
]

const WA_HOSPITALS: Record<string, Array<{ name: string; designation?: string; address: string; phone: string }>> = {
  'Seattle / King County': [
    { name: 'Harborview Medical Center', designation: 'Level I Trauma', address: '325 9th Ave, Seattle', phone: '(206) 520-5000' },
    { name: 'UW Medical Center - Montlake', designation: 'Level I Trauma', address: '1959 NE Pacific St, Seattle', phone: '(206) 598-3300' },
    { name: 'Swedish First Hill', address: '700 Minor Ave, Seattle', phone: '(206) 386-6000' },
    { name: 'Virginia Mason', address: '1100 9th Ave, Seattle', phone: '(206) 624-1144' },
  ],
  'Eastside / Bellevue': [
    { name: 'Overlake Medical Center', address: '1035 116th Ave NE, Bellevue', phone: '(425) 688-5000' },
    { name: 'EvergreenHealth Kirkland', address: '12040 NE 128th St, Kirkland', phone: '(425) 899-1000' },
  ],
  'South King County': [
    { name: 'Valley Medical Center', address: '400 S 43rd St, Renton', phone: '(425) 228-3450' },
    { name: 'MultiCare Auburn', address: '202 N Division St, Auburn', phone: '(253) 833-7711' },
  ],
  'Snohomish / Everett': [
    { name: 'Providence Regional Everett', designation: 'Level II Trauma', address: '1321 Colby Ave, Everett', phone: '(425) 261-2000' },
    { name: 'Swedish Edmonds', address: '21601 76th Ave W, Edmonds', phone: '(425) 640-4000' },
  ],
  'Pierce / Tacoma': [
    { name: 'MultiCare Tacoma General', designation: 'Level II Trauma', address: '315 MLK Jr Way, Tacoma', phone: '(253) 403-1000' },
    { name: 'St. Joseph Medical Center', address: '1717 S J St, Tacoma', phone: '(253) 426-4101' },
    { name: 'Good Samaritan Puyallup', address: '401 15th Ave SE, Puyallup', phone: '(253) 697-4000' },
  ],
  'Tri-Cities': [
    { name: 'Kadlec Regional Medical Center', designation: 'Level II Trauma', address: '888 Swift Blvd, Richland', phone: '(509) 946-4611' },
    { name: 'Trios Southridge Hospital', address: '3810 Plaza Way, Kennewick', phone: '(509) 221-5000' },
    { name: 'Lourdes Medical Center', address: '520 N 4th Ave, Pasco', phone: '(509) 547-7704' },
  ],
  'Spokane': [
    { name: 'Providence Sacred Heart', designation: 'Level I Trauma', address: '101 W 8th Ave, Spokane', phone: '(509) 474-3131' },
    { name: 'MultiCare Deaconess', address: '800 W 5th Ave, Spokane', phone: '(509) 473-5800' },
  ],
  'Vancouver / Clark': [
    { name: 'PeaceHealth Southwest', designation: 'Level II Trauma', address: '400 NE Mother Joseph Pl, Vancouver', phone: '(360) 256-2000' },
    { name: 'Legacy Salmon Creek', address: '2211 NE 139th St, Vancouver', phone: '(360) 487-1000' },
  ],
}

const SC_HOSPITALS: Record<string, Array<{ name: string; designation?: string; address: string; phone: string }>> = {
  'Charleston': [
    { name: 'MUSC Health', designation: 'Level I Trauma', address: '171 Ashley Ave, Charleston', phone: '(843) 792-2300' },
    { name: 'Roper Hospital', address: '316 Calhoun St, Charleston', phone: '(843) 724-2000' },
    { name: 'Trident Medical Center', designation: 'Level II Trauma', address: '9330 Medical Plaza Dr', phone: '(843) 797-7000' },
  ],
  'Columbia / Midlands': [
    { name: 'Prisma Health Richland', designation: 'Level I Trauma', address: '5 Medical Park, Columbia', phone: '(803) 434-7000' },
    { name: 'Lexington Medical Center', address: '2720 Sunset Blvd, West Columbia', phone: '(803) 791-2000' },
  ],
  'Greenville / Upstate': [
    { name: 'Prisma Health Greenville', designation: 'Level I Trauma', address: '701 Grove Rd, Greenville', phone: '(864) 455-7000' },
    { name: 'AnMed Medical Center', address: '800 N Fant St, Anderson', phone: '(864) 512-1000' },
  ],
  'Myrtle Beach': [
    { name: 'Grand Strand Medical', address: '809 82nd Pkwy, Myrtle Beach', phone: '(843) 692-1000' },
  ],
}

// ============================================================
// COMPONENTS
// ============================================================

// Emergency Banner (Sticky)
function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-4 px-4 sticky top-[64px] lg:top-[108px] z-40 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
        <span className="font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          EMERGENCY?{' '}
          <a href="tel:911" className="underline hover:no-underline">Call 911</a>
        </span>
        <span className="hidden md:inline text-white/60">|</span>
        <span>
          Poison: <a href="tel:1-800-222-1222" className="underline hover:no-underline font-semibold">1-800-222-1222</a>
        </span>
        <span className="hidden md:inline text-white/60">|</span>
        <span>
          Crisis: <a href="tel:988" className="underline hover:no-underline font-semibold">988</a>
        </span>
      </div>
    </div>
  )
}

// State Selector
function StateSelector({ selectedState, onStateChange }: { selectedState: string; onStateChange: (state: string) => void }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      <span className="text-sfm-text-muted text-sm mr-2">Your location:</span>
      {['Washington', 'South Carolina'].map((state) => (
        <button
          key={state}
          onClick={() => onStateChange(state)}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
            selectedState === state
              ? 'bg-sfm-navy text-white shadow-lg'
              : 'bg-sfm-cream text-sfm-navy hover:bg-sfm-cream-dark'
          }`}
        >
          {state}
        </button>
      ))}
    </div>
  )
}

// Decision Guide
function DecisionGuide() {
  const levels = [
    {
      level: '911',
      title: 'Call 911',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      textColor: 'text-red-700',
      description: 'Life-threatening emergency',
      examples: 'Chest pain, can\'t breathe, stroke, severe bleeding, unconscious',
    },
    {
      level: 'ER',
      title: 'Emergency Room',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-300',
      textColor: 'text-amber-700',
      description: 'Serious but stable',
      examples: 'Broken bones, deep cuts, high fever with stiff neck',
    },
    {
      level: 'UC',
      title: 'Urgent Care',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-700',
      description: 'Same-day care needed',
      examples: 'Sprains, minor burns, ear infections, flu symptoms',
    },
    {
      level: 'Clinic',
      title: 'Message Clinic',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-300',
      textColor: 'text-emerald-700',
      description: 'Can wait 1-2 days',
      examples: 'Medication refills, mild cold, follow-up questions',
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6 text-center">
        Where Should I Go?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {levels.map((item) => (
          <div
            key={item.level}
            className={`${item.bgColor} ${item.borderColor} border-l-4 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow`}
          >
            <h3 className={`${item.textColor} font-bold text-lg mb-1`}>
              {item.title}
            </h3>
            <p className="text-sfm-navy text-sm font-medium mb-2">
              {item.description}
            </p>
            <p className="text-sfm-text-muted text-xs">
              {item.examples}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Key Phone Numbers
function KeyPhoneNumbers({ selectedState }: { selectedState: string }) {
  const stateSpecific = selectedState === 'Washington' 
    ? { name: 'WA Recovery Help Line', phone: '1-866-789-1511' }
    : { name: 'SC Mobile Crisis', phone: '1-833-364-2274' }

  const numbers: Array<{ name: string; phone: string; highlight?: boolean; isText?: boolean }> = [
    { name: 'Emergency Services', phone: '911', highlight: true },
    { name: 'Poison Control', phone: '1-800-222-1222' },
    { name: 'Suicide & Crisis Lifeline', phone: '988' },
    { name: 'Crisis Text Line', phone: 'Text HOME to 741741', isText: true },
    { name: 'Sankofa Family Medicine', phone: '(425) 285-7390' },
    stateSpecific,
  ]

  return (
    <div className="bg-sfm-navy text-white rounded-2xl p-6 md:p-8 mb-12 shadow-xl">
      <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
        <Phone className="w-6 h-6 text-sfm-gold" />
        Key Phone Numbers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {numbers.map((item) => (
          <div key={item.name} className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3">
            <span className="text-sm md:text-base text-white/80">{item.name}</span>
            {item.isText ? (
              <span className="font-bold text-sfm-gold text-sm">{item.phone}</span>
            ) : (
              <a
                href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                className={`font-bold ${item.highlight ? 'text-red-400 text-xl' : 'text-sfm-gold'} hover:underline`}
              >
                {item.phone}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Condition Card
function ConditionCard({ 
  condition, 
  isOpen, 
  onToggle 
}: { 
  condition: typeof EMERGENCY_CONDITIONS[0]
  isOpen: boolean
  onToggle: () => void 
}) {
  const Icon = condition.icon
  const severityColors = {
    '911': { bg: 'bg-red-50', border: 'border-red-200', alert: 'bg-red-600' },
    'crisis': { bg: 'bg-purple-50', border: 'border-purple-200', alert: 'bg-purple-600' },
  }
  
  const colors = severityColors[condition.severity as keyof typeof severityColors] || severityColors['911']

  return (
    <div className={`${colors.bg} ${colors.border} border rounded-2xl overflow-hidden mb-4 shadow-sm`}>
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-white/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
            <Icon className="w-5 h-5 text-sfm-navy" />
          </div>
          <h3 className="text-lg font-bold text-sfm-navy text-left">
            {condition.title}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-sfm-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="px-5 pb-5">
          {/* Alert Banner */}
          <div className={`${colors.alert} text-white text-center py-2.5 px-4 rounded-xl font-bold mb-4 flex items-center justify-center gap-2`}>
            <AlertTriangle className="w-4 h-4" />
            {condition.alert}
          </div>
          
          {/* Warning Signs */}
          <div className="mb-4">
            <h4 className="font-bold text-sfm-navy mb-3">Warning Signs:</h4>
            <ul className="space-y-2">
              {condition.signs.map((sign, i) => (
                <li key={i} className="flex items-start gap-2 text-sfm-text-muted">
                  <span className="text-red-500 mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: sign.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          </div>
          
          {condition.note && (
            <p className="text-sm text-sfm-text-muted italic bg-white/70 p-3 rounded-xl mb-4">
              <strong>Note:</strong> {condition.note}
            </p>
          )}
          
          {/* Checklist */}
          <div>
            <h4 className="font-bold text-sfm-navy mb-3">What to Do While You Wait:</h4>
            <ul className="space-y-2">
              {condition.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sfm-text-muted">
                  <span className="text-emerald-600 mt-0.5">☐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

// Emergency Conditions Section
function EmergencyConditions() {
  const [openConditions, setOpenConditions] = useState<string[]>(['chest-pain'])

  const toggleCondition = (id: string) => {
    setOpenConditions((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  return (
    <div className="mb-12">
      <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">
        Know the Signs
      </h2>
      {EMERGENCY_CONDITIONS.map((condition) => (
        <ConditionCard
          key={condition.id}
          condition={condition}
          isOpen={openConditions.includes(condition.id)}
          onToggle={() => toggleCondition(condition.id)}
        />
      ))}
    </div>
  )
}

// Regional Crisis Lines
function RegionalCrisisLines({ selectedState }: { selectedState: string }) {
  const lines = selectedState === 'Washington' ? WA_CRISIS_LINES : SC_CRISIS_LINES

  return (
    <div className="mb-12">
      <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6">
        {selectedState} Crisis Lines
      </h2>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
        <div className="bg-sfm-navy text-white px-4 py-3 grid grid-cols-3 font-semibold text-sm">
          <span>Service</span>
          <span>Phone</span>
          <span>Hours</span>
        </div>
        <div className="divide-y divide-gray-100">
          {lines.map((line, i) => (
            <div key={i} className={`px-4 py-3 grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-sfm-cream/30'}`}>
              <span className="text-sfm-navy font-medium">{line.name}</span>
              <a 
                href={line.phone.startsWith('Text') ? undefined : `tel:${line.phone.replace(/[^0-9]/g, '')}`} 
                className="text-sfm-azure font-semibold hover:underline"
              >
                {line.phone}
              </a>
              <span className="text-sfm-text-muted">{line.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Hospital Listings
function HospitalListings({ selectedState }: { selectedState: string }) {
  const [openRegion, setOpenRegion] = useState<string | null>(null)
  const hospitals = selectedState === 'Washington' ? WA_HOSPITALS : SC_HOSPITALS
  const regions = Object.keys(hospitals)

  return (
    <div className="mb-12">
      <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-6 flex items-center gap-3">
        <Building2 className="w-7 h-7 text-sfm-azure" />
        Emergency Rooms by Region
      </h2>
      <div className="space-y-2">
        {regions.map((region) => (
          <div key={region} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenRegion(openRegion === region ? null : region)}
              className="w-full px-4 py-3.5 bg-sfm-cream/50 hover:bg-sfm-cream flex justify-between items-center transition-colors"
            >
              <span className="font-semibold text-sfm-navy flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sfm-azure" />
                {region}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-sfm-text-muted transition-transform duration-300 ${openRegion === region ? 'rotate-180' : ''}`}
              />
            </button>
            {openRegion === region && (
              <div className="divide-y divide-gray-100">
                {hospitals[region].map((hospital, i) => (
                  <div key={i} className="px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-white">
                    <div>
                      <span className="font-medium text-sfm-navy">{hospital.name}</span>
                      {hospital.designation && (
                        <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">
                          {hospital.designation}
                        </span>
                      )}
                      <p className="text-sm text-sfm-text-muted">{hospital.address}</p>
                    </div>
                    <a
                      href={`tel:${hospital.phone.replace(/[^0-9]/g, '')}`}
                      className="text-sfm-azure font-semibold hover:underline whitespace-nowrap flex items-center gap-1"
                    >
                      <PhoneCall className="w-4 h-4" />
                      {hospital.phone}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Member Resources Section
function DownloadSection() {
  return (
    <div className="bg-sfm-cream rounded-2xl p-6 md:p-8 mb-12">
      <h2 className="font-display text-2xl md:text-3xl text-sfm-navy mb-2 flex items-center gap-3">
        <Download className="w-7 h-7 text-sfm-gold" />
        Member Resources
      </h2>
      <p className="text-sfm-text-muted mb-6">
        Emergency guides and quick reference materials are available through your patient portal.
      </p>
      
      <a 
        href="/founders-waitlist"
        className="inline-flex items-center gap-2 bg-sfm-gold text-sfm-navy py-3 px-6 rounded-xl hover:bg-sfm-gold-light transition-colors font-medium"
      >
        Access Patient Portal
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}

// Footer Reminder
function FooterReminder() {
  return (
    <div className="bg-blue-50 border-2 border-sfm-azure rounded-2xl p-6 text-center mb-12">
      <p className="text-xl font-bold text-sfm-navy mb-2">
        When in doubt, it&apos;s always better to be safe.
      </p>
      <p className="text-sfm-text-muted">
        If you&apos;re not sure whether something is an emergency, call 911 or go to the emergency room.
      </p>
    </div>
  )
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function EmergencyPage() {
  const [selectedState, setSelectedState] = useState('Washington')

  useEffect(() => {
    const saved = localStorage.getItem('sfm-state-preference')
    if (saved && (saved === 'Washington' || saved === 'South Carolina')) {
      setSelectedState(saved)
    }
  }, [])

  const handleStateChange = (state: string) => {
    setSelectedState(state)
    localStorage.setItem('sfm-state-preference', state)
  }

  return (
    <>
      <EmergencyBanner />
      
      {/* Hero Section */}
      <section className="pt-48 lg:pt-56 pb-20 bg-gradient-to-b from-white via-sfm-cream/20 to-sfm-cream/50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sfm-azure/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200 mb-6">
            <Shield className="w-4 h-4 text-red-600" />
            <span className="text-red-700 text-sm font-medium tracking-wide">Emergency Resources</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-sfm-navy mb-6 leading-[1.1]">
            Emergency Information Guide
          </h1>
          
          <p className="text-sfm-gold text-lg italic mb-6">
            Medicine That Remembers™
          </p>
          
          <p className="text-sfm-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            This guide helps you decide what to do when you or a loved one needs urgent care.
            <strong> When in doubt, it&apos;s always better to be safe.</strong>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white pt-16 lg:pt-[128px]">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <StateSelector selectedState={selectedState} onStateChange={handleStateChange} />
          <DecisionGuide />
          <KeyPhoneNumbers selectedState={selectedState} />
          <EmergencyConditions />
          <RegionalCrisisLines selectedState={selectedState} />
          <HospitalListings selectedState={selectedState} />
          <DownloadSection />
          <FooterReminder />

          {/* CTA to Contact */}
          <div className="text-center">
            <p className="text-sfm-text-muted mb-4">
              For non-emergency questions or to join our practice:
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-sfm-gold text-sfm-navy font-bold rounded-xl hover:bg-sfm-gold-light transition-colors shadow-lg"
            >
              Contact Sankofa Family Medicine
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Disclaimer */}
      <section className="bg-sfm-cream py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-sfm-text-muted">
            This information is for educational purposes only and does not constitute medical advice. 
            In case of emergency, always call 911.
          </p>
          <p className="text-xs text-sfm-text-light mt-2">
            © 2026 Sankofa Family Medicine, PLLC. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  )
}
