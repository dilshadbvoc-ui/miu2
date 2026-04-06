import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/gallery-1.jpg', alt: 'MIU Campus', category: 'Campus' },
  { src: '/gallery-2.jpg', alt: 'University Library', category: 'Facilities' },
  { src: '/gallery-3.jpg', alt: 'Graduation Ceremony', category: 'Events' },
  { src: '/gallery-4.jpg', alt: 'Research Lab', category: 'Research' },
  { src: '/gallery-5.jpg', alt: 'Cultural Festival', category: 'Culture' },
  { src: '/hero-students.jpg', alt: 'Student Life', category: 'Student Life' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        '.gallery-header',
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

      // Gallery items masonry reveal
      gsap.fromTo(
        '.gallery-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      <div className="container-padding max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="gallery-header text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-miu-blue/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-miu-blue rounded-full" />
            <span className="text-miu-blue font-semibold text-sm uppercase tracking-wider">Campus Life</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-miu-navy mb-4">
            Image <span className="text-miu-blue">Gallery</span>
          </h2>
          <p className="text-miu-gray text-base md:text-lg max-w-2xl mx-auto">
            Glimpses of life at MIU - where learning meets inspiration
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`relative ${index === 0 || index === 3 ? 'h-48 md:h-full md:min-h-[400px]' : 'h-40 md:h-64'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-miu-blue/0 group-hover:bg-miu-blue/40 transition-colors duration-300" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-miu-blue" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-miu-navy text-xs font-semibold px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-heading text-xl">{selectedImage.alt}</p>
            <p className="text-white/60 text-sm">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}
