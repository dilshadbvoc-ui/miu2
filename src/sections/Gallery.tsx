import { useState } from 'react';
import { X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const images = [
  { src: '/gallery-1.jpg', alt: 'MIU Campus', category: 'Campus' },
  { src: '/gallery-2.jpg', alt: 'University Library', category: 'Facilities' },
  { src: '/gallery-3.jpg', alt: 'Graduation Ceremony', category: 'Events' },
  { src: '/gallery-4.jpg', alt: 'Research Lab', category: 'Research' },
  { src: '/gallery-5.jpg', alt: 'Cultural Festival', category: 'Culture' },
  { src: '/hero-students.jpg', alt: 'Student Life', category: 'Student Life' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);
  useReveal('.gallery-reveal');

  return (
    <section id="gallery" className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gallery-reveal reveal flex items-center gap-2 mb-1">
          <span className="text-miu-blue font-bold text-xs uppercase tracking-widest bg-miu-blue/10 px-3 py-1 rounded-full">Spotlight</span>
        </div>
        <h2 className="gallery-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 mt-2">
          Where Dream Turns into Reality
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className={`gallery-reveal reveal scale-up reveal-delay-${i + 1} group relative overflow-hidden rounded-xl cursor-pointer ${i === 0 ? 'row-span-2 md:col-span-1' : ''}`}
            >
              <div className={i === 0 ? 'h-full min-h-[280px] md:min-h-[400px]' : 'h-40 md:h-48'}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="bg-miu-gold text-miu-navy text-xs font-bold px-3 py-1 rounded-full shadow">{img.category}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <span className="text-white text-xl font-light leading-none">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          <img src={selected.src} alt={selected.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">{selected.alt}</p>
        </div>
      )}
    </section>
  );
}
