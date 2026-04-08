import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white pb-20">
      <div className="py-20 bg-miu-navy text-white text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-miu-gold font-medium tracking-widest uppercase text-sm">We're Here to Help You Thrive</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-3xl font-bold text-miu-navy mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Have questions about admissions, programs, or our campus? Our team is available to assist you.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Address', detail: 'Imphal, Manipur, India - 795001' },
                { icon: Phone, title: 'Call Us', detail: '+91 903 698 3337' },
                { icon: Mail, title: 'Email Address', detail: 'admissions@miu.edu.in' },
                { icon: Clock, title: 'Working Hours', detail: 'Mon - Sat: 9:00 AM - 5:00 PM' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-miu-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-miu-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-miu-navy">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-miu lg:sticky lg:top-32">
            <h3 className="font-heading font-bold text-2xl text-miu-navy mb-6 text-center">Quick Enquiry</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold" />
              <textarea placeholder="Message" rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-miu-gold"></textarea>
              <button className="w-full bg-miu-navy text-white font-bold py-4 rounded-lg hover:bg-black transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
