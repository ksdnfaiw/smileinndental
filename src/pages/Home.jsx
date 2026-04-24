import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { doctorsData } from '../data/doctorsData';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.041l-.694 2.548 2.621-.687c.731.398 1.734.705 2.803.706l.003-.001c3.182 0 5.767-2.587 5.768-5.766 0-3.18-2.585-5.766-5.766-5.767zm3.303 8.303c-.113.318-.656.58-1.016.617-.34.034-.733.074-2.327-.539-1.7-.652-2.775-2.418-2.851-2.52s-.655-.87-.655-1.676c0-.805.42-.12.504-.21.084-.09.184-.112.246-.112.062 0 .124.001.178.006.059.005.138-.024.216.14.078.163.267.653.29.702.023.049.038.107.006.172-.032.065-.048.11-.097.16-.047.05-.1.112-.143.15-.045.044-.091.092-.039.181.052.089.231.381.497.617.342.304.63.398.718.441.087.043.138.036.19-.022.052-.058.225-.262.285-.35.06-.088.119-.074.201-.044.082.03.523.246.612.29.089.044.148.066.17.104.022.038.022.22-.091.538zM12.006 2C6.471 2 2 6.471 2 12c0 1.92.544 3.707 1.488 5.225L2 22l4.904-1.284c1.543.832 3.3 1.284 5.102 1.284l.001-.001c5.535 0 10.006-4.471 10.006-10.006 0-5.529-4.472-10-10.007-10z"/>
  </svg>
);

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

// FAQ Schema for Google Rich Results
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is dental treatment painful at Smile Inn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern pain management including topical anesthesia and dental lasers. Most patients are surprised by how comfortable treatment is. Your comfort comes first."
      }
    },
    {
      "@type": "Question",
      "name": "Do you treat children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide child-friendly dental care from the first tooth and offer habit counselling. Our doctors are trained to work patiently with young patients."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I visit a dentist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every 6 months for most patients. Those with active gum disease or orthodontic treatment may need more frequent visits."
      }
    }
  ]
};

