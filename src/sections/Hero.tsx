import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MessageCircle, BookOpen, Users, Briefcase, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const valueProps = [
  {
    icon: BookOpen,
    title: 'Smart Curriculum',
    description: 'Contemporary course structures built to support academic excellence and relevance.',
  },
  {
    icon: Users,
    title: 'Practical Exposure',
    description: 'Hands-on training and real-world learning experiences that strengthen applied knowledge.',
  },
  {
    icon: Briefcase,
    title: 'Career Focused Programs',
    description: 'Programs thoughtfully structured to enhance employability and support long-term professional growth.',
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background image Ken Burns effect
      gsap.fromTo(
        '.hero-bg-image',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out' }
      );

      // Gradient overlay fade in
      gsap.fromTo(
        '.hero-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );

      // Top banner slide in
      gsap.fromTo(
        '.hero-banner',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: 'expo.out' }
      );

      // Headline reveal with split text effect
      gsap.fromTo(
        '.hero-headline span',
        { y: 100, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        { 
          y: 0, 
          opacity: 1, 
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.7, 
          stagger: 0.15, 
          delay: 0.7, 
          ease: 'expo.out' 
        }
      );

      // Value cards 3D flip
      gsap.fromTo(
        '.value-card',
        { rotateY: -90, opacity: 0 },
        { 
          rotateY: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          delay: 1.2, 
          ease: 'back.out(1.7)' 
        }
      );

      // CTA buttons
      gsap.fromTo(
        '.hero-cta',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 1.8, ease: 'elastic.out(1, 0.5)' }
      );

      // Scroll indicator
      gsap.fromTo(
        '.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, delay: 2.2, ease: 'power2.out' }
      );

      // Scroll-triggered parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set('.hero-bg-image', {
            y: progress * -50,
            scale: 1 + progress * 0.05,
          });
          gsap.set('.hero-content', {
            y: progress * -80,
            opacity: 1 - progress * 1.5,
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <img
          src="/hero-students.jpg"
          alt="MIU Students"
          className="hero-bg-image w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-miu-navy/90 via-miu-navy/70 to-miu-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/80 via-transparent to-miu-navy/30" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-miu-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-miu-gold/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="hero-content relative z-10 min-h-screen flex flex-col justify-center container-padding max-w-7xl mx-auto pt-20 pb-16 md:pt-24 md:pb-12"
      >
        {/* Top Banner */}
        <div className="hero-banner inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-8">
          <Phone className="w-4 h-4 text-miu-gold" />
          <span className="text-white/80 text-sm">For Admission Enquiry:</span>
          <a href="tel:+919036983337" className="text-white font-semibold text-sm hover:text-miu-gold transition-colors">
            +91 903 698 3337
          </a>
        </div>

        {/* Main Headline */}
        <div className="hero-headline mb-6 md:mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="inline-block">Admissions</span>{' '}
            <span className="inline-block text-miu-gold">Open</span>
          </h1>
          <p className="font-heading text-xl sm:text-2xl md:text-4xl text-white/90 mt-3 md:mt-4">
            For Session <span className="text-miu-gold font-semibold">2026-27</span>
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-4xl mb-8 md:mb-10">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="value-card group bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/10 hover:bg-white/20 hover:border-miu-gold/30 transition-all duration-300 hover:-translate-y-2 flex sm:flex-col gap-3 sm:gap-0"
              style={{ perspective: '1000px' }}
            >
              <prop.icon className="w-7 h-7 sm:w-8 sm:h-8 text-miu-gold sm:mb-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-heading font-semibold text-white text-base sm:text-lg sm:mb-2">{prop.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed hidden sm:block">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-wrap items-center gap-3 md:gap-4">
          <Button
            onClick={() => scrollToSection('#admissions')}
            className="bg-miu-gold hover:bg-miu-gold-light text-miu-navy font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:shadow-miu-lg hover:-translate-y-1 animate-pulse-glow"
          >
            Apply Now
          </Button>
          <a
            href="mailto:admissions@miu.edu.in"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm md:text-base">Email Us</span>
          </a>
          <a
            href="https://wa.me/919036983337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm md:text-base">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/60 text-sm">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-miu-gold animate-bounce-subtle" />
      </div>
    </section>
  );
}
