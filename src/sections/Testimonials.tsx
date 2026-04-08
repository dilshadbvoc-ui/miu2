import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Priya Sharma',
    program: 'MBA, 2024',
    quote: 'MIU gave me the perfect blend of academic rigor and practical exposure. The faculty are incredibly supportive and the placement support helped me land my dream job.',
    avatar: '/leader-4.jpg',
  },
  {
    name: 'Rahul Konthoujam',
    program: 'B.Tech Engineering, 2023',
    quote: 'Being from Manipur, I wanted to study close to home without compromising on quality. MIU exceeded my expectations — world-class labs, great faculty, and a vibrant campus.',
    avatar: '/leader-3.jpg',
  },
  {
    name: 'Sunita Devi',
    program: 'M.Sc Biological Sciences, 2024',
    quote: 'The research facilities at MIU are outstanding. I published two papers during my postgraduate program, which opened doors I never imagined possible.',
    avatar: '/leader-2.jpg',
  },
  {
    name: 'Arun Singh',
    program: 'BCA, 2023',
    quote: 'The industry connections MIU has built are remarkable. I got placed in a top IT company through campus recruitment. The career guidance team was always there for us.',
    avatar: '/leader-1.jpg',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  useReveal('.testi-reveal');

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section className="py-14 md:py-20 bg-miu-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testi-reveal reveal text-center mb-10">
          <span className="inline-block bg-miu-gold/15 border border-miu-gold/30 text-miu-gold text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            What Our Students Say
          </h2>
        </div>

        <div className="testi-reveal reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Quote */}
          <div className="relative">
            <Quote className="w-12 h-12 text-miu-gold/30 mb-4" />
            <p className="text-white/80 text-lg leading-relaxed mb-8 min-h-[120px]">
              "{testimonials[active].quote}"
            </p>
            <div className="flex items-center gap-4">
              <img src={testimonials[active].avatar} alt={testimonials[active].name} className="w-14 h-14 rounded-full object-cover border-2 border-miu-gold" />
              <div>
                <p className="text-white font-heading font-bold">{testimonials[active].name}</p>
                <p className="text-miu-gold text-sm">{testimonials[active].program}</p>
              </div>
            </div>
            {/* Nav */}
            <div className="flex items-center gap-3 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-miu-gold hover:border-miu-gold transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-miu-gold hover:border-miu-gold transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-white/40 text-sm ml-2">{active + 1} / {testimonials.length}</span>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 ${i === active ? 'bg-miu-gold/20 border-miu-gold' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.program}</p>
                  </div>
                </div>
                <p className="text-white/60 text-xs line-clamp-2">"{t.quote}"</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