export default function Home() {
  const navigate = useNavigate();
  useScrollReveal();

  const services = [
    { icon: 'dentistry', title: 'General Dentistry', desc: 'Foundational care including cleanings, fillings, and preventative diagnostics for long-term health.', hoverColor: 'hover:bg-primary hover:text-white', path: '/treatments/general-dentistry' },
    { icon: 'straighten', title: 'Orthodontics', desc: 'Expert alignment solutions from traditional braces to modern clear aligners like Invisalign.', hoverColor: 'hover:bg-primary hover:text-white', path: '/treatments/orthodontics' },
    { icon: 'emergency', title: 'Emergency Care', desc: 'Immediate relief for acute pain, broken teeth, or dental trauma. Prioritized same-day booking.', inverted: true, path: '/services/restorative-and-general' },
    { icon: 'health_and_safety', title: 'Cosmetic Dentistry', desc: 'Smile makeovers, professional whitening, and porcelain veneers for your most confident self.', hoverColor: 'hover:bg-secondary hover:text-white', path: '/treatments/cosmetic-dentistry' },
    { icon: 'medical_services', title: 'Oral Surgery', desc: 'Precision surgical care including wisdom tooth extraction and dental implant placements.', hoverColor: 'hover:bg-primary hover:text-white', path: '/treatments/oral-surgery' },
    { icon: 'family_restroom', title: 'Pediatric Care', desc: 'Specialized, gentle dental care designed to build a positive lifelong habit for children.', hoverColor: 'hover:bg-secondary hover:text-white', path: '/services/child-dentistry' },
  ];

  const doctors = doctorsData;

  const testimonials = [
    { 
      name: 'K Ravindra', 
      q: 'I recently visited this dental clinic for an RCT treatment, and my experience was very positive. The doctor clearly explained the procedure step-by-step, making me feel comfortable and confident. The doctor is highly knowledgeable and patient. In my case, there were calcium blocks formed in the roots, but they handled the RCT with great care. High quality of care and attention. Highly recommended!', 
      loc: '3 weeks ago', 
      inverted: false 
    },
    { 
      name: 'Gayathri Prasad', 
      q: 'Excellent clinic with highly professional doctors. My treatment was completely painless and the staff was very supportive throughout the process. Highly recommend Smile Inn for any dental procedures.', 
      loc: '3 weeks ago', 
      inverted: true 
    },
    { 
      name: 'Deepender Dubey', 
      q: 'Wonderful experience. The entire team was professional, patient, and transparent throughout the process. They genuinely focused on what was actually needed for the best long-term outcome. Trust and patient-first approach is Rare and very reassuring. Highly recommend for trustworthy and skilled dental care.', 
      loc: '4 weeks ago', 
      inverted: false 
    },
    { 
      name: 'radha bodapati', 
      q: 'I got root canal done from Dr Deedeepya Adapa. Handle it very well and provided me with completely painless treatment, very knowledgeable about the situation of my teeth. Best clinic for dental problems.', 
      loc: '6 weeks ago', 
      inverted: true 
    },
    { 
      name: 'Nikhil', 
      q: 'Excellent service. Friendly doctor, clean clinic, and painless treatment. Highly recommended.', 
      loc: '13 weeks ago', 
      inverted: false 
    },
    { 
      name: 'vaishnavi surampally', 
      q: 'Thanks to Smile inn Dental Clinics. I have had a brace. The professionalism, the attention to detail, and the friendliness made it all easier.', 
      loc: '13 weeks ago', 
      inverted: true 
    },
  ];

  function ReviewToggle({ text, inverted }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const limit = 120;
    const isLong = text.length > limit;

    return (
      <div className={`mb-12 ${isLong ? 'cursor-default' : ''}`}>
        {!isExpanded ? (
          <>
            <span className={`text-2xl md:text-4xl leading-tight font-serif ${inverted ? 'text-white' : 'text-primary'}`}>
              {isLong ? `${text.substring(0, limit)}... ` : text}
            </span>
            {isLong && (
              <button 
                onClick={() => setIsExpanded(true)}
                className="text-blue-500 hover:text-blue-400 font-bold text-sm md:text-base ml-2 bg-transparent border-none p-0 cursor-pointer underline decoration-2 underline-offset-4 transition-colors"
                aria-label="Read more"
              >
                Read more
              </button>
            )}
          </>
        ) : (
          <>
            <span className={`text-2xl md:text-4xl leading-tight font-serif ${inverted ? 'text-white' : 'text-primary'}`}>
              {text} 
            </span>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-blue-500 hover:text-blue-400 font-bold text-sm md:text-base ml-2 bg-transparent border-none p-0 cursor-pointer underline decoration-2 underline-offset-4 transition-colors"
              aria-label="Show less"
            >
              Show less
            </button>
          </>
        )}
      </div>
    );
  }

  const faqs = [
    { q: 'Is dental treatment painful at Smile Inn?', a: 'We use modern pain management including topical anesthesia and dental lasers. Most patients are surprised by how comfortable treatment is. Your comfort comes first.' },
    { q: 'Do you treat children?', a: 'Yes. We provide child-friendly dental care from the first tooth and offer habit counselling. Our doctors are trained to work patiently with young patients.' },
    { q: 'How often should I visit a dentist?', a: 'Every 6 months for most patients. Those with active gum disease or orthodontic treatment may need more frequent visits.' },
    { q: 'What is the average cost of dental implants?', a: 'Costs vary depending on the implant type and bone health. We provide a transparent, detailed quote after your 3D digital scan.' },
    { q: 'Are digital X-rays safer?', a: 'Yes, digital X-rays use up to 80% less radiation than traditional film X-rays and provide much clearer images for diagnosis.' },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const popupTimer = setTimeout(() => {
        // Only show if user is still in the Hero section (top of the page)
        if (window.scrollY < 500) {
          setShowPopup(true);
          // Auto-close after 3 seconds as requested
          setTimeout(() => {
            setShowPopup(false);
            sessionStorage.setItem('hasSeenPopup', 'true');
          }, 3000);
        }
      }, 5000);
      return () => clearTimeout(popupTimer);
    }
  }, []);

  // Close popup if user scrolls away from Hero section
  useEffect(() => {
    if (showPopup) {
      const handleScroll = () => {
        if (window.scrollY > 500) {
          setShowPopup(false);
          sessionStorage.setItem('hasSeenPopup', 'true');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showPopup]);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <div className="pt-0 overflow-x-hidden">
      <SEO
        title="Best Dental Clinic in Nagole, Hyderabad · Smile Inn"
        description={`Specialist dental care by ${doctorsData.length} MDS doctors in Nagole & Balapur. Painless, hygienic, transparent. Book your appointment today.`}
        keywords="dental clinic Nagole, dentist Hyderabad, dental implants Hyderabad, teeth whitening Hyderabad, best dentist near me, dental clinic Balapur, cosmetic dentistry Hyderabad"
        canonicalPath="/"
        schemaMarkup={FAQ_SCHEMA}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold tracking-widest uppercase animate-fade-in">
              MDS Specialist-Led Studio
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline text-primary leading-tight">
              Top Tier Dental Clinic in <br />
              <span className="italic text-on-primary-container">Nagole & Balapur</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed opacity-90">
              Experience expert, painless dental care tailored to give you the perfect smile. We make your visits comfortable and easy.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigate('/book')}
                className="btn-primary text-lg px-8 py-4 sm:px-10 sm:py-5"
              >
                <span className="material-symbols-outlined">calendar_today</span> Book Appointment
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919177317253', '_blank')}
                className="bg-green-50 text-green-700 px-6 py-4 rounded-xl font-bold hover:bg-green-100 transition-all duration-300 flex items-center gap-3 border border-green-200"
              >
                <div className="bg-green-600 text-white p-1 rounded-full shadow-sm">
                  <WhatsAppIcon />
                </div>
                WhatsApp Us Directly
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-4">
              {[['13+', 'Years'], [`MDS`, 'Specialists'], ['2', 'Locations']].map(([num, label]) => (
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
              src="/premium_interior.png"
              alt="Smile Inn Dental Clinic premium interior, Hyderabad"
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
                { icon: 'biotech', label: 'Advanced Digital Dentistry' },
                { icon: 'sanitizer', label: 'Sterilization Focused' },
                { icon: 'school', label: 'Led by MDS Doctors' },
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
            From routine checkups to painless root canals and perfect smile makeovers, our skilled dentists provide complete care under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, desc, inverted, hoverColor, path }) =>
            inverted ? (
              <div 
                key={title} 
                onClick={() => navigate(path)}
                className="bg-primary-container p-8 rounded-xl shadow-xl shadow-primary/20 transform md:-translate-y-4 group transition-all duration-500 hover:scale-[1.03] hover:shadow-primary/40 cursor-pointer"
              >
                <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className="material-symbols-outlined text-on-secondary-container text-4xl">{icon}</span>
                </div>
                <h3 className="text-2xl font-headline text-white mb-4">{title}</h3>
                <p className="text-base text-on-primary-container leading-relaxed mb-8">{desc}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate('/book'); }}
                  className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest inline-block hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            ) : (
              <div key={title} className={`bg-surface-container-low p-8 rounded-xl ${hoverColor} hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer`} onClick={() => navigate(path)}>
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
                alt="Smile Inn Dental treatment room with modern dental chair and advanced equipment, Hyderabad"
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
                { n: '01', t: 'Led by MDS Experts', d: 'Your treatments are handled by highly qualified Master of Dental Surgery specialists to ensure the best care.' },
                { n: '02', t: 'Advanced Digital Scans', d: 'Equipped with top-tier 3D scanning and digital X-rays to perfectly plan your treatment without guesswork.' },
                { n: '03', t: '100% Painless Treatments', d: 'We use modern numbing techniques to ensure you feel absolutely no pain or stress during your visit.' },
                { n: '04', t: 'Simple & Transparent', d: 'No hidden costs and no confusing medical terms. We explain everything clearly before we begin.' },
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
              <h3 className="font-headline text-xl text-primary mb-2">{title}</h3>
              <p className="text-sm text-on-surface-variant px-4">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#ccf07311,_transparent,_transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-[0.6875rem] tracking-[0.2em] uppercase">The Specialists</span>
              <h2 className="text-4xl md:text-5xl font-headline text-primary mt-4">Led by Master Clinicians</h2>
              <p className="text-on-surface-variant text-lg mt-6 leading-relaxed">
                Our clinic is anchored by highly qualified MDS specialists, ensuring that complex treatments are handled with advanced academic knowledge and surgical precision.
              </p>
            </div>
            <button 
              onClick={() => navigate('/about')}
              className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              Meet Our Entire Team
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map(({ name, role, img }) => (
              <div key={name} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-8 relative">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} alt={`${name}, ${role} at Smile Inn Dental Clinics Hyderabad`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-2">{name}</h3>
                <p className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">{role}</p>
                <button
                  onClick={() => navigate('/book')}
                  className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  Book Appointment
                </button>
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
            style={{ 
              transform: `translateX(-${activeTestimonial * (100 / (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 2 : 1))}%)` 
            }}
          >
            {testimonials.map(({ q, name, loc, inverted }, idx) => (
              <div key={idx} className="w-full lg:w-1/2 flex-shrink-0 px-4">
                <div className={`p-8 md:p-14 h-full rounded-[2.5rem] shadow-sm italic flex flex-col justify-between ${inverted ? 'bg-primary-container shadow-2xl shadow-primary/20' : 'bg-surface border border-outline-variant/10'}`}>
                  <div>
                    <div className={`text-6xl mb-6 ${inverted ? 'text-secondary-container opacity-50' : 'text-secondary opacity-30 font-serif'}`}>"</div>
                    <ReviewToggle text={q} inverted={inverted} />
                  </div>
                  <div className="flex flex-col items-center gap-4 not-italic mt-10">
                    <div className={`w-14 h-14 rounded-full border-2 ${inverted ? 'border-secondary/30 bg-white/10' : 'border-primary/10 bg-primary/5'} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined text-3xl ${inverted ? 'text-secondary' : 'text-primary'}`}>person</span>
                    </div>
                    <div>
                      <div className={`font-bold text-lg ${inverted ? 'text-white' : 'text-primary'}`}>{name}</div>
                      <div className={`text-xs uppercase tracking-widest ${inverted ? 'text-on-primary-container opacity-70' : 'text-secondary'}`}>{loc}</div>
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
                aria-label={`View testimonial ${i + 1}`}
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
        <h2 className="text-4xl font-headline text-primary mb-16 text-center">Visit Our Clinics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Nagole Branch', 
              addr: 'Gurukrupa Building, 1st Floor, Alkapuri X Road, Nagole.',
              status: 'OPEN ALL 7 DAYS',
              mapUrl: 'https://maps.google.com/?q=Smile+Inn+Dental+Nagole'
            },
            {
              name: 'Balapur Branch', 
              addr: 'Basupalli Gowra Reddy Complex, RCI Road, Balapur.',
              status: 'OPEN ALL 7 DAYS',
              mapUrl: 'https://maps.google.com/?q=Sri+Amrutha+Laxmi+Dental+Balapur'
            },
          ].map(({ name, addr, status, mapUrl }) => (
            <div key={name} className="bg-white rounded-xl shadow-lg border-l-4 border-secondary p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-4 text-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                  <h3 className="text-xl font-bold font-sans text-primary">{name}</h3>
                </div>
                <p className="text-slate-600 mb-6 text-sm">{addr}</p>
                <div className="font-bold text-sm tracking-widest text-slate-800 mb-8 uppercase">
                  {status}
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                <button 
                  onClick={() => window.open(mapUrl, '_blank')}
                  className="text-slate-600 hover:text-secondary font-bold text-sm flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span className="material-symbols-outlined transform -rotate-45 text-lg">arrow_forward</span> Get Directions
                </button>
                <button 
                  onClick={() => navigate('/book')}
                  className="flex items-center border border-outline-variant rounded hover:border-secondary transition-colors overflow-hidden group/btn"
                >
                  <span className="px-4 py-2 text-sm font-bold text-primary group-hover/btn:text-secondary transition-colors uppercase">BOOK APPOINTMENT</span>
                  <div className="bg-secondary text-white p-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Width CTA */}
      <section className="px-6 md:px-8 mb-24 max-w-7xl mx-auto">
        <div className="bg-green-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-green-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 blur-3xl rounded-full"></div>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <WhatsAppIcon />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-headline text-green-800 mb-2">WhatsApp Us Directly</h2>
              <p className="text-green-700 font-medium">Quick responses — typically within 15 minutes</p>
            </div>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/919177317253', '_blank')}
            className="w-full md:w-auto bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md flex items-center justify-center gap-2"
          >
            Start Chat <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="mx-4 md:mx-8 mb-24">
        <div className="max-w-7xl mx-auto bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ccf07322,_transparent,_transparent)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-headline text-white mb-8">Ready to Transform Your Smile?</h2>
            <p className="text-on-primary-container max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              Book your session today and experience expert clinical dentistry that is easy and relaxing.
            </p>
            <button
              onClick={() => navigate('/book')}
              className="px-12 py-5 bg-secondary-container text-on-secondary-container rounded-xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* 5 Second Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={closePopup}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl border border-secondary/20 overflow-hidden relative z-10 animate-slide-up">
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-surface-container-low rounded-full transition-all"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-2xl font-bold">close</span>
            </button>
            
            <div className="p-6 md:p-12 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary-container text-on-secondary-container rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-3xl md:text-4xl">calendar_month</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-headline text-primary mb-3 md:mb-4 px-2">Book Your Appointment</h3>
              <p className="text-on-surface-variant text-sm md:text-base mb-8 md:mb-10 leading-relaxed px-4">
                Experience expert clinical dentistry that is easy and relaxing.
              </p>
              
              <form className="space-y-4 px-2 md:px-0" onSubmit={(e) => { e.preventDefault(); navigate('/book'); }}>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-xl">person</span>
                  <input 
                    type="text" 
                    required 
                    className="w-full border border-outline-variant rounded-2xl pl-12 pr-4 py-3.5 md:py-4 text-base focus:ring-2 focus:ring-secondary focus:outline-none bg-surface transition-all" 
                    placeholder="Your Full Name" 
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-xl">call</span>
                  <input 
                    type="tel" 
                    required 
                    className="w-full border border-outline-variant rounded-2xl pl-12 pr-4 py-3.5 md:py-4 text-base focus:ring-2 focus:ring-secondary focus:outline-none bg-surface transition-all" 
                    placeholder="Phone Number" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white px-8 py-4 md:py-5 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all text-base md:text-lg mt-4 flex items-center justify-center gap-3"
                >
                  Book Now
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
              
              <p className="text-[10px] md:text-xs text-outline mt-6 md:mt-8 uppercase tracking-widest font-bold">
                Typically responds in 15 mins
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
