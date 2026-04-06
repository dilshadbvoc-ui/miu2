import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building, Star } from 'lucide-react';

const placementStats = [
  { icon: Building, value: 200, suffix: '+', label: 'Recruiters Hired MIU Students' },
  { icon: TrendingUp, value: 500, suffix: '+', label: 'Placement Offers' },
  { icon: Users, value: 95, suffix: '%', label: 'Placement Rate' },
  { icon: Star, value: 8, suffix: 'LPA', label: 'Avg. Package (Top 25%)' },
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
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="placements" ref={ref} className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Placements</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-3">
          Top Recruiters Choose MIU Talent
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          MIU offers strong placement support with career-focused training, industry partnerships, and dedicated placement drives.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {placementStats.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-miu-gold/30 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-miu-gold/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-miu-gold" />
              </div>
              <p className="font-heading font-bold text-2xl md:text-3xl text-miu-gold mb-1">
                <Counter value={s.value} suffix={s.suffix} run={run} />
              </p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Company logos (text-based since we don't have actual logos) */}
        <div className="border-t border-gray-100 pt-8">
          <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-wider font-medium">Our Recruiters</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {companies.map((c, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-600 text-sm font-semibold hover:border-miu-gold hover:text-miu-gold transition-colors">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
