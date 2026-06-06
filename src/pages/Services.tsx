import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import SharedCTA from '../components/SharedCTA';
import { servicesData } from '../data/servicesData';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cosmetic' | 'preventive' | 'surgical'>('all');
  const servicesList = Object.values(servicesData);

  const getCategoryClass = (id: string) => {
    if (id === 'teeth-cleaning' || id === 'pediatric-dentistry') return 'preventive';
    if (id === 'teeth-whitening' || id === 'cosmetic-dentistry' || id === 'invisalign') return 'cosmetic';
    return 'surgical';
  };

  const filteredServices = servicesList.filter((service) => {
    if (activeCategory === 'all') return true;
    return getCategoryClass(service.id) === activeCategory;
  });

  const priceGuides = [
    { name: 'Routine Cleaning & Exam', cost: '$150 - $250', time: '45 mins' },
    { name: 'Professional Teeth Whitening', cost: '$400 - $600', time: '60 mins' },
    { name: 'Porcelain Veneers (Per Tooth)', cost: '$1,000 - $2,000', time: '2 visits' },
    { name: 'Invisalign Aligners Plan', cost: '$4,000 - $6,500', time: '12-18 mos' },
    { name: 'Dental Implants Restoration', cost: '$2,500 - $4,500', time: 'Multi-visit' },
    { name: 'Root Canal Therapy', cost: '$800 - $1,200', time: '60 mins' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28">
      <SEO 
        title="Premium Dental Services & Prices | SmileCare"
        description="Explore teeth whitening, dental implants, Invisalign aligners, veneers, root canals, and pediatric care at SmileCare. Review our transparent price guide."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <Sparkles className="w-4 h-4 text-[#4FB3BF]" /> Premium Treatments
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Our Dental Services
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            From routine checkups to comprehensive cosmetic makeovers, we provide clinical outcomes designed for longevity and patient comfort.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {[
            { label: 'All Services', value: 'all' },
            { label: 'Preventive Care', value: 'preventive' },
            { label: 'Cosmetic Makeovers', value: 'cosmetic' },
            { label: 'Surgical Restorations', value: 'surgical' },
          ].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(tab.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeCategory === tab.value
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredServices.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              direction="up" 
              delay={index * 0.1}
            >
              <div className="group bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-slate-800 p-8 flex flex-col justify-between h-full shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#4FB3BF] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3 pt-2 border-t border-slate-100 dark:border-slate-800/40">
                    {service.description}
                  </p>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0F4C81] dark:text-[#4FB3BF] hover:text-[#4FB3BF] dark:hover:text-[#E8F4FF] transition-colors mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40 group/link"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transparent Price Guide */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-[32px] p-8 md:p-10 shadow-md mb-16">
          <div className="text-center max-w-lg mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white">
              Estimated Price Guide
            </h2>
            <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold mt-1">
              Transparent, upfront estimated dental costs before insurance copays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {priceGuides.map((guide, idx) => (
              <div 
                key={idx}
                className="flex justify-between items-center p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/40 rounded-2xl"
              >
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">{guide.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Average time: {guide.time}</p>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-[#0F4C81] dark:text-[#4FB3BF] text-base">{guide.cost}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center mt-6 leading-relaxed">
            * Final costs are determined during the clinical consult. Copays depend on individual insurance policies.
          </p>
        </div>

      </div>

      <SharedCTA />
    </div>
  );
};
export default Services;
