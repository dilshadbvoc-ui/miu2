import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const news = [
  { title: 'Reviving Traditional Utong Ngari Production and Pearl Farming', excerpt: 'We explored sustainable aquaculture practices and their impact on local communities.', image: '/news-1.jpg', date: 'Feb 19, 2026', tag: 'Research', featured: true },
  { title: 'Reception of Our Champions', excerpt: 'Our scholar from the Department of Yoga & Physical Education won Gold at the National Championships.', image: '/news-2.jpg', date: 'Feb 19, 2026', tag: 'Sports', featured: false },
  { title: 'Patriotic Run – Veterans India', excerpt: 'A successful Patriotic Run by Veteran India in collaboration with Manipur International University.', image: '/news-3.jpg', date: 'Feb 19, 2026', tag: 'Events', featured: false },
];

export default function NewsEvents() {
  const featured = news.find(n => n.featured)!;
  const rest = news.filter(n => !n.featured);
  useReveal('.news-reveal');

  return (
    <section id="news" className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="news-reveal reveal flex items-center gap-2 mb-1">
          <span className="text-miu-blue font-bold text-xs uppercase tracking-widest bg-miu-blue/10 px-3 py-1 rounded-full">Latest Updates</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 mt-2 gap-3">
          <h2 className="news-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">News & Events</h2>
          <a href="#" className="news-reveal reveal reveal-delay-2 inline-flex items-center gap-1 text-miu-blue text-sm font-semibold hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="news-reveal reveal from-left lg:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <div className="relative h-64 md:h-[360px]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="inline-block bg-miu-blue text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{featured.tag}</span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2 group-hover:text-miu-gold transition-colors leading-snug">{featured.title}</h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-3">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((n, i) => (
              <div key={i} className={`news-reveal reveal from-right reveal-delay-${i + 1} group flex bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-miu-blue/20`}>
                <div className="w-28 sm:w-32 flex-shrink-0 overflow-hidden">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="inline-block bg-miu-blue/10 text-miu-blue text-xs font-semibold px-2 py-0.5 rounded-full mb-2 w-fit">{n.tag}</span>
                  <h4 className="font-heading font-bold text-sm text-gray-900 mb-1 group-hover:text-miu-blue transition-colors line-clamp-2 leading-snug">{n.title}</h4>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-auto">
                    <Calendar className="w-3 h-3" /> {n.date}
                  </div>
                </div>
              </div>
            ))}

            <div className="news-reveal reveal from-right reveal-delay-3 bg-miu-blue rounded-xl p-5">
              <p className="text-white font-heading font-bold text-lg mb-1">Ready to Join MIU?</p>
              <p className="text-white/70 text-sm mb-4">Applications open for 2026-27 session.</p>
              <Link to="/admissions" className="inline-flex items-center gap-2 bg-miu-gold text-miu-navy font-bold px-5 py-2.5 rounded text-sm hover:bg-yellow-400 hover:scale-105 transition-all">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
