// ─── Event Metadata ──────────────────────────────────────────────────────────
export const EVENT = {
  name: 'Enterprise AI Summit',
  organizer: 'Stage-X Space',
  tagline: 'Where Intelligence Meets Innovation',
  date: 'November 14–15, 2026',
  location: 'Bengaluru Convention Centre, India',
  capacity: '2,500+ Attendees',
  description:
    'The definitive gathering for AI pioneers, enterprise leaders, and tech visionaries. Two days of groundbreaking keynotes, hands-on workshops, and unparalleled networking opportunities that will define the future of enterprise intelligence.',
};

// ─── Nav Links ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Speakers',  href: '#speakers' },
  { label: 'Schedule',  href: '#schedule' },
  { label: 'Sponsors',  href: '#sponsors' },
  { label: 'Register',  href: '#register' },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '50+',  label: 'World-class Speakers' },
  { value: '2',    label: 'Days of Innovation' },
  { value: '2.5K', label: 'Attendees Expected' },
  { value: '30+',  label: 'Workshops & Sessions' },
];

// ─── Speakers ─────────────────────────────────────────────────────────────────
export const SPEAKERS = [
  {
    id: 1,
    name: 'Dr. Aria Nakamura',
    role: 'Chief AI Officer',
    company: 'NeuralSphere Inc.',
    topic: 'AGI Pathways in Enterprise',
    bio: 'Pioneer in applied AGI research with 15+ years shaping AI strategy for Fortune 500 companies.',
    avatar: 'AN',
    gradient: 'from-violet-500 to-indigo-600',
    twitter: '#',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'VP of Engineering',
    company: 'CloudMind Systems',
    topic: 'Scaling AI at Enterprise Level',
    bio: 'Led AI transformation programs across 40+ enterprises, saving billions in operational costs.',
    avatar: 'MW',
    gradient: 'from-cyan-500 to-blue-600',
    twitter: '#',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Sofia Reyes',
    role: 'AI Ethics Lead',
    company: 'FutureTrust Labs',
    topic: 'Responsible AI Governance',
    bio: 'World-renowned speaker on AI ethics and policy, advising governments on responsible AI deployment.',
    avatar: 'SR',
    gradient: 'from-pink-500 to-rose-600',
    twitter: '#',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'James Okafor',
    role: 'Founder & CEO',
    company: 'Quantum AI Ventures',
    topic: 'AI Investment Landscape 2027',
    bio: 'Serial entrepreneur with 4 successful AI exits totaling over $2B, now funding the next wave.',
    avatar: 'JO',
    gradient: 'from-amber-500 to-orange-600',
    twitter: '#',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Research Director',
    company: 'DeepLogic AI',
    topic: 'Multimodal AI for Business',
    bio: 'Author of 120+ peer-reviewed papers; her research underpins models used by 500M+ users globally.',
    avatar: 'PS',
    gradient: 'from-emerald-500 to-teal-600',
    twitter: '#',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Luca Ferretti',
    role: 'CTO',
    company: 'SynthAI Europe',
    topic: 'Generative AI in Production',
    bio: 'Architect of enterprise GenAI platforms adopted by 200+ organizations across EMEA.',
    avatar: 'LF',
    gradient: 'from-purple-500 to-violet-600',
    twitter: '#',
    linkedin: '#',
  },
];

