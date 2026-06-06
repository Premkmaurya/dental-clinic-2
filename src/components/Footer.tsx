import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, ShieldCheck, Compass } from 'lucide-react';
import { serviceAreas, insurancePartners } from '../data/localSeoData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#202A36] text-white pt-20 pb-24 md:pb-10 relative overflow-hidden border-t border-slate-800">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Brand & Socials Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#4FB3BF] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              SmileCare
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Advanced dental care designed for comfort, confidence, and lifelong oral health. Experience dentistry redefined with luxury and technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4FB3BF] transition-colors duration-300" aria-label="Facebook">
              <svg className="w-5 h-5 fill-slate-300 hover:fill-white" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4FB3BF] transition-colors duration-300" aria-label="Instagram">
              <svg className="w-5 h-5 text-slate-300 stroke-current hover:text-white" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4FB3BF] transition-colors duration-300" aria-label="Twitter">
              <svg className="w-5 h-5 fill-slate-300 hover:fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#4FB3BF]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home Page', path: '/' },
              { label: 'About Clinic', path: '/about' },
              { label: 'All Services', path: '/services' },
              { label: 'Meet the Doctors', path: '/doctors' },
              { label: 'Dental Blog', path: '/blog' },
              { label: 'Patient Testimonials', path: '/testimonials' },
              { label: 'Smile Gallery', path: '/gallery' },
              { label: 'Patient FAQ', path: '/faq' },
              { label: 'Contact Us', path: '/contact' },
              { label: 'Book Appointment', path: '/book-appointment' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Local Contact Info Column */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#4FB3BF]">Contact Us</h4>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4FB3BF] flex-shrink-0 mt-0.5" />
              <span>123 Dental Suite, Medical District, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#4FB3BF]" />
              <a href="tel:+15551234567" className="hover:text-white transition-colors">
                (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4FB3BF]" />
              <a href="mailto:appointments@smilecare.com" className="hover:text-white transition-colors">
                appointments@smilecare.com
              </a>
            </li>
          </ul>

          {/* Insurance Partners Summary */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#4FB3BF]" /> Insurance Accepted
            </h5>
            <div className="flex flex-wrap gap-2">
              {insurancePartners.slice(0, 3).map((ins, idx) => (
                <span key={idx} className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded">
                  {ins.name}
                </span>
              ))}
              <span className="text-[10px] font-semibold text-slate-400 self-center">
                + more PPOs
              </span>
            </div>
          </div>
        </div>

        {/* Local SEO Details & Hours */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#4FB3BF]">Office Info</h4>
          <ul className="space-y-3 text-slate-300 text-sm mb-6">
            <li className="flex items-center justify-between">
              <span>Mon - Fri:</span>
              <span className="font-semibold text-white">8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Saturday:</span>
              <span className="font-semibold text-white">9:00 AM - 4:00 PM</span>
            </li>
            <li className="flex items-center justify-between text-slate-400">
              <span>Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>

          <div className="space-y-1.5 text-xs text-slate-400 bg-slate-800/40 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-start gap-2">
              <Compass className="w-4 h-4 text-[#4FB3BF] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-300">Service Regions:</p>
                <p className="mt-0.5 leading-relaxed">{serviceAreas.slice(0, 3).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-slate-800 text-center md:flex md:justify-between text-xs text-slate-400 relative z-10">
        <p>&copy; {new Date().getFullYear()} SmileCare Dental Practice. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
