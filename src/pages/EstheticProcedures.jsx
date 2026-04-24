import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EstheticProcedures() {
  const navigate = useNavigate();

  return (
    <div className="pt-0">
      <SEO 
        title="Esthetic Dental Procedures · Smile Inn"
        description="Enhance your facial harmony with advanced esthetic dental procedures at Smile Inn Dental Clinics, Hyderabad."
        keywords="esthetic dentistry Hyderabad, smile enhancement Nagole, facial aesthetics Balapur"
        canonicalPath="/treatments/esthetic-procedures"
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1609902726285-00668009f004?q=80&w=2070&auto=format&fit=crop" 
            alt="Esthetic dental care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pink-900/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight drop-shadow-lg">
            Harmonious <br /><span className="italic text-pink-200">Beauty.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto font-light">
            Advanced esthetic procedures designed to complement your dental work and enhance your natural facial harmony.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Refining Your Natural Look.</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
            Our esthetic department focuses on the subtle details that make a smile truly radiant. From lip contouring to facial symmetry adjustments, we provide clinical solutions for aesthetic excellence.
          </p>
          <div className="bg-pink-50 p-12 rounded-[3rem] border border-pink-100">
            <h3 className="text-2xl font-headline text-pink-900 mb-4">Coming Soon: Extended Esthetic Menu</h3>
            <p className="text-pink-800 opacity-80 mb-8">
              We are expanding our esthetic services to include the latest global trends in facial and dental harmony.
            </p>
            <button 
              onClick={() => navigate('/book')}
              className="px-8 py-4 bg-pink-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
            >
              Enquire About Esthetic Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
