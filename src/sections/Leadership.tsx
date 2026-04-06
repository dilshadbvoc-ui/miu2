import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  { name: 'Dr. Harikumar', role: 'Chancellor', image: '/leader-1.jpg' },
  { name: 'Dr. Harikumar', role: 'Vice-Chancellor', image: '/leader-2.jpg' },
  { name: 'Prof. Dr. Potsangbam Kumar Singh', role: 'Pro Vice Chancellor', image: '/leader-3.jpg' },
  { name: 'Prof. T. Brajeshwari Devi', role: 'Registrar', image: '/leader-4.jpg' },
];

export default function Leadership() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.leadership-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.leadership-heading', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.leader-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'expo.out',
        scrollTrigger: { trigger: '.leaders-grid', start: 'top 82%' }
      });
      gsap.fromTo('.leader-name', { y: 15, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.12, delay: 0.3, ease: 'power2.out',
        scrollTrigger: { trigger: '.leaders-grid', start: 'top 80%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="leadership" ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="leadership-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Visitors & Leadership</span>
        </div>
        <h2 className="leadership-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-10">
          Esteemed Leadership at MIU
        </h2>

        <div className="leaders-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {leaders.map((l, i) => (
            <div key={i} className="leader-card group text-center">
              <div className="relative overflow-hidden rounded-xl mb-3 aspect-[3/4]">
                <img src={l.image} alt={l.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" style={{ '--tw-scale-x': '1.08', '--tw-scale-y': '1.08' } as React.CSSProperties} />
                <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="inline-block bg-miu-gold text-miu-navy text-xs font-bold px-2 py-0.5 rounded">{l.role}</span>
                </div>
              </div>
              <div className="leader-name">
                <h3 className="font-heading font-bold text-sm md:text-base text-miu-navy leading-tight">{l.name}</h3>
                <p className="text-miu-gold text-xs md:text-sm font-medium mt-0.5">{l.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
