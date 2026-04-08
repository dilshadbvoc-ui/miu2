import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Sparkles, Languages, CircleDot, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const culturalSymbols = [
  {
    title: 'Lai Haraoba',
    content: 'Manipur\'s most sacred festival, a living reenactment of creation. At MIU, this spirit of sacred performance informs our approach to learning.',
    image: '/assets/images/about-heritage.png'
  },
  {
    title: 'The Sangai',
    content: 'The endangered dancing deer, a symbol of rare beauty and resilience. The Sangai reminds us that heritage requires care and protection.',
    image: '/school-biology.jpg'
  },
  {
    title: 'Loktak Lake',
    content: 'The largest fresh water lake in Northeast India. MIU draws from this: an institution that runs deep and nourishes its community.',
    image: '/news-1.jpg'
  },
  {
    title: 'Manipuri Dance',
    content: 'A language of devotion and extraordinary grace. At MIU, this art is honoured as a living intellectual practice.',
    image: '/gallery-5.jpg'
  },
  {
    title: 'Kangla Fort',
    content: 'The spiritual heartbeat of Meitei civilization. It represents sovereignty and identity, pride we inherit in every program.',
    image: '/assets/images/hero-campus.png'
  },
  {
    title: 'Thang-Ta',
    content: 'Ancient martial art, a philosophy of focused strength. It represents the qualities MIU develops through academic rigor.',
    image: '/school-innovation.jpg'
  }
];

const elephantValues = [
  { title: 'Wisdom', content: 'The wisdom of ages carried in every lesson taught.' },
  { title: 'Strength', content: 'True power comes from knowledge, character, and conviction.' },
  { title: 'Beginnings', content: 'A sacred send-off into a life of achievement.' },
  { title: 'Protection', content: 'Guarding your academic growth and right to world-class education.' },
  { title: 'Legacy', content: 'Carrying the future of every Northeast Indian student.' }
];

export default function Symbolism() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('logo');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.symbol-reveal', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="symbolism" ref={sectionRef} className="py-20 bg-miu-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="symbol-reveal inline-flex items-center gap-2 mb-4 bg-miu-gold/10 px-4 py-1.5 rounded-full border border-miu-gold/20">
            <Sparkles className="w-4 h-4 text-miu-gold" />
            <span className="text-miu-gold font-bold text-xs uppercase tracking-widest">Identity & Heritage</span>
          </div>
          <h2 className="symbol-reveal font-heading text-4xl md:text-5xl font-bold text-miu-navy mb-6">
            The Sacred Symbolism of Our Logo
          </h2>
          <div className="symbol-reveal flex flex-wrap justify-center gap-4 mb-10">
            {['logo', 'cultural', 'elephants'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-miu-navy text-white shadow-lg' : 'bg-white text-miu-navy hover:bg-gray-100'}`}
              >
                {tab === 'logo' ? 'Logo Meaning' : tab === 'cultural' ? 'Cultural Symbols' : 'Guardian Elephants'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'logo' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="symbol-reveal space-y-6">
              <p className="text-lg text-miu-navy font-semibold italic border-l-4 border-miu-gold pl-6">
                "The MIU logo meaning goes far deeper than visual design. Every element is drawn from the rich well of Meitei cultural heritage."
              </p>
              <p className="text-gray-600 leading-relaxed">
                At the heart of the Manipur university symbol rests the **Eternal Wheel** — representing the continuous cycle of learning and the pursuit of truth. Flanking it stand our **Guardian Elephants**, whose symbolism in Manipur tradition speaks of wisdom, strength, and auspicious new beginnings.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-miu-gold/10 flex items-center justify-center mb-4">
                    <CircleDot className="w-5 h-5 text-miu-gold" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-miu-navy mb-2">Eternal Wheel</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Represents the unending cycle of knowledge. Education at MIU is not a destination, it is a lifelong revolution.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-miu-gold/10 flex items-center justify-center mb-4">
                    <Languages className="w-5 h-5 text-miu-gold" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-miu-navy mb-2">Linguistic Heritage</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Honouring the plurality of Meitei Mayek and diverse tongues of Northeast India.</p>
                </div>
              </div>
            </div>
            <div className="symbol-reveal relative flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-miu-gold/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <img src="https://miu.edu.in/wp-content/uploads/2026/02/New-Logo.png" alt="MIU Logo Symbolism" className="relative z-10 w-full max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        )}

        {activeTab === 'cultural' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalSymbols.map((s, i) => (
              <div key={i} className="symbol-reveal group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-miu-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white font-heading font-bold text-xl">{s.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'elephants' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="symbol-reveal order-2 lg:order-1 relative">
              <img src="/assets/images/about-heritage.png" alt="Guardian Elephant" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-miu-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <Shield className="w-12 h-12 text-miu-navy" />
              </div>
            </div>
            <div className="symbol-reveal order-1 lg:order-2">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-miu-navy mb-6">Guardian Elephants of MIU</h3>
              <div className="space-y-4">
                {elephantValues.map((v, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-miu-navy/5 flex items-center justify-center group-hover:bg-miu-gold group-hover:text-miu-navy transition-all">
                      <ChevronRight className="w-5 h-5 text-miu-navy" />
                    </div>
                    <div>
                      <h5 className="font-bold text-miu-navy text-lg">{v.title}</h5>
                      <p className="text-gray-500 text-sm">{v.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
