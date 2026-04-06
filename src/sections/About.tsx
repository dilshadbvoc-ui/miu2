import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Calendar, GraduationCap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Calendar, value: 2019, suffix: '', label: 'Year Established', description: 'Years of Excellence' },
  { icon: Award, value: 50, suffix: '+', label: 'Fellowship Programs', description: 'Fellowship Opportunities' },
  { icon: GraduationCap, value: 100, suffix: '+', label: 'Academic Programs', description: 'Diverse Programs' },
  { icon: Building2, value: 15, suffix: '+', label: 'Research Centers', description: 'Research Centers' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="font-heading font-bold text-4xl md:text-5xl text-miu-blue">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label animation
      gsap.fromTo(
        '.about-label',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Left border grow
      gsap.fromTo(
        '.about-border',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Paragraphs fade in
      gsap.fromTo(
        '.about-text',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // CTA button
      gsap.fromTo(
        '.about-cta',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      // Stats cards 3D flip
      gsap.fromTo(
        '.stat-card',
        { rotateY: -180, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%',
            onEnter: () => setCountersVisible(true),
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-miu-blue/5 to-transparent" />
      
      <div className="container-padding max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="relative">
            {/* Vertical Border */}
            <div className="about-border absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-miu-blue via-miu-gold to-miu-blue origin-top" />
            
            <div className="pl-6">
              {/* Section Label */}
              <div className="about-label inline-flex items-center gap-2 bg-miu-blue/10 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-miu-blue rounded-full" />
                <span className="text-miu-blue font-semibold text-sm uppercase tracking-wider">About MIU</span>
              </div>

              {/* Main Text */}
              <div className="space-y-6">
                <p className="about-text text-miu-navy text-lg leading-relaxed">
                  The <strong className="text-miu-blue">Manipur International University (MIU)</strong> is an Autonomous Statutory International University established, recognized, and institutionally accredited by the State Government of Manipur. The university operates under the Manipur International University Act, 2018 (Manipur Act No. 2 of 2019), which was approved by Her Excellency the Governor of Manipur on 23rd January 2019.
                </p>
                <p className="about-text text-miu-gray text-base leading-relaxed">
                  MIU is duly approved and listed by the <strong>University Grants Commission (UGC)</strong>, Ministry of Education, Government of India under section 2(f) of UGC Act, 1956 as a State Private University. The university is empowered to award degrees under section 22 of the UGC Act, 1956, ensuring that all degrees conferred by MIU hold national recognition and validity.
                </p>
              </div>

              {/* CTA */}
              <div className="about-cta mt-8">
                <Button
                  variant="outline"
                  className="group border-miu-blue text-miu-blue hover:bg-miu-blue hover:text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="stats-grid grid grid-cols-2 gap-4 md:gap-6" style={{ perspective: '1000px' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card group bg-white rounded-2xl p-4 md:p-6 shadow-miu border border-gray-100 hover:shadow-miu-lg hover:-translate-y-2 hover:border-miu-gold/30 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-miu-blue/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-miu-blue group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-miu-blue group-hover:text-white transition-colors" />
                </div>
                <span className="font-heading font-bold text-3xl md:text-5xl text-miu-blue">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={countersVisible} />
                </span>
                <p className="font-heading font-semibold text-miu-navy mt-1 md:mt-2 text-sm md:text-base">{stat.label}</p>
                <p className="text-miu-gray text-xs md:text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
