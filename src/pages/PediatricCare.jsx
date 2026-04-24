import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PediatricCare() {
  const navigate = useNavigate();

  const services = [
    { title: 'Gentle Cleanings', icon: 'child_care', desc: 'Friendly, careful cleanings designed to keep little smiles healthy and bright.' },
    { title: 'Sealants & Fluoride', icon: 'security', desc: 'Protective treatments to strengthen young enamel and prevent cavities.' },
    { title: 'Early Assessment', icon: 'monitoring', desc: 'Monitoring growth and development to ensure proper jaw and tooth alignment.' },
    { title: 'Fun Education', icon: 'school', desc: 'Teaching children the importance of oral hygiene in an engaging, stress-free way.' }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Pediatric Dentistry Hyderabad · Smile Inn"
        description="Gentle children's dentistry at Smile Inn Dental Clinics. Specialized pediatric care to build healthy habits in Hyderabad, Nagole and Balapur."
        keywords="pediatric dentist Hyderabad, children's dentistry Nagole, kid friendly dentist Balapur, dental care for kids"
        canonicalPath="/treatments/pediatric-care"
      />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-[#302682]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop" 
            alt="Pediatric dental care at Smile Inn" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-secondary-container font-bold tracking-[0.3em] uppercase text-sm mb-6 block animate-fade-in">Department of Young Smiles</span>
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight">
            Pediatric <br /><span className="italic text-secondary-fixed-dim">Care.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto">
            Specialized, gentle care designed to build a positive lifelong habit for children.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline text-primary">Building Happy <br />Dental Habits.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              A child's first experiences at the dentist shape their attitude toward oral health for life. At Smile Inn, we create a fun, welcoming environment where children feel safe and at ease. 
              Our pediatric experts focus on preventive care and gentle interventions to ensure your child's smile grows strong and healthy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {services.map(s => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-1">{s.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Happy child at dental clinic" 
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#302682] text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Start Their Journey Right</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Book a gentle clinical assessment for your child today at Smile Inn.
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
