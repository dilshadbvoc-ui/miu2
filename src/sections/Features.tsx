import { FlaskConical, Globe, Lightbulb, Landmark, Leaf, Building2 } from 'lucide-react';

const features = [
  { icon: FlaskConical, title: 'Research Excellence', description: 'State-of-the-art research facilities and partnerships with international institutions.', color: 'text-blue-600 bg-blue-50' },
  { icon: Globe, title: 'Global Perspective', description: 'International collaborations, exchange programs, and multicultural learning environments.', color: 'text-indigo-600 bg-indigo-50' },
  { icon: Lightbulb, title: 'Innovation Hub', description: 'Entrepreneurship incubation centers, startup support, and technology transfer initiatives.', color: 'text-amber-600 bg-amber-50' },
  { icon: Landmark, title: 'Cultural Heritage', description: 'Preservation and promotion of Manipuri culture, arts, and traditions through academic programs.', color: 'text-rose-600 bg-rose-50' },
  { icon: Leaf, title: 'Sustainable Development', description: 'Green campus initiatives, environmental research, and commitment to UN SDGs.', color: 'text-green-600 bg-green-50' },
  { icon: Building2, title: 'Industry Integration', description: 'Strong industry partnerships, internship opportunities, and career-oriented programs.', color: 'text-teal-600 bg-teal-50' },
];

export default function Features() {
  return (
    <section id="features" className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-blue" />
          <span className="text-miu-blue font-semibold text-xs uppercase tracking-widest">Why Choose MIU</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy">
            United in Vision. Unmatched in Excellence
          </h2>
          <p className="text-gray-500 text-sm max-w-xs sm:text-right">Through excellence in education, research, and innovation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-miu-blue/20 transition-all group">
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-miu-navy mb-2 group-hover:text-miu-blue transition-colors">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
