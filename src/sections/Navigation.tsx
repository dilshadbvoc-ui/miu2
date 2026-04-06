import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Schools', href: '#schools' },
  { name: 'Programmes', href: '#programmes' },
  { name: 'Academics', href: '#academics' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Student Life', href: '#student-life' },
  { name: 'Research', href: '#research' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.nav-logo',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'expo.out' }
    );

    gsap.fromTo(
      '.nav-link',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'expo.out', delay: 0.1 }
    );

    gsap.fromTo(
      '.nav-cta',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)', delay: 0.6 }
    );
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="nav-logo flex items-center gap-3 group"
            >
              <div className={`rounded-lg px-2 py-1 transition-all duration-300 ${isScrolled ? '' : 'bg-white/90 backdrop-blur-sm'}`}>
              <img
                src="/miu-logo.png"
                alt="Manipur International University"
                className="h-9 w-auto"
              />
            </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`nav-link relative px-3 py-2 text-sm font-medium transition-colors group ${
                    isScrolled
                      ? 'text-miu-navy hover:text-miu-blue'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-miu-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="nav-cta hidden lg:flex items-center gap-3">
              <a
                href="tel:+919036983337"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-miu-navy' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 903 698 3337</span>
              </a>
              <Button
                onClick={() => scrollToSection('#admissions')}
                className="bg-miu-gold hover:bg-miu-gold-light text-miu-navy font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-miu hover:-translate-y-0.5"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-miu-navy' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-miu-lg p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-3 text-miu-navy font-medium rounded-lg hover:bg-miu-blue/5 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <a
              href="tel:+919036983337"
              className="flex items-center gap-2 text-miu-navy mb-4"
            >
              <Phone className="w-5 h-5 text-miu-blue" />
              <span>+91 903 698 3337</span>
            </a>
            <Button
              onClick={() => scrollToSection('#admissions')}
              className="w-full bg-miu-gold hover:bg-miu-gold-light text-miu-navy font-semibold py-3 rounded-full"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
