import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/gallery-1.jpg', alt: 'MIU Campus', category: 'Campus' },
  { src: '/gallery-2.jpg', alt: 'University Library', category: 'Facilities' },
  { src: '/gallery-3.jpg', alt: 'Graduation Ceremony', category: 'Events' },
  { src: '/gallery-4.jpg', alt: 'Research Lab', category: 'Research' },
  { src: '/gallery-5.jpg', alt: 'Cultural Festival', category: 'Culture' },
  { src: '/hero-students.jpg', alt: 'Student Life', category: 'Student Life' },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-label', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
      gsap.fromTo('.gallery-heading', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
      gsap.fromTo('.gallery-item', { scale: 0.85, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 82%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section id="gallery" ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gallery-label flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Spotlight</span>
        </div>
        <h2 className="gallery-heading font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-10">
          Where Dream Turns into Reality
        </h2>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className={`gallery-item group relative overflow-hidden rounded-xl cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`${i === 0 ? 'h-48 md:h-full md:min-h-[360px]' : 'h-40 md:h-48'}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-miu-gold" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/90 text-miu-navy text-xs font-semibold px-2 py-1 rounded">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          <img src={selected.src} alt={selected.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">{selected.alt} · {selected.category}</p>
        </div>
      )}
    </section>
  );
}
