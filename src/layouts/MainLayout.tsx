import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar, MessageSquare, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExitIntentPopup from '../components/ExitIntentPopup';
import BookingForm from '../components/BookingForm';
import LoadingScreen from '../components/LoadingScreen';

// Scroll to top helper on route transitions
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isBookingOpen, openBooking, closeBooking } = useBooking();
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(true);

  // Close booking modal when route changes
  useEffect(() => {
    closeBooking();
  }, [location.pathname]);

  // Lock body scroll when booking modal or loading screen is active
  useEffect(() => {
    if (isBookingOpen || isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBookingOpen, isLoading]);

  // Scroll to top button visibility trigger
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col justify-between transition-colors duration-300">
      <AnimatePresence mode="popLayout">
        {isLoading && (
          <LoadingScreen onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />
      <ExitIntentPopup />
      
      {/* Sticky Top Header Navigation */}
      <Navbar />
      
      {/* Main Routing View with Page Transition Animations */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-grow flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer System */}
      <Footer />

      {/* FLOATING CONVERSION WIDGETS */}

      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 group"
        title="Chat on WhatsApp"
        aria-label="WhatsApp chat"
      >
        <MessageSquare className="w-7 h-7 fill-white text-[#25D366]" />
        {/* Hover label */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-[#202A36] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap origin-right transition-all duration-200">
          Chat With Us Live
        </span>
      </a>

      {/* Sticky Desktop Side Appointment Widget */}
      <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <button
          onClick={() => openBooking()}
          className="bg-[#0F4C81] hover:bg-[#0B3A63] text-white px-4 py-3 rounded-r-2xl shadow-xl flex items-center gap-2.5 -translate-x-[75%] hover:translate-x-0 transition-transform duration-300 cursor-pointer font-semibold text-sm border-y border-r border-white/10"
        >
          <Calendar className="w-5 h-5 flex-shrink-0" />
          <span>Book Appointment</span>
        </button>
        <a
          href="tel:+15551234567"
          className="bg-[#4FB3BF] hover:bg-[#3ea2ae] text-white px-4 py-3 rounded-r-2xl shadow-xl flex items-center gap-2.5 -translate-x-[75%] hover:translate-x-0 transition-transform duration-300 cursor-pointer font-semibold text-sm border-y border-r border-white/10"
        >
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span>Call: (555) 123-4567</span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar (High Conversion Widget) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 p-4 flex md:hidden gap-4 shadow-2xl">
        <a
          href="tel:+15551234567"
          className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs border border-slate-200 dark:border-slate-700 shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#4FB3BF]" /> Call Office
        </a>
        <button
          onClick={() => openBooking()}
          className="flex-1 py-3 bg-[#0F4C81] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0B3A63] text-xs shadow-lg shadow-[#0F4C81]/25 border border-white/10"
        >
          <Calendar className="w-4 h-4" /> Book Online
        </button>
      </div>

      {/* Scroll-To-Top Circular Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40 right-6 md:bottom-28 md:right-8 z-40 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Booking Modal Overlay */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md overflow-y-auto flex justify-center items-center p-4 md:p-6"
          >
            {/* Backdrop (no click-to-close to prevent accidental data loss) */}
            <div className="absolute inset-0 cursor-default" />

            {/* Modal Card wrapper */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl z-10 my-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeBooking}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:text-slate-300 dark:hover:text-white transition-colors z-20 cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>

              <BookingForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
export default MainLayout;
