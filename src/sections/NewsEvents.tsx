import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    title: 'Reviving Traditional Utong Ngari Production and Pearl Farming',
    excerpt: 'A heartfelt thank you to everyone who joined the Program on Reviving Traditional Utong Ngari Production. We explored sustainable aquaculture practices and their impact on local communities.',
    image: '/news-1.jpg',
    date: 'Feb 19, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    title: 'Reception of Our Champions',
    excerpt: 'A proud day for MIU! Our scholar from the Department of Yoga & Physical Education has made history by winning Gold at the National Championships.',
    image: '/news-2.jpg',
    date: 'Feb 19, 2026',
    readTime: '3 min read',
    featured: false,
  },
  {
    title: 'Patriotic Run – Veterans India',
    excerpt: 'A successful Patriotic Run by Veteran India in collaboration with Manipur International University, followed by fun-filled games with students and faculty.',
    image: '/news-3.jpg',
    date: 'Feb 19, 2026',
    readTime: '4 min read',
    featured: false,
  },
];

export default function NewsEvents() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        '.news-header',
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

      // Featured card
      gsap.fromTo(
        '.news-featured',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.news-grid',
            start: 'top 80%',
          },
        }
      );

      // Side cards
      gsap.fromTo(
        '.news-card',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.news-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredNews = newsItems.find(item => item.featured);
  const sideNews = newsItems.filter(item => !item.featured);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-miu-blue/5 to-transparent" />

      <div className="container-padding max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="news-header flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-miu-blue/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-miu-blue rounded-full" />
              <span className="text-miu-blue font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-miu-navy">
              News & <span className="text-miu-blue">Events</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-miu-blue font-semibold hover:text-miu-gold transition-colors group"
          >
            View All News
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Grid */}
        <div className="news-grid grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Featured Article */}
          {featuredNews && (
            <div className="news-featured lg:col-span-3 group">
              <div className="relative h-full min-h-[280px] md:min-h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-miu-navy via-miu-navy/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Category Badge */}
                  <span className="inline-block bg-miu-gold text-miu-navy text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Featured
                  </span>
                  
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-miu-gold transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                    {featuredNews.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredNews.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-miu-gold font-semibold hover:text-white transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Side Articles */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideNews.map((news, index) => (
              <div
                key={index}
                className="news-card group bg-white rounded-xl overflow-hidden shadow-miu hover:shadow-miu-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                  {/* Image */}
                  <div className="relative w-full sm:w-36 lg:w-full xl:w-36 h-40 sm:h-auto lg:h-40 xl:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-miu-gray text-xs mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {news.readTime}
                      </span>
                    </div>
                    
                    <h4 className="font-heading font-bold text-lg text-miu-navy mb-2 group-hover:text-miu-blue transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                    <p className="text-miu-gray text-sm line-clamp-2 mb-3">
                      {news.excerpt}
                    </p>
                    
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-miu-blue text-sm font-semibold hover:text-miu-gold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </a>
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
