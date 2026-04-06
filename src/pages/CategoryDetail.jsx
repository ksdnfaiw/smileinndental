import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { categories, colorMap } from '../data/servicesData';
import SEO from '../components/SEO';

export default function CategoryDetail() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  
  const category = categories.find(c => c.slug === categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-headline text-primary mb-8">Category Not Found</h1>
        <button onClick={() => navigate('/services')} className="btn-primary">Back to All Services</button>
      </div>
    );
  }

  const c = colorMap[category.color];

  return (
    <div className="pt-0 min-h-screen bg-surface">
      <SEO 
        title={`${category.title} · Smile Inn Dental Clinics`}
        description={category.shortDesc}
        keywords={`dental ${category.title} Hyderabad, dentist Nagole, specialty dentistry Hyderabad`}
        canonicalPath={`/services/${category.slug}`}
      />

      {/* Hero */}
      <section className="bg-primary-container text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ccf07322,_transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-on-primary-container font-bold text-sm uppercase tracking-widest mb-12 hover:text-white transition-colors group"
          >
            <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to All Services
          </button>
          
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${c.bg} ${c.text} text-xs font-bold uppercase tracking-widest mb-6`}>
              <span className="material-symbols-outlined text-sm">{category.icon}</span>
              {category.title} Specialty
            </div>
            <h1 className="text-5xl md:text-7xl font-headline mb-6 leading-tight">
              {category.title}
            </h1>
            <p className="text-xl md:text-2xl text-on-primary-container opacity-90 leading-relaxed">
              {category.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {category.services.map((service) => (
              <div
                key={service.title}
                className={`group p-8 rounded-xl bg-surface-container-low transition-all duration-500 ${c.hover} hover:shadow-2xl hover:-translate-y-2 cursor-pointer transition-all duration-500`}
              >
                <div className={`w-14 h-14 rounded-full ${c.bg} flex items-center justify-center mb-6 ${c.text} group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
                  <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-headline mb-4 transition-colors duration-500">{service.title}</h3>
                <p className="leading-relaxed opacity-90 transition-colors duration-500">{service.desc}</p>
                <div className="mt-8">
                   <button onClick={() => navigate('/book')} className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
