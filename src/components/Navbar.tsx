import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useTheme } from '../context/ThemeContext';
import StaggeredMenu from './StaggeredMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openBooking } = useBooking();
  const { theme } = useTheme();
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

  const mobileItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Dentists', ariaLabel: 'View our specialists', link: '/doctors' },
    { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
    { label: 'Testimonials', ariaLabel: 'See patient reviews', link: '/testimonials' },
    { label: 'Gallery', ariaLabel: 'Tour our clinic', link: '/gallery' },
    { label: 'FAQ', ariaLabel: 'Frequently asked questions', link: '/faq' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
    { label: 'Book Appointment', ariaLabel: 'Schedule a visit', link: '#book' }
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

  const isHomeAndUnscrolled = isHome && !isScrolled;
  const menuBtnColor = isHomeAndUnscrolled ? '#ffffff' : (theme === 'dark' ? '#ffffff' : '#0f172a');
  const openMenuBtnColor = theme === 'dark' ? '#ffffff' : '#0f172a';

  return (
    <>
      {/* Desktop Navbar */}
      <nav 
        className={`hidden xl:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              isHomeAndUnscrolled 
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
                      ? (isHomeAndUnscrolled ? 'text-[#4FB3BF]' : 'text-[#0F4C81] dark:text-[#4FB3BF]')
                      : (isHomeAndUnscrolled ? 'text-slate-200 hover:text-[#4FB3BF]' : 'text-slate-700 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#4FB3BF]')
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
        </div>
      </nav>

      {/* Mobile Navbar with StaggeredMenu */}
      <div className="xl:hidden">
        <StaggeredMenu
          position="right"
          isFixed={true}
          items={mobileItems}
          displayItemNumbering={true}
          menuButtonColor={menuBtnColor}
          openMenuButtonColor={openMenuBtnColor}
          changeMenuColorOnOpen={true}
          colors={['#0F4C81', '#4FB3BF']}
          accentColor="#4FB3BF"
          openBooking={openBooking}
        />
      </div>
    </>
  );
};
export default Navbar;
