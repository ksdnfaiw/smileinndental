import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { doctorsData } from '../data/doctorsData';

export default function OralCancer() {
  const navigate = useNavigate();
  const drMadhuri = doctorsData.find(d => d.name.includes('Madhuri'));

  const services = [
    { 
      title: 'Oral Cancer Screening', 
      icon: 'search', 
      desc: 'Advanced clinical screening for early detection of oral changes. Early diagnosis is the most critical factor in successful preventive care.',
      image: 'https://images.unsplash.com/photo-1581595224492-38d104ef494b?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Oral Cysts and Tumors', 
      icon: 'biotech', 
      desc: 'Careful clinical evaluation to detect and understand unusual growths in the mouth early, ensuring a clear path for management or treatment.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Precancerous Conditions', 
      icon: 'health_and_safety', 
      desc: 'Advanced care for early detection and management of potentially harmful oral changes. Monitoring and preventive intervention to ensure long-term health.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Oral Cancer Screening & Prevention · Smile Inn"
        description="Specialized oral cancer screening at Smile Inn Dental Clinics. Led by Dr. M Madhuri, we focus on early detection and management of oral lesions in Hyderabad."
        keywords="oral cancer screening Hyderabad, dentist Nagole, oral cysts treatment Balapur, early cancer detection"
        canonicalPath="/treatments/oral-cancer"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
            alt="Oral oncology screening" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block animate-fade-in">Specialist Care led by Dr. M Madhuri</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline text-primary mb-6 leading-tight drop-shadow-sm">
            Early Detection <br /><span className="italic text-primary/80">and Prevention</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 opacity-95 max-w-2xl mx-auto font-medium">
            Comprehensive oral oncology screening focused on prevention and early-stage management
          </p>
        </div>

      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          {drMadhuri && (
            <div className="mb-12 group relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-100 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img src={drMadhuri.img} alt={drMadhuri.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-rose-700 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                Specialist Pathologist
              </div>
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Prevention is the Best Defense</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Under the specialized guidance of **Dr. M Madhuri**, our clinic provides meticulous oral cancer screenings. We utilize advanced diagnostic protocols to identify precancerous conditions and oral lesions at their earliest, most manageable stages.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-lg shadow-rose-200/50">
                    <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline text-primary">{s.title}</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed opacity-95">
                  {s.desc}
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-8 py-4 bg-rose-700 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Schedule Screening
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-b-8 border-rose-700/20">
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
        <div className="bg-rose-950 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fda4af33,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Peace of Mind Through Screening</h2>
                <p className="text-xl text-slate-100 mb-12 opacity-95">
                    Regular oral screenings are a vital part of complete health. Book your assessment with our specialist team today.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-rose-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Request Screening Appointment
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
