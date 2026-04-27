import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EmergencyCare() {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'Severe Tooth / Jaw Pain', 
      icon: 'priority_high', 
      desc: 'Immediate clinical relief for acute dental pain, pulpitis, or infections. We prioritize your comfort above all else.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Bleeding / Injury to Mouth', 
      icon: 'medical_services', 
      desc: 'Immediate, expert care for oral injuries with a focus on comfort and rapid healing. Addressing bleeding and soft tissue trauma.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Broken or Chipped Teeth', 
      icon: 'broken_image', 
      desc: 'Quick and effective care to repair broken or chipped teeth and bring back your smile using aesthetic restorative techniques.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Dental / Jaw Trauma', 
      icon: 'healing', 
      desc: 'Advanced emergency treatment to manage injuries with comfort and faster recovery, ensuring long-term structural stability.',
      image: 'https://images.unsplash.com/photo-1593054914500-2d4822380d6f?q=80&w=2072&auto=format&fit=crop'
    },
    { 
      title: 'Teeth Avulsion', 
      icon: 'add_task', 
      desc: 'Immediate expert care to preserve and reimplant avulsed (knocked-out) teeth with precision. Timing is critical for success.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Emergency Dental Care Hyderabad · Smile Inn"
        description="Immediate relief for dental pain, broken teeth, and jaw trauma at Smile Inn Dental Clinics. Prioritized emergency slots in Nagole and Balapur."
        keywords="emergency dentist Hyderabad, dental trauma Nagole, tooth pain relief Balapur, broken tooth repair"
        canonicalPath="/treatments/emergency-care"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549221187-df7d4838bc01?q=80&w=2070&auto=format&fit=crop" 
            alt="Emergency dental clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline text-primary mb-6 leading-tight drop-shadow-sm">
            Immediate <br /><span className="italic text-primary/80">Relief</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 opacity-95 max-w-2xl mx-auto font-medium">
            Prioritized emergency care for acute pain and trauma. We are here when you need us most
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Urgent Care Specialists</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Dental emergencies can be stressful. Our team is trained to handle acute pain and trauma with clinical precision and empathetic care, ensuring you get back to comfort as quickly as possible.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-error-container/20 flex items-center justify-center text-error shadow-lg">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed opacity-95">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-error text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Request Emergency Slot
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-4 border-error-container/10">
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

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-error text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-error/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ffffff33,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">In Severe Pain?</h2>
                <p className="text-xl text-white mb-12 opacity-90">
                    Call us immediately for a priority emergency appointment. We manage trauma cases with absolute clinical priority.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+919177317253"
                    className="px-12 py-5 bg-white text-error rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span className="material-symbols-outlined">call</span> Call +91 91773 17253
                  </a>
                  <button 
                    onClick={() => navigate('/book')}
                    className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Book Online
                  </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
