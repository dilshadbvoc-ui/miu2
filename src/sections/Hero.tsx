import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const slides = [
  {
    image: '/hero-students.jpg',
    tag: 'Admissions Open 2026-27',
    title: 'Shape Your Future at Manipur International University',
    subtitle: 'UGC Recognized | NEP 2020 Compliant | International University',
    cta: 'Apply Now',
    ctaHref: '/admissions',
  },
  {
    image: '/school-engineering.jpg',
    tag: 'Academic Excellence',
    title: 'World-Class Education Across 6 Schools',
    subtitle: '100+ Programs | Research-Driven | Industry-Integrated',
    cta: 'Explore Programs',
    ctaHref: '/programmes',
  },
  {
    image: '/school-biology.jpg',
    tag: 'Research & Innovation',
    title: 'Pioneering Research for a Better Tomorrow',
    subtitle: '15+ Research Centers | International Collaborations',
    cta: 'Learn More',
    ctaHref: '/research',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const imgRef = useRef<HTMLImageElement[]>([]);

  const goTo = (idx: number) => { setCurrent(idx); setAnimKey(k => k + 1); };
  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current]);

  // Ken Burns effect on active image
  useEffect(() => {
    const img = imgRef.current[current];
    if (!img) return;
    gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 6, ease: 'power1.out' });
  }, [current]);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-miu-navy" style={{ height: 'min(620px, 58vw)', minHeight: 340 }}
      onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img
            ref={el => { if (el) imgRef.current[i] = el; }}
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

          {i === current && (
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
                <div className="max-w-2xl" key={animKey}>
                  <span className="inline-block bg-miu-gold text-miu-navy text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider" style={{ animation: 'heroFadeUp 0.5s ease forwards' }}>
                    {slide.tag}
                  </span>
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-4" style={{ animation: 'heroFadeUp 0.6s 0.1s ease both' }}>
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8" style={{ animation: 'heroFadeUp 0.6s 0.2s ease both' }}>
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3" style={{ animation: 'heroFadeUp 0.6s 0.3s ease both' }}>
                    <Link to={slide.ctaHref} className="bg-miu-gold text-miu-navy font-bold px-7 py-3 rounded text-sm hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg">
                      {slide.cta}
                    </Link>
                    <a href="https://wa.me/919036983337" target="_blank" rel="noopener noreferrer" className="border-2 border-white/70 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white hover:text-miu-navy transition-colors">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button onClick={prev} className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/20 hover:bg-white/50 rounded-full flex items-center justify-center text-white transition-all hover:scale-110">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/20 hover:bg-white/50 rounded-full flex items-center justify-center text-white transition-all hover:scale-110">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-miu-gold w-7' : 'bg-white/40 w-2 hover:bg-white/70'}`} />
        ))}
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
