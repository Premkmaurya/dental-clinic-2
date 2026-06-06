import React from 'react';
import { Award, ShieldCheck, Heart, Users, MapPin, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import SharedCTA from '../components/SharedCTA';
import { serviceAreas, nearbyLocations } from '../data/localSeoData';

import clinicImg from '../assets/images/hero_fallback.png';

export const About: React.FC = () => {
  const values = [
    { title: 'Clinical Excellence', desc: 'Our lead specialists hold fellowships from leading national dentistry boards.', icon: Award },
    { title: 'Absolute Safety', desc: 'We utilize surgical sterilization processes that exceed CDC and OSHA guidelines.', icon: ShieldCheck },
    { title: 'Empathetic Service', desc: 'Painless procedures and comfortable setups ensure stress-free visits.', icon: Heart },
    { title: 'Modern Diagnostics', desc: 'Surgical plans are guided by ultra-low radiation 3D scanning and computer projections.', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28">
      <SEO 
        title="About Our Premium Private Practice | SmileCare"
        description="Learn about SmileCare's clinical standards, board-certified specialists, clean sterilization rooms, and local service coverage."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
              <Award className="w-4 h-4" /> About SmileCare
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-tight">
              A Premium Standard of Private Dentistry
            </h1>
            <p className="text-lg text-[#0F4C81] dark:text-[#4FB3BF] font-semibold">
              Designed for comfort, absolute precision, and lifelong oral health.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              Founded in 2011, SmileCare was established to redefine patient dentistry. We believe that clinical treatment should not feel stressful. By combining a spa-like comfort atmosphere with state-of-the-art 3D CT diagnostic equipment and board-certified dental specialists, we guarantee a premium healthcare experience.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl border border-slate-200/50 dark:border-slate-800">
            <img 
              src={clinicImg} 
              alt="SmileCare Reception Lounge" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Clinic Values */}
        <div className="mb-24">
          <div className="text-center max-w-lg mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">Our Clinical Values</h2>
            <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold mt-1">
              Guidelines that define our daily patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{val.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Location SEO details */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-[32px] p-8 md:p-10 shadow-md mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#4FB3BF]" /> Service Locations
              </h3>
              <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
                We accept and offer premium transport coordination options for patients visiting from:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {serviceAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#4FB3BF] flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#4FB3BF]" /> Landmark Centers
              </h3>
              <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
                Our suite is situated adjacent to major medical districts and transit centers:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                {nearbyLocations.map((landmark, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4FB3BF] flex-shrink-0" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

      <SharedCTA />
    </div>
  );
};
export default About;
