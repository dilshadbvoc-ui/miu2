import About from '../sections/About';
import FoundingJourney from '../sections/FoundingJourney';
import Symbolism from '../sections/Symbolism';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="py-12 bg-miu-navy text-white text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">About MIU</h1>
        <p className="text-miu-gold font-medium tracking-widest uppercase text-sm">Rooted in Heritage, Rising with Purpose</p>
      </div>
      <About />
      <FoundingJourney />
      <Symbolism />
    </div>
  );
}
