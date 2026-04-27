import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { doctorsData } from '../data/doctorsData';

export default function CosmeticDentistry() {
  const navigate = useNavigate();
  const drChandrakanth = doctorsData.find(d => d.name.includes('Chandrakanth'));

  const services = [
    { 
      title: 'Crowns and Bridges', 
      icon: 'architecture', 
      desc: 'Durable, natural-looking porcelain or ceramic crowns custom-designed to protect and perfectly restore the aesthetics of your teeth.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Complete Dentures', 
      icon: 'settings_backup_restore', 
      desc: 'Expertly crafted full or partial dentures that restore your ability to eat, speak, and smile with absolute confidence.',
      image: 'https://images.unsplash.com/photo-1593059080506-517a69fc439d?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'BPS Dentures', 
      icon: 'star', 
      desc: 'Premium bio-functional prosthetic system (BPS) dentures offering superior fit, function, and aesthetic quality.',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Full Mouth Rehabilitation', 
      icon: 'flare', 
      desc: 'Comprehensive smile restoration combining function, aesthetics, and long-term comfort using MDS-level clinical precision.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Cosmetic Dentistry & Smile Makeovers · Smile Inn"
        description="Transform your smile with Dr. Chandrakanth MDS at Smile Inn Dental Clinics. Porcelain veneers, whitening, and full mouth rehabilitation in Hyderabad."
        keywords="cosmetic dentist Hyderabad, smile makeover Nagole, teeth whitening Balapur, porcelain veneers Hyderabad, full mouth rehab"
        canonicalPath="/treatments/cosmetic-dentistry"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1609902726285-00668009f004?q=80&w=2070&auto=format&fit=crop" 
            alt="Cosmetic dental aesthetics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block animate-fade-in">Led by Dr. Chandrakanth MDS</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline text-primary mb-6 leading-tight drop-shadow-sm">
            Artistic <br /><span className="italic text-primary/80">Perfection</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 opacity-95 max-w-2xl mx-auto font-medium">
            Designing confident smiles through a blend of clinical mastery and artistic vision
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          {drChandrakanth && (
            <div className="mb-12 group relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-100 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img src={drChandrakanth.img} alt={drChandrakanth.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-pink-700 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                Clinical Director
              </div>
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">The Science of Beauty</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Led by **Dr. Chandrakanth MDS**, our cosmetic department specializes in restorative artistry. We don't just fix teeth; we reconstruct confidence using the global Gold Standard in dental aesthetics.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-700 shadow-lg shadow-pink-200/50">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed opacity-95">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-pink-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Schedule Smile Assessment
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-b-8 border-pink-700/20">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quotation */}
      <section className="py-24 bg-surface-container-low overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/20 blur-3xl rounded-full"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="space-y-8">
                <span className="material-symbols-outlined text-6xl text-pink-200">format_quote</span>
                <p className="text-3xl md:text-5xl font-headline text-primary leading-tight italic">
                  "A perfect smile is the ultimate expression of health and happiness. We design every rehabilitation to be as unique as the patient."
                </p>
                <cite className="block text-secondary font-bold tracking-[0.2em] uppercase not-italic">
                  — Dr. Chandrakanth MDS, Clinical Director
                </cite>
            </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-pink-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ff8fb133,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Your Journey to a Perfect Smile Starts Here</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Join thousands of patients who have transformed their confidence with our specialist-led cosmetic treatments.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-pink-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book My Smile Consultation
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
