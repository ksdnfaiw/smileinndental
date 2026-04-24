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
    title: 'General Dentistry',
    slug: 'general-dentistry',
    icon: 'dentistry',
    shortDesc: 'Foundational care including cleanings, fillings, and preventative diagnostics.',
    color: 'emerald',
    count: '6 treatments',
    services: [
      { title: 'Digital Checkups', desc: 'Precise diagnosis using ultra-low radiation digital X-rays and intraoral HD cameras.' },
      { title: 'Pain-Free Cleaning', desc: 'Ultrasonic scaling and professional polishing to remove plaque and restore brightness.' },
      { title: 'Aesthetic Fillings', desc: 'Tooth-colored composite resins that restore strength while blending perfectly.' },
      { title: 'Root Canal Treatment', desc: 'Expert endodontic care using advanced rotary systems for a faster, pain-free experience.' },
      { title: 'Simple Extractions', desc: 'Quick, painless tooth removal of a damaged or decayed tooth using safe techniques.' },
      { title: 'Gum Care', desc: 'Comprehensive prevention and treatment of gum diseases for optimal oral health.' }
    ]
  },
  {
    title: 'Emergency Care',
    slug: 'emergency-care',
    icon: 'emergency',
    shortDesc: 'Immediate relief for acute pain, broken teeth, or dental trauma.',
    color: 'rose',
    count: '5 treatments',
    services: [
      { title: 'Severe Tooth / Jaw Pain', desc: 'Quick, pain-relieving treatments to restore comfort and oral health.' },
      { title: 'Bleeding / Injury to Mouth', desc: 'Immediate, expert care for oral injuries with a focus on comfort and rapid healing.' },
      { title: 'Broken or Chipped Teeth', desc: 'Quick and effective care to repair broken teeth and bring back your smile.' },
      { title: 'Dental / Jaw Trauma', desc: 'Advanced emergency treatment to manage injuries with comfort and faster recovery.' },
      { title: 'Teeth Avulsion', desc: 'Immediate expert care to preserve and reimplant avulsed teeth with precision.' }
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
      { title: 'Crowns & Bridges', desc: 'Durable, natural-looking porcelain or ceramic crowns to protect and restore teeth.' },
      { title: 'Complete Dentures', desc: 'Classic, custom-fitted removable dentures to restore full chewing functionality.' },
      { title: 'BPS Dentures', desc: 'Advanced dentures with precise fit offering enhanced stability, function, and esthetics.' },
      { title: 'Full Mouth Rehabilitation', desc: 'Comprehensive smile restoration combining function and aesthetics with MDS precision.' }
    ]
  },
  {
    title: 'Oral Surgery',
    slug: 'oral-surgery',
    icon: 'biotech',
    shortDesc: 'Expert surgical interventions for extractions, cysts, and facial trauma.',
    color: 'amber',
    count: '6 treatments',
    services: [
      { title: 'Wisdom Tooth Removal', desc: 'Precision surgical extraction of impacted or problematic wisdom teeth.' },
      { title: 'TMJ Disorders', desc: 'Diagnosis and management of temporomandibular joint disorders affecting function.' },
      { title: 'Oral Cysts & Tumors', desc: 'Minimally invasive treatments for safe removal and faster recovery.' },
      { title: 'Dental Trauma Management', desc: 'Specialized care for complex injuries to the teeth and supporting structures.' },
      { title: 'Jaw Lesion Surgery', desc: 'Specialist diagnosis and removal of cysts or lesions with aesthetic precision.' },
      { title: 'Surgical Extractions', desc: 'Complex removal of non-restorable teeth handled with surgical expertise.' }
    ]
  },
  {
    title: 'Laser Dentistry',
    slug: 'laser-dentistry',
    icon: 'medical_services',
    shortDesc: 'Minimally invasive dental care using advanced laser technology.',
    color: 'teal',
    count: '4 treatments',
    services: [
      { title: 'Laser Gum Bleaching', desc: 'Advanced laser gum depigmentation for a brighter, more even and aesthetic smile.' },
      { title: 'Flap Surgery', desc: 'Advanced laser-assisted gum surgery for precise treatment and faster healing.' },
      { title: 'Photo Biomodulation', desc: 'Low-level light therapy used to promote tissue healing and reduce inflammation.' },
      { title: 'Lesion Screening', desc: 'Advanced screening for early detection of oral changes, ensuring timely care.' }
    ]
  },
  {
    title: 'Orthodontics',
    slug: 'orthodontics',
    icon: 'align_horizontal_center',
    shortDesc: 'Modern orthodontic solutions to align smiles for all ages.',
    color: 'blue',
    count: '2 treatments',
    services: [
      { title: 'Clear Aligners (Invisalign)', desc: 'Virtually invisible removable trays specialized for discreet smile alignment.' },
      { title: 'Traditional Braces', desc: 'High-precision metal braces for reliable, effective, and beautifully aligned smiles.' }
    ]
  },
  {
    title: 'Pediatric Care',
    slug: 'pediatric-care',
    icon: 'family_restroom',
    shortDesc: 'Gentle, friendly dental care specialized for our youngest patients.',
    color: 'indigo',
    count: '4 treatments',
    services: [
      { title: 'Conscious Sedation', desc: 'Advanced and safe sedation methods to ensure a relaxed, child-friendly visit.' },
      { title: 'Fluoride Treatment', desc: 'Topical fluoride application to enhance enamel resistance and prevent caries.' },
      { title: 'Pulpectomy / Pulpotomy', desc: 'Vital and non-vital pulp therapy procedures to maintain primary tooth health.' },
      { title: 'Early Ortho Evaluation', desc: 'Early check-up to monitor teeth and ensure a healthy, straight smile.' }
    ]
  },
  {
    title: 'Oral Cancer',
    slug: 'oral-cancer',
    icon: 'health_and_safety',
    shortDesc: 'Advanced screening and early detection of oral malignancies.',
    color: 'rose',
    count: '3 treatments',
    services: [
      { title: 'Oral Cancer Screening', desc: 'Advanced screening for early detection of oral changes and preventive care.' },
      { title: 'Oral Cysts & Tumors', desc: 'Careful evaluation to detect and understand unusual growths in the mouth early.' },
      { title: 'Precancerous Conditions', desc: 'Advanced care for early detection and management of potentially harmful changes.' }
    ]
  },
  {
    title: 'Esthetic Procedures',
    slug: 'esthetic-procedures',
    icon: 'auto_awesome',
    shortDesc: 'Aesthetic enhancements for a harmonious and beautiful facial appearance.',
    color: 'pink',
    count: '1 treatment',
    services: [
      { title: 'Smile Enhancements', desc: 'Customized aesthetic procedures to complement your dental work and facial features.' }
    ]
  }
];
