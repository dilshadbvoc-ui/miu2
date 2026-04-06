import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FlaskConical, 
  Globe, 
  Lightbulb, 
  Landmark, 
  Leaf, 
  Building2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: FlaskConical,
    title: 'Research Excellence',
    description: 'State-of-the-art research facilities and partnerships with international institutions to drive innovation and discovery.',
    color: 'bg-blue-500',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International collaborations, exchange programs, and multicultural learning environments that prepare students for global careers.',
    color: 'bg-indigo-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Entrepreneurship incubation centers, startup support programs, and technology transfer initiatives.',
    color: 'bg-amber-500',
  },
  {
    icon: Landmark,
    title: 'Cultural Heritage',
    description: 'Preservation and promotion of Manipuri culture, arts, and traditions through dedicated academic programs.',
    color: 'bg-rose-500',
  },
  {
    icon: Leaf,
    title: 'Sustainable Development',
    description: 'Green campus initiatives, environmental research, and commitment to UN Sustainable Development Goals.',
    color: 'bg-green-500',
  },
  {
    icon: Building2,
    title: 'Industry Integration',
    description: 'Strong industry partnerships, internship opportunities, skill-based training, and career-oriented programs designed to enhance employability.',
    color: 'bg-teal-500',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        '.features-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Feature cards with hexagon-like reveal
      gsap.fromTo(
        '.feature-card',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
          },
        }
      );

      // Icon bounce
      gsap.fromTo(
        '.feature-icon',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding bg-miu-navy relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-miu-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-miu-gold/10 rounded-full blur-3xl" />

      <div className="container-padding max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="features-header text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-miu-gold rounded-full" />
            <span className="text-miu-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Building Tomorrow's <span className="text-miu-gold">Leaders</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Through excellence in education, research, and innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-miu-gold/30 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Icon */}
              <div className={`feature-icon w-12 h-12 md:w-16 md:h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2 md:mb-3 group-hover:text-miu-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-miu-gold/0 to-miu-gold/0 group-hover:from-miu-gold/5 group-hover:to-miu-blue/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
