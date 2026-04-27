import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { doctorsData } from '../data/doctorsData';

export default function OralSurgery() {
  const navigate = useNavigate();
  const drShivakanth = doctorsData.find(d => d.name.includes('Shivakanth'));

  const services = [
    { 
      title: 'Wisdom Tooth Removal', 
      icon: 'priority_high', 
      desc: 'Precision surgical extraction of impacted or problematic wisdom teeth, performed under specialist care for maximum comfort.',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'TMJ Disorders', 
      icon: 'medical_services', 
      desc: 'Expert diagnosis and management of jaw joint issues, alleviating chronic pain and restoring proper jaw movement and function.',
      image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Oral Cysts & Tumors', 
      icon: 'biotech', 
      desc: 'Precision surgical removal and management of oral pathologies, ensuring thorough care and a path toward complete healing.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
    },
    { 
      title: 'Dental Trauma Management', 
      icon: 'healing', 
      desc: 'Immediate, expert care for complex dental injuries with a focus on surgical comfort and long-term functional restoration.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Jaw Lesion Surgery', 
      icon: 'biotech', 
      desc: 'Specialist diagnosis and surgical management of jaw lesions with aesthetic precision and focus on preservation.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      title: 'Surgical Extractions', 
      icon: 'add_task', 
      desc: 'Complex removal of non-restorable teeth handled with surgical expertise to ensure minimal discomfort and rapid healing.',
      image: 'https://images.unsplash.com/photo-1609902726285-00668009f004?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Oral Surgery & Maxillofacial Care · Smile Inn"
        description="Expert oral surgery at Smile Inn Dental Clinics. Wisdom tooth extraction, TMJ management, and oral cyst removal by MDS specialists in Hyderabad."
        keywords="oral surgeon Hyderabad, wisdom tooth removal Nagole, TMJ treatment Balapur, dental implants Hyderabad, oral surgery clinic"
        canonicalPath="/treatments/oral-surgery"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
            alt="Oral surgery clinical environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block animate-fade-in">Led by Dr. Ch. Shivakanth MDS</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-headline text-primary mb-6 leading-tight drop-shadow-sm">
            Surgical <br /><span className="italic text-primary/80">Precision</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 opacity-95 max-w-2xl mx-auto font-medium">
            Advanced maxillofacial interventions delivered with absolute clinical excellence and patient comfort
          </p>
        </div>

      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          {drShivakanth && (
            <div className="mb-12 group relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img src={drShivakanth.img} alt={drShivakanth.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                Lead Surgeon
              </div>
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-headline text-primary mb-8">Expert Surgical Care</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Led by **Dr. Ch. Shivakanth MDS**, our oral surgery department handles complex cases with surgical mastery. From routine extractions to advanced joint management, your safety and recovery are our primary goals.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-primary shadow-lg">
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
                  Consult Specialist
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group border-4 border-secondary-container/10">
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
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ccf07333,_transparent)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-headline mb-8">Advanced Clinical Recovery</h2>
                <p className="text-xl text-on-primary-container mb-12 opacity-90">
                    Trust our MDS-qualified surgeons for complex oral and maxillofacial procedures. We focus on minimally invasive techniques for faster healing.
                </p>
                <button 
                  onClick={() => navigate('/book')}
                  className="px-12 py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book Surgical Consultation
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
