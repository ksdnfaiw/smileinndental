import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function LaserDentistry() {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'Laser Gum Bleaching', 
      icon: 'flare', 
      desc: 'Advanced laser gum depigmentation for a brighter, more even and aesthetic smile. Quickly and safely corrects dark or blotchy gum pigmentation.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Flap Surgery', 
      icon: 'biotech', 
      desc: 'Advanced laser-assisted gum surgery for precise treatment of periodontal issues with minimal discomfort and significantly faster healing.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Photo Biomodulation Therapy', 
      icon: 'lightbulb', 
      desc: 'Low-level light therapy used to promote tissue healing, reduce inflammation, and effectively manage post-operative or chronic oral pain.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Screening of Premalignant Lesions', 
      icon: 'visibility', 
      desc: 'Advanced laser screening for early detection of oral changes, ensuring timely and preventive care for potentially harmful oral lesions.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Laser Dentistry & Advanced Technology · Smile Inn"
        description="State-of-the-Art laser technology at Smile Inn Dental Clinics. Pain-free gum bleaching, laser surgery, and early screening in Hyderabad."
        keywords="laser dentistry Hyderabad, gum bleaching Nagole, laser dental surgery Balapur, painless dentistry Hyderabad"
        canonicalPath="/treatments/laser-dentistry"
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop" 
            alt="Advanced laser dentistry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight drop-shadow-lg">
            Modern <br /><span className="italic text-teal-200">Innovation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto font-light">
            State-of-the-Art laser technology for quicker, pain-free, and minimally invasive dental care.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Painless Precision.</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Laser dentistry represents the frontier of modern dental care. By using focused light energy, we can perform complex soft-tissue procedures with almost zero bleeding, less swelling, and faster recovery times.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700 shadow-lg shadow-teal-200/50">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-on-surface-variant leading-relaxed opacity-90">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-teal-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Book Laser Session
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-b-8 border-teal-700/20">
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
        <div className="bg-teal-900 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#5eead433,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Experience Laser Accuracy</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Discover how laser technology can make your dental visit more comfortable and efficient. Schedule your consultation today.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-teal-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book My Appointment
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
