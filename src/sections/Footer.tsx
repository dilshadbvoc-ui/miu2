import { Mail, Phone, MapPin, MessageCircle, Facebook, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = ['Home', 'About Us', 'Alumni', 'Anti Ragging', 'Awards', "Chancellor's Message"];
const academics = ['Academic Calendar', 'Academic Collaborations', 'Academic Council', 'Academic Programmes', 'Research', 'Examinations'];
const schools = ['School of Innovation', 'School of Agriculture', 'School of Biological Sciences', 'School of Health Sciences', 'School of Engineering', 'School of Commerce'];

export default function Footer() {
  return (
    <footer className="bg-miu-navy">
      {/* CTA Bar */}
      <div className="bg-miu-gold py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-miu-navy mb-1">Ready to Start Your Journey?</h3>
              <p className="text-miu-navy/70 text-sm font-medium">Apply now for the 2026-27 academic session.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/admissions" className="bg-miu-navy text-white font-bold px-6 py-2.5 rounded text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-md">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:admissions@miu.edu.in" className="border-2 border-miu-navy/30 text-miu-navy font-bold px-6 py-2.5 rounded text-sm hover:bg-miu-navy hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Us
              </a>
              <a href="https://wa.me/919036983337" target="_blank" rel="noopener noreferrer" className="border-2 border-miu-navy/30 text-miu-navy font-bold px-6 py-2.5 rounded text-sm hover:bg-miu-navy hover:text-white transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img src="/miu-seal.png" alt="MIU" className="h-14 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
              <div className="bg-miu-gold rounded px-3 py-1.5">
                <span className="font-heading font-black text-2xl text-miu-navy tracking-widest leading-none">MIU</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              MIU is an autonomous private university committed to world-class education and research excellence. UGC recognized and NEP 2020 compliant.
            </p>
            {/* Newsletter */}
            <div className="mb-5">
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Stay Updated</p>
              <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email" className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-white text-xs placeholder-white/40 focus:outline-none focus:border-miu-gold transition-colors" />
                <button type="submit" className="bg-miu-gold text-miu-navy font-bold px-3 py-2 rounded text-xs hover:bg-yellow-400 transition-colors whitespace-nowrap">Subscribe</button>
              </form>
            </div>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-miu-gold hover:text-miu-navy transition-all text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}><a href="#" className="text-white/60 text-sm hover:text-miu-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Academics</h4>
            <ul className="space-y-2.5">
              {academics.map((l, i) => (
                <li key={i}><a href="#" className="text-white/60 text-sm hover:text-miu-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Schools</h4>
            <ul className="space-y-2.5">
              {schools.map((l, i) => (
                <li key={i}><a href="#" className="text-white/60 text-sm hover:text-miu-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-white/10 mt-10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-miu-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm font-semibold mb-1">Address</p>
              <p className="text-white/60 text-sm">Manipur International University<br />Imphal, Manipur, India - 795001</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-miu-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm font-semibold mb-1">Email</p>
              <a href="mailto:info@miu.edu.in" className="text-white/60 text-sm hover:text-miu-gold transition-colors block">info@miu.edu.in</a>
              <a href="mailto:admissions@miu.edu.in" className="text-white/60 text-sm hover:text-miu-gold transition-colors block">admissions@miu.edu.in</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-miu-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm font-semibold mb-1">Phone</p>
              <a href="tel:+919036983337" className="text-white/60 text-sm hover:text-miu-gold transition-colors block">+91 903 698 3337</a>
              <a href="tel:+918899788788" className="text-white/60 text-sm hover:text-miu-gold transition-colors block">+91 889 978 8788</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">© 2026 Manipur International University. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Anti Ragging', 'Sitemap'].map((l, i) => (
              <a key={i} href="#" className="text-white/50 text-xs hover:text-miu-gold transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
