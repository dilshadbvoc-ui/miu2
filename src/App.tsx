import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Rankings from './sections/Rankings';
import About from './sections/About';
import Schools from './sections/Schools';
import Placements from './sections/Placements';
import Features from './sections/Features';
import Leadership from './sections/Leadership';
import Gallery from './sections/Gallery';
import NewsEvents from './sections/NewsEvents';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Rankings />
        <About />
        <Schools />
        <Placements />
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
