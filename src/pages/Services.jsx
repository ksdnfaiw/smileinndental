import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import { categories, colorMap } from '../data/servicesData';

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-0 bg-surface">
      <SEO
        title="Dental Treatment Categories · Smile Inn Hyderabad"
        description="Browse our specialized dental categories: Implants, Braces, Cosmetic, Surgical, and more. Expert care by MDS specialists."
        keywords="dental services Hyderabad, dental implants Nagole, orthodontics Balapur, cosmetic dentistry Hyderabad, pediatric dentist Hyderabad"
        canonicalPath="/services"
      />
      {/* Hero */}
      <section className="relative bg-primary-container text-white overflow-hidden py-32 md:py-56">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNV8DKnF_pRBk6Wx8tY6r_RJHDcoVWY3Xv0s_wJ_KyNlsE_Droe0e5QSM6TYg_LJA5RzrzdIfma3HaHw4R_6LX5XE_GnSSMM2PyJnw3GYdWGrbBw7WYllNfEb8oUvawMz0_umcvMxeLfJ9WceeTGp3Ijk6dytOkbz4b_1aBJMzoH47cGg_LFE8Q_0SZ311SV_jaKI7NvQVlO44siMSwn06_gW-IRKKi-hS9br6IEIXLbRxHAGRfa0epZ9YlW7y3LRE3K2oSgeuOY4"
            alt="Smile Inn Dental Clinic specialized services background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary-container font-bold tracking-[0.4em] uppercase text-sm mb-6 block animate-fade-in">Specialist Clinical Care</span>
            <h1 className="text-6xl md:text-9xl font-headline mb-10 leading-tight">Our Services</h1>
            <p className="text-2xl md:text-3xl text-on-primary-container leading-relaxed max-w-2xl opacity-90">
              Select a category below to explore our range of <span className="text-white font-bold italic">specialist-led</span> clinical treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map(({ icon, title, shortDesc, color, count, slug }) => {
              const c = colorMap[color];
              return (
                <div
                  key={slug}
                  onClick={() => navigate(`/services/${slug}`)}
                  className={`group p-8 rounded-xl bg-surface-container-low transition-all duration-500 ${c.hover} hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
                >
                  <div className={`w-14 h-14 rounded-full ${c.bg} flex items-center justify-center mb-6 ${c.text} group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-headline transition-colors duration-500">{title}</h3>
                    <span className={`px-3 py-1 ${c.tag} text-[10px] font-bold rounded-full uppercase tracking-tighter group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
                      {count}
                    </span>
                  </div>
                  <p className="leading-relaxed mb-8 opacity-90 transition-colors duration-500">{shortDesc}</p>
                  <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all duration-500">
                    View Treatments <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 mb-8">
        <div className="bg-primary-container rounded-xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-headline text-white mb-6">Not Sure What Treatment You Need?</h2>
            <p className="text-on-primary-container text-lg opacity-90">
              Schedule a comprehensive dental assessment with our lead specialists. We'll create a customized treatment plan just for you.
            </p>
          </div>
          <div className="relative z-10">
            <button
              onClick={() => navigate('/book')}
              className="bg-white text-primary-container px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 shadow-xl shadow-indigo-900/40 whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
