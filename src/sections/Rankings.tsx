import { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap, BookOpen, Building2, Users, FlaskConical } from 'lucide-react';

const stats = [
  { icon: Award, value: 2019, suffix: '', label: 'Est. Year' },
  { icon: GraduationCap, value: 100, suffix: '+', label: 'Programs' },
  { icon: BookOpen, value: 50, suffix: '+', label: 'Fellowships' },
  { icon: Building2, value: 15, suffix: '+', label: 'Research Centers' },
  { icon: Users, value: 5000, suffix: '+', label: 'Students' },
  { icon: FlaskConical, value: 6, suffix: '', label: 'Schools' },
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

export default function Rankings() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-miu-navy py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UGC badge row */}
        <div className="text-center mb-6">
          <span className="inline-block bg-miu-gold/20 border border-miu-gold/40 text-miu-gold text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            UGC Recognized · State Private University · NEP 2020 Compliant
          </span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-miu-gold/20 transition-colors">
                <s.icon className="w-5 h-5 text-miu-gold" />
              </div>
              <div className="font-heading font-bold text-2xl md:text-3xl text-white">
                <Counter value={s.value} suffix={s.suffix} run={run} />
              </div>
              <p className="text-white/60 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