// ─── Schedule ─────────────────────────────────────────────────────────────────
export const SCHEDULE = [
  {
    day: 'Day 1',
    date: 'November 14, 2026',
    sessions: [
      { time: '09:00 AM', title: 'Registration & Welcome Coffee', type: 'break', speaker: null },
      { time: '10:00 AM', title: 'Opening Keynote: The Intelligent Enterprise', type: 'keynote', speaker: 'Dr. Aria Nakamura' },
      { time: '11:30 AM', title: 'Scaling AI at Enterprise Level', type: 'talk', speaker: 'Marcus Webb' },
      { time: '01:00 PM', title: 'Networking Lunch & Exhibition', type: 'break', speaker: null },
      { time: '02:30 PM', title: 'Responsible AI Governance', type: 'talk', speaker: 'Sofia Reyes' },
      { time: '04:00 PM', title: 'Panel: AI Leaders Roundtable', type: 'panel', speaker: 'Multiple Speakers' },
      { time: '06:00 PM', title: 'Evening Cocktail Reception', type: 'break', speaker: null },
    ],
  },
  {
    day: 'Day 2',
    date: 'November 15, 2026',
    sessions: [
      { time: '09:30 AM', title: 'Workshop: Building Multimodal AI Pipelines', type: 'workshop', speaker: 'Priya Sharma' },
      { time: '11:00 AM', title: 'AI Investment Landscape 2027', type: 'talk', speaker: 'James Okafor' },
      { time: '12:30 PM', title: 'Lunch & Live Demos', type: 'break', speaker: null },
      { time: '02:00 PM', title: 'Generative AI in Production at Scale', type: 'talk', speaker: 'Luca Ferretti' },
      { time: '03:30 PM', title: 'Workshop: AI ROI Measurement Framework', type: 'workshop', speaker: 'Marcus Webb' },
      { time: '05:00 PM', title: 'Closing Keynote & Awards Ceremony', type: 'keynote', speaker: 'Dr. Aria Nakamura' },
    ],
  },
];

// ─── Sponsors ─────────────────────────────────────────────────────────────────
export const SPONSORS = {
  platinum: [
    { name: 'NeuralSphere', tier: 'platinum' },
    { name: 'CloudMind', tier: 'platinum' },
  ],
  gold: [
    { name: 'DeepLogic AI', tier: 'gold' },
    { name: 'SynthAI', tier: 'gold' },
    { name: 'QuantumVentures', tier: 'gold' },
  ],
  silver: [
    { name: 'FutureTrust', tier: 'silver' },
    { name: 'AiGenesis', tier: 'silver' },
    { name: 'DataForge', tier: 'silver' },
    { name: 'NexusAI', tier: 'silver' },
  ],
};

// ─── Ticket Tiers ─────────────────────────────────────────────────────────────
export const TICKETS = [
  {
    id: 'standard',
    name: 'Standard',
    price: '₹4,999',
    features: [
      'Access to all keynotes',
      'Exhibition hall entry',
      'Networking sessions',
      'Digital event kit',
      'Post-event recordings',
    ],
    gradient: 'from-slate-700 to-slate-800',
    highlight: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹9,999',
    badge: 'Most Popular',
    features: [
      'Everything in Standard',
      'All workshop access',
      'Reserved front-row seating',
      'Speaker meet & greet',
      'Exclusive attendee dinner',
      'Certificate of attendance',
    ],
    gradient: 'from-indigo-600 to-violet-700',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '₹24,999',
    features: [
      'Everything in Professional',
      '5 team passes',
      'VIP lounge access',
      'Private speaker sessions',
      'Priority networking',
      'Enterprise AI toolkit',
      'Dedicated account manager',
    ],
    gradient: 'from-amber-600 to-orange-700',
    highlight: false,
  },
];

// ─── Session Type Styling ──────────────────────────────────────────────────────
export const SESSION_TYPE_STYLES = {
  keynote:  { bg: 'bg-violet-500/20', text: 'text-violet-300', border: 'border-violet-500/30', label: 'Keynote' },
  talk:     { bg: 'bg-cyan-500/20',   text: 'text-cyan-300',   border: 'border-cyan-500/30',   label: 'Talk' },
  workshop: { bg: 'bg-emerald-500/20',text: 'text-emerald-300',border: 'border-emerald-500/30',label: 'Workshop' },
  panel:    { bg: 'bg-pink-500/20',   text: 'text-pink-300',   border: 'border-pink-500/30',   label: 'Panel' },
  break:    { bg: 'bg-slate-500/20',  text: 'text-slate-400',  border: 'border-slate-500/30',  label: 'Break' },
};
