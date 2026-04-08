import { Calendar, FileCheck, CreditCard, ClipboardCheck } from 'lucide-react';

const steps = [
  { icon: FileCheck, title: 'Step 1: Application', desc: 'Fill out the online application form with personal and academic details.' },
  { icon: ClipboardCheck, title: 'Step 2: Verification', desc: 'Our admissions team will verify your eligibility and documents.' },
  { icon: Calendar, title: 'Step 3: Counseling', desc: 'Participate in the counseling session to choose your preferred program.' },
  { icon: CreditCard, title: 'Step 4: Enrollment', desc: 'Pay the admission fee and complete the enrollment process.' }
];

export default function AdmissionsPage() {
  return (
    <div className="bg-white pb-20">
      <div className="py-20 bg-miu-navy text-white text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Admissions 2026-27</h1>
        <p className="text-miu-gold font-medium tracking-widest uppercase text-sm">Join the Elite Community</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-miu-navy mb-6">Start Your Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Manipur International University, we look for students who are not only academically qualified but also carry a passion for growth and heritage. Our admissions process is transparent, efficient, and designed to help you find the right path.
            </p>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-miu-gold/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-miu-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-miu-navy text-lg">{s.title}</h4>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-miu">
            <h3 className="font-heading font-bold text-2xl text-miu-navy mb-6 text-center">Enquiry Form</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold" />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold">
                <option>Select School</option>
                <option>Innovation & Skill</option>
                <option>Agriculture</option>
                <option>Biology</option>
              </select>
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold"></textarea>
              <button className="w-full bg-miu-navy text-white font-bold py-4 rounded-lg hover:bg-black transition-colors shadow-lg">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
