import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  { q: 'Is MIU recognized by UGC?', a: 'Yes. MIU is listed by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956 as a State Private University and is empowered to award degrees under Section 22.' },
  { q: 'What programs are available for admission in 2026-27?', a: 'MIU offers 100+ programs across 6 schools — including UG, PG, PhD, and Diploma programs in Engineering, Biological Sciences, Commerce, Health Sciences, Agriculture, and Innovation & Skill.' },
  { q: 'How do I apply for admission?', a: 'You can apply online through our admissions portal. Fill out the application form, upload required documents, and complete the enrollment fee payment. Our team will guide you through the process.' },
  { q: 'What is the fee structure?', a: 'Fee structures vary by program. Contact our admissions office at admissions@miu.edu.in or call +91 903 698 3337 for detailed fee information and scholarship opportunities.' },
  { q: 'Does MIU offer scholarships?', a: 'Yes. MIU offers merit-based and need-based scholarships, as well as 50+ fellowship programs. Contact the admissions office for eligibility criteria and application details.' },
  { q: 'What is the placement record of MIU?', a: 'MIU has a strong placement record with 200+ recruiters, 500+ placement offers, and a 95% placement rate. Top recruiters include Google, Microsoft, Amazon, Infosys, TCS, and more.' },
  { q: 'Is the campus residential?', a: 'Yes. MIU has hostel facilities for both male and female students. The campus is located in Imphal, Manipur, with all essential amenities within the campus.' },
  { q: 'Does MIU have international collaborations?', a: 'Yes. MIU has 50+ international tie-ups and exchange programs with universities across Southeast Asia and beyond, reflecting its position as a gateway university for the region.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  useReveal('.faq-reveal');

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="faq-reveal reveal text-center mb-10">
          <span className="inline-block text-miu-blue font-bold text-xs uppercase tracking-widest bg-miu-blue/10 px-3 py-1 rounded-full mb-3">FAQ</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-3 text-sm">Everything you need to know about MIU admissions and campus life.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-reveal reveal reveal-delay-${Math.min(i + 1, 6)} border rounded-xl overflow-hidden transition-all duration-300 ${open === i ? 'border-miu-gold shadow-md' : 'border-gray-200 hover:border-miu-gold/40'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-heading font-semibold text-sm md:text-base transition-colors ${open === i ? 'text-miu-blue' : 'text-gray-900'}`}>{faq.q}</span>
                <span className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open === i ? 'bg-miu-gold text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
