const leaders = [
  { name: 'Dr. Harikumar', role: 'Chancellor', image: '/leader-1.jpg' },
  { name: 'Dr. Harikumar', role: 'Vice-Chancellor', image: '/leader-2.jpg' },
  { name: 'Prof. Dr. Potsangbam Kumar Singh', role: 'Pro Vice Chancellor', image: '/leader-3.jpg' },
  { name: 'Prof. T. Brajeshwari Devi', role: 'Registrar', image: '/leader-4.jpg' },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-gold" />
          <span className="text-miu-gold font-semibold text-xs uppercase tracking-widest">Visitors & Leadership</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-10">
          Esteemed Leadership at MIU
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {leaders.map((l, i) => (
            <div key={i} className="group text-center">
              <div className="relative overflow-hidden rounded-xl mb-3 aspect-[3/4]">
                <img
                  src={l.image}
                  alt={l.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base text-miu-navy leading-tight">{l.name}</h3>
              <p className="text-miu-gold text-xs md:text-sm font-medium mt-0.5">{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
