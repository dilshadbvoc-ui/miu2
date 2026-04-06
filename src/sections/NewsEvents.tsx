import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const news = [
  {
    title: 'Reviving Traditional Utong Ngari Production and Pearl Farming',
    excerpt: 'A heartfelt thank you to everyone who joined the Program on Reviving Traditional Utong Ngari Production. We explored sustainable aquaculture practices.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    date: 'Feb 19, 2026',
    tag: 'Research',
    featured: true,
  },
  {
    title: 'Reception of Our Champions',
    excerpt: 'Our scholar from the Department of Yoga & Physical Education has made history by winning Gold at the National Championships.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop',
    date: 'Feb 19, 2026',
    tag: 'Sports',
    featured: false,
  },
  {
    title: 'Patriotic Run – Veterans India',
    excerpt: 'A successful Patriotic Run by Veteran India in collaboration with Manipur International University.',
    image: 'https://images.unsplash.com/photo-1552674605-171ffbbc840f?q=80&w=2069&auto=format&fit=crop',
    date: 'Feb 19, 2026',
    tag: 'Events',
    featured: false,
  },
];

export default function NewsEvents() {
  const ref = useRef<HTMLElement>(null);
  const featured = news.find(n => n.featured)!;
  const rest = news.filter(n => !n.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.news-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.news-heading', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.news-featured', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: '.news-grid', start: 'top 82%' } });
      gsap.fromTo('.news-side', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.news-grid', start: 'top 80%' } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="news" ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="news-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Latest Updates</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <h2 className="news-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">
            News & Events
          </h2>
          <a href="#" className="inline-flex items-center gap-1 text-miu-gold text-sm font-semibold hover:text-miu-navy transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="news-grid grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="news-featured lg:col-span-3 group relative rounded-xl overflow-hidden cursor-pointer">
            <div className="relative h-64 md:h-80">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
              <div className="absolute inset-0 bg-gradient-to-t from-miu-navy via-miu-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-miu-gold text-miu-navy text-xs font-bold px-2 py-0.5 rounded mb-2">{featured.tag}</span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2 group-hover:text-miu-gold transition-colors">{featured.title}</h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-3">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((n, i) => (
              <div key={i} className="news-side group flex gap-4 bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-miu-gold/30 hover:-translate-y-0.5">
                <div className="w-28 flex-shrink-0 overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="inline-block bg-miu-gold/10 text-miu-gold text-xs font-semibold px-2 py-0.5 rounded mb-1.5 w-fit">{n.tag}</span>
                  <h4 className="font-heading font-bold text-sm text-miu-navy mb-1 group-hover:text-miu-gold transition-colors line-clamp-2">{n.title}</h4>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-auto">
                    <Calendar className="w-3 h-3" /> {n.date}
                  </div>
                </div>
              </div>
            ))}

            <div className="news-side bg-miu-gold rounded-xl p-5 flex flex-col justify-between">
              <p className="text-miu-navy font-heading font-bold text-lg mb-2">Ready to Join MIU?</p>
              <p className="text-miu-navy/70 text-sm mb-4">Applications open for 2026-27 session.</p>
              <a
                href="#admissions"
                onClick={e => { e.preventDefault(); document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-miu-navy text-white font-bold px-4 py-2.5 rounded text-sm hover:bg-miu-blue transition-colors w-fit"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
