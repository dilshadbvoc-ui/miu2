import { Music, TreeDeciduous, Users, Landmark } from 'lucide-react';

const activities = [
  { icon: Music, title: 'Cultural Performance', desc: 'Preserving and performing Manipuri classical dance and local music tradition.' },
  { icon: TreeDeciduous, title: 'Sangai Spirit', desc: 'Eco-conscious campus initiatives inspired by the rare Sangai deer.' },
  { icon: Users, title: 'Student Clubs', desc: 'Over 20+ active student organizations for multi-faceted growth.' },
  { icon: Landmark, title: 'Heritage Field Trips', desc: 'Exploring Kangla Fort and Loktak Lake as living classrooms.' }
];

export default function CampusLifePage() {
  return (
    <div className="bg-white pb-20">
      <div className="py-20 bg-miu-navy text-white text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Campus Life</h1>
        <p className="text-miu-gold font-medium tracking-widest uppercase text-sm">Where Heritage Meets Ambition</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-miu-navy mb-6">A Thriving Community</h2>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Life at MIU is not confined to the walls of a classroom. Our students are shaped by the culture and traditions of Manipur, creating an environment that is both intellectually stimulating and spiritually grounded.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activities.map((a, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-miu-navy/5 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-miu-navy" />
                </div>
                <h4 className="font-bold text-miu-navy mb-2">{a.title}</h4>
                <p className="text-gray-500 text-xs">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
