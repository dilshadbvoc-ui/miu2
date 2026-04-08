import Schools from '../sections/Schools';

export default function SchoolsPage() {
  return (
    <div className="bg-white pb-20">
      <div className="py-16 bg-miu-navy text-white text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Schools</h1>
        <p className="text-miu-gold font-medium tracking-widest uppercase text-sm">6 Specialized Pillars of Excellence</p>
      </div>
      <Schools />
    </div>
  );
}
