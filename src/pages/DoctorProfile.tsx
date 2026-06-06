import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, ShieldCheck, HeartHandshake, FileText, CheckCircle2, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { doctorsData, getDoctorSchema } from '../data/doctorsData';
import { useBooking } from '../context/BookingContext';

export const DoctorProfile: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const { openBooking } = useBooking();

  const doc = doctorId ? doctorsData[doctorId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doctorId]);

  if (!doc) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 flex flex-col items-center justify-center px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Specialist Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">We couldn't find the doctor profile you are looking for.</p>
        <Link to="/doctors" className="px-6 py-3 rounded-full bg-[#0F4C81] text-white font-semibold hover:bg-[#0B3A63] transition-all">
          Return to Team
        </Link>
      </div>
    );
  }

  const schema = getDoctorSchema(doc);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20">
      <SEO 
        title={`${doc.name} | Dentist Specialist | SmileCare`}
        description={doc.bio}
        schemas={[schema]}
      />

      <div className="max-w-6xl mx-auto px-8">
        
        {/* Back Link */}
        <Link 
          to="/doctors" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0F4C81] dark:hover:text-[#4FB3BF] font-semibold mb-8 group transition-colors"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Medical Team
        </Link>

        {/* Profile Card Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-4 rounded-3xl overflow-hidden aspect-[3/4] shadow-xl border border-slate-200/50 dark:border-slate-800">
            <img 
              src={doc.image} 
              alt={doc.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
              <ShieldCheck className="w-4 h-4" /> Board-Certified Dentist
            </span>
            <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              {doc.name}
            </h1>
            <p className="text-lg text-[#0F4C81] dark:text-[#4FB3BF] font-semibold">
              {doc.specialization} &bull; {doc.qualification}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {doc.bio}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => openBooking('', doc.name)}
                className="px-8 py-3.5 rounded-full bg-[#0F4C81] text-white font-bold hover:bg-[#0B3A63] transition-all shadow-lg shadow-[#0F4C81]/25 transform active:scale-95 text-sm uppercase tracking-wider"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Schedule & Credentials detailed breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Credentials */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#4FB3BF]" /> Credentials & Certifications
            </h3>
            
            <ul className="space-y-4">
              {doc.credentials.map((cred, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#4FB3BF]" /> Consult Hours
            </h3>

            <div className="space-y-3">
              {doc.schedule.map((slot, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/40 rounded-2xl"
                >
                  <Calendar className="w-5 h-5 text-[#0F4C81] dark:text-[#4FB3BF] flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">{slot}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center leading-relaxed">
              Bookings require 24 hours confirmation. Insurance checks performed instantly upon selection.
            </p>
          </div>

        </div>

        {/* Doctor FAQ */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800 shadow-md">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#4FB3BF]" /> Doctor Consultation FAQs
          </h3>
          <div className="space-y-6">
            {doc.faq.map((faqItem, i) => (
              <div key={i} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">{faqItem.q}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{faqItem.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
export default DoctorProfile;
