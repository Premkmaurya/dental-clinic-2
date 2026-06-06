import React, { useState, useEffect } from 'react';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import SkeletonLoader from '../components/SkeletonLoader';
import ScrollReveal from '../components/ScrollReveal';
import { insurancePartners } from '../data/localSeoData';

export const Appointment: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms load simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20">
      <SEO 
        title="Book Online Appointment | SmileCare Premium Practice"
        description="Schedule your dental checkup or dental surgery consult online at SmileCare. Fast verification for PPO insurances."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <HeartHandshake className="w-4 h-4" /> Priority Consultation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Submit your contact information, select a specialized doctor, and pick an available slot. We will confirm your visit details within minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Form Loader/Container */}
          <div className="lg:col-span-8">
            {isLoading ? (
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-xl">
                <SkeletonLoader type="text" count={2} />
                <div className="h-4" />
                <SkeletonLoader type="text" count={2} />
              </div>
            ) : (
              <ScrollReveal direction="up">
                <BookingForm />
              </ScrollReveal>
            )}
          </div>

          {/* Right Trust Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Conversion trust points */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-8 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#4FB3BF]" /> Booking Guarantee
              </h3>
              
              <ul className="space-y-4">
                {[
                  { title: 'Certified Specialists', desc: 'Consultations are handled directly by board-certified DDS practitioners.', icon: Award },
                  { title: 'Zero Wait Policy', desc: 'We coordinate schedules to ensure you are seated within 5 minutes of arrival.', icon: ShieldCheck },
                  { title: 'Insurance Support', desc: 'Free instant benefit checks for all major PPO insurance policies.', icon: HeartHandshake }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-none">{item.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Insurance Acceptance Info */}
            <div className="bg-[#202A36] text-white rounded-3xl p-8 shadow-md">
              <h3 className="text-lg font-bold mb-4 text-[#4FB3BF] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> PPO Networks accepted
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                We accept most dental PPO policies. On the day of your consult, we handle all claim filing directly.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {insurancePartners.map((ins, idx) => (
                  <div key={idx} className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-3 text-center">
                    <h4 className="text-xs font-bold text-white leading-none">{ins.name}</h4>
                    <p className="text-[9px] text-[#4FB3BF] font-semibold mt-1 uppercase tracking-wider">{ins.type}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
export default Appointment;
