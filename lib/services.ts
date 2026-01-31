import {
  Heart,
  Activity,
  Brain,
  Bone,
  Stethoscope,
  Thermometer,
  Users,
  ShieldCheck,
  Microscope,
  UserCheck,
  Droplets,
  Eye,
  Clipboard,
  ArrowRight,
} from 'lucide-react'

export const primaryServices = [
  {
    id: 'cardiometabolic',
    icon: Heart,
    category: 'Cardiometabolic and Endocrine',
    tagline: 'Heart health meets metabolic optimization',
    conditions: [
      'Hypertension and blood pressure management',
      'Hyperlipidemia and cholesterol optimization',
      'Prediabetes and Type 2 diabetes',
      'Obesity and metabolic syndrome',
      'Thyroid disorders including hypothyroidism and hyperthyroidism',
      'Polycystic ovary syndrome (PCOS)',
      'Fatty liver disease (MAFLD and NAFLD)',
      'ASCVD risk assessment and cardiovascular prevention',
    ],
  },
  {
    id: 'weight-energy',
    icon: Activity,
    category: 'Weight, Energy, and Prevention',
    tagline: 'Sustainable transformation through medical science',
    conditions: [
      'Medical weight management with prescription therapies',
      'Weight loss medications when clinically appropriate',
      'Weight regain following prior interventions',
      'Insulin resistance and metabolic fatigue',
      'Cardiometabolic risk reduction',
      'Lifestyle modification and behavioral support',
    ],
  },
  {
    id: 'mental-health',
    icon: Brain,
    category: 'Mental Health (Primary Care Scope)',
    tagline: 'Integrated support for mind and body',
    conditions: [
      'Depression (mild to moderate)',
      'Anxiety disorders including generalized and social anxiety',
      'Adjustment disorders and life transitions',
      'Burnout and chronic stress conditions',
      'Sleep-related mood disturbances',
      'Adult ADHD (established diagnosis, stable management)',
      'Grief and bereavement support',
    ],
  },
  {
    id: 'musculoskeletal',
    icon: Bone,
    category: 'Musculoskeletal and Pain',
    tagline: 'Movement without limitation',
    conditions: [
      'Osteoarthritis evaluation and management',
      'Chronic low back and neck pain',
      'Myofascial pain syndromes',
      'Overuse and repetitive strain injuries',
      'Fibromyalgia',
      'Gout and hyperuricemia',
      'Osteoporosis screening and management',
    ],
  },
  {
    id: 'gastrointestinal',
    icon: Stethoscope,
    category: 'Gastrointestinal and Respiratory',
    tagline: 'Digestive wellness and respiratory clarity',
    conditions: [
      'GERD and acid reflux management',
      'Irritable bowel syndrome (IBS)',
      'Chronic constipation or diarrhea',
      'Asthma (mild to moderate, stable)',
      'COPD maintenance and monitoring',
      'Allergic rhinitis and chronic sinusitis',
      'Sleep-disordered breathing and CPAP follow-up',
    ],
  },
  {
    id: 'acute-care',
    icon: Thermometer,
    category: 'Acute Telemedicine Care',
    tagline: 'Accessible care when you need it',
    conditions: [
      'Upper respiratory infections and pharyngitis',
      'Acute sinusitis and bronchitis',
      'Uncomplicated urinary tract infections',
      'Skin conditions and dermatologic concerns',
      'Minor gastrointestinal illnesses',
      'COVID-19 and influenza evaluation',
      'Urgent medication refills and management',
    ],
  },
]

export const additionalServices = [
  {
    id: 'womens-health',
    icon: Users,
    title: "Women's Health",
    items: [
      'Contraception counseling and management',
      'Menopause and perimenopause care',
      'Hormone replacement therapy',
      'Menstrual disorders',
      'Cervical cancer screening coordination',
    ],
  },
  {
    id: 'mens-health',
    icon: UserCheck,
    title: "Men's Health",
    items: ['Erectile dysfunction', 'Testosterone evaluation and management', 'Prostate health screening', 'BPH symptom management'],
  },
  {
    id: 'sexual-health',
    icon: ShieldCheck,
    title: 'Sexual and Reproductive Health',
    items: ['STI screening and treatment', 'HIV PrEP and monitoring', 'Sexual health counseling', 'Reproductive planning'],
  },
  {
    id: 'dermatology',
    icon: Eye,
    title: 'Dermatologic Conditions',
    items: ['Acne and rosacea', 'Eczema and psoriasis', 'Skin infection triage', 'Teledermatology referral'],
  },
  {
    id: 'neurologic',
    icon: Brain,
    title: 'Neurologic and Cognitive',
    items: ['Migraine disorders', 'Tension headaches', 'Insomnia and sleep disorders', 'Peripheral neuropathy'],
  },
  {
    id: 'hematologic',
    icon: Droplets,
    title: 'Hematologic Conditions',
    items: ['Iron deficiency anemia', 'B12 and folate deficiency', 'Anticoagulation management'],
  },
]

export const careCoordination = [
  { icon: Microscope, text: 'Laboratory ordering, interpretation, and longitudinal tracking' },
  { icon: Clipboard, text: 'Diagnostic imaging orders and coordination' },
  { icon: Users, text: 'Specialty referral facilitation and care navigation' },
  { icon: Activity, text: 'Remote patient monitoring for blood pressure, glucose, and weight' },
  { icon: Heart, text: 'Chronic care management and personalized care plans' },
  { icon: ArrowRight, text: 'Care transitions support following hospitalization' },
  { icon: ShieldCheck, text: 'Prior authorization assistance' },
  { icon: Clipboard, text: 'Medical records coordination' },
]

export const exclusions = [
  { item: 'Emergency and life-threatening conditions', note: 'Call 911' },
  { item: 'Inpatient hospital care', note: null },
  { item: 'Surgical and invasive procedures', note: null },
  { item: 'Pre-participation sports physicals', note: 'WIAA requires in-person examination' },
  { item: 'Obstetric care and delivery', note: null },
  { item: 'Pediatric care under age 12 (case-by-case approval)', note: null },
  { item: 'Complex psychiatric conditions requiring stabilization', note: null },
  { item: 'Chronic opioid pain management', note: null },
  { item: 'Workers compensation evaluations', note: null },
]

export default null
