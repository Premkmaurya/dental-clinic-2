import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const SharedCTA: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F4C81] to-[#0B3A63] text-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4FB3BF]/10 rounded-full filter blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
      
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10 space-y-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-[#4FB3BF]" /> Luxury Healthcare Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Ready for a Healthy, Confident Smile?
        </h2>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto">
          Schedule your comprehensive digital exam today. Our board-certified specialists utilize advanced digital CT scans and painless methods for exceptional outcomes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => openBooking()}
            className="px-8 py-4 rounded-full bg-white text-[#0F4C81] font-bold hover:bg-[#E8F4FF] transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10 transform active:scale-95"
          >
            <Calendar className="w-5 h-5 text-[#0F4C81]" /> Book Online Appointment
          </button>
          <a
            href="tel:+15551234567"
            className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-bold border border-white/40 transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <Phone className="w-5 h-5 text-white" /> Call (555) 123-4567
          </a>
        </div>
        
        <p className="text-xs text-slate-300">
          Accepting major PPO insurance plans. Emergency same-day consults available.
        </p>
      </div>
    </section>
  );
};
export default SharedCTA;
