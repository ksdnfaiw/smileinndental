import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', branch: 'Nagole Branch', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = new FormData();
      payload.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
      payload.append('subject', `New Enquiry — ${formData.name} — ${formData.branch}`);
      payload.append('from_name', 'Smile Inn Website — Contact');
      payload.append('botcheck', ''); // honeypot

      Object.entries(formData).forEach(([key, value]) => {
        if (value) payload.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        navigate('/thank-you');
      } else {
        setSubmitError('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again or call us at +91 91773 17253.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const branches = [
    {
      name: 'Smile Inn Dental Clinics — Nagole', color: 'primary',
      addr: 'Gurukrupa Building, 1st Floor, Alkapuri X Road,\nNagole, Hyderabad - 500068',
      phone: '+91 91773 17253', hours: 'Mon – Sun: 10:00 AM – 8:30 PM',
      email: 'smileinndentalclinics@gmail.com',
      map: 'https://maps.google.com/?q=Smile+Inn+Dental+Nagole'
    },
    {
      name: 'Sri Amrutha Laxmi Dental Hospital — Balapur', color: 'secondary',
      addr: 'Basupalli Gowra Reddy Complex, RCI Road,\nBalapur, Hyderabad - 500097',
      phone: '+91 90637 17253', hours: 'Mon – Sat: 10:30 AM – 9:00 PM',
      email: 'smileinndentalclinics@gmail.com',
      map: 'https://maps.google.com/?q=Sri+Amrutha+Laxmi+Dental+Balapur'
    },
  ];

  return (
    <div className="pt-0">
      <SEO 
        title="Contact Smile Inn Dental Clinics · Nagole & Balapur"
        description="Find Smile Inn Dental Clinics in Nagole and Balapur, Hyderabad. Call, WhatsApp, or visit us — open 7 days a week."
        keywords="contact dentist Hyderabad, dental clinic Nagole address, dental clinic Balapur, Smile Inn phone number, dentist near me Hyderabad"
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="bg-primary-container py-24 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#ccf07320,_transparent)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-secondary-container font-bold text-xs tracking-widest uppercase mb-4 block">Expert Specialist Care</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">Contact Smile Inn.</h1>
          <p className="text-on-primary-container text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Two locations across Hyderabad. Always here when you need us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Locations */}
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-[0.6875rem] block mb-4">Our Locations</span>
              <h2 className="text-4xl font-serif text-primary mb-8">Our Clinic Locations</h2>
            </div>

            <div className="space-y-10">
              {branches.map(({ name, color, addr, phone, hours, email }) => (
                <div
                  key={name}
                  className={`bg-surface-container-lowest p-10 rounded-xl shadow-sm relative overflow-hidden group transition-all duration-500 hover:shadow-xl border-l-8 border-${color}`}
                >
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-serif text-${color} mb-6`}>{name}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <span className={`material-symbols-outlined text-${color} mt-1`}>location_on</span>
                        <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">{addr}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`material-symbols-outlined text-${color}`}>call</span>
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-on-surface-variant font-bold hover:underline">{phone}</a>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`material-symbols-outlined text-${color}`}>schedule</span>
                        <p className="text-on-surface-variant">{hours}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`material-symbols-outlined text-${color}`}>mail</span>
                        <a href={`mailto:${email}`} className="text-on-surface-variant hover:underline">{email}</a>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.open(branches.find(b => b.name === name).map, '_blank')}
                      className={`mt-8 w-full py-3 border-2 border-${color} text-${color} font-bold rounded-xl hover:bg-${color} hover:text-white transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <span className="material-symbols-outlined">map</span>
                      View on Google Maps
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919177317253?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20dental%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-all duration-300 group"
            >
              <div className="bg-green-500 p-3 rounded-full text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <div>
                <div className="font-bold text-green-800 text-lg">WhatsApp Us Directly</div>
                <div className="text-green-600 text-sm">Quick responses — typically within 15 minutes</div>
              </div>
              <span className="material-symbols-outlined text-green-500 ml-auto">arrow_forward</span>
            </a>
          </div>

          {/* Right: Map + Form */}
          <div className="flex flex-col gap-10">
            {/* Map */}
            <div className="bg-surface-container-low rounded-xl h-80 w-full relative flex items-center justify-center overflow-hidden group">
              <img
                alt="Map showing Smile Inn Dental Clinics locations in Hyderabad"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPBuunU3Vzur89mVeRnPT9K22VX0nlevqKPh4exAU7QKaDqeOlah4r4ZxBerV2A9QPadVhqnlcmv0t5lVkEqbo2npjbKVScp9bu2DNA-JncNg0lbNJ1PboT5uVuOLkZgFJJCYl7mV6yQ4t9VFPXsi1pfPzPrAe3PJ_ZU8eVOqk1z2_sFyYqusSaiEuVB0gjYI6TByFllcGzMbTnbHgfasA8k58IYOiCNzlZKeYdP_HJJ9j00XUsianS-b5giZ_j--X_7n2P3UU9bg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col gap-4 w-full max-w-xs px-6">
                  <button
                    onClick={() => window.open('https://maps.google.com/?q=Smile+Inn+Dental+Nagole', '_blank')}
                    className="btn-primary w-full py-4 text-sm justify-center"
                  >
                    Nagole Branch Map
                  </button>
                  <button
                    onClick={() => window.open('https://maps.google.com/?q=Sri+Amrutha+Laxmi+Dental+Balapur', '_blank')}
                    className="btn-secondary w-full py-4 text-sm justify-center !bg-white !text-primary"
                  >
                    Balapur Branch Map
                  </button>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-surface-container p-10 md:p-14 rounded-[2.5rem]">
              <h3 className="text-3xl font-serif text-primary mb-3">Patient Enquiry</h3>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Fill out the form below and our team will get back to you shortly.</p>

              {submitError && (
                <div className="mb-8 bg-red-50 text-red-700 px-8 py-5 rounded-2xl font-bold text-base flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl">error</span>
                  {submitError}
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Honeypot — spam protection */}
                <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">Your Name</label>
                    <input
                      id="contact-name"
                      name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/50 focus:outline-none placeholder:text-outline transition-all text-lg"
                      placeholder="e.g. Rahul Sharma" type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/50 focus:outline-none placeholder:text-outline transition-all text-lg"
                      placeholder="+91" type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-branch" className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">Select Branch</label>
                  <select
                    id="contact-branch"
                    name="branch" value={formData.branch} onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/50 focus:outline-none transition-all text-lg text-on-surface appearance-none cursor-pointer"
                  >
                    <option>Nagole Branch</option>
                    <option>Balapur Branch</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">How can we help?</label>
                  <textarea
                    id="contact-message"
                    name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-none rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-secondary/50 focus:outline-none placeholder:text-outline transition-all resize-none text-lg"
                    placeholder="Describe your dental concern or preferred appointment date..."
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Sending...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
