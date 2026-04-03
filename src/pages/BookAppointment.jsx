import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', branch: '', treatment: '', date: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', branch: '', treatment: '', date: '', message: '' });
  };

  return (
    <div className="pt-0">
      <SEO 
        title="Book Appointment | Schedule Your Visit" 
        description="Book your dental appointment online at Smile Inn Dental Clinics. Experience personalized specialist care in our modern Hyderabad studios."
      />
      {/* Hero Bar */}
      <section className="bg-primary-container py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_#ccf07320,_transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary-container font-bold text-xs tracking-widest uppercase mb-4 block">Plan Your Visit</span>
            <h1 className="text-4xl md:text-6xl font-headline text-white leading-tight">Book Your Appointment.</h1>
            <p className="mt-6 text-on-primary-container text-lg md:text-xl max-w-2xl leading-relaxed">
              Step into our modern dental studio. Experience personalized dental care in a space designed for your comfort and absolute well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Body: 2-Column */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-10 md:p-14 rounded-[2.5rem] shadow-[0px_20px_60px_rgba(49,43,128,0.08)]">
            <h2 className="text-3xl font-headline text-primary mb-10">Request an Appointment</h2>

            {submitted && (
              <div className="mb-10 bg-secondary-container text-on-secondary-container p-8 rounded-full flex items-start gap-4 shadow-sm">
                <span className="material-symbols-outlined text-3xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <p className="font-bold text-lg mb-1">Appointment Request Submitted!</p>
                  <p className="text-base opacity-90">Our team will contact you shortly to confirm your booking.</p>
                </div>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Full Name</label>
                  <input
                    name="name" value={formData.name} onChange={handleChange} required
                    className="bg-surface-container-low border-none rounded-full p-5 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface"
                    placeholder="John Doe" type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Phone</label>
                  <input
                    name="phone" value={formData.phone} onChange={handleChange} required
                    className="bg-surface-container-low border-none rounded-full p-5 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface"
                    placeholder="+91 00000 00000" type="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Email</label>
                <input
                  name="email" value={formData.email} onChange={handleChange} required
                  className="bg-surface-container-low border-none rounded-full p-5 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface"
                  placeholder="john@example.com" type="email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Branch</label>
                  <select
                    name="branch" value={formData.branch} onChange={handleChange} required
                    className="bg-surface-container-low border-none rounded-full p-5 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface appearance-none cursor-pointer"
                  >
                    <option value="">Select Branch</option>
                    <option>Nagole Branch</option>
                    <option>Balapur Branch</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Treatment</label>
                  <select
                    name="treatment" value={formData.treatment} onChange={handleChange} required
                    className="bg-surface-container-low border-none rounded-full p-5 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface appearance-none cursor-pointer"
                  >
                    <option value="">Select Treatment</option>
                    <option>General Dentistry</option>
                    <option>Orthodontics</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Oral Surgery</option>
                    <option>Dental Implants</option>
                    <option>Emergency Care</option>
                    <option>Pediatric Care</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Preferred Date</label>
                <input
                  name="date" value={formData.date} onChange={handleChange} required
                  min={new Date().toISOString().split('T')[0]}
                  className="bg-surface-container-low border-none rounded-full p-5 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface"
                  type="date"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-outline uppercase tracking-wider mb-3 ml-4">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  className="bg-surface-container-low border-none rounded-[2rem] p-6 focus:ring-2 focus:ring-secondary/20 focus:outline-none text-lg text-on-surface resize-none"
                  placeholder="Tell us about your dental concerns..."
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-5 text-xl"
              >
                <span>Submit Request</span>
                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
              </button>
            </form>
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hours Card */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary-container p-3 rounded-full">
                  <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <h3 className="text-xl font-headline text-primary">Clinic Hours</h3>
              </div>
              <div className="space-y-4 text-on-surface-variant">
                {[
                  { day: 'Mon — Fri', hours: '09:00 AM – 08:00 PM', closed: false },
                  { day: 'Saturday', hours: '09:00 AM – 05:00 PM', closed: false },
                  { day: 'Sunday', hours: 'Closed', closed: true },
                ].map(({ day, hours, closed }) => (
                  <div key={day} className="flex justify-between items-center border-b border-outline-variant/30 pb-3 last:border-0">
                    <span>{day}</span>
                    <span className={`font-bold ${closed ? 'text-error text-xs uppercase tracking-widest' : 'text-on-surface'}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Branch Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Location I', name: 'Nagole Branch', addr: 'Suite 402, Medical Square, Nagole Main Rd.' },
                { label: 'Location II', name: 'Balapur Branch', addr: 'Level 1, Serene Plaza, Balapur X Roads.' },
              ].map(({ label, name, addr }) => (
                <div key={name} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest block mb-2">{label}</span>
                  <h4 className="font-headline text-lg mb-2">{name}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{addr}</p>
                </div>
              ))}
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:translate-x-1 transition-transform group">
                <div className="bg-green-100 p-3 rounded-full text-green-700 flex-shrink-0">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-outline uppercase tracking-tighter">WhatsApp Support</div>
                  <div className="font-bold text-on-surface group-hover:text-primary transition-colors">+91 98765 43210</div>
                </div>
              </a>
              <a href="tel:+919876543211" className="flex items-center gap-4 p-5 bg-error-container/20 rounded-xl hover:translate-x-1 transition-transform group">
                <div className="bg-error-container p-3 rounded-full text-error flex-shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-error uppercase tracking-tighter">Emergency Contact</div>
                  <div className="font-bold text-on-surface-variant group-hover:text-error transition-colors">+91 98765 43211</div>
                </div>
              </a>
            </div>

            {/* Visual Accent */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEYXqVD0M1JazIaixpElc9vF7n8Rp8fUy-LHgN2c_p4ujxoxBFAT9P-9Z_oa55ECqIzU-c59YLyqddxQb1D4ZuSpAClHAdikR9IGG_QFfkd2bTXAxW5LR2YcQKwxOOfvYqXug5lrgm-GY0rfz8ljJH_SKOMUun1EE1PPYjFJn2rt1kv7rUFlXEzqR8piZ36Bfdq4wCpRapit0861a9_-E-Iv2zoBbateagjQ5batwTfNej6BCGF0p6u6-TVMHc8sYDc1hGkmMrHtU"
                alt="Modern dental treatment room"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <p className="text-white font-headline text-xl leading-snug italic">
                  "Transforming clinical care into a personalized experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
