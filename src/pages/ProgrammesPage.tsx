import { Award, GraduationCap, Microscope, BookOpen } from 'lucide-react';

const categories = [
  { 
    title: 'Undergraduate Programs',
    short: 'UG',
    icon: GraduationCap,
    desc: 'Build strong academic foundation with career-focused undergraduate degree programs. Our UG programs focus on developing essential skills, industry awareness, and confidence through projects and internships.'
  },
  { 
    title: 'Postgraduate Programs',
    short: 'PG',
    icon: Award,
    desc: 'Advance your knowledge and specialize in your chosen field for better career growth. Focus on advanced learning, research, and leadership preparation.'
  },
  { 
    title: 'Doctoral Programs',
    short: 'PhD',
    icon: Microscope,
    desc: 'Pursue research and contribute to knowledge with advanced doctoral programs. Focus on in-depth study, innovation, and original research work guided by experienced faculty.'
  },
  { 
    title: 'Diploma Programs',
    short: 'Diploma',
    icon: BookOpen,
    desc: 'Gain practical skills quickly with short-term, job-oriented diploma courses. Industry-oriented curriculum ideal for entering the workforce quickly.'
  }
];

const highlights = [
  { title: 'BBA Program', desc: 'The BBA program focuses on building a strong understanding of business operations, management principles, and leadership skills. Graduates can explore careers in business management, sales, marketing, and corporate roles.' },
  { title: 'BCA Program', desc: 'The BCA program helps students build strong knowledge in computer applications and IT. Practical sessions and projects improve technical skills. Graduates can work in IT companies, software development, and digital services.' },
  { title: 'MBA Program', desc: 'The MBA program is designed to develop advanced management skills and business understanding. Students learn strategic thinking, leadership, and decision-making.' }
];

export default function ProgrammesPage() {
  return (
    <div className="bg-gray-50 pb-20">
      <div className="py-16 bg-miu-gold text-miu-navy text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Academic Programmes</h1>
        <p className="font-semibold tracking-widest uppercase text-sm">International Standards, Regional Roots</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {categories.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-miu-gold/10 flex items-center justify-center mb-6">
                <c.icon className="w-8 h-8 text-miu-gold" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-miu-navy mb-4">{c.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{c.desc}</p>
              <button className="text-miu-gold font-bold hover:underline">View Curriculums →</button>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-3xl font-bold text-miu-navy mb-10 text-center">Featured Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-miu-navy p-6 rounded-2xl text-white">
              <h3 className="font-heading font-bold text-xl text-miu-gold mb-3">{h.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">{h.desc}</p>
              <a href="/admissions" className="text-xs font-bold uppercase tracking-wider text-miu-gold hover:text-white transition-colors">Apply Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
