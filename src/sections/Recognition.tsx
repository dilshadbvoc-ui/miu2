import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: 2019, suffix: '', label: 'Year Established' },
  { value: 100, suffix: '+', label: 'Academic Programs' },
  { value: 50, suffix: '+', label: 'Fellowship Programs' },
  { value: 15, suffix: '+', label: 'Research Centers' },
  { value: 5000, suffix: '+', label: 'Students Enrolled' },
  { value: 6, suffix: '', label: 'Schools' },
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
  return <>{count}{suffix}</>;
}

export default function Recognition() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);
  useReveal('.recog-reveal');

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRun(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-miu-navy py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="recog-reveal reveal inline-block bg-miu-gold/15 border border-miu-gold/30 text-miu-gold text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest">
            UGC Recognized &nbsp;·&nbsp; State Private University &nbsp;·&nbsp; NEP 2020 Compliant
          </span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-2">
          {stats.map((s, i) => (
            <div key={i} className={`recog-reveal reveal reveal-delay-${i + 1} text-center px-2 md:px-4 relative group cursor-default`}>
              {i > 0 && <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10" />}
              <p className="font-heading font-bold text-3xl md:text-4xl text-white mb-1 group-hover:text-miu-gold transition-colors duration-300">
                <Counter value={s.value} suffix={s.suffix} run={run} />
              </p>
              <p className="text-white/50 text-xs uppercase tracking-wider group-hover:text-white/80 transition-colors duration-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
