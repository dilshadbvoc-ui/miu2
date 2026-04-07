import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Recognition from './sections/Recognition';
import About from './sections/About';
import FoundingJourney from './sections/FoundingJourney';
import Symbolism from './sections/Symbolism';
import Schools from './sections/Schools';
import Placements from './sections/Placements';
import Features from './sections/Features';
import NewsEvents from './sections/NewsEvents';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();

    // Page load entrance
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });

    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Recognition />
        <About />
        <FoundingJourney />
        <Symbolism />
        <Schools />
        <Placements />
        <Features />
        <NewsEvents />
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919036983337"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{ width: 52, height: 52 }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-20 z-50 w-12 h-12 bg-miu-gold hover:bg-miu-navy text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;
