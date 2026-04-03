import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      icon: 'verified', title: 'Preventive Dentistry',
      desc: 'Maintain peak oral health with regular cleanings and thorough exams. We focus on early detection to prevent complex issues before they start.',
      tags: ['Cleanings', 'Checkups'], color: 'indigo',
    },
    {
      icon: 'flare', title: 'Cosmetic Dentistry',
      desc: 'Enhance your smile\'s aesthetic with world-class whitening and veneers. Tailored treatments designed to create a natural, radiant appearance.',
      tags: ['Whitening', 'Veneers'], color: 'pink',
    },
    {
      icon: 'settings_backup_restore', title: 'Dental Implants',
      desc: 'Permanent solutions for missing teeth that look and feel completely natural. Our specialists ensure a seamless, high-precision surgical process.',
      tags: ['Titanium', 'Full Arch'], color: 'emerald',
    },
    {
      icon: 'architecture', title: 'Restorative Care',
      desc: 'Expert repair of damaged teeth using advanced composites and ceramics. We restore full functionality and structural integrity with care.',
      tags: ['Fillings', 'Crowns'], color: 'amber',
    },
    {
      icon: 'align_horizontal_center', title: 'Orthodontics',
      desc: 'Modern alignment solutions for all ages, including clear aligners and braces. Achieve perfect symmetry through gentle, expert guidance.',
      tags: ['Invisalign', 'Metal Braces'], color: 'blue',
    },
    {
      icon: 'biotech', title: 'Oral Surgery',
      desc: 'Specialist procedures including wisdom tooth extractions and bone grafting. Performed in a sterile, safe, and highly controlled environment.',
      tags: ['Extractions', 'Grafting'], color: 'rose',
    },
  ];

  const techItems = [
    { icon: 'photo_camera', title: 'Intraoral Cameras', desc: 'High-definition visual tours of your mouth for better diagnosis and patient understanding.' },
    { icon: 'grid_view', title: 'Digital X-rays', desc: 'Instant imaging with 90% less radiation exposure than traditional film X-rays.' },
    { icon: 'view_in_ar', title: 'Digital Scanners', desc: 'No more messy impressions. We use 3D scanners for perfect aligner and crown fits.' },
    { icon: 'flare', title: 'Dental Lasers', desc: 'Minimally invasive soft tissue procedures for faster healing and less discomfort.' },
  ];

  const colorMap = {
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', tag: 'bg-indigo-50 text-indigo-700', hover: 'hover:bg-indigo-600 hover:text-white' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-700', tag: 'bg-pink-50 text-pink-700', hover: 'hover:bg-pink-600 hover:text-white' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', tag: 'bg-emerald-50 text-emerald-700', hover: 'hover:bg-emerald-600 hover:text-white' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-700', tag: 'bg-amber-50 text-amber-700', hover: 'hover:bg-amber-600 hover:text-white' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', tag: 'bg-blue-50 text-blue-700', hover: 'hover:bg-blue-600 hover:text-white' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-700', tag: 'bg-rose-50 text-rose-700', hover: 'hover:bg-rose-600 hover:text-white' },
  };

  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="relative bg-primary-container text-white overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNV8DKnF_pRBk6Wx8tY6r_RJHDcoVWY3Xv0s_wJ_KyNlsE_Droe0e5QSM6TYg_LJA5RzrzdIfma3HaHw4R_6LX5XE_GnSSMM2PyJnw3GYdWGrbBw7WYllNfEb8oUvawMz0_umcvMxeLfJ9WceeTGp3Ijk6dytOkbz4b_1aBJMzoH47cGg_LFE8Q_0SZ311SV_jaKI7NvQVlO44siMSwn06_gW-IRKKi-hS9br6IEIXLbRxHAGRfa0epZ9YlW7y3LRE3K2oSgeuOY4"
            alt="Background"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary-container font-bold tracking-widest text-sm uppercase mb-4 block">Specialist Dental Care</span>
            <h1 className="text-5xl md:text-8xl font-headline mb-8 leading-tight">Our Dental Services</h1>
            <p className="text-2xl md:text-3xl text-on-primary-container leading-relaxed max-w-2xl opacity-90">
              Comprehensive treatments by specialist doctors, designed to restore health and reveal your most confident smile.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map(({ icon, title, desc, tags, color }) => {
              const c = colorMap[color];
              return (
                <div
                  key={title}
                  className={`group p-8 rounded-xl bg-surface-container-low transition-all duration-500 ${c.hover} hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
                >
                  <div className={`w-14 h-14 rounded-full ${c.bg} flex items-center justify-center mb-6 ${c.text} group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline mb-4 transition-colors duration-500">{title}</h3>
                  <p className="leading-relaxed mb-6 opacity-90 transition-colors duration-500">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 ${c.tag} text-xs font-bold rounded-full uppercase tracking-tighter group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">State-of-the-Art</span>
              <h2 className="text-4xl md:text-6xl font-headline text-primary">Advanced Equipment for Precise Care</h2>
            </div>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed opacity-90">
              Investing in the latest dental technology allows us to provide faster, more accurate, and more comfortable treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techItems.map(({ icon, title, desc }) => (
              <div key={title} className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                <span className="material-symbols-outlined text-secondary text-5xl mb-8 block group-hover:scale-110 transition-transform duration-300">{icon}</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">{title}</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 mb-8">
        <div className="bg-primary-container rounded-xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-headline text-white mb-6">Not Sure What Treatment You Need?</h2>
            <p className="text-on-primary-container text-lg opacity-90">
              Schedule a comprehensive dental assessment with our lead specialists. We'll create a customized treatment plan just for you.
            </p>
          </div>
          <div className="relative z-10">
            <button
              onClick={() => navigate('/book')}
              className="bg-white text-primary-container px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 shadow-xl shadow-indigo-900/40 whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
