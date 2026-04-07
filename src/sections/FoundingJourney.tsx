import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flag, Map, GraduationCap, TrendingUp, Landmark } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    icon: Flag,
    title: 'A Vision for the Northeast',
    content: 'The idea for MIU came from a simple but urgent question: why should talented young people from Manipur have to leave to access quality education? Educators and community leaders united around Northeast India\'s education history of neglect — and decided to change it. That conviction became the foundation on which Manipur International University was established.',
    year: 'Vision'
  },
  {
    icon: Map,
    title: 'Breaking Ground',
    content: 'With official recognition secured, MIU moved from vision to reality. The campus was designed as a symbol — that a university in Manipur could be built to command national and international respect, standing proudly as part of the history of higher education in Northeast India.',
    year: 'Founding'
  },
  {
    icon: GraduationCap,
    title: 'First Students, First Steps',
    content: 'The first batch arrived carrying the hopes of a region. They came from across Manipur and neighbouring states — searching for the best college in Imphal and finding something greater: a community, a mission, and a university in Northeast India that believed in them.',
    year: 'Arrival'
  },
  {
    icon: TrendingUp,
    title: 'Growing and Expanding',
    content: 'New schools opened. Research centres took shape. MIU\'s ranking and awards grew as partnerships with national and international institutions extended reach far beyond Manipur. Students graduated and built careers across industries — proving that this recognised university in Northeast India had always been the right bet.',
    year: 'Growth'
  },
  {
    icon: Landmark,
    title: 'MIU Today',
    content: 'Today, Manipur International University is a name that carries weight — in Imphal, across Northeast India, and beyond. Thousands of alumni. Dozens of programs. And MIU admissions 2025 continuing to welcome the next generation of students who dare to dream big from the Northeast.',
    year: 'Today'
  }
];

export default function FoundingJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 }, 
        { 
          scaleY: 1, 
          duration: 1.5, 
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 90%',
            scrub: 1
          }
        }
      );

      // Animate timeline cards
      gsap.utils.toArray('.timeline-item').forEach((item: any, i) => {
        gsap.fromTo(item, 
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%'
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="history" ref={containerRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-miu-gold" />
            <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest text-center">Our Evolution</span>
            <span className="w-8 h-0.5 bg-miu-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-miu-navy mb-6">Founding Journey</h2>
          <p className="text-gray-600 leading-relaxed">
            Manipur has always been a land of extraordinary stories. MIU is one such story — and understanding the history and founding of Manipur International University is to understand the ambition of an entire region.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-miu-gold/20 origin-top hidden md:block" 
          />

          <div className="space-y-12 md:space-y-0">
            {timelineSteps.map((step, i) => (
              <div key={i} className={`timeline-item relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:mb-16`}>
                {/* Desktop Year/Label on one side */}
                <div className="hidden md:block w-1/2 px-12 text-right">
                  {i % 2 === 0 ? (
                    <div className="text-left">
                      <span className="text-miu-gold font-bold text-lg uppercase tracking-widest">{step.year}</span>
                    </div>
                  ) : (
                    <div className="text-right">
                      <span className="text-miu-gold font-bold text-lg uppercase tracking-widest">{step.year}</span>
                    </div>
                  )}
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10 hidden md:flex w-10 h-10 rounded-full bg-white border-4 border-miu-gold items-center justify-center shadow-lg">
                  <step.icon className="w-4 h-4 text-miu-gold" />
                </div>

                {/* Card */}
                <div className="w-full md:w-1/2 px-0 md:px-12">
                  <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-miu-gold flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-miu-gold font-bold text-sm tracking-widest uppercase">{step.year}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-miu-navy mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
                    
                    {/* Decorative mobile triangle */}
                    <div className={`hidden md:block absolute top-8 ${i % 2 === 0 ? '-left-2' : '-right-2'} w-4 h-4 bg-gray-50 border-l border-b border-gray-100 rotate-45`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
