import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    title: 'Reviving Traditional Utong Ngari Production and Pearl Farming',
    excerpt: 'A heartfelt thank you to everyone who joined the Program on Reviving Traditional Utong Ngari Production. We explored sustainable aquaculture practices.',
    image: '/news-1.jpg',
    date: 'Feb 19, 2026',
    tag: 'Research',
    featured: true,
  },
  {
    title: 'Reception of Our Champions',
    excerpt: 'Our scholar from the Department of Yoga & Physical Education has made history by winning Gold at the National Championships.',
    image: '/news-2.jpg',
    date: 'Feb 19, 2026',
    tag: 'Sports',
    featured: false,
  },
  {
    title: 'Patriotic Run – Veterans India',
    excerpt: 'A successful Patriotic Run by Veteran India in collaboration with Manipur International University.',
    image: '/news-3.jpg',
    date: 'Feb 19, 2026',
    tag: 'Events',
    featured: false,
  },
];

export default function NewsEvents() {
  const featured = news.find(n => n.featured)!;
  const rest = news.filter(n => !n.featured);

  return (
    <section id="news" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Latest Updates</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">
            News & Events
          </h2>
          <a href="#" className="inline-flex items-center gap-1 text-miu-gold text-sm font-semibold hover:text-miu-navy transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured */}
          <div className="lg:col-span-3 group relative rounded-xl overflow-hidden cursor-pointer">
            <div className="relative h-64 md:h-80">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-miu-navy via-miu-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="inline-block bg-miu-gold text-miu-navy text-xs font-bold px-2 py-0.5 rounded mb-2">{featured.tag}</span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2 group-hover:text-miu-gold transition-colors">{featured.title}</h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-3">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </div>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((n, i) => (
              <div key={i} className="group flex gap-4 bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
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

            {/* CTA card */}
            <div className="bg-miu-gold rounded-xl p-5 flex flex-col justify-between">
              <p className="text-white font-heading font-bold text-lg mb-3">Ready to Join MIU?</p>
              <p className="text-white/70 text-sm mb-4">Applications open for 2026-27 session.</p>
              <a
                href="#admissions"
                onClick={e => { e.preventDefault(); document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-miu-gold text-miu-navy font-bold px-4 py-2.5 rounded text-sm hover:bg-yellow-400 transition-colors w-fit"
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
