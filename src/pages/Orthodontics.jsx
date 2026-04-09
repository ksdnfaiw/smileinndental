import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Orthodontics() {
  const navigate = useNavigate();

  const options = [
    { title: 'Invisalign®', icon: 'visibility_off', d: 'The "invisible" way to straighten your teeth using custom-made, clear aligners. Minimal impact on your lifestyle, maximum results.' },
    { title: 'Ceramic Braces', icon: 'texture', d: 'Made of clear materials, they are less visible on your teeth than metal braces. For those who want discrete traditional orthodontic care.' },
    { title: 'Smart Self-Ligated', icon: 'settings', d: 'A faster, cleaner alternative to traditional braces with fewer appointments and less discomfort.' },
    { title: 'Child Orthodontics', icon: 'child_care', d: 'Early intervention to guide jaw growth and create enough space for permanent teeth to come in properly.' }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Best Orthodontist in Hyderabad | Invisalign & Braces · Smile Inn"
        description="Straighten your smile with MDS Orthodontists at Smile Inn Dental Clinics. Expert Invisalign and Braces treatment in Nagole and Balapur, Hyderabad."
        keywords="orthodontist Hyderabad, Invisalign Nagole, braces Hyderabad, teeth alignment Balapur, clear aligners Hyderabad"
        canonicalPath="/treatments/orthodontics"
      />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1598256989490-ef558ec39a5c?q=80&w=2070&auto=format&fit=crop" 
            alt="Orthodontic treatment with braces at Smile Inn Dental Clinics, Hyderabad" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
           <span className="text-secondary-container font-bold tracking-[0.3em] uppercase text-sm mb-6 block">MDS Specialist Mastery</span>
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight">
            The Art of <br /><span className="italic text-secondary">Alignment.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto">
            Achieving perfect symmetry and a healthy bite through master-level orthodontic care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Arjun Reddy, MDS Orthodontist at Smile Inn Dental Clinics Hyderabad" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-2xl shadow-xl max-w-xs hidden md:block border-t-8 border-secondary">
                <h4 className="text-2xl font-headline text-primary mb-2">Specialist Team</h4>
                <p className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">MDS | Orthodontics</p>
                <p className="text-sm italic text-on-surface-variant opacity-80 leading-relaxed">
                  "Every alignment is a unique puzzle. We combine biomechanical precision with artistic vision."
                </p>
              </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-headline text-primary leading-tight">Symmetry Meets <br />Functionality.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed opacity-90">
                Orthodontics at Smile Inn is led by our <strong>MDS Orthodontic Specialists</strong>. Unlike general practitioners, our specialists have three additional years of specialized training in tooth movement and facial development. 
                Whether you prefer the invisibility of modern aligners or the precision of specialized braces, we ensure a perfect final outcome.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {options.map(opt => (
                <div key={opt.title} className="p-8 rounded-3xl bg-surface-container-low hover:bg-primary-container group transition-all duration-500">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-6 group-hover:text-white transition-colors">{opt.icon}</span>
                    <h4 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors">{opt.title}</h4>
                    <p className="text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed transition-colors opacity-80">{opt.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Invisalign Advantage */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Featured Treatment</span>
                <h2 className="text-4xl md:text-6xl font-headline text-primary leading-tight italic">Smile Invisibly <br />with Invisalign.</h2>
                <div className="space-y-6">
                    {[
                        { t: 'Removable Aligners', d: 'Eat your favorite foods and brush comfortably.' },
                        { t: 'Predictable Results', d: 'See your future smile before you start with 3D Cincat mapping.' },
                        { t: 'Fewer Visits', d: 'Streamlined treatment requiring fewer clinical appointments.' },
                        { t: 'Virtually Clear', d: 'So discrete, no one will know you\'re wearing them.' }
                    ].map(f => (
                        <div key={f.t} className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                            <div>
                                <h5 className="font-bold text-primary mb-1">{f.t}</h5>
                                <p className="text-on-surface-variant text-sm opacity-80">{f.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop" 
                    alt="Invisalign clear aligners treatment at Smile Inn Dental Clinics, Hyderabad" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-secondary p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-headline text-white mb-8">Ready for a Transformation?</h2>
                <p className="text-xl text-white opacity-90 mb-12 max-w-xl mx-auto leading-relaxed">
                    Book your 3D digital orthodontic scan today and take the first step toward the smile you\'ve always wanted.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button 
                      onClick={() => navigate('/book')}
                      className="px-12 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Book Free Assessment
                    </button>
                    <button 
                      onClick={() => window.open('https://wa.me/919177317253', '_blank')}
                      className="px-8 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined">chat</span> WhatsApp Expert
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
