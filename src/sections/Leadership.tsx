import { useReveal } from '../hooks/useReveal';

const leaders = [
  { name: 'Dr. Harikumar', role: 'Chancellor', image: '/leader-1.jpg' },
  { name: 'Dr. Harikumar', role: 'Vice-Chancellor', image: '/leader-2.jpg' },
  { name: 'Prof. Dr. Potsangbam Kumar Singh', role: 'Pro Vice Chancellor', image: '/leader-3.jpg' },
  { name: 'Prof. T. Brajeshwari Devi', role: 'Registrar', image: '/leader-4.jpg' },
];

export default function Leadership() {
  useReveal('.leader-reveal');

  return (
    <section id="leadership" className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="leader-reveal reveal flex items-center gap-2 mb-1">
          <span className="text-miu-blue font-bold text-xs uppercase tracking-widest bg-miu-blue/10 px-3 py-1 rounded-full">Visitors & Leadership</span>
        </div>
        <h2 className="leader-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 mt-2">
          Esteemed Leadership at MIU
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {leaders.map((l, i) => (
            <div key={i} className={`leader-reveal reveal scale-up reveal-delay-${i + 1} group text-center`}>
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] shadow-md">
                <img src={l.image} alt={l.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {/* Overlay slides up */}
                <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/90 via-miu-navy/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                {/* Role badge */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="bg-miu-gold text-miu-navy text-xs font-bold px-3 py-1 rounded-full">{l.role}</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base text-gray-900 leading-tight group-hover:text-miu-blue transition-colors duration-300">{l.name}</h3>
              <p className="text-miu-blue text-xs md:text-sm font-semibold mt-1">{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
