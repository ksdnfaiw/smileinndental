import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', branch: 'Nagole Branch', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', branch: 'Nagole Branch', message: '' });
  };

  const branches = [
    {
      name: 'Nagole Branch', color: 'primary',
      addr: 'H.No 1-2-3, Main Road, Opposite Metro Station,\nNagole, Hyderabad - 500068',
      phone: '+91 98765 43210', hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
      email: 'nagole@smileinn.clinic',
    },
    {
      name: 'Balapur Branch', color: 'secondary',
      addr: 'Plot No 45, RCI Road, Near Balapur X Roads,\nBalapur, Hyderabad - 500005',
      phone: '+91 98765 43211', hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
      email: 'balapur@smileinn.clinic',
    },
  ];

  return (
    <div className="pt-0">
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
                        <a href={`tel:${phone}`} className="text-on-surface-variant font-bold hover:underline">{phone}</a>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map + Form */}
          <div className="flex flex-col gap-10">
            {/* Map Placeholder */}
            <div className="bg-surface-container-low rounded-xl h-80 w-full relative flex items-center justify-center overflow-hidden group">
              <img
                alt="Map view of Hyderabad"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPBuunU3Vzur89mVeRnPT9K22VX0nlevqKPh4exAU7QKaDqeOlah4r4ZxBerV2A9QPadVhqnlcmv0t5lVkEqbo2npjbKVScp9bu2DNA-JncNg0lbNJ1PboT5uVuOLkZgFJJCYl7mV6yQ4t9VFPXsi1pfPzPrAe3PJ_ZU8eVOqk1z2_sFyYqusSaiEuVB0gjYI6TByFllcGzMbTnbHgfasA8k58IYOiCNzlZKeYdP_HJJ9j00XUsianS-b5giZ_j--X_7n2P3UU9bg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-4">
                  <button className="btn-primary flex-1 py-3 text-sm">View on Maps</button>
                  <button className="btn-secondary px-4 border-2 border-outline !bg-transparent">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-surface-container p-10 md:p-14 rounded-[2.5rem]">
              <h3 className="text-3xl font-serif text-primary mb-3">Patient Enquiry</h3>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Fill out the form below and our team will get back to you shortly.</p>

              {submitted && (
                <div className="mb-8 bg-secondary-container text-on-secondary-container px-8 py-5 rounded-full font-bold text-base flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                  Thank you! We'll be in touch soon.
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">Your Name</label>
                    <input
                      name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/50 focus:outline-none placeholder:text-outline transition-all text-lg"
                      placeholder="e.g. Rahul Sharma" type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">Phone Number</label>
                    <input
                      name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/50 focus:outline-none placeholder:text-outline transition-all text-lg"
                      placeholder="+91" type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">Select Branch</label>
                  <select
                    name="branch" value={formData.branch} onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-secondary/50 focus:outline-none transition-all text-lg text-on-surface appearance-none cursor-pointer"
                  >
                    <option>Nagole Branch</option>
                    <option>Balapur Branch</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase ml-4 tracking-wider">How can we help?</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-none rounded-[2rem] px-8 py-6 focus:ring-2 focus:ring-secondary/50 focus:outline-none placeholder:text-outline transition-all resize-none text-lg"
                    placeholder="Describe your dental concern or preferred appointment date..."
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
