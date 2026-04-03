import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-white/80'
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-serif italic text-indigo-900 font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Smile Inn Dental Clinics
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
                  ? 'text-indigo-900 font-bold border-b-2 border-lime-600 tracking-tight transition-all duration-300 text-lg'
                  : 'text-slate-600 hover:text-indigo-900 font-medium tracking-tight transition-all duration-300 text-lg'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => { navigate('/book'); setMenuOpen(false); }}
          className="hidden md:block bg-primary-container text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:opacity-80 active:scale-95"
        >
          Book Appointment
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-primary"
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
        } bg-white/95 backdrop-blur-md`}
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
                  ? 'text-indigo-900 font-bold border-l-4 border-lime-600 pl-3 transition-all text-xl py-2'
                  : 'text-slate-600 hover:text-indigo-900 pl-3 transition-all text-xl py-2'
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/book'); setMenuOpen(false); }}
            className="btn-primary w-full text-center mt-4"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
