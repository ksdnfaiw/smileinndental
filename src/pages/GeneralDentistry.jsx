import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function GeneralDentistry() {
  const navigate = useNavigate();

  const services = [
    { title: 'Digital Checkups', icon: 'visibility', desc: 'Precise diagnosis using ultra-low radiation digital X-rays and intraoral HD cameras.' },
    { title: 'Pain-Free Cleaning', icon: 'cleaning_services', desc: 'Ultrasonic scaling and professional polishing to remove plaque and restore your smile\'s brightness.' },
    { title: 'Aesthetic Fillings', icon: 'texture', desc: 'Composite resin restorations that match your tooth color perfectly, restoring both form and function.' },
    { title: 'Root Canal (MDS Specialist)', icon: 'biotech', desc: 'Expert endodontic care using advanced rotary systems for a faster, pain-free restorative experience.' }
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
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
            alt="General dental checkup procedure at Smile Inn Dental Clinics, Hyderabad" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight">
            Foundational <br /><span className="italic text-secondary-fixed-dim">Excellence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto">
            Preventive care designed to keep your natural smile healthy and radiant for a lifetime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline text-primary">Prevention is the <br />Best Cure.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              At Smile Inn, we believe in a proactive approach to dental health. Our general dentistry services are not just about fixing problems, but about building a sustainable foundation for your oral well-being. 
              Led by master clinicians, we use state-of-the-art diagnostic technology to catch issues before they require complex interventions.
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
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                alt="Preventive dental treatment at Smile Inn Dental Clinics, Nagole branch, Hyderabad" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-sm font-bold text-primary italic">"Our goal is to make visits so comfortable that you'll actually look forward to your bi-annual checkups."</p>
                <p className="text-xs text-secondary mt-2 tracking-widest font-bold uppercase">— Specialist Clinicians</p>
              </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'biotech', title: 'Low Radiation X-rays', d: '90% less radiation exposure than traditional systems.' },
              { icon: 'sanitizer', title: 'Elite Sterilization', d: 'Global protocols for absolute patient safety and hygiene.' },
              { icon: 'spa', title: 'Painless Sedation', d: 'Advanced comfort protocols for a stress-free experience.' }
            ].map(b => (
                <div key={b.title} className="text-center group p-8 rounded-3xl hover:bg-white transition-all duration-500">
                    <span className="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform">{b.icon}</span>
                    <h5 className="text-xl font-headline text-primary mb-4">{b.title}</h5>
                    <p className="text-on-surface-variant opacity-80 leading-relaxed">{b.d}</p>
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
