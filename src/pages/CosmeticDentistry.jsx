import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CosmeticDentistry() {
  const navigate = useNavigate();

  const treatments = [
    { title: 'Signature Whitening', icon: 'flare', d: 'In-office professional whitening that can brighten your smile by up to 8 shades in a single session.' },
    { title: 'Porcelain Veneers', icon: 'auto_awesome', d: 'Custom-crafted, ultra-thin ceramic shells that cover imperfections for a Hollywood-ready smile.' },
    { title: 'Digital Smile Design', icon: 'view_in_ar', d: 'Advanced software mapping that allows you to "trial" your new smile before any treatment begins.' },
    { title: 'Composite Bonding', icon: 'brush', d: 'An artistic, non-invasive way to repair chips, gaps, or discoloration using high-density resin.' }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Cosmetic Dentist Hyderabad | Smile Makeovers & Veneers" 
        description="Transform your smile with Smile Inn Dental Clinics. Aesthetic expert cosmetic dentistry including Porcelain Veneers and Professional Whitening in Nagole and Balapur."
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Cosmetic Dentistry" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight">
            Confidence <br /><span className="italic text-secondary">Redefined.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto">
            Experience the harmony of medicine and art. We design smiles that are naturally radiant and uniquely yours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline text-primary">Smile Artistry.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed opacity-90">
              At Smile Inn, cosmetic dentistry is more than just a procedure—it's a transformation. Led by **Dr. Kavya P. (MDS)**, our aesthetic studio specializes in creating balanced, natural-looking smiles that enhance your facial features. 
              We combine the latest porcelain materials with digital mapping technology to ensure 100% predictability in your smile journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {treatments.map(t => (
                <div key={t.title} className="p-8 rounded-3xl bg-surface-container-low hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">{t.icon}</span>
                  </div>
                  <h4 className="font-bold text-xl text-primary mb-3">{t.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                    alt="Smile Transformation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary p-12 rounded-[3rem] shadow-xl max-w-xs hidden md:block z-20">
                <p className="text-3xl font-headline text-white italic">"A smile is the most powerful accessory you can ever wear."</p>
                <p className="text-xs text-white/70 mt-6 tracking-widest font-bold uppercase">— Dr. Kavya P.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Before/After Promo Area */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-headline text-primary mb-20 leading-tight">Your New Smile <br /><span className="text-secondary italic">Begins with a Vision.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { n: 'Consultation', d: 'Expert analysis of your facial profile and dental health.', i: 'person_search' },
                    { n: 'Digital Design', d: '3D mapping of your future smile using advanced AI.', i: 'camera' },
                    { n: 'Transformation', d: 'Precision execution by our master MDS clinicians.', i: 'brush' }
                ].map(s => (
                    <div key={s.n} className="space-y-6">
                        <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto text-primary">
                            <span className="material-symbols-outlined text-4xl">{s.i}</span>
                        </div>
                        <h5 className="text-2xl font-headline text-primary">{s.n}</h5>
                        <p className="text-on-surface-variant opacity-80 leading-relaxed max-w-xs mx-auto">{s.d}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-50"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-headline mb-10 leading-tight">Ready for Your <br />Dream Smile?</h2>
                <p className="text-xl md:text-2xl text-on-primary-container mb-12 opacity-90 leading-relaxed">
                    Book a Cosmetic Consultation and see how Digital Smile Design can change your life.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-16 py-6 bg-secondary text-white rounded-3xl font-bold text-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  Start Your Transformation
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
