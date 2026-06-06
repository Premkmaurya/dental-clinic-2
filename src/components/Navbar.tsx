import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sun, Moon } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openBooking } = useBooking();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Dentists', path: '/doctors' },
    { label: 'Blog', path: '/blog' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  // Track scroll position to change background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-navbar py-4 shadow-sm border-b border-slate-200/20 dark:border-slate-800/30' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* Brand Logo Link */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#0F4C81] dark:bg-[#4FB3BF] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Heart className="w-5 h-5 text-white fill-white dark:text-slate-900 dark:fill-slate-900" />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight transition-colors ${
            (isHome && !isScrolled) 
              ? 'text-white group-hover:text-[#4FB3BF]' 
              : 'text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#4FB3BF]'
          }`}>
            SmileCare
          </span>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden xl:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `text-[14px] font-bold tracking-wide transition-colors duration-200 relative group py-2 uppercase ${
                  isActive 
                    ? ((isHome && !isScrolled) ? 'text-[#4FB3BF]' : 'text-[#0F4C81] dark:text-[#4FB3BF]')
                    : ((isHome && !isScrolled) ? 'text-slate-200 hover:text-[#4FB3BF]' : 'text-slate-700 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#4FB3BF]')
                }`
              }
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4FB3BF] transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden xl:flex items-center gap-4">

          <button
            onClick={() => openBooking()}
            className="px-6 py-2.5 rounded-full bg-[#0F4C81] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3A63] hover:shadow-lg hover:shadow-[#0F4C81]/25 transition-all duration-300 transform active:scale-95 border border-white/10"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile controls & Hamburg */}
        <div className="xl:hidden flex items-center gap-3">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 focus:outline-none transition-colors ${
              (isHome && !isScrolled) ? 'text-white' : 'text-slate-800 dark:text-slate-200'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-2xl space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `w-full text-left py-2.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wide transition-all ${
                    isActive 
                      ? 'bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-[#0F4C81] dark:text-[#4FB3BF]' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openBooking();
                }}
                className="w-full py-3 rounded-full bg-[#0F4C81] text-center text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0B3A63] transition-colors border border-white/10"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
