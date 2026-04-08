import { Microscope, Globe, Lightbulb, TrendingUp } from 'lucide-react';

const researchAreas = [
  { icon: Microscope, title: 'Biological Sciences', desc: 'Focusing on regional biodiversity and sustainable clinical research.' },
  { icon: Globe, title: 'International Relations', desc: 'Gateway studies for Southeast Asian academic and economic integration.' },
  { icon: Lightbulb, title: 'Innovation & Skill', desc: 'Hands-on technological research and real-world problem solving.' },
  { icon: TrendingUp, title: 'Regional Development', desc: 'Impactful research initiatives driving community empowerment.' }
];

export default function ResearchPage() {
  return (
    <div className="bg-white pb-20">
      <div className="py-20 bg-miu-navy text-white text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Research at MIU</h1>
        <p className="text-miu-gold font-medium tracking-widest uppercase text-sm">Pioneering Knowledge for a Better Tomorrow</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-miu-navy mb-6">Strategic Academic Position</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Manipur is India's bridge to Southeast Asia, and MIU is the intellectual bridge that prepares students to walk across it. Our research is not just about theory; it is about addressing real challenges facing the region and the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-miu-gold transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-miu-gold/10 flex items-center justify-center mb-6">
                <area.icon className="w-6 h-6 text-miu-gold" />
              </div>
              <h4 className="font-heading font-bold text-lg text-miu-navy mb-3">{area.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
