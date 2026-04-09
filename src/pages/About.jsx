import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import { doctorsData } from '../data/doctorsData';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const doctors = doctorsData;

  const values = [
    { icon: 'verified_user', title: 'Absolute Integrity', desc: 'Transparent pricing and honest treatment plans are the bedrock of our practice.' },
    { icon: 'biotech', title: 'Clinical Precision', desc: 'Using advanced diagnostics to ensure every intervention is accurate and long-lasting.' },
    { icon: 'health_and_safety', title: 'Patient Empathy', desc: 'We design our environments to soothe anxiety and prioritize your personal comfort.' },
    { icon: 'school', title: 'Continuous Evolution', desc: 'Our doctors are lifelong learners, staying at the forefront of global dental innovations.' },
  ];

  return (
    <div className="pt-0">
      <SEO
        title="About Us · 10 Years of Specialist Dental Care · Smile Inn"
        description="Meet the team behind Smile Inn — 5 MDS-qualified dentists serving Hyderabad for over 10 years with honest, advanced dental care."
        keywords="about Smile Inn Dental, dentist Hyderabad, MDS dental specialists Hyderabad, best dental team Nagole"
        canonicalPath="/about"
      />
      {/* Hero */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 bg-primary-container flex items-center px-8 md:px-20 py-24 md:py-32">
          <div className="max-w-xl">
            <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Est. 2014</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-10">
              10 Years of Trusted Smiles.
            </h1>
            <div className="w-24 h-1 bg-secondary rounded-full mb-10"></div>
            <p className="text-on-primary-container text-2xl leading-relaxed opacity-90">
              From a single flagship clinic to two thriving branches — built on trust, art, and specialist-led care.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-surface flex items-center justify-center p-8 md:p-16 relative">
          <div className="absolute inset-0 bg-surface-container-low opacity-50"></div>
          <div className="relative z-10 w-full max-h-[600px] h-[400px] md:h-full rounded-xl overflow-hidden shadow-2xl group">
            <img
              alt="Smile Inn Dental Clinics Team"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGsOVGpclRlyzC-tVUlxT_VUMpn1YhnxTeUZ6F_jaaR50NNPibB7vuHjzCDRDTVs_B6wTdqtitopgCpqvogxW5XDVGShDjuiwt_YmexPyXjWmyM6Xg5VWViu625Fq02LflUUNWR3f1sziJKJ2VD9hKVsQvPUQg3N6QyllSR6j8Zn6BAS-Cu3ScTb7CI9OIQMuQlB-_kNIWgfX_a98iYRWUeS9xQSCY5nMB-Wxizbk-busvto88C9DsOuPJumDtPlrPfd_6_zd-Xmw"
            />
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7 space-y-10">
            <h2 className="text-5xl font-serif text-primary italic">Our Story</h2>
            <div className="space-y-8 text-xl leading-relaxed text-slate-700">
              <p>
                Founded in 2014, Smile Inn Dental Clinics began with a singular vision: to transform dental care from a clinical chore into a curated wellness experience. Our journey in Hyderabad started in a boutique-style clinic where we prioritized patient comfort and clinical precision above all else.
              </p>
              <blockquote className="border-l-4 border-secondary pl-10 py-6 my-12">
                <p className="text-3xl font-serif italic text-primary leading-tight">
                  "We don't just treat teeth; we restore confidence through the intersection of artistry and medical excellence."
                </p>
              </blockquote>
              <p>
                Over the last decade, we have expanded our family to Nagole and Balapur, bringing together a collective of specialists who share a commitment to evidence-based dentistry. We believe that a smile is the most profound expression of health.
              </p>
              <p>
                Today, Smile Inn stands as a beacon of high-end clinical excellence, where every patient is treated as a guest in our modern dental studio. We leverage the latest in 3D imaging and painless technology to ensure your journey with us is as seamless as it is transformative.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-surface-container-low p-12 rounded-[2.5rem]">
            <h3 className="text-3xl font-serif text-primary mb-10">Our Values</h3>
            <div className="space-y-12">
              {values.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-8 group">
                  <span
                    className="material-symbols-outlined text-secondary text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">{title}</h4>
                    <p className="text-base text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">{doctorsData.length} Specialists. One Mission.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {doctors.map(({ name, role, badge, desc, img }) => (
              <div key={name} className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="h-80 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={img}
                    alt={`Portrait of ${name}`}
                  />
                  {badge && (
                    <div className="absolute bottom-0 left-0 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-tr-lg">
                      {badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary mb-1">{name}</h3>
                  <p className="text-secondary text-sm font-bold mb-4">{role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center bg-primary-container p-16 rounded-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Experience the Smile Inn Difference.</h2>
            <p className="text-on-primary-container mb-10 text-lg">Join over 15,000 happy patients who have trusted us with their smiles.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/book')}
                className="btn-primary"
              >
                Book Your Consultation
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="btn-secondary !bg-transparent !text-white border border-white/20 hover:!bg-white/10"
              >
                Contact Our Clinic
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
