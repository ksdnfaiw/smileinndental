import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Treatments() {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'General Dentistry',
      path: '/treatments/general-dentistry',
      icon: 'dentistry',
      desc: 'Foundational care including cleanings, fillings, and preventative diagnostics.',
      features: ['Digital Checkups', 'Painless Cleaning', 'Aesthetic Fillings']
    },
    {
      title: 'Emergency Care',
      path: '/treatments/emergency-care',
      icon: 'emergency',
      desc: 'Immediate relief for acute pain, broken teeth, or dental trauma.',
      features: ['Acute Pain Relief', 'Trauma Management', 'Broken Teeth']
    },
    {
      title: 'Cosmetic Dentistry',
      path: '/treatments/cosmetic-dentistry',
      icon: 'flare',
      desc: 'Enhance your aesthetics through whitening, veneers, and smile makeovers.',
      features: ['Crowns & Bridges', 'Smile Makeovers', 'BPS Dentures']
    },
    {
      title: 'Oral Surgery',
      path: '/treatments/oral-surgery',
      icon: 'biotech',
      desc: 'Expert surgical interventions for extractions, cysts, and facial trauma.',
      features: ['Wisdom Tooth Removal', 'TMJ Disorders', 'Cyst Removal']
    },
    {
      title: 'Laser Dentistry',
      path: '/treatments/laser-dentistry',
      icon: 'medical_services',
      desc: 'Minimally invasive dental care using advanced laser technology.',
      features: ['Laser Gum Bleaching', 'Flap Surgery', 'Painless Procedures']
    },
    {
      title: 'Braces & Aligners',
      path: '/treatments/orthodontics',
      icon: 'align_horizontal_center',
      desc: 'Modern orthodontic solutions to align smiles for all ages.',
      features: ['Invisalign Aligners', 'Traditional Braces', 'MDS Supervision']
    },

    {
      title: 'Pediatric Care',
      path: '/treatments/pediatric-care',
      icon: 'family_restroom',
      desc: 'Gentle, friendly dental care specialized for our youngest patients.',
      features: ['Conscious Sedation', 'Fluoride Treatment', 'Child-Friendly']
    },
    {
      title: 'Oral Cancer',
      path: '/treatments/oral-cancer',
      icon: 'health_and_safety',
      desc: 'Advanced screening and early detection of oral malignancies.',
      features: ['Cancer Screening', 'Early Detection', 'Specialist Review']
    },
    {
      title: 'Esthetic Procedures',
      path: '/treatments/esthetic-procedures',
      icon: 'auto_awesome',
      desc: 'Aesthetic enhancements for a harmonious and beautiful facial appearance.',
      features: ['Smile Enhancement', 'Facial Harmony', 'Modern Esthetics']
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Dental Treatments & Specialist Care · Smile Inn"
        description="Explore comprehensive dental treatments at Smile Inn Dental Clinics. From Orthodontics to Oral Surgery, our MDS specialists provide expert care in Nagole and Balapur."
        keywords="dental treatments Hyderabad, orthodontics Nagole, oral surgery Hyderabad, cosmetic dentistry, general dentistry Balapur"
        canonicalPath="/treatments"
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Ultra-modern dental clinic" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-secondary-container font-bold tracking-[0.3em] uppercase text-sm mb-6 block animate-fade-in">Department of Excellence</span>
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-8 leading-tight">
            Advanced Dental <span className="italic text-secondary-fixed-dim">Artistry</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto leading-relaxed">
            Where world-class technology meets specialist clinical expertise.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div 
              key={cat.title}
              onClick={() => navigate(cat.path)}
              className="group cursor-pointer bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-primary-container flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="material-symbols-outlined text-5xl">{cat.icon}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-headline text-primary group-hover:text-secondary transition-colors">{cat.title}</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">{cat.desc}</p>
                  <ul className="grid grid-cols-1 gap-2 pt-4">
                    {cat.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-bold text-outline uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all duration-300">
                      Explore Treatment <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Specialist Care */}
      <section className="py-24 bg-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline text-white leading-tight">
              The Advantage of <br />
              <span className="italic text-on-primary-container">MDS Specialists</span>
            </h2>
            <p className="text-xl text-on-primary-container leading-relaxed opacity-90">
              Unlike primary care clinics, Smile Inn ensures every complex case is handled by a dedicated Master of Dental Surgery (MDS). 
              Our specialist-led approach guarantees precision, safety, and superior aesthetic results.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              {[
                { n: '5+', l: 'MDS Experts' },
                { n: '1000+', l: 'Happy Smiles' },
                { n: 'Painless', l: 'Procedures' },
                { n: '2', l: 'Elite Branches' }
              ].map(stat => (
                <div key={stat.l}>
                  <div className="text-3xl font-headline text-secondary">{stat.n}</div>
                  <div className="text-xs uppercase font-bold text-white tracking-[0.2em]">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                alt="Expert Dentist" 
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Ready for Your Assessment?</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Start your journey toward a healthier, more confident smile today with our clinical experts.
        </p>
        <button 
          onClick={() => navigate('/book')}
          className="px-12 py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Book Your Session
        </button>
      </section>
    </div>
  );
}
