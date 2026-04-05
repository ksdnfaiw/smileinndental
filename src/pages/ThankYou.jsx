import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="pt-0">
      <SEO
        title="Thank You — Smile Inn Dental Clinics"
        description="Your appointment request has been received. We'll confirm your booking within 2 hours."
        canonicalPath="/thank-you"
      />

      {/* Hero */}
      <section className="bg-primary-container py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ccf07320,_transparent)]"></div>
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          {/* Success Icon */}
          <div className="w-28 h-28 mx-auto mb-10 bg-secondary-container rounded-full flex items-center justify-center shadow-2xl shadow-secondary/30 animate-bounce">
            <span
              className="material-symbols-outlined text-on-secondary-container text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-headline text-white mb-6 leading-tight">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl text-on-primary-container opacity-90 mb-4 leading-relaxed">
            Your submission has been received successfully.
          </p>
          <p className="text-lg text-on-primary-container opacity-75">
            Our team will confirm your appointment within <strong className="text-secondary-container">2 hours</strong>.
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Call Card */}
          <a
            href="tel:+919177317253"
            className="group bg-surface-container-low p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-6 hover:-translate-y-1"
          >
            <div className="bg-primary-container p-4 rounded-2xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
            </div>
            <div>
              <h3 className="text-xl font-headline text-primary mb-2">Call Us Directly</h3>
              <p className="text-on-surface-variant text-base mb-2">For immediate assistance, call us at:</p>
              <span className="text-2xl font-bold text-primary">+91 91773 17253</span>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/919177317253?text=Hi%2C%20I%20just%20submitted%20an%20appointment%20request%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface-container-low p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-6 hover:-translate-y-1"
          >
            <div className="bg-green-100 p-4 rounded-2xl text-green-700 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">
                chat
              </span>
            </div>
            <div>
              <h3 className="text-xl font-headline text-primary mb-2">WhatsApp Us</h3>
              <p className="text-on-surface-variant text-base mb-2">Get faster responses on WhatsApp:</p>
              <span className="text-2xl font-bold text-green-700">+91 91773 17253</span>
            </div>
          </a>
        </div>

        {/* Info Block */}
        <div className="bg-secondary-container/20 border border-secondary/10 rounded-3xl p-10 text-center mb-16">
          <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">
            info
          </span>
          <h3 className="text-2xl font-headline text-primary mb-4">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center mt-8">
            {[
              { step: '01', title: 'Confirmation', desc: 'Our team reviews your request and confirms your slot within 2 hours.' },
              { step: '02', title: 'Reminder', desc: "You'll receive a WhatsApp/SMS reminder before your appointment date." },
              { step: '03', title: 'Your Visit', desc: 'Arrive at your chosen branch. Our team will be ready to welcome you.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="space-y-3">
                <div className="text-secondary font-bold text-sm tracking-widest">{step}</div>
                <h4 className="font-bold text-primary text-lg">{title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="btn-primary text-xl px-12 py-5"
          >
            <span className="material-symbols-outlined">home</span>
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}
