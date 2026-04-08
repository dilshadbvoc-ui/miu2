import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const highlights = [
  'Established under Manipur International University Act, 2018',
  'Recognized by UGC under Section 2(f) of UGC Act, 1956',
  'Empowered to award degrees under Section 22 of UGC Act',
  'NEP 2020 compliant curriculum across all programs',
  'International collaborations and exchange programs',
  'State-of-the-art research facilities and innovation labs',
];

export default function About() {
  useReveal('.about-reveal');

  return (
    <section id="about" className="py-14 md:py-20 bg-white overflow-hidden relative">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-miu-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-miu-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="about-reveal reveal flex items-center gap-2 mb-1">
          <span className="text-miu-blue font-bold text-xs uppercase tracking-widest bg-miu-blue/10 px-3 py-1 rounded-full">About MIU</span>
        </div>
        <h2 className="about-reveal reveal reveal-delay-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 mt-2">
          Rising Beyond Standards
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="about-reveal reveal from-left relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/hero-students.jpg" alt="MIU Campus" className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white rounded-xl p-4 flex items-center justify-around shadow-lg">
                {[['2019', 'Established'], ['UGC', 'Recognized'], ['NEP', '2020 Compliant']].map(([val, label], i) => (
                  <div key={i} className={`text-center ${i < 2 ? 'border-r border-gray-200 pr-4 mr-4' : ''}`}>
                    <p className="font-heading font-bold text-xl text-miu-blue">{val}</p>
                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
              <p className="about-reveal reveal reveal-delay-1">
                <strong className="text-gray-900">Manipur International University (MIU)</strong> is an Autonomous Statutory International University established and recognized by the State Government of Manipur under the Manipur International University Act, 2018, approved by the Governor of Manipur on 23rd January 2019.
              </p>
              <p className="about-reveal reveal reveal-delay-2">
                MIU is duly approved and listed by the <strong className="text-gray-900">University Grants Commission (UGC)</strong>, Ministry of Education, Government of India under section 2(f) of UGC Act, 1956 as a State Private University, empowered to award nationally recognized degrees.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className={`about-reveal reveal reveal-delay-${Math.min(i + 1, 6)} flex items-start gap-2`}>
                  <CheckCircle2 className="w-4 h-4 text-miu-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="about-reveal reveal reveal-delay-3 inline-flex items-center gap-2 bg-miu-blue text-white font-bold px-6 py-3 rounded text-sm hover:bg-miu-navy hover:scale-105 transition-all duration-300 shadow-md"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
