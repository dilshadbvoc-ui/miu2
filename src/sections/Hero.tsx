import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/hero-students.jpg',
    tag: 'Admissions Open 2026-27',
    title: 'Shape Your Future at Manipur International University',
    subtitle: 'UGC Recognized | NEP 2020 Compliant | International University',
    cta: 'Apply Now',
    ctaHref: '#admissions',
  },
  {
    image: '/school-engineering.jpg',
    tag: 'Academic Excellence',
    title: 'World-Class Education Across 6 Schools',
    subtitle: '100+ Programs | Research-Driven | Industry-Integrated',
    cta: 'Explore Programs',
    ctaHref: '#programmes',
  },
  {
    image: '/school-biology.jpg',
    tag: 'Research & Innovation',
    title: 'Pioneering Research for a Better Tomorrow',
    subtitle: '15+ Research Centers | International Collaborations',
    cta: 'Learn More',
    ctaHref: '#research',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent(c => (c + 1) % slides.length);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-[60vw] min-h-[320px] max-h-[620px] overflow-hidden bg-miu-navy">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-miu-navy/90 via-miu-navy/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
              <div className="max-w-xl">
                <span className="inline-block bg-miu-gold text-miu-navy text-xs font-bold px-3 py-1 rounded mb-3 uppercase tracking-wider">
                  {slide.tag}
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-sm sm:text-base mb-6">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollTo(slide.ctaHref)}
                    className="bg-miu-gold text-miu-navy font-bold px-6 py-3 rounded text-sm hover:opacity-90 transition-opacity"
                  >
                    {slide.cta}
                  </button>
                  <a
                    href="https://wa.me/919036983337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white hover:text-miu-navy transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-miu-gold w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
