import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../components/Logo';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Programmes', href: '#programmes' },
  { name: 'Schools', href: '#schools' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Research', href: '#research' },
  { name: 'Campus Life', href: '#campus' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-miu-navy text-white text-xs sm:text-sm py-2 px-4 text-center">
        <span className="text-miu-gold font-semibold">Admissions Open 2026-27</span>
        <span className="mx-2 text-white/50">|</span>
        <a href="tel:+919036983337" className="hover:text-miu-gold transition-colors inline-flex items-center gap-1">
          <Phone className="w-3 h-3" /> +91 903 698 3337
        </a>
        <span className="mx-2 text-white/50 hidden sm:inline">|</span>
        <a href="#admissions" className="hidden sm:inline text-miu-gold underline hover:no-underline" onClick={e => { e.preventDefault(); scrollToSection('#admissions'); }}>Apply Now →</a>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-miu-gold shadow-md' : 'bg-miu-gold shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" onClick={e => { e.preventDefault(); scrollToSection('#home'); }} className="flex-shrink-0">
              <Logo />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                  className="px-3 py-2 text-sm font-bold text-miu-navy hover:text-black transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-miu-navy group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#admissions"
                onClick={e => { e.preventDefault(); scrollToSection('#admissions'); }}
                className="bg-miu-navy text-white font-bold px-5 py-2.5 rounded text-sm hover:bg-black transition-colors"
              >
                Apply Now
              </a>
              <a
                href="https://wa.me/919036983337"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-miu-navy text-miu-navy font-bold px-5 py-2.5 rounded text-sm hover:bg-miu-navy hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-miu-gold border-t border-miu-navy/10 shadow-lg">
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                  className="px-4 py-3 text-miu-navy font-bold rounded hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="#admissions"
                  onClick={e => { e.preventDefault(); scrollToSection('#admissions'); }}
                  className="bg-miu-navy text-white font-bold px-5 py-3 rounded text-center"
                >
                  Apply Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
