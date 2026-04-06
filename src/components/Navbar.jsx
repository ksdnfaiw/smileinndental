import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-full.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/treatments', label: 'Treatments' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <NavLink
          to="/"
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={logo} 
            alt="Smile Inn Dental Clinics Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold border-b-2 border-lime-500 tracking-tight transition-all duration-300 text-lg'
                  : 'text-slate-200 hover:text-white font-medium tracking-tight transition-all duration-300 text-lg'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => { navigate('/book'); setMenuOpen(false); }}
          className="hidden md:block bg-lime-500 text-slate-950 px-6 py-2.5 rounded-xl font-bold transition-all duration-300 hover:bg-lime-400 active:scale-95 shadow-md hover:shadow-lg"
        >
          Book Appointment
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white"
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-primary/95 backdrop-blur-md`}
      >
        <div className="px-6 pb-6 space-y-4 flex flex-col">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold border-l-4 border-lime-500 pl-3 transition-all text-xl py-2'
                  : 'text-slate-200 hover:text-white pl-3 transition-all text-xl py-2'
              }
            >
              {label}
            </NavLink>
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
