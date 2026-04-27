import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/treatments', label: 'Treatments', isDropdown: true },
    { to: '/contact', label: 'Contact' },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const treatments = [
    { to: '/treatments/general-dentistry', label: 'General Dentistry' },
    { to: '/treatments/emergency-care', label: 'Emergency Care' },
    { to: '/treatments/cosmetic-dentistry', label: 'Cosmetic Dentistry' },
    { to: '/treatments/oral-surgery', label: 'Oral Surgery' },
    { to: '/treatments/laser-dentistry', label: 'Laser Dentistry' },
    { to: '/treatments/orthodontics', label: 'Braces & Aligners' },
    { to: '/treatments/pediatric-care', label: 'Pediatric Care' },
    { to: '/treatments/oral-cancer', label: 'Oral Cancer' },
    { to: '/treatments/esthetic-procedures', label: 'Esthetic Procedures' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#302682] shadow-lg' : 'bg-[#302682]/95'
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-2 max-w-7xl mx-auto w-full">
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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
          <div className="flex items-center gap-4 mr-2">
            <a href="https://www.instagram.com/smileinn.dentalclinic?igsh=bmQ4MHozd3F0b2Rk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-all hover:scale-110">
              <i className="bi bi-instagram text-lg"></i>
            </a>
            <a href="https://www.facebook.com/share/1L9kwRwXAc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-all hover:scale-110">
              <i className="bi bi-facebook text-lg"></i>
            </a>
          </div>

          <button
            onClick={() => { navigate('/book'); setMenuOpen(false); }}
            className="bg-lime-500 text-slate-950 px-5 py-2 rounded-xl font-bold transition-all duration-300 hover:bg-lime-400 active:scale-95 shadow-md hover:shadow-lg text-xs"
          >
            Book Appointment
          </button>
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
