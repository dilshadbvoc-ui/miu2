import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  'Established under Manipur International University Act, 2018',
  'Recognized by UGC under Section 2(f) of UGC Act, 1956',
  'Empowered to award degrees under Section 22 of UGC Act',
  'NEP 2020 compliant curriculum across all programs',
  'International collaborations and exchange programs',
  'State-of-the-art research facilities and innovation labs',
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-label', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.about-heading', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.about-image', { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: '.about-grid', start: 'top 80%' } });
      gsap.fromTo('.about-text p', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.about-grid', start: 'top 75%' } });
      gsap.fromTo('.about-check', { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '.about-checks', start: 'top 80%' } });
      gsap.fromTo('.about-cta', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.about-cta', start: 'top 90%' } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">About MIU</span>
        </div>
        <h2 className="about-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-8 leading-tight max-w-4xl text-balance">
          Manipur International University — Rooted in Heritage, Rising with Purpose
        </h2>

        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="about-image relative h-[400px] md:h-[520px] lg:sticky lg:top-32">
            {/* Background design accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-miu-gold/20 rounded-full blur-2xl z-0" />
            
            {/* Image 1 (Back, Top Right) */}
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" 
              alt="MIU Campus Architecture" 
              className="absolute top-0 right-0 w-[85%] h-[70%] object-cover rounded-2xl shadow-lg border-4 border-white z-10" 
            />
            
            {/* Image 2 (Front, Bottom Left) */}
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
              alt="Students Learning" 
              className="absolute bottom-6 left-0 w-2/3 h-[55%] object-cover rounded-2xl shadow-xl border-4 border-white z-20 hover:scale-105 transition-transform duration-500" 
            />

            {/* Stats Badge */}
            <div className="absolute bottom-0 right-0 z-30 w-[90%] md:w-[80%]">
              <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-xl p-4 flex items-center justify-between gap-2 border border-black/5">
                {[['2019','Established'],['UGC','Recognized'],['NEP','Compliant']].map(([val, label], i) => (
                  <div key={i} className={`text-center flex-1 ${i < 2 ? 'border-r border-gray-100' : ''}`}>
                    <p className="font-heading font-bold text-xl md:text-2xl text-miu-gold">{val}</p>
                    <p className="text-[10px] md:text-xs text-miu-navy uppercase tracking-wider font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="about-text space-y-5 text-gray-600 leading-relaxed mb-8">
              <p className="font-semibold text-miu-navy">
                Manipur International University (MIU) stands at a unique crossroads — where the ancient civilization of Northeast India meets the ambitions of a rapidly changing world.
              </p>
              <p>
                Nestled in the land of Sangai, Loktak, and the graceful movements of Manipuri classical dance, MIU is an institution that carries its geography in its identity. We do not simply exist in Manipur — we are shaped by it, inspired by it, and committed to elevating it.
              </p>
              <p>
                Founded on the belief that quality higher education in Manipur should not require students to leave their homeland, MIU brings world-class academics, research, and professional preparation to the heart of Northeast India. Our programs are designed not just for careers, but for lives of meaning — equipping students with skills, values, and the critical awareness needed to lead in an interconnected world.
              </p>
              <p>
                As a university and gateway to Southeast Asia, MIU occupies a strategic academic position that no other institution in this region holds. Our location is not incidental — it is intentional. Manipur is India's bridge to Southeast Asia, and MIU is the intellectual bridge that prepares students to walk across it.
              </p>
              <p className="text-sm italic">
                Whether you are searching for the best college in Imphal or a university in Manipur that combines international standards with deep regional roots, MIU offers a transformative experience unlike any other. MIU admissions 2025 are open — begin your story here.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="about-check flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-miu-gold flex-shrink-0 mt-0.5" />
                  <span className="text-miu-navy font-medium text-xs leading-tight">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#schools"
              onClick={e => { e.preventDefault(); document.querySelector('#schools')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="about-cta inline-flex items-center gap-2 bg-miu-gold text-miu-navy font-bold px-8 py-4 rounded hover:bg-miu-navy hover:text-white transition-all duration-300 text-sm shadow-miu shadow-miu-gold/20"
            >
              Explore Schools <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
