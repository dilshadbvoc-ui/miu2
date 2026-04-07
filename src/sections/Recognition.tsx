import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Sparkles, Microscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const recognitions = [
  {
    icon: Award,
    title: 'Academic Excellence Recognition',
    content: 'As a NAAC accredited university in Manipur, MIU is awarded for consistently delivering high-quality education that meets national benchmarks, placing it among Northeast India\'s most recognized universities.'
  },
  {
    icon: Sparkles,
    title: 'Cultural Heritage Leadership',
    content: 'MIU\'s rankings and awards include national recognition for championing the preservation and academic study of Manipur\'s indigenous languages, traditions, and cultural identity within a modern university framework.'
  },
  {
    icon: Microscope,
    title: 'Research & Regional Development',
    content: 'Honored as a leading recognized university in Northeast India for impactful research initiatives that address real challenges facing the region, driving sustainable development and community empowerment.'
  }
];

export default function Recognition() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.recognition-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 90%' } });
      gsap.fromTo('.recognition-card', { y: 30, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.recognition-grid', start: 'top 85%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-miu-navy py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="recognition-badge inline-block bg-miu-gold/20 border border-miu-gold/40 text-miu-gold text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            UGC Recognized · NAAC Accredited · NEP 2020 Compliant
          </span>
          <h2 className="text-white font-heading text-2xl md:text-3xl font-bold">Pride of the Northeast</h2>
        </div>
        
        <div className="recognition-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recognitions.map((r, i) => (
            <div key={i} className="recognition-card bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-miu-gold/10 flex items-center justify-center mb-5 group-hover:bg-miu-gold/30 group-hover:scale-110 transition-all duration-300">
                <r.icon className="w-6 h-6 text-miu-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-miu-gold transition-colors">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{r.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

