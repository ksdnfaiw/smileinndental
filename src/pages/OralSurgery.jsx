import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function OralSurgery() {
  const navigate = useNavigate();

  const surgeries = [
    { title: 'Dental Implants', icon: 'settings_backup_restore', d: 'Permanent, titanium roots for missing teeth that look, feel, and function exactly like natural ones.' },
    { title: 'Wisdom Teeth', icon: 'emergency', d: 'Expert, pain-free extraction of impacted or problematic wisdom teeth using minimally invasive techniques.' },
    { title: 'Full Mouth Rehab', icon: 'architecture', d: 'Comprehensive reconstruction for multiple missing or severely damaged teeth using MDS-level precision.' },
    { title: 'Bone Grafting', icon: 'grid_view', d: 'Advanced procedures to restore jawbone volume, providing a solid foundation for successful implants.' }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Oral Surgery & Dental Implants Hyderabad | MDS Specialists · Smile Inn"
        description="Precision Oral Surgery and Dental Implants by MDS Surgeon Dr. S. K. Nair at Smile Inn Dental Clinics. Safe, expert care in Nagole and Balapur, Hyderabad."
        keywords="oral surgery Hyderabad, dental implants Nagole, wisdom tooth extraction Hyderabad, bone grafting Balapur, MDS surgeon Hyderabad"
        canonicalPath="/treatments/oral-surgery"
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
            alt="Oral surgery operation theater at Smile Inn Dental Clinics, Hyderabad" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
           <span className="text-secondary-container font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Precision Clinical Mastery</span>
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight">
            Restoring <br /><span className="italic text-secondary">Integrity.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto">
            High-precision surgical interventions delivered with absolute clinical sterility and expert care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-headline text-primary leading-tight italic">Surgery with <br />a Gentle Touch.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed opacity-90">
                Oral Surgery at Smile Inn is led by <strong>Dr. S. K. Nair (MDS)</strong>, one of Hyderabad\'s premier oral and maxillofacial surgeons. 
                Whether it\'s an emergency wisdom tooth extraction or a complex full-arch implant reconstruction, our procedures are defined by meticulous planning and a focus on rapid, pain-free recovery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {surgeries.map(s => (
                <div key={s.title} className="p-10 rounded-3xl bg-surface-container-low hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">{s.icon}</span>
                    <h4 className="text-2xl font-headline text-primary mb-3">{s.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1598256989490-ef558ec39a5c?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. S. K. Nair, MDS Oral Surgeon at Smile Inn Dental Clinics, Hyderabad" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <h4 className="text-2xl font-headline text-primary mb-2">Dr. S. K. Nair</h4>
                <p className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">MDS | Oral Surgery</p>
                <p className="text-sm italic text-on-surface-variant opacity-80 leading-relaxed">
                  "Precision in the clinic, peace of mind for the patient. We use the latest 3D imaging for 100% surgical accuracy."
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Safety/Tech Strip */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
                { title: 'CBCT 3D Scanning', i: 'view_in_ar', d: 'High-precision mapping for implant placement.' },
                { title: 'Sterile Theater', i: 'sanitizer', d: 'Hospital-grade sterilization environments.' },
                { title: 'Conscious Sedation', i: 'spa', d: 'Zero-anxiety experience for nervous patients.' },
                { title: 'Guided Recovery', i: 'health_and_safety', d: 'Personalized post-op care kits and monitoring.' }
            ].map(b => (
                <div key={b.title} className="space-y-4">
                    <span className="material-symbols-outlined text-4xl text-secondary">{b.i}</span>
                    <h5 className="text-lg font-bold">{b.title}</h5>
                    <p className="text-sm opacity-70 px-4">{b.d}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Implants Focus */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary-container p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
            <div className="text-left max-w-2xl">
                <h2 className="text-4xl md:text-7xl font-headline text-white mb-8">Permanent Smiles with Dental Implants</h2>
                <p className="text-xl md:text-2xl text-on-primary-container mb-12 opacity-90 leading-relaxed">
                    Say goodbye to dentures and loose teeth. Our MDS-led implant center provides lifelong solutions for a strong, beautiful smile.
                </p>
                <div className="flex gap-4">
                   <span className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-widest leading-none">Global Titanium Grades</span>
                   <span className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-widest leading-none">Lifetime Warranty</span>
                </div>
            </div>
            <div className="flex-1 w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1598256991053-90d565256e29?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dental implant procedure at Smile Inn Dental Clinics, Hyderabad" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8 leading-tight">Need a Surgical Consultation?</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto">
          From painless wisdom tooth removal to full mouth restoration, our surgical experts are here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="px-16 py-6 bg-secondary text-white rounded-3xl font-bold text-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              Book Surgical Assessment
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+919177317253'}
              className="px-10 py-6 border-2 border-outline-variant text-primary rounded-3xl font-bold text-xl hover:bg-surface-container transition-all duration-300 flex items-center gap-3"
            >
              <span className="material-symbols-outlined">call</span> Emergency Line
            </button>
        </div>
      </section>
    </div>
  );
}
