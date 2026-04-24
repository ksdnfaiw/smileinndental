import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Orthodontics() {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'Invisalign Aligners', 
      icon: 'visibility_off', 
      desc: 'Virtually invisible aligners designed to gradually shift your teeth into proper alignment without wires or brackets.',
      image: 'https://images.unsplash.com/photo-159742324403d-d1950bc49045?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Traditional Braces', 
      icon: 'format_list_numbered', 
      desc: 'Highly effective metal and ceramic braces for correcting complex bite issues and achieving precise alignment.',
      image: 'https://images.unsplash.com/photo-1513412805285-a223e445348a?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Orthodontics & Clear Aligners · Smile Inn"
        description="Expert orthodontic care at Smile Inn Dental Clinics. Invisalign aligners and traditional braces for perfectly aligned smiles in Hyderabad."
        keywords="orthodontist Hyderabad, Invisalign Nagole, braces cost Balapur, clear aligners Hyderabad, straight teeth"
        canonicalPath="/treatments/orthodontics"
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591944030638-1d52a88496d5?q=80&w=2070&auto=format&fit=crop" 
            alt="Orthodontic alignment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight drop-shadow-lg">
            Perfect <br /><span className="italic text-blue-200">Alignment.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto font-light">
            Modern orthodontic solutions tailored to create beautifully balanced and functional smiles.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Confidence in Alignment.</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Whether you choose the discretion of clear aligners or the proven reliability of traditional braces, our orthodontic specialists ensure a precision-planned journey to your perfect smile.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 shadow-lg shadow-blue-200/50">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-on-surface-variant leading-relaxed opacity-90">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Book for Assessment
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-b-8 border-blue-700/20">
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
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#93c5fd33,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Ready for Your New Smile?</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Schedule your orthodontic clinical assessment today and discover the best path to your perfect alignment.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-blue-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book for Assessment
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
