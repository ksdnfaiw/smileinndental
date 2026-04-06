export const colorMap = {
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', tag: 'bg-indigo-50 text-indigo-700', hover: 'hover:bg-indigo-600 hover:text-white' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-700', tag: 'bg-pink-50 text-pink-700', hover: 'hover:bg-pink-600 hover:text-white' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', tag: 'bg-emerald-50 text-emerald-700', hover: 'hover:bg-emerald-600 hover:text-white' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', tag: 'bg-amber-50 text-amber-700', hover: 'hover:bg-amber-600 hover:text-white' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', tag: 'bg-blue-50 text-blue-700', hover: 'hover:bg-blue-600 hover:text-white' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-700', tag: 'bg-rose-50 text-rose-700', hover: 'hover:bg-rose-600 hover:text-white' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700', tag: 'bg-teal-50 text-teal-700', hover: 'hover:bg-teal-600 hover:text-white' },
};

export const categories = [
  {
    title: 'Dental Implants',
    slug: 'dental-implants',
    icon: 'settings_backup_restore',
    shortDesc: 'Permanent, life-like solutions for missing teeth using global protocols.',
    color: 'emerald',
    count: '5 treatments',
    services: [
      { title: 'Immediate Implants', desc: 'Same-day implant placement following an extraction for a faster transition.' },
      { title: 'Conventional Implants', desc: 'Traditional multi-stage implants for maximum long-term stability and bone health.' },
      { title: 'Pterygoid Implants', desc: 'Advanced solutions for severe upper jaw bone loss, avoiding complex sinus lifts.' },
      { title: 'Zygomatic Implants', desc: 'Specialized cheekbone implants for patients with significant maxillary bone atrophy.' },
      { title: 'Implant Supported Dentures', desc: 'Full-arch stability using a few strategically placed implants to secure dentures.' }
    ]
  },
  {
    title: 'Braces & Aligners',
    slug: 'braces-and-aligners',
    icon: 'align_horizontal_center',
    shortDesc: 'Modern orthodontic solutions to straighten smiles for adults and children.',
    color: 'blue',
    count: '3 treatments',
    services: [
      { title: 'Clear Aligners', desc: 'Virtually invisible removable trays specialized for discreet smile correction.' },
      { title: 'Traditional Braces', desc: 'Expertly managed metal or ceramic braces for precise teeth alignment.' },
      { title: 'Invisalign Specialists', desc: 'Advanced digital planning and execution using the global standard in clear aligners.' }
    ]
  },
  {
    title: 'Cosmetic Dentistry',
    slug: 'cosmetic-dentistry',
    icon: 'flare',
    shortDesc: 'Enhance your aesthetics through whitening, veneers, and smile makeovers.',
    color: 'pink',
    count: '4 treatments',
    services: [
      { title: 'Laser Teeth Whitening', desc: 'Professional-grade whitening using laser technology for instant, radiant results.' },
      { title: 'Porcelain Veneers', desc: 'Thin ceramic shells custom-crafted to perfect your tooth shape, color, and size.' },
      { title: 'Smile Rehabilitation', desc: 'Comprehensive aesthetic redesign of your smile to match your facial features.' },
      { title: 'Facial Aesthetics', desc: 'Subtle enhancements that complement your dental work for a harmonious appearance.' }
    ]
  },
  {
    title: 'Restorative & General',
    slug: 'restorative-and-general',
    icon: 'architecture',
    shortDesc: 'From painless cleanings to root canals, we restore your oral health.',
    color: 'amber',
    count: '6 treatments',
    services: [
      { title: 'Root Canal Treatment', desc: 'Hassle-free, painless RCT using advanced rotary systems and MDS expertise.' },
      { title: 'Aesthetic Fillings', desc: 'Tooth-colored composite resins that restore strength while blending perfectly.' },
      { title: 'Pain-Free Cleaning', desc: 'Professional scaling and polishing to remove plaque and restore brightness.' },
      { title: 'Crowns & Bridges', desc: 'Durable, natural-looking porcelain or ceramic crowns to protect damaged teeth.' },
      { title: 'Complete Dentures', desc: 'Classic, custom-fitted removable dentures to restore full chewing functionality.' },
      { title: 'Emergency Care', desc: 'Same-day attention for acute pain, trauma, or unexpected dental issues.' }
    ]
  },
  {
    title: 'Surgical Dentistry',
    slug: 'surgical-dentistry',
    icon: 'biotech',
    shortDesc: 'Expert surgical interventions for extractions and facial trauma.',
    color: 'rose',
    count: '5 treatments',
    services: [
      { title: 'Wisdom Tooth Removal', desc: 'Precision surgical extraction of impacted or problematic wisdom teeth.' },
      { title: 'Tooth Extractions', desc: 'Minimally invasive removal of non-restorable teeth with zero discomfort.' },
      { title: 'Laser Gum Surgery', desc: 'Advanced soft tissue management using lasers for faster, bloodless healing.' },
      { title: 'Jaw Lesion Surgery', desc: 'Specialist diagnosis and removal of cysts or lesions with aesthetic precision.' },
      { title: 'TMJ Management', desc: 'Expert diagnosis and relief for jaw pain, clicking, and joint dysfunction.' }
    ]
  },
  {
    title: 'Child Dentistry',
    slug: 'child-dentistry',
    icon: 'family_restroom',
    shortDesc: 'Gentle, friendly dental care specialized for our youngest patients.',
    color: 'indigo',
    count: '2 treatments',
    services: [
      { title: 'Pediatric Care', desc: 'Fun, stress-free checkups and cleanings designed to build positive habits.' },
      { title: 'Habit Counselling', desc: 'Expert guidance for thumb-sucking, mouth breathing, or other child habits.' }
    ]
  },
  {
    title: 'Technology & Diagnostics',
    slug: 'technology-and-diagnostics',
    icon: 'biotech',
    shortDesc: 'State-of-the-art diagnostic digital imaging and laser technology.',
    color: 'teal',
    count: '4 treatments',
    services: [
      { title: 'Digital X-rays', desc: 'Instant high-resolution imaging with 90% less radiation than traditional film.' },
      { title: '3D Intraoral Scanners', desc: 'Mess-free digital impressions for perfectly fitting crowns and aligners.' },
      { title: 'Dental Lasers', desc: 'Modern technology for painless surgeries and accelerated healing of tissues.' },
      { title: 'Intraoral HD Cameras', desc: 'See what we see with high-definition tours of your teeth and gums.' }
    ]
  }
];
