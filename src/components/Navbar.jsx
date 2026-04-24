import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/treatments', label: 'Treatments', isDropdown: true },
    { to: '/contact', label: 'Contact' },
  ];

  const treatments = [
    { to: '/treatments/general-dentistry', label: 'General Dentistry' },
    { to: '/treatments/orthodontics', label: 'Orthodontics' },
    { to: '/treatments/emergency-care', label: 'Emergency Care' },
    { to: '/treatments/cosmetic-dentistry', label: 'Cosmetic Dentistry' },
    { to: '/treatments/oral-surgery', label: 'Oral Surgery' },
    { to: '/treatments/pediatric-care', label: 'Pediatric Care' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#302682] shadow-lg' : 'bg-[#302682]/95'
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
        >
          <img 
            src={logoIcon} 
            alt="Smile Inn Icon" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="text-white text-2xl md:text-3xl font-headline font-bold tracking-tight">Smile Inn</span>
            <div className="mt-1">
              <span className="bg-white text-[#302682] text-[9px] md:text-[11px] px-2 py-0.5 rounded-sm font-bold tracking-[0.2em] uppercase">Dental Clinics</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          {links.map(({ to, label, isDropdown }) => (
            isDropdown ? (
              <div 
                key={label}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-medium tracking-tight transition-all duration-300 text-base ${
                      isActive || dropdownOpen ? 'text-white' : 'text-slate-200 hover:text-white'
                    }`
                  }
                >
                  {label}
                  <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </NavLink>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl py-4 mt-2 transition-all duration-300 transform origin-top ${
                    dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  {treatments.map((t) => (
                    <NavLink
                      key={t.to}
                      to={t.to}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-6 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-primary font-bold transition-colors text-sm"
                    >
                      {t.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold border-b-2 border-lime-500 tracking-tight transition-all duration-300 text-base'
                    : 'text-slate-200 hover:text-white font-medium tracking-tight transition-all duration-300 text-base'
                }
              >
                {label}
              </NavLink>
            )
          ))}
        </div>

        {/* CTA & Socials */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => { navigate('/book'); setMenuOpen(false); }}
            className="bg-lime-500 text-slate-950 px-6 py-2.5 rounded-xl font-bold transition-all duration-300 hover:bg-lime-400 active:scale-95 shadow-md hover:shadow-lg text-sm"
          >
            Book Appointment
          </button>
          
          <div className="flex items-center gap-3">
            <a href="https://youtube.com/@smileinndentalclinics" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="https://instagram.com/smileinndentalclinics" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com/smileinndentalclinics" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-all hover:scale-110">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-primary-container/95 backdrop-blur-md`}
      >
        <div className="px-6 pb-6 space-y-4 flex flex-col">
          {links.map(({ to, label, isDropdown }) => (
            <div key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => !isDropdown && setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-bold border-l-4 border-lime-500 pl-3 transition-all text-xl py-2'
                    : 'text-slate-200 hover:text-white pl-3 transition-all text-xl py-2'
                }
              >
                {label}
              </NavLink>
              {isDropdown && (
                <div className="pl-6 mt-2 space-y-2 border-l border-white/10">
                  {treatments.map((t) => (
                    <NavLink
                      key={t.to}
                      to={t.to}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-slate-300 hover:text-white text-lg"
                    >
                      {t.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => { navigate('/book'); setMenuOpen(false); }}
            className="w-full bg-lime-500 text-slate-950 py-3 rounded-xl font-bold text-lg text-center mt-4 shadow-sm active:scale-95"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
