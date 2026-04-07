import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Users, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const placementStats = [
  { icon: Building, value: 500, suffix: '+', label: 'Recruiters' },
  { icon: TrendingUp, value: 1000, suffix: '+', label: 'Placement Offers' },
  { icon: Users, value: 95, suffix: '%', label: 'Placement Rate' },
  { icon: Building, value: 50, suffix: '+', label: 'Industry Tie-Ups' },
];

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro',
  'HCL', 'Accenture', 'Deloitte', 'IBM', 'Cognizant', 'Tech Mahindra',
];

function Counter({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = 0;
    const step = Math.ceil(value / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [run, value]);
  return <span>{count}{suffix}</span>;
}

export default function Placements() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.placements-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.placements-heading', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.placement-stat', { y: 40, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.placements-stats', start: 'top 82%', onEnter: () => setRun(true) }
      });
      gsap.fromTo('.company-tag', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'expo.out',
        scrollTrigger: { trigger: '.companies-row', start: 'top 88%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="placements" ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="placements-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Placements</span>
        </div>
        <h2 className="placements-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-3">
          Top Recruiters Choose MIU Talent
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          MIU offers strong placement support with career-focused training, industry partnerships, and dedicated placement drives.
        </p>

        <div className="placements-stats grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {placementStats.map((s, i) => (
            <div key={i} className="placement-stat bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-miu-gold/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full bg-miu-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-miu-gold/20 group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-5 h-5 text-miu-gold" />
              </div>
              <p className="font-heading font-bold text-2xl md:text-3xl text-miu-gold mb-1">
                <Counter value={s.value} suffix={s.suffix} run={run} />
              </p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8">
          <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider font-medium">Our Recruiters</p>
          <div className="companies-row flex flex-wrap justify-center gap-3 md:gap-4">
            {companies.map((c, i) => (
              <div key={i} className="company-tag bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-600 text-sm font-semibold hover:border-miu-gold hover:text-miu-gold hover:bg-miu-gold/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
