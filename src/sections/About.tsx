import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Established under Manipur International University Act, 2018',
  'Recognized by UGC under Section 2(f) of UGC Act, 1956',
  'Empowered to award degrees under Section 22 of UGC Act',
  'NEP 2020 compliant curriculum across all programs',
  'International collaborations and exchange programs',
  'State-of-the-art research facilities and innovation labs',
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-miu-blue" />
          <span className="text-miu-blue font-semibold text-xs uppercase tracking-widest">About MIU</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-miu-navy mb-10">
          Rising Beyond Standards
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-miu-lg">
            <img src="/hero-students.jpg" alt="MIU Campus" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
                <div className="text-center border-r border-gray-200 pr-4">
                  <p className="font-heading font-bold text-2xl text-miu-blue">2019</p>
                  <p className="text-xs text-gray-500">Established</p>
                </div>
                <div className="text-center border-r border-gray-200 pr-4">
                  <p className="font-heading font-bold text-2xl text-miu-blue">UGC</p>
                  <p className="text-xs text-gray-500">Recognized</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-miu-blue">NEP</p>
                  <p className="text-xs text-gray-500">2020 Compliant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Manipur International University (MIU) is an Autonomous Statutory International University established and recognized by the State Government of Manipur under the Manipur International University Act, 2018 (Manipur Act No. 2 of 2019), approved by the Governor of Manipur on 23rd January 2019.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              MIU is duly approved and listed by the University Grants Commission (UGC), Ministry of Education, Government of India under section 2(f) of UGC Act, 1956 as a State Private University, empowered to award nationally recognized degrees.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-miu-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <a
              href="#schools"
              onClick={e => { e.preventDefault(); document.querySelector('#schools')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-miu-blue text-white font-semibold px-6 py-3 rounded hover:bg-miu-navy transition-colors text-sm"
            >
              Explore Schools <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
