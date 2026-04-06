import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

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

  return (
    <section id="gallery" className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-blue" />
          <span className="text-miu-blue font-semibold text-xs uppercase tracking-widest">Spotlight</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-10">
          Where Dream Turns into Reality
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`${i === 0 ? 'h-48 md:h-full md:min-h-[360px]' : 'h-40 md:h-48'}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-miu-blue" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 text-miu-navy text-xs font-semibold px-2 py-1 rounded">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          <img src={selected.src} alt={selected.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
