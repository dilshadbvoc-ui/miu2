import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: 'Dr. Harikumar',
    role: 'Chancellor',
    image: '/leader-1.jpg',
    bio: 'Leading academic visionary with decades of experience in higher education.',
  },
  {
    name: 'Dr. Harikumar',
    role: 'Vice-Chancellor',
    image: '/leader-2.jpg',
    bio: 'Dedicated to academic excellence and institutional growth.',
  },
  {
    name: 'Prof. Dr. Potsangbam Kumar Singh',
    role: 'Pro Vice Chancellor',
    image: '/leader-3.jpg',
    bio: 'Expert in educational administration and research development.',
  },
  {
    name: 'Prof. T. Brajeshwari Devi',
    role: 'Registrar',
    image: '/leader-4.jpg',
    bio: 'Committed to student welfare and academic operations.',
  },
];

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        '.leadership-header',
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

      // Leader cards staggered rise
      gsap.fromTo(
        '.leader-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.leaders-grid',
            start: 'top 80%',
          },
        }
      );

      // Nameplates slide up
      gsap.fromTo(
        '.leader-nameplate',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.leaders-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-miu-blue/5 to-transparent" />

      <div className="container-padding max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="leadership-header text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-miu-blue/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-miu-blue rounded-full" />
            <span className="text-miu-blue font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-miu-navy mb-4">
            Guiding <span className="text-miu-blue">Excellence</span>
          </h2>
          <p className="text-miu-gray text-base md:text-lg max-w-2xl mx-auto">
            Visionary leaders dedicated to shaping the future of education
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="leaders-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="leader-card group relative"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-80 overflow-hidden rounded-2xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/90 via-miu-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                  <div className="leader-nameplate">
                    <h3 className="font-heading font-bold text-sm md:text-xl text-white mb-0.5 md:mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-miu-gold font-medium text-xs md:text-sm md:mb-3">
                      {leader.role}
                    </p>
                    <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      {leader.bio}
                    </p>
                    <a
                      href="#"
                      className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-miu-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Nameplate (visible on hover, desktop only) */}
              <div className="hidden md:block absolute -bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-miu opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                <p className="text-miu-navy font-semibold text-center">{leader.name}</p>
                <p className="text-miu-blue text-sm text-center">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
