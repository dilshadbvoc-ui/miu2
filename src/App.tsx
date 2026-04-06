import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Schools from './sections/Schools';
import Features from './sections/Features';
import Leadership from './sections/Leadership';
import Gallery from './sections/Gallery';
import NewsEvents from './sections/NewsEvents';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger on load
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Schools />
        <Features />
        <Leadership />
        <Gallery />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
}

export default App;
