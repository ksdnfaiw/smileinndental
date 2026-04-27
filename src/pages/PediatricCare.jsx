import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PediatricCare() {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'Conscious Sedation', 
      icon: 'spa', 
      desc: 'Advanced and safe sedation methods to ensure a relaxed, pain-free, and child-friendly dental visit. Perfect for anxious young patients.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Fluoride Treatment', 
      icon: 'child_friendly', 
      desc: 'Professional fluoride application to strengthen enamel and provide essential protection against tooth decay for growing teeth.',
      image: 'https://images.unsplash.com/photo-1592947945242-69312358628b?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Pulpectomy / Pulpotomy', 
      icon: 'healing', 
      desc: 'Vital and non-vital pulp therapy procedures designed specifically to maintain primary tooth function and overall dental health.',
      image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Early Ortho Evaluation', 
      icon: 'visibility', 
      desc: 'Early check-up to monitor your child\'s teeth and jaw development, ensuring a healthy, straight smile for the future.',
      image: 'https://images.unsplash.com/photo-1591944030638-1d52a88496d5?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Pediatric Dentistry & Child Dental Care · Smile Inn"
        description="Gentle, friendly dental care for children at Smile Inn Dental Clinics. Conscious sedation, fluoride treatments, and early ortho evaluation in Hyderabad."
        keywords="pediatric dentist Hyderabad, child dental care Nagole, fluoride treatment Balapur, conscious sedation for kids"
        canonicalPath="/treatments/pediatric-care"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop" 
            alt="Child dental care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline text-primary mb-6 leading-tight drop-shadow-sm">
            Gentle <br /><span className="italic text-primary/80">Smiles</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 opacity-95 max-w-2xl mx-auto font-medium">
            Building positive dental habits for life with compassionate, child-friendly care
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Clinical Care with a Gentle Touch</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            We understand that a child's first dental experience shapes their lifelong attitude toward oral health. Our team uses safe, advanced techniques to make every visit fun, relaxing, and effective.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-lg shadow-indigo-200/50">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed opacity-95">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-indigo-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Book Child Visit
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-b-8 border-indigo-700/20">
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
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#a5b4fc33,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">A Happy Start for Healthy Teeth</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Schedule your child's first visit today and experience the Smile Inn difference in pediatric care.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-indigo-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book Initial Check-up
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
