import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function GeneralDentistry() {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'Digital Checkups', 
      icon: 'visibility', 
      desc: 'Advanced intraoral imaging and digital diagnostics for a comprehensive and accurate dental assessment.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Pain-Free Cleaning', 
      icon: 'clean_hands', 
      desc: 'Gentle professional scaling and polishing to remove plaque and tartar, ensuring your gums stay healthy and your smile stays bright.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Aesthetic Fillings', 
      icon: 'texture', 
      desc: 'High-grade composite resin restorations that match your tooth color perfectly, restoring both strength and aesthetics.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Root Canal Treatment', 
      icon: 'biotech', 
      desc: 'Expert endodontic care using advanced rotary systems for a faster, pain-free restorative experience that saves your natural tooth.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Simple Extractions', 
      icon: 'potted_plant', 
      desc: 'Quick, painless tooth removal of a damaged or decayed tooth using safe, advanced, patient-friendly techniques.',
      image: 'https://images.unsplash.com/photo-1588776813677-77afe550ca45?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Gum Care', 
      icon: 'spa', 
      desc: 'Comprehensive prevention and treatment of gum diseases for optimal oral health and prevention of tooth loss.',
      image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="General Dentistry & Preventive Care · Smile Inn"
        description="Superior general dentistry at Smile Inn Dental Clinics. Expert cleanings, fillings, and digital diagnostics in Hyderabad, Nagole and Balapur."
        keywords="general dentistry Hyderabad, dental checkup Nagole, teeth cleaning Balapur, root canal treatment Hyderabad"
        canonicalPath="/treatments/general-dentistry"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
            alt="General dental checkup procedure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline text-primary mb-6 leading-tight drop-shadow-sm">
            Foundational <br /><span className="italic text-primary/80">Excellence</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 opacity-95 max-w-2xl mx-auto font-medium">
            Preventive care designed to keep your natural smile healthy and radiant for a lifetime
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Prevention is the Best Cure</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            At Smile Inn, we believe in a proactive approach to dental health. Our general dentistry services are built on a sustainable foundation for your oral well-being, led by master clinicians using state-of-the-art diagnostic technology.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-primary shadow-lg shadow-secondary/10">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed opacity-95">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Book for {s.title}
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ccf07333,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Maintain Your Perfect Smile</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Schedule your comprehensive clinical assessment today and experience the Smile Inn difference.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Schedule Initial Consultation
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
