import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Gift, Star } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('exitIntentSeen');
    if (hasSeen) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentSeen', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleBookClick = () => {
    setIsOpen(false);
    openBooking('Free Consultation');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Backdrop Closer */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative max-w-lg w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] overflow-hidden shadow-2xl p-8 md:p-10 text-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gift Icon Badge */}
            <div className="w-16 h-16 bg-[#E8F4FF] dark:bg-[#0F4C81]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0F4C81] dark:text-[#4FB3BF]">
              <Gift className="w-8 h-8" />
            </div>

            <span className="inline-block text-xs font-extrabold tracking-widest text-[#4FB3BF] uppercase mb-2">
              Exclusive Patient Offer
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
              Wait! Get a Free Whitening Assessment
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Before you leave, secure a **Free Smile Shade & Whitening Consultation** (valued at $150) when you book your cleaning or exam online today.
            </p>

            {/* Micro Rating */}
            <div className="flex justify-center items-center gap-1.5 mb-8 bg-slate-50 dark:bg-slate-800/50 py-2.5 px-4 rounded-xl border border-slate-100 dark:border-slate-800 w-fit mx-auto">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                4.9/5 Rating (1,200+ Reviews)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleBookClick}
                className="w-full py-4 rounded-full bg-[#0F4C81] text-white font-bold hover:bg-[#0B3A63] shadow-lg shadow-[#0F4C81]/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95"
              >
                <Calendar className="w-5 h-5" /> Claim Free Consultation & Book
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors py-2"
              >
                No Thanks, I Prefer Paying Full Price
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ExitIntentPopup;
