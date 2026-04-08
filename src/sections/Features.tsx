import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const highlights = [
  { title: 'Research Excellence', desc: 'State-of-the-art research facilities and partnerships with international institutions.', image: '/school-biology.jpg' },
  { title: 'Global Perspective', desc: 'International collaborations, exchange programs, and multicultural learning environments.', image: '/school-engineering.jpg' },
  { title: 'Innovation Hub', desc: 'Entrepreneurship incubation centers, startup support programs, and technology transfer.', image: '/school-innovation.jpg' },
  { title: 'Cultural Heritage', desc: 'Preservation and promotion of Manipuri culture, arts, and traditions through academic programs.', image: '/gallery-3.jpg' },
  { title: 'Sustainable Development', desc: 'Green campus initiatives, environmental research, and commitment to UN SDGs.', image: '/school-agri.jpg' },
];

export default function Features() {
  const [active, setActive] = useState(0);
  useReveal('.features-reveal');

  return (
    <section id="features" className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="features-reveal reveal flex items-center gap-2 mb-1">
          <span className="text-miu-blue font-bold text-xs uppercase tracking-widest bg-miu-blue/10 px-3 py-1 rounded-full">360° Learning Ecosystem</span>
        </div>
        <h2 className="features-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 mt-2">
          Your Growth, Our Priority
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="features-reveal reveal from-left space-y-3">
            {highlights.map((h, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${active === i ? 'bg-white border-miu-blue shadow-md' : 'bg-white/60 border-gray-200 hover:border-miu-blue/40 hover:bg-white'}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-all duration-300 ${active === i ? 'bg-miu-blue scale-125' : 'bg-gray-300'}`} />
                  <div>
                    <p className={`font-semibold text-sm transition-colors ${active === i ? 'text-miu-blue' : 'text-gray-800'}`}>{h.title}</p>
                    {active === i && <p className="text-gray-500 text-xs mt-1 leading-relaxed">{h.desc}</p>}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="features-reveal reveal from-right relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96">
            {highlights.map((h, i) => (
              <img
                key={i}
                src={h.image}
                alt={h.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-heading font-bold text-lg">{highlights[active].title}</p>
            </div>
            <button onClick={() => setActive(a => (a - 1 + highlights.length) % highlights.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all hover:scale-110">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => setActive(a => (a + 1) % highlights.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all hover:scale-110">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
