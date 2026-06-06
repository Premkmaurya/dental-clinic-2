import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import SharedCTA from '../components/SharedCTA';
import { doctorsData } from '../data/doctorsData';

export const Doctors: React.FC = () => {
  const doctorsList = Object.values(doctorsData);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28">
      <SEO 
        title="Meet Our Board-Certified Dentist Specialists | SmileCare"
        description="Learn about our lead dentist implantologists, Invisalign specialists, and cosmetic dental surgeons. Over 15+ years experience."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <Award className="w-4 h-4" /> Board-Certified Specialists
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Our Dental Team
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Highly qualified practitioners committed to aesthetic excellence, precision surgery, and gentle care. Learn about their bios and book a consult.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {doctorsList.map((doc, idx) => (
            <ScrollReveal 
              key={doc.id} 
              direction="up" 
              delay={idx * 0.1}
            >
              <div className="group relative overflow-hidden rounded-[32px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 shadow-md hover:shadow-xl flex flex-col justify-between h-full hover:translate-y-[-4px] transition-all duration-300">
                {/* Image */}
                <div className="h-[320px] overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-800 dark:text-white leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-[#4FB3BF] uppercase tracking-widest">
                      {doc.qualification} &bull; {doc.specialization}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 pt-2 border-t border-slate-100 dark:border-slate-800/40">
                      {doc.bio}
                    </p>
                  </div>

                  <Link
                    to={`/doctors/${doc.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] dark:text-[#4FB3BF] hover:text-[#4FB3BF] dark:hover:text-[#E8F4FF] transition-colors mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40 group/link"
                  >
                    View Doctor Profile & Schedule 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Credentials and Accreditations Section */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-[32px] p-10 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                Our Accreditations & Standards
              </h2>
              <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed">
                SmileCare is fully accredited and maintains surgical sterilization processes exceeding standard OSHA regulations. Our practitioners undergo annual post-graduate training at leading dental institutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'American Board of Oral Surgery Accredited',
                  'Invisalign Diamond Elite Certified Providers',
                  'American Academy of Cosmetic Dentistry Accredited',
                  'OSHA Sterile Sterilization Surpassed'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#4FB3BF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 rounded-3xl p-6 text-center space-y-4 shadow-inner">
              <div className="flex justify-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Exceptional Patient Trust</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                "The cleanest and most technologically advanced practice I have ever visited. Staff are highly polite."
              </p>
              <div className="text-[10px] font-bold text-[#0F4C81] dark:text-[#4FB3BF]">
                - Robert S., Verified Patient
              </div>
            </div>
          </div>
        </div>

      </div>

      <SharedCTA />
    </div>
  );
};
export default Doctors;
