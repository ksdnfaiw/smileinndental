import { NavLink, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={logoIcon} 
              alt="Smile Inn Icon" 
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-white text-2xl md:text-3xl font-headline font-bold tracking-tight">Smile Inn</span>
              <div className="mt-1">
                <span className="bg-white text-[#302682] text-[9px] md:text-[11px] px-2 py-0.5 rounded-sm font-bold tracking-[0.2em] uppercase">Dental Clinics</span>
              </div>
            </div>
          </NavLink>


          <p className="text-slate-200 text-lg leading-relaxed opacity-90">
            Redefining dental health through specialist-led artistry and advanced clinical protocols.
            Signature Specialist Care.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/smileinn.dentalclinic?igsh=bmQ4MHozd3F0b2Rk&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Smile Inn on Instagram"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors cursor-pointer"
            >
              <i className="bi bi-instagram text-lg"></i>
            </a>
            <a 
              href="https://www.facebook.com/share/1L9kwRwXAc/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Smile Inn on Facebook"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <i className="bi bi-facebook text-lg"></i>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-lime-400 font-bold mb-6 tracking-[0.2em] uppercase text-xs">Treatments</h5>
          <ul className="space-y-4 text-slate-200">
            <li><NavLink to="/treatments/general-dentistry" className="hover:text-lime-400 transition-colors text-base">General Dentistry</NavLink></li>
            <li><NavLink to="/treatments/emergency-care" className="hover:text-lime-400 transition-colors text-base">Emergency Care</NavLink></li>
            <li><NavLink to="/treatments/cosmetic-dentistry" className="hover:text-lime-400 transition-colors text-base">Cosmetic Dentistry</NavLink></li>
            <li><NavLink to="/treatments/oral-surgery" className="hover:text-lime-400 transition-colors text-base">Oral Surgery</NavLink></li>
            <li><NavLink to="/treatments/laser-dentistry" className="hover:text-lime-400 transition-colors text-base">Laser Dentistry</NavLink></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lime-400 font-bold mb-6 tracking-[0.2em] uppercase text-xs opacity-0 hidden md:block">More Treatments</h5>
          <ul className="space-y-4 text-slate-200">
            <li><NavLink to="/treatments/orthodontics" className="hover:text-lime-400 transition-colors text-base">Braces & Aligners</NavLink></li>
            <li><NavLink to="/treatments/pediatric-care" className="hover:text-lime-400 transition-colors text-base">Pediatric Care</NavLink></li>
            <li><NavLink to="/treatments/oral-cancer" className="hover:text-lime-400 transition-colors text-base">Oral Cancer</NavLink></li>
            <li><NavLink to="/treatments/esthetic-procedures" className="hover:text-lime-400 transition-colors text-base">Esthetic Procedures</NavLink></li>
          </ul>
        </div>


        {/* Clinics */}
        <div>
          <h5 className="text-lime-400 font-bold mb-6 tracking-[0.2em] uppercase text-xs">Clinics</h5>
          <ul className="space-y-4 text-slate-200">
            <li><NavLink to="/contact" className="hover:text-lime-400 transition-colors text-base">Nagole Branch</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-lime-400 transition-colors text-base">Balapur Branch</NavLink></li>
            <li><NavLink to="/about" className="hover:text-lime-400 transition-colors text-base">About Us</NavLink></li>
            <li><a href="tel:+919177317253" className="hover:text-lime-400 transition-colors text-base">+91 91773 17253</a></li>
            <li><a href="mailto:smileinndentalclinics@gmail.com" className="hover:text-lime-400 transition-colors text-base">Email Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-lime-500 font-bold mb-6 tracking-widest uppercase text-xs">Stay Connected</h5>
          <p className="text-slate-200 text-base mb-4">Subscribe for oral health tips.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter subscription"
              className="bg-slate-900 border-none rounded-l-lg text-white text-base w-full px-3 py-2 focus:ring-1 focus:ring-lime-500 focus:outline-none placeholder:text-slate-600"
            />
            <button className="bg-lime-600 px-4 py-2 rounded-r-lg text-white hover:bg-lime-500 transition-colors" aria-label="Subscribe">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate('/book')}
              className="w-full bg-primary-container text-white py-3 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-200 text-base">© {new Date().getFullYear()} Smile Inn Dental Clinics. Signature Dental Care.</p>
        <div className="flex gap-6 text-slate-200 text-base">
          <span className="hover:text-lime-400 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-lime-400 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
