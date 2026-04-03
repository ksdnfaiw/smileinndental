import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const navigate = useNavigate();
  useScrollReveal();

  const services = [
    { icon: 'dentistry', title: 'General Dentistry', desc: 'Foundational care including cleanings, fillings, and preventative diagnostics for long-term health.', hoverColor: 'hover:bg-primary hover:text-white' },
    { icon: 'straighten', title: 'Orthodontics', desc: 'Expert alignment solutions from traditional braces to modern clear aligners like Invisalign.', hoverColor: 'hover:bg-primary hover:text-white' },
    { icon: 'emergency', title: 'Emergency Care', desc: 'Immediate relief for acute pain, broken teeth, or dental trauma. Prioritized same-day booking.', inverted: true },
    { icon: 'health_and_safety', title: 'Cosmetic Dentistry', desc: 'Smile makeovers, professional whitening, and porcelain veneers for your most confident self.', hoverColor: 'hover:bg-secondary hover:text-white' },
    { icon: 'medical_services', title: 'Oral Surgery', desc: 'Precision surgical care including wisdom tooth extraction and dental implant placements.', hoverColor: 'hover:bg-primary hover:text-white' },
    { icon: 'family_restroom', title: 'Pediatric Care', desc: 'Specialized, gentle dental care designed to build a positive lifelong habit for children.', hoverColor: 'hover:bg-secondary hover:text-white' },
  ];

  const doctors = [
    { name: 'Dr. Arjun Reddy', spec: 'MDS | Orthodontics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmxvvjkf0cMw6TpaFdRAjqtUFJHvT3el33eKLGTVE5x64ScrrmbnNoD_3Q76xuqdej97vhIAtjN8HmzxqZWLnciTTMQMUjDG0c_Ak7RoCx95ypUG0s-caeL743bQJfMI35Ll0GFx148DM2ZRaNqT_cNu82Gi2ovQwqZyv0G9UKSOJvDJJVZJwcPobqZXNa-aR1nAP-7brgJU9q_4XyJBeDDMuoVWFrAvmHaQgltN_arxvaXpmXOnYKytuC-Uu2tHmXknQBccYzZck' },
    { name: 'Dr. Kavya P.', spec: 'MDS | Prosthodontics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF8HpHRxriVT882gGF7JT9Jz8Ej3a1VejBPunnHyarHHeFcZq8x7DB_ndt03lDfRQY18IALozaOm5JYQhwzm_Doh6BKLrupV_ieVm_FN2TwG2c8hVDaIhzDqBwSZsLc8jcqBm9yhnm01UtptVtjbteUmAlLZh5RgRdQcjjxjF1prE_uGplYXT_Hm-joFCknpgL7bIgg1nLLlA2AjhMW7C2KgO5zUI6AX9wtObMyfHKMMVlLAivRdY0HHiTbV4accFM41jaOGoBX8Y' },
    { name: 'Dr. S. K. Nair', spec: 'MDS | Oral Surgery', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoITTzIMb9jWDeIUfmpqhFfnIUuxlGIGJAUHSKntDlKGc2CPuiUZ-jF8Ou_UrFit9R-F334uutA6aqGcq8a21ruNrk3qBKe7bjyBx8FidaLqvke4DnxICbCmW3WphRv7wkCO99p2yVrz_pGGRiRMwG3lzMJdHOHLJdNP6oCBdGLHcVF0uPBFPOuroo0YMItnZlACR_2Nv0r4OINCqmjNvD6-gdJifoTmws56oqE7930VEisFCi-wicyD0uJu_LtP9ZcdHVIjJjUhI' },
    { name: 'Dr. Meera Shah', spec: 'MDS | Pedodontics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXcwoemmWGGcqvHvd3aFUguKfR5jaxZnOBtCKI_t_C-tBfizcR3MaD-IieJNnHGQvSijoO1rW-5jAk75FBTnNdki3u4E1Blb7Ag1q7_ZOucdhmsxtINuf5iL7uua3J9bBGtHT_-cL2gb1AuiYukrAIGNXg1tSOngs_AKD4JqZ4yPXBvueuxuquBSeJsktBrPl4muFD_D15dcmXTEyWY2b-mBB5Y39vuVWWvfuzq1PfGDbsoADO0GIRGz7Ce6u5jdNPgr6fv_YwrEQ' },
    { name: 'Dr. Rahul Verma', spec: 'MDS | Periodontics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLwto6t1uA_8WOlckL33-ZMfOoHZDZanAb7B6RxMLXe5IuazquudgOKh6rOFfYJQ_I8H9gdUH-zgnGZXNa6hR6dnOinmjon2ezUq_szc1-YOEj1_93kcYOcm-sAadz8MKm2BTzEmfNmPwuYfF66O7ax4gbsp-ME2zpiNIcd8Y6VI9CF4xCk5SUJb2b8NxW0dw-EbEjpDe2IgR-xovcecTicshk7qLkD0tyD7g4VqsnKEGOJD95dj-Dmk6BuaUlaM6rdaya8-ZtAGw' },
  ];

  const testimonials = [
    { q: 'The most comfortable extraction I\'ve ever had. Dr. Nair is truly a master of his craft. Nagole branch is fantastic!', name: 'Prasad Rao', loc: 'Nagole Branch Patient', inverted: false },
    { q: 'My daughter actually looks forward to her dentist visits now. Dr. Meera is so patient and gentle. Best pediatric care in the city.', name: 'Shalini V.', loc: 'Balapur Branch Patient', inverted: true },
    { q: 'Got my aligners from Smile Inn. The digital planning was mind-blowing and the results are better than I expected!', name: 'Aditya G.', loc: 'Nagole Branch Patient', inverted: false },
    { q: 'Exceptional service and clinical care. The Nagole branch is equipped with the latest tech and the staff is very professional.', name: 'Vikram S.', loc: 'Nagole Branch Patient', inverted: true },
    { q: 'Painless treatment and very clear explanation by the doctors. Highly impressed with the hygiene standards at Smile Inn.', name: 'Sneha K.', loc: 'Balapur Branch Patient', inverted: false },
  ];

  const faqs = [
    { q: 'How can I book an emergency appointment?', a: 'You can call our dedicated emergency line or use the "Emergency" button on our website for instant priority scheduling.' },
    { q: 'Do you accept insurance?', a: 'Yes, we work with several major dental insurance providers. Contact our help desk to verify your specific plan coverage.' },
    { q: 'What is the average cost of dental implants?', a: 'Costs vary depending on the implant type and bone health. We provide a transparent, detailed quote after your 3D digital scan.' },
    { q: 'Are digital X-rays safer?', a: 'Yes, digital X-rays use up to 80% less radiation than traditional film X-rays and provide much clearer images for diagnosis.' },
    { q: 'Is wisdom tooth removal painful?', a: 'With our advanced local anesthesia and sedation options, the procedure itself is painless. We also provide post-op care kits for comfort.' },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="pt-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold tracking-widest uppercase animate-fade-in">
              MDS Specialist-Led Studio
            </div>
            <h1 className="text-5xl lg:text-8xl font-headline text-primary leading-tight">
              Where Your Smile <br />
              <span className="italic text-on-primary-container">Meets Perfection.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed opacity-90">
              Experience a new standard of dental artistry. We blend master-level clinical expertise with a serene, patient-first atmosphere.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/book')}
                className="btn-primary"
              >
                <span className="material-symbols-outlined">calendar_today</span> Book Visit
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="btn-secondary"
              >
                <span className="material-symbols-outlined">chat</span> WhatsApp
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+919876543210'}
                className="p-4 border-2 border-outline-variant text-primary rounded-xl hover:bg-surface-container-low transition-all duration-300"
              >
                <span className="material-symbols-outlined">call</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-4">
              {[['10+', 'Years'], ['5 MDS', 'Specialists'], ['2', 'Locations']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-headline text-secondary">{num}</div>
                  <div className="text-xs uppercase tracking-wider font-bold text-outline mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-primary-container/10 z-10"></div>
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKsv_FKV8m3ISGM1cmGKeYZqYfcZouSvgnCKiIZg8a4RHZwWE1NxkVljWmJ7quxfHdB-ixa1XsFUrnV0lmxcprM6VNaum7kI9LwUgA4AxmMGgI_HaTLJ3aPLJ6W9fZiSX-63fkt2hTL8EqedXI2YFEeWO74-J2mPGi1R6609ijxeLHSq85Aq6oxt1FbibSH8NtBZIJbfjaFXnxkoW-mMJcLN00uVkyZG-om1GwYLMlQJ_-bdMU9qIrLH-o7u3DhiC6y0jxwLlQVlo"
              alt="Ultra-modern dental clinic lobby"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-full blur-[80px] opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary-container py-8 md:py-10 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-24 items-center shrink-0 px-8 md:px-12">
              {[
                { icon: 'biotech', label: 'Advanced Digital' },
                { icon: 'sanitizer', label: 'Sterilization Focused' },
                { icon: 'school', label: '5 MDS Experts' },
                { icon: 'spa', label: 'Painless Care' },
                { icon: 'schedule', label: 'Open Mon–Sun' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined text-secondary text-3xl">{icon}</span>
                  <span className="text-xl font-bold tracking-tight">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-secondary font-bold text-[0.6875rem] tracking-[0.2em] uppercase">Our Expertise</span>
            <h2 className="text-4xl font-headline text-primary mt-2">Comprehensive Dental Artistry</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm">
            From routine checks to complex surgical interventions, we provide end-to-end care using global protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, desc, inverted, hoverColor }) =>
            inverted ? (
              <div key={title} className="bg-primary-container p-8 rounded-xl shadow-xl shadow-primary/20 transform md:-translate-y-4 group transition-all duration-500 hover:scale-[1.03] hover:shadow-primary/40">
                <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className="material-symbols-outlined text-on-secondary-container text-4xl">{icon}</span>
                </div>
                <h3 className="text-2xl font-headline text-white mb-4">{title}</h3>
                <p className="text-base text-on-primary-container leading-relaxed mb-8">{desc}</p>
                <button
                  onClick={() => navigate('/book')}
                  className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest inline-block hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Call Now
                </button>
              </div>
            ) : (
              <div key={title} className={`bg-surface-container-low p-8 rounded-xl ${hoverColor} hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer`} onClick={() => navigate('/services')}>
                <div className="w-14 h-14 bg-on-primary-container/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transition-colors duration-500">{icon}</span>
                </div>
                <h3 className="text-2xl font-headline text-primary group-hover:text-white mb-4 transition-colors duration-500">{title}</h3>
                <p className="text-base text-on-surface-variant group-hover:text-white/90 leading-relaxed mb-8 transition-colors duration-500">{desc}</p>
                <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-white group-hover:gap-3 transition-all duration-500">
                  View Details <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-xl group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrCWPtHTKBNmmWxOtDY0bCuDYERGWJs9o1rYu8LKCenwDgfyOW0wLUWQZ_agtlgxkf2OEANw6dOv3J8KWCdG4f7iz_h4W5IXn7ico_BgqguGGqDvdPIKKgNkSqiO4mfw3OggZ3HFd0dISe9Shwh-AWgtqsDjDN6DvYhMhoga4rdkNv3IaPKdoN6wE_nRRTliZDYyM7OvzLlr-FMjKcosasUZalBi6SPJkDg8LezFdxpcAeK4QeTkAGK87U04-lPfNb-Xk8ZDyGAMw"
                alt="Serene dental treatment room"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-headline text-primary text-xl italic">
                "Our mission is to make dentistry a restorative experience, not just a procedure."
              </p>
              <p className="text-secondary font-bold mt-4 text-xs tracking-widest">— Clinical Director</p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <span className="text-secondary font-bold text-[0.6875rem] tracking-[0.2em] uppercase">Why Smile Inn?</span>
              <h2 className="text-4xl font-headline text-primary mt-2">Specialist Care for Every Smile</h2>
            </div>
            <div className="space-y-8">
              {[
                { n: '01', t: 'MDS Specialists Only', d: 'Unlike general clinics, complex cases are handled by dedicated Master of Dental Surgery specialists.' },
                { n: '02', t: 'Ultra-Modern Diagnostics', d: 'Equipped with 3D scanning and digital X-rays to ensure 100% accuracy in treatment planning.' },
                { n: '03', t: 'Painless Protocols', d: 'We utilize advanced numbing techniques and sedation options to ensure zero patient discomfort.' },
                { n: '04', t: 'Holistic Patient Journey', d: 'From booking to post-care follow-ups, our process is streamlined for maximum convenience.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary font-bold group-hover:bg-primary-container group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    {n}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">{t}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smile Journey */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-headline text-primary mb-20">Your Path to a Brighter Smile</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent hidden md:block"></div>
          {[
            { icon: 'event_available', title: 'Consultation', desc: 'Expert assessment and digital diagnosis of your dental needs.', inverted: false },
            { icon: 'medical_information', title: 'Treatment', desc: 'Precision clinical care using advanced painless technology.', inverted: true },
            { icon: 'task_alt', title: 'Smile Sparkle', desc: 'Post-treatment review and ongoing maintenance planning.', inverted: false },
          ].map(({ icon, title, desc, inverted }) => (
            <div key={title} className="relative z-10 flex-1 flex flex-col items-center">
              <div className={`w-20 h-20 ${inverted ? 'bg-primary-container' : 'bg-surface'} rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-background hover:scale-110 transition-transform duration-300`}>
                <span className={`material-symbols-outlined ${inverted ? 'text-white' : 'text-primary'} text-3xl`}>{icon}</span>
              </div>
              <h4 className="font-headline text-xl text-primary mb-2">{title}</h4>
              <p className="text-sm text-on-surface-variant px-4">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <span className="text-secondary font-bold text-[0.6875rem] tracking-[0.2em] uppercase">The Specialists</span>
            <h2 className="text-4xl font-headline text-primary mt-2">Led by Master Clinicians</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {doctors.map(({ name, spec, img }) => (
              <div key={name} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 relative">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={img} alt={name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h5 className="font-headline text-lg text-primary">{name}</h5>
                <p className="text-xs font-bold text-secondary tracking-widest uppercase">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline text-primary">Patient Stories</h2>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map(({ q, name, loc, inverted }, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className={`p-12 md:p-20 rounded-[3rem] shadow-sm italic text-center max-w-4xl mx-auto ${inverted ? 'bg-primary-container shadow-2xl shadow-primary/20' : 'bg-surface border border-outline-variant/10'}`}>
                  <div className={`text-6xl mb-8 ${inverted ? 'text-secondary-container opacity-50' : 'text-secondary opacity-30 font-serif'}`}>"</div>
                  <p className={`text-2xl md:text-4xl leading-tight mb-12 font-serif ${inverted ? 'text-white' : 'text-primary'}`}>{q}</p>
                  <div className="flex flex-col items-center gap-4 not-italic">
                    <div className={`w-16 h-16 rounded-full border-2 ${inverted ? 'border-secondary/30 bg-white/10' : 'border-primary/10 bg-primary/5'} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined text-3xl ${inverted ? 'text-secondary' : 'text-primary'}`}>person</span>
                    </div>
                    <div>
                      <div className={`font-bold text-xl ${inverted ? 'text-white' : 'text-primary'}`}>{name}</div>
                      <div className={`text-sm uppercase tracking-widest ${inverted ? 'text-on-primary-container opacity-70' : 'text-secondary'}`}>{loc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${activeTestimonial === i ? 'bg-secondary w-8' : 'bg-outline-variant'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-6xl font-headline text-primary text-center mb-20 leading-tight">Expert Answers to <br /><span className="text-secondary italic">Your Dental Questions</span></h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="group bg-surface-container-low rounded-[2rem] transition-all hover:bg-surface-container overflow-hidden" open={i === 0 ? true : undefined}>
                <summary className="flex justify-between items-center p-8 cursor-pointer font-bold text-primary lg:text-xl list-none transition-colors">
                  {q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-500 flex-shrink-0 ml-4 text-secondary">expand_more</span>
                </summary>
                <div className="px-8 pb-8 text-on-surface-variant text-lg leading-relaxed opacity-90 border-t border-outline-variant/5 pt-6">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline text-primary mb-12 text-center">Visit Our Clinics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              name: 'Nagole Branch', addr: 'Main Road, Opposite Metro Station, Nagole, Hyderabad.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSyYAOcferJ27vIWTuj_SwMtqRFPDf0NCHcAQF509FP9DoAgLeL_4Kk586R_07k9rReQI3hZ7I6GDWVkANU6Csd0NhDpN_cQqBQaBJRxSYq6WhKKxm8fNBGuogVe2s0hat0KLUiTI-IxNwCHTU7YLhK1H2ApUlWTt1M5cHVmqTtTetr3tvSOxWYmzPxh8CMuey9-U8g3FME0fuPWmf1fjhuytFRbpk6e4ZmpcSoMFnkpN8cwUphHFT4g_PMqyv3G1xZ5FK8QJuW5E'
            },
            {
              name: 'Balapur Branch', addr: 'RCI Road, Adjacent to Axis Bank, Balapur, Hyderabad.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHFoLn_agtTmbJS-F_Z9qJa291kf_mI2IE92iVmxd3EkHk6OiqWmdThzRUI1vvZTIHrgbE-pgldIwlZ8KxTLcw6jjQPRkHLxu88DFklcNuPh4kmHNYwSyz3OHKrqofM1q99pQVi8oEOdLZWwPuth0KI5j0r7pObYjIW0GHDQPCSqC1VQJrrbFWSq2Pymzsw6mIRLuurLi6BbLV_vI7LQEBSl6zHG-pgvCt9xxhHkl-NpE4XcEIA4mBQV9MNu0x6lugl5A7bHfr1Ak'
            },
          ].map(({ name, addr, img }) => (
            <div key={name} className="bg-surface-container-low rounded-xl overflow-hidden shadow-lg group">
              <div className="h-64 bg-slate-200 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} alt={name} />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-headline text-primary mb-2">{name}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{addr}</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">View on Maps</button>
                  <button className="px-4 border-2 border-outline text-primary rounded-lg hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Width CTA */}
      <section className="mx-4 md:mx-8 mb-24">
        <div className="max-w-7xl mx-auto bg-primary-container rounded-xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ccf07333,_transparent,_transparent)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-headline text-white mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-on-primary-container max-w-xl mx-auto mb-10 text-lg">
              Book your first session today and experience clinical dentistry at its finest.
            </p>
            <button
              onClick={() => navigate('/book')}
              className="px-12 py-5 bg-secondary-container text-on-secondary-container rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
