import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EmergencyCare() {
  const navigate = useNavigate();

  const services = [
    { title: 'Acute Pain Relief', icon: 'pain', desc: 'Immediate diagnosis and intervention for severe toothaches and abscesses.' },
    { title: 'Broken Teeth', icon: 'broken_image', desc: 'Rapid restoration of fractured or knocked-out teeth to save your natural smile.' },
    { title: 'Swelling & Trauma', icon: 'emergency', desc: 'Urgent care for facial swelling, gum injuries, and clinical dental trauma.' },
    { title: 'Same-Day Priority', icon: 'schedule', desc: 'We reserve emergency slots every day to ensure you get care when it matters most.' }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Emergency Dental Care Hyderabad · Smile Inn"
        description="Urgent dental care at Smile Inn Dental Clinics. Immediate relief for tooth pain, broken teeth, and trauma in Nagole and Balapur."
        keywords="emergency dentist Hyderabad, tooth pain relief Nagole, broken tooth repair Balapur, urgent dental care"
        canonicalPath="/treatments/emergency-care"
      />

      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-[#302682]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
            alt="Emergency dental care at Smile Inn" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-secondary-container font-bold tracking-[0.3em] uppercase text-sm mb-6 block animate-fade-in">Immediate Clinical Response</span>
          <h1 className="text-5xl md:text-8xl font-headline text-white mb-6 leading-tight">
            Emergency <br /><span className="italic text-secondary-fixed-dim">Care.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 max-w-2xl mx-auto">
            Prioritized relief for acute pain and dental trauma when you need it most.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline text-primary">Relief is Just <br />a Call Away.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Dental emergencies can be stressful and painful. At Smile Inn, our MDS specialists are equipped to handle urgent cases with speed and precision. 
              From sudden toothaches to clinical trauma, we provide immediate interventions to stabilize your condition and eliminate pain.
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
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Urgent dental intervention" 
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#302682] text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">In Pain Right Now?</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Don't wait. Call us immediately for priority emergency booking at Nagole or Balapur.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+919100000000"
                    className="px-12 py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Call Now
                  </a>
                  <button 
                    onClick={() => navigate('/book')}
                    className="px-12 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
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
