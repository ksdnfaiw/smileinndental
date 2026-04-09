import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <SEO 
        title="404 - Page Not Found · Smile Inn Dental Clinics"
        description="The page you are looking for does not exist. Return to Smile Inn Dental Clinics for the best specialist dental care in Hyderabad."
        canonicalPath="/404"
      />
      
      <div className="max-w-xl text-center">
        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Error 404</span>
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-8 leading-tight">
          Lost in the <br /><span className="italic text-secondary">Right Place.</span>
        </h1>
        <p className="text-xl text-on-surface-variant opacity-80 leading-relaxed mb-12">
          It looks like the page you're searching for has moved or no longer exists. Let's get you back to your radiant smile journey.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Return Home
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-4 border-2 border-outline-variant text-primary rounded-2xl font-bold text-lg hover:bg-surface-container transition-all duration-300"
          >
            Contact Clinic
          </button>
        </div>
      </div>
    </div>
  );
}
