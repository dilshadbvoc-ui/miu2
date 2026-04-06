import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Alumni', href: '#alumni' },
  { name: 'Anti Ragging', href: '#anti-ragging' },
  { name: 'Awards', href: '#awards' },
  { name: "Chancellor's Message", href: '#chancellor-message' },
];

const resources = [
  { name: 'Academic Calendar', href: '#calendar' },
  { name: 'Academic Collaborations', href: '#collaborations' },
  { name: 'Academic Council', href: '#council' },
  { name: 'Academic Leadership', href: '#leadership' },
  { name: 'Academic Programmes', href: '#programmes' },
  { name: 'Committee for Internal Complaint', href: '#complaint' },
];

const schools = [
  { name: 'School of Science', href: '#science' },
  { name: 'School of Education', href: '#education' },
  { name: 'School of Pharmacy', href: '#pharmacy' },
  { name: 'School of Management', href: '#management' },
  { name: 'School of Humanities', href: '#humanities' },
  { name: 'School of Engineering', href: '#engineering' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA bar
      gsap.fromTo(
        '.footer-cta',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );

      // Footer columns
      gsap.fromTo(
        '.footer-col',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.footer-content',
            start: 'top 90%',
          },
        }
      );

      // Social icons
      gsap.fromTo(
        '.social-icon',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.social-links',
            start: 'top 95%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-miu-navy relative overflow-hidden"
    >
      {/* CTA Bar */}
      <div className="footer-cta bg-gradient-to-r from-miu-blue to-miu-blue-light py-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
            backgroundSize: '200% 200%',
            animation: 'shimmer 3s infinite',
          }} />
        </div>
        
        <div className="container-padding max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl md:text-3xl font-bold text-white mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Apply now for the 2026-27 academic session and transform your future.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={() => scrollToSection('#admissions')}
                className="bg-miu-gold hover:bg-miu-gold-light text-miu-navy font-bold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="mailto:admissions@miu.edu.in"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://wa.me/919036983337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content container-padding max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* About Column */}
          <div className="footer-col col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-lg px-2 py-1">
              <img
                src="/miu-logo.png"
                alt="Manipur International University"
                className="h-9 w-auto"
              />
            </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              MIU is an autonomous private university, committed to providing world-class education and fostering research excellence. UGC recognized and NEP 2020 compliant institution dedicated to academic innovation.
            </p>
            
            {/* Social Links */}
            <div className="social-links flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-miu-gold hover:scale-110 hover:rotate-6 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-heading font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 text-sm hover:text-miu-gold hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4 className="font-heading font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-miu-gold hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div className="footer-col">
            <h4 className="font-heading font-bold text-white mb-6">Schools</h4>
            <ul className="space-y-3">
              {schools.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-miu-gold hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-miu-blue/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-miu-gold" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Address</h5>
                <p className="text-white/70 text-sm">
                  Manipur International University<br />
                  Imphal, Manipur, India - 795001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-miu-blue/30 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-miu-gold" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Email</h5>
                <a href="mailto:info@miu.edu.in" className="text-white/70 text-sm hover:text-miu-gold transition-colors block">
                  info@miu.edu.in
                </a>
                <a href="mailto:admissions@miu.edu.in" className="text-white/70 text-sm hover:text-miu-gold transition-colors block">
                  admissions@miu.edu.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-miu-blue/30 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-miu-gold" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Phone</h5>
                <a href="tel:+919036983337" className="text-white/70 text-sm hover:text-miu-gold transition-colors block">
                  +91 903 698 3337
                </a>
                <a href="tel:+918899788788" className="text-white/70 text-sm hover:text-miu-gold transition-colors block">
                  +91 889 978 8788
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding max-w-7xl mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Manipur International University. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-miu-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-miu-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-miu-gold transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </footer>
  );
}
