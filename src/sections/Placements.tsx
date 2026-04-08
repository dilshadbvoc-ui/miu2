import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: 200, suffix: '+', label: 'Recruiters', sub: 'hired MIU students' },
  { value: 500, suffix: '+', label: 'Offers', sub: 'placement offers' },
  { value: 95, suffix: '%', label: 'Placement Rate', sub: 'of eligible students' },
  { value: 8, suffix: 'LPA', label: 'Avg Package', sub: 'top 25% placed students' },
];

const companies = ['Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro', 'HCL', 'Accenture', 'Deloitte', 'IBM', 'Cognizant', 'Tech Mahindra'];

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
  return <>{count}{suffix}</>;
}

export default function Placements() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);
  useReveal('.place-reveal');

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRun(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="placements" ref={ref} className="py-14 md:py-20 bg-miu-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="place-reveal reveal flex items-center gap-2 mb-1">
          <span className="text-miu-gold font-bold text-xs uppercase tracking-widest bg-miu-gold/10 border border-miu-gold/20 px-3 py-1 rounded-full">Placements</span>
        </div>
        <h2 className="place-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 mt-2">
          Explore the Top Global Recruiters
        </h2>
        <p className="place-reveal reveal reveal-delay-2 text-white/60 mb-10 max-w-2xl text-sm md:text-base">
          MIU offers strong placement support with career-focused training, industry partnerships, and dedicated placement drives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className={`place-reveal reveal scale-up reveal-delay-${i + 1} text-center py-6 px-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-miu-gold/40 hover:-translate-y-1 transition-all duration-300`}>
              <p className="font-heading font-bold text-3xl md:text-4xl text-white mb-1">
                <Counter value={s.value} suffix={s.suffix} run={run} />
              </p>
              <p className="text-miu-gold text-xs font-semibold uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-white/40 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Infinite marquee */}
        <div className="border-t border-white/10 pt-8 overflow-hidden">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold text-center mb-6">Our Recruiters</p>
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((c, i) => (
              <div key={i} className="inline-block bg-white/10 border border-white/10 rounded-lg px-5 py-2.5 text-white/70 text-sm font-semibold hover:bg-miu-gold/20 hover:text-miu-gold transition-all cursor-default flex-shrink-0">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
