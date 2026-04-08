import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../components/Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programmes', href: '/programmes' },
  { name: 'Schools', href: '/schools' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Research', href: '/research' },
  { name: 'Campus Life', href: '/campus' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      {/* Top announcement bar — hides on scroll */}
      <div className={`bg-miu-navy text-white text-xs sm:text-sm flex items-center justify-center transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-2 opacity-100'}`}>
        <div className="px-4 text-center">
          <span className="text-miu-gold font-semibold">Admissions Open 2026-27</span>
          <span className="mx-2 text-white/40">|</span>
          <a href="tel:+919036983337" className="hover:text-miu-gold transition-colors inline-flex items-center gap-1">
            <Phone className="w-3 h-3" /> +91 903 698 3337
          </a>
          <span className="mx-2 text-white/40 hidden sm:inline">|</span>
          <Link to="/admissions" className="hidden sm:inline text-miu-gold font-semibold hover:underline">Apply Now →</Link>
        </div>
      </div>

      {/* Main white nav — exactly like LPU */}
      <header className={`transition-all duration-300 ${isScrolled ? 'bg-yellow-50/90 backdrop-blur-md shadow-md' : 'bg-miu-gold/10 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo isScrolled={isScrolled} className="scale-90 md:scale-100 origin-left" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map(link => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `px-3 xl:px-4 py-2 text-sm font-semibold transition-colors relative group whitespace-nowrap ${
                      isActive ? 'text-miu-blue' : 'text-gray-800 hover:text-miu-blue'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-miu-blue transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/admissions"
                className="bg-miu-blue text-white font-bold px-5 py-2 rounded text-sm hover:bg-miu-navy transition-colors"
              >
                Apply Now
              </Link>
              <a
                href="https://wa.me/919036983337"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 font-semibold px-4 py-2 rounded text-sm hover:border-miu-blue hover:text-miu-blue transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-miu-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="px-4 py-3 flex flex-col">
              {navLinks.map(link => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-semibold rounded transition-colors border-b border-gray-50 last:border-0 ${
                      isActive ? 'text-miu-blue bg-miu-gold/10' : 'text-gray-800 hover:text-miu-blue hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  to="/admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-miu-blue text-white font-bold px-5 py-3 rounded text-sm text-center"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
