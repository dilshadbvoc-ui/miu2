import { useState } from 'react';
import { ArrowRight, Lightbulb, Sprout, Microscope, Heart, Cpu, TrendingUp } from 'lucide-react';

const schools = [
  { icon: Lightbulb, title: 'Innovation & Skill', short: 'Innovation', image: '/school-innovation.jpg', color: 'bg-amber-500', programs: '18+ Programs', description: 'Hands-on learning, project-based education, problem-solving, and real-world applications.' },
  { icon: Sprout, title: 'Agri & Allied Sciences', short: 'Agriculture', image: '/school-agri.jpg', color: 'bg-green-600', programs: '12+ Programs', description: 'Scientific knowledge with practical field training and innovative agricultural practices.' },
  { icon: Microscope, title: 'Biological Sciences', short: 'Biology', image: '/school-biology.jpg', color: 'bg-blue-600', programs: '15+ Programs', description: 'Strong foundation in theoretical knowledge with laboratory-based practical training.' },
  { icon: Heart, title: 'Human & Health Sciences', short: 'Health', image: '/school-health.jpg', color: 'bg-rose-600', programs: '20+ Programs', description: 'Holistic and interdisciplinary approach combining theoretical learning with clinical exposure.' },
  { icon: Cpu, title: 'Physical Sciences & Engineering', short: 'Engineering', image: '/school-engineering.jpg', color: 'bg-purple-600', programs: '22+ Programs', description: 'Strong theoretical foundations with hands-on laboratory work fostering technical excellence.' },
  { icon: TrendingUp, title: 'Commerce & Management', short: 'Management', image: '/school-commerce.jpg', color: 'bg-teal-600', programs: '16+ Programs', description: 'Theoretical foundations with practical exposure to business environments and internships.' },
];

export default function Schools() {
  const [active, setActive] = useState(0);

  return (
    <section id="schools" className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Academic Excellence</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">
            Our Schools
          </h2>
          <a href="#" className="inline-flex items-center gap-1 text-miu-gold text-sm font-semibold hover:text-miu-navy transition-colors">
            View All Programs <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {schools.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-miu-gold text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-miu-gold hover:text-miu-gold'
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.short}
            </button>
          ))}
        </div>

        {/* Active school detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="relative rounded-xl overflow-hidden h-56 md:h-72">
            <img src={schools[active].image} alt={schools[active].title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${schools[active].color} opacity-30`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 text-miu-navy text-xs font-bold px-3 py-1 rounded-full">{schools[active].programs}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className={`w-12 h-12 rounded-xl ${schools[active].color} flex items-center justify-center mb-4`}>
              {(() => { const Icon = schools[active].icon; return <Icon className="w-6 h-6 text-white" />; })()}
            </div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-miu-navy mb-3">{schools[active].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{schools[active].description}</p>
            <a href="#" className="inline-flex items-center gap-2 text-miu-gold font-semibold text-sm hover:text-miu-navy transition-colors">
              Explore Programs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* All schools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {schools.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative rounded-xl overflow-hidden h-28 cursor-pointer transition-all ${active === i ? 'ring-2 ring-miu-gold ring-offset-2' : ''}`}
            >
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold leading-tight">{s.short}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
