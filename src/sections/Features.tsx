import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlaskConical, Globe, Lightbulb, Landmark, Leaf, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: FlaskConical, title: 'Research Excellence', description: 'State-of-the-art research facilities and partnerships with international institutions.', color: 'text-blue-600 bg-blue-50' },
  { icon: Globe, title: 'Global Perspective', description: 'International collaborations, exchange programs, and multicultural learning environments.', color: 'text-indigo-600 bg-indigo-50' },
  { icon: Lightbulb, title: 'Innovation Hub', description: 'Entrepreneurship incubation centers, startup support, and technology transfer initiatives.', color: 'text-amber-600 bg-amber-50' },
  { icon: Landmark, title: 'Cultural Heritage', description: 'Preservation and promotion of Manipuri culture, arts, and traditions through academic programs.', color: 'text-rose-600 bg-rose-50' },
  { icon: Leaf, title: 'Sustainable Development', description: 'Green campus initiatives, environmental research, and commitment to UN SDGs.', color: 'text-green-600 bg-green-50' },
  { icon: Building2, title: 'Industry Integration', description: 'Strong industry partnerships, internship opportunities, and career-oriented programs.', color: 'text-teal-600 bg-teal-50' },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.features-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.features-heading', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.feature-card', { y: 50, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.features-grid', start: 'top 82%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={ref as React.RefObject<HTMLElement>} className="relative py-14 md:py-20 bg-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-miu-gold/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-miu-navy/5 rounded-full blur-3xl z-0" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%233D2B1F\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="features-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Why Choose MIU</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <h2 className="features-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">
            United in Vision. Unmatched in Excellence
          </h2>
          <p className="text-gray-500 text-sm max-w-xs sm:text-right">Through excellence in education, research, and innovation</p>
        </div>

        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="feature-card bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-miu-gold/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-miu-navy mb-2 group-hover:text-miu-gold transition-colors">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
