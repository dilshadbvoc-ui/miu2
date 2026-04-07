import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Sprout, Microscope, Heart, Cpu, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const schools = [
  { icon: Lightbulb, title: 'Innovation & Skill', short: 'Innovation', image: '/school-innovation.jpg', color: 'bg-amber-500', programs: '18+ Programs', description: 'Hands-on learning, project-based education, problem-solving, and real-world applications.' },
  { icon: Sprout, title: 'Agri & Allied Sciences', short: 'Agriculture', image: '/school-agri.jpg', color: 'bg-green-600', programs: '12+ Programs', description: 'Scientific knowledge with practical field training and innovative agricultural practices.' },
  { icon: Microscope, title: 'Biological Sciences', short: 'Biology', image: '/school-biology.jpg', color: 'bg-blue-600', programs: '15+ Programs', description: 'Strong foundation in theoretical knowledge with laboratory-based practical training.' },
  { icon: Heart, title: 'Human & Health Sciences', short: 'Health', image: '/school-health.jpg', color: 'bg-rose-600', programs: '20+ Programs', description: 'Holistic and interdisciplinary approach combining theoretical learning with clinical exposure.' },
  { icon: Cpu, title: 'Physical Sciences & Engineering', short: 'Engineering', image: '/school-engineering.jpg', color: 'bg-purple-600', programs: '22+ Programs', description: 'Strong theoretical foundations with hands-on laboratory work fostering technical excellence.' },
  { icon: TrendingUp, title: 'Commerce & Management', short: 'Management', image: '/school-commerce.jpg', color: 'bg-teal-600', programs: '16+ Programs', description: 'Theoretical foundations with practical exposure to business environments and internships.' },
];

const programCategories = [
  { 
    title: 'Undergraduate Programs',
    short: 'UG',
    desc: 'Build strong academic foundation with career-focused undergraduate degree programs. Our UG programs focus on developing essential skills, industry awareness, and confidence through projects and internships.'
  },
  { 
    title: 'Postgraduate Programs',
    short: 'PG',
    desc: 'Advance your knowledge and specialize in your chosen field for better career growth. Focus on advanced learning, research, and leadership preparation.'
  },
  { 
    title: 'Doctoral Programs',
    short: 'PhD',
    desc: 'Pursue research and contribute to knowledge with advanced doctoral programs. Focus on in-depth study, innovation, and original research work guided by experienced faculty.'
  },
  { 
    title: 'Diploma Programs',
    short: 'Diploma',
    desc: 'Gain practical skills quickly with short-term, job-oriented diploma courses. Industry-oriented curriculum ideal for entering the workforce quickly.'
  }
];

const programHighlights = [
  { title: 'BBA', desc: 'Marketing, Finance, HR, and Entrepreneurship with practical projects.' },
  { title: 'BCA', desc: 'Programming basics, software concepts, and digital services.' },
  { title: 'MBA', desc: 'Strategic thinking, leadership, and decision-making for management roles.' }
];

export default function Schools() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.schools-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.schools-heading', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.school-tab', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'expo.out', scrollTrigger: { trigger: '.school-tabs', start: 'top 85%' } });
      gsap.fromTo('.school-detail', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: '.school-detail', start: 'top 85%' } });
      gsap.fromTo('.category-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.categories-grid', start: 'top 85%' } });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.school-detail', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: 'expo.out' });
  }, [active]);

  return (
    <section id="schools" ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="schools-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Academic Excellence</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <h2 className="schools-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">
            Our Schools
          </h2>
          <a href="#" className="inline-flex items-center gap-1 text-miu-gold text-sm font-semibold hover:text-miu-navy transition-colors">
            View All Programs <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="school-tabs flex flex-wrap gap-2 mb-8">
          {schools.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`school-tab flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === i ? 'bg-miu-gold text-white shadow-md scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:border-miu-gold hover:text-miu-gold'}`}
            >
              <s.icon className="w-4 h-4" />
              {s.short}
            </button>
          ))}
        </div>

        <div className="school-detail grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="relative rounded-xl overflow-hidden h-56 md:h-72 shadow-md">
            <img src={schools[active].image} alt={schools[active].title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className={`absolute inset-0 ${active === 0 ? 'bg-amber-500' : active === 1 ? 'bg-green-600' : active === 2 ? 'bg-blue-600' : active === 3 ? 'bg-rose-600' : active === 4 ? 'bg-purple-600' : 'bg-teal-600'} opacity-25`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 text-miu-navy text-xs font-bold px-3 py-1 rounded-full">{schools[active].programs}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className={`w-12 h-12 rounded-xl ${active === 0 ? 'bg-amber-500' : active === 1 ? 'bg-green-600' : active === 2 ? 'bg-blue-600' : active === 3 ? 'bg-rose-600' : active === 4 ? 'bg-purple-600' : 'bg-teal-600'} flex items-center justify-center mb-4 shadow-md`}>
              {(() => { const Icon = schools[active].icon; return <Icon className="w-6 h-6 text-white" />; })()}
            </div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-miu-navy mb-3">{schools[active].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{schools[active].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {programHighlights.map((h, i) => (
                <div key={i} className="bg-miu-gold/10 text-miu-gold text-[10px] font-bold px-2.5 py-1 rounded-full border border-miu-gold/20">
                  {h.title}: {h.desc.slice(0, 20)}...
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Degree Categories */}
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programCategories.map((c, i) => (
            <div key={i} className="category-card bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <span className="inline-block text-miu-gold font-bold text-xs mb-3 bg-miu-gold/5 px-2 py-1 rounded">{c.short}</span>
              <h4 className="font-heading font-bold text-lg text-miu-navy mb-3 group-hover:text-miu-gold transition-colors">{c.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
