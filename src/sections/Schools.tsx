import { useState } from 'react';
import { ArrowRight, Lightbulb, Sprout, Microscope, Heart, Cpu, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const schools = [
  { icon: Lightbulb, title: 'Innovation & Skill', short: 'Innovation', image: '/school-innovation.jpg', color: 'bg-miu-gold', programs: '18+ Programs', description: 'Hands-on learning, project-based education, problem-solving, and real-world applications.' },
  { icon: Sprout, title: 'Agri & Allied Sciences', short: 'Agriculture', image: '/school-agri.jpg', color: 'bg-miu-blue', programs: '12+ Programs', description: 'Scientific knowledge with practical field training and innovative agricultural practices.' },
  { icon: Microscope, title: 'Biological Sciences', short: 'Biology', image: '/school-biology.jpg', color: 'bg-miu-navy', programs: '15+ Programs', description: 'Strong foundation in theoretical knowledge with laboratory-based practical training.' },
  { icon: Heart, title: 'Human & Health Sciences', short: 'Health', image: '/school-health.jpg', color: 'bg-miu-gold', programs: '20+ Programs', description: 'Holistic and interdisciplinary approach combining theoretical learning with clinical exposure.' },
  { icon: Cpu, title: 'Physical Sciences & Engineering', short: 'Engineering', image: '/school-engineering.jpg', color: 'bg-miu-blue', programs: '22+ Programs', description: 'Strong theoretical foundations with hands-on laboratory work fostering technical excellence.' },
  { icon: TrendingUp, title: 'Commerce & Management', short: 'Management', image: '/school-commerce.jpg', color: 'bg-miu-navy', programs: '16+ Programs', description: 'Theoretical foundations with practical exposure to business environments and internships.' },
];

const programCategories = [
  { title: 'Undergraduate Programs', short: 'UG', desc: 'Build strong academic foundation with career-focused undergraduate degree programs.' },
  { title: 'Postgraduate Programs', short: 'PG', desc: 'Advance your knowledge and specialize in your chosen field for better career growth.' },
  { title: 'Doctoral Programs', short: 'PhD', desc: 'Pursue research and contribute to knowledge with advanced doctoral programs.' },
  { title: 'Diploma Programs', short: 'Diploma', desc: 'Gain practical skills quickly with short-term, job-oriented diploma courses.' },
];

export default function Schools() {
  const [active, setActive] = useState(0);
  useReveal('.schools-reveal');

  return (
    <section id="schools" className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="schools-reveal reveal flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Academic Excellence</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <h2 className="schools-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">Our Schools</h2>
          <a href="#" className="schools-reveal reveal reveal-delay-2 inline-flex items-center gap-1 text-miu-gold text-sm font-semibold hover:text-miu-navy transition-colors">
            View All Programs <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {schools.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`schools-reveal reveal reveal-delay-${i + 1} flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === i ? 'bg-miu-gold text-white shadow-md scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:border-miu-gold hover:text-miu-gold hover:scale-105'}`}
            >
              <s.icon className="w-4 h-4" />
              {s.short}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="schools-reveal reveal from-left relative rounded-xl overflow-hidden h-56 md:h-72 shadow-md">
            <img src={schools[active].image} alt={schools[active].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className={`absolute inset-0 ${schools[active].color} opacity-25`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 text-miu-navy text-xs font-bold px-3 py-1 rounded-full">{schools[active].programs}</span>
            </div>
          </div>
          <div className="schools-reveal reveal from-right flex flex-col justify-center">
            <div className={`w-12 h-12 rounded-xl ${schools[active].color} flex items-center justify-center mb-4 shadow-md`}>
              {(() => { const Icon = schools[active].icon; return <Icon className="w-6 h-6 text-white" />; })()}
            </div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-miu-navy mb-3">{schools[active].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{schools[active].description}</p>
            <a href="#" className="inline-flex items-center gap-2 text-miu-gold font-semibold text-sm hover:text-miu-navy transition-colors group">
              Explore Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programCategories.map((c, i) => (
            <div key={i} className={`schools-reveal reveal scale-up reveal-delay-${i + 1} bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
              <span className="inline-block text-miu-gold font-bold text-xs mb-3 bg-miu-gold/10 px-2 py-1 rounded">{c.short}</span>
              <h4 className="font-heading font-bold text-lg text-miu-navy mb-3 group-hover:text-miu-gold transition-colors">{c.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
