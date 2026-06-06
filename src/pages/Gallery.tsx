import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Image as ImageIcon } from 'lucide-react';
import SEO from '../components/SEO';

import gallery1 from '../assets/images/gallery_1.png'; // treatment room
import gallery2 from '../assets/images/gallery_2.png'; // 3d scanner
import heroBg from '../assets/images/hero_fallback.png'; // reception
import doctor1 from '../assets/images/doctor_1.png'; // doctor 1
import doctor2 from '../assets/images/doctor_2.png'; // doctor 2
import doctor3 from '../assets/images/doctor_3.png'; // doctor 3

interface GalleryItem {
  id: number;
  src: string;
  category: 'clinic' | 'tech' | 'team';
  title: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: heroBg, category: 'clinic', title: 'Luxury Reception & Lounge', desc: 'Elegant and relaxing waiting area designed for comfort.' },
  { id: 2, src: gallery1, category: 'clinic', title: 'High-Tech Treatment Room', desc: 'Equipped with the latest patient comfort features and tools.' },
  { id: 3, src: gallery2, category: 'tech', title: 'Digital 3D Diagnostics', desc: 'Advanced CT scans for highly precise treatment mapping.' },
  { id: 4, src: doctor1, category: 'team', title: 'Dr. Alexander Adams', desc: 'Lead Implantologist examining patient designs.' },
  { id: 5, src: doctor2, category: 'team', title: 'Dr. Sarah Chen', desc: 'Providing expert orthodontic alignment reviews.' },
  { id: 6, src: doctor3, category: 'team', title: 'Dr. Marcus Miller', desc: 'Crafting beautiful cosmetic tooth bonding.' },
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'clinic' | 'tech' | 'team'>('all');
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20">
      <SEO 
        title="Virtual Clinic Tour & Smile Gallery | SmileCare"
        description="Explore our modern dental operatories, high-end diagnostics suite, and professional patient care zones at SmileCare."
      />

      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <ImageIcon className="w-4 h-4" /> Clinic Showcase
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            SmileCare Gallery
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Take a virtual tour inside our premium practice. Explore our comfortable amenities, high-tech diagnostic suites, and meet our dedicated clinic team.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {[
            { label: 'All Photos', value: 'all' },
            { label: 'Clinic Tour', value: 'clinic' },
            { label: 'Advanced Tech', value: 'tech' },
            { label: 'Medical Team', value: 'team' },
          ].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tab.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                filter === tab.value
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 cursor-pointer aspect-[4/3] shadow-md"
                onClick={() => setSelectedImg(item)}
              >
                {/* Photo */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="w-10 h-10 rounded-full bg-[#4FB3BF] flex items-center justify-center mb-3 text-white self-end shadow-lg shadow-black/10">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-300 text-xs mt-1 line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedImg(null)}
            >
              <button 
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="max-w-4xl w-full bg-slate-900/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.title} 
                  className="max-h-[70vh] object-contain w-full"
                />
                <div className="w-full p-6 bg-[#202A36] text-white text-left border-t border-white/5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4FB3BF]">
                    {selectedImg.category === 'clinic' ? 'Clinic Interior' : selectedImg.category === 'tech' ? 'Advanced Technology' : 'Specialist Dentist'}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{selectedImg.title}</h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">{selectedImg.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
export default Gallery;
