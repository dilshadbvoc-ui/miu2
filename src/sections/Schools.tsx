import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Sprout, Microscope, Heart, Cpu, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const schools = [
  {
    icon: Lightbulb,
    title: 'Innovation and Skill',
    description: 'The curriculum emphasizes hands-on learning, project-based education, problem-solving, and real-world applications.',
    image: '/school-innovation.jpg',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Sprout,
    title: 'Agri And Allied Sciences',
    description: 'Our programs integrate scientific knowledge with practical field training, enabling students to understand innovative agricultural practices.',
    image: '/school-agri.jpg',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Microscope,
    title: 'Biological Sciences',
    description: 'The curriculum emphasizes a strong foundation in theoretical knowledge along with laboratory-based practical training, research projects.',
    image: '/school-biology.jpg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Human And Health Sciences',
    description: 'The curriculum emphasizes a holistic and interdisciplinary approach, combining theoretical learning with clinical exposure.',
    image: '/school-health.jpg',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Physical Sciences and Engineering',
    description: 'The curriculum blends strong theoretical foundations with hands-on laboratory work, fostering innovation and technical excellence.',
    image: '/school-engineering.jpg',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Commerce And Management Sciences',
    description: 'Our curriculum combines strong theoretical foundations with practical exposure to business environments, case studies, and internships.',
    image: '/school-commerce.jpg',
    color: 'from-teal-500 to-blue-500',
  },
];

export default function Schools() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(
        '.schools-header',
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

      // Cards staggered reveal
      gsap.fromTo(
        '.school-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="schools"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-miu-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-miu-gold/5 rounded-full blur-3xl" />

      <div className="container-padding max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="schools-header text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-miu-blue/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-miu-blue rounded-full" />
            <span className="text-miu-blue font-semibold text-sm uppercase tracking-wider">Academic Excellence</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-miu-navy mb-4">
            Our <span className="text-miu-blue">Schools</span>
          </h2>
          <p className="text-miu-gray text-base md:text-lg max-w-2xl mx-auto">
            Excellence in education across diverse disciplines, fostering innovation and research
          </p>
        </div>

        {/* Schools Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {schools.map((school, index) => (
            <div
              key={index}
              className="school-card group relative bg-white rounded-2xl overflow-hidden shadow-miu hover:shadow-miu-lg transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={school.image}
                  alt={school.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${school.color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <school.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-miu-navy mb-3 group-hover:text-miu-blue transition-colors">
                  {school.title}
                </h3>
                <p className="text-miu-gray text-sm leading-relaxed mb-4">
                  {school.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-miu-blue font-semibold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${school.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
