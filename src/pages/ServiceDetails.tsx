import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Check, Sparkles, AlertCircle, ShieldCheck, Clock, BadgeDollarSign, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { servicesData, getServiceSchema } from '../data/servicesData';
import { useBooking } from '../context/BookingContext';

export const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { openBooking } = useBooking();

  const service = serviceId ? servicesData[serviceId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 flex flex-col items-center justify-center px-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Service Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">We couldn't find the service profile you are looking for.</p>
        <Link to="/services" className="px-6 py-3 rounded-full bg-[#0F4C81] text-white font-semibold hover:bg-[#0B3A63] transition-all">
          Return to Services
        </Link>
      </div>
    );
  }

  const schema = getServiceSchema(service);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20 animate-fade-in">
      <SEO 
        title={`${service.title} | Premium Treatment | SmileCare`}
        description={service.description}
        schemas={[schema]}
      />

      <div className="max-w-6xl mx-auto px-8">
        
        {/* Back Link */}
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0F4C81] dark:hover:text-[#4FB3BF] font-semibold mb-8 group transition-colors"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
              <Sparkles className="w-4 h-4 text-[#4FB3BF]" /> Premium Treatment
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-[#0F4C81] dark:text-[#4FB3BF] font-semibold">
              {service.tagline}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {service.fullDetails}
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                <Clock className="w-5 h-5 text-[#4FB3BF]" />
                <span>Duration: {service.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                <BadgeDollarSign className="w-5 h-5 text-[#4FB3BF]" />
                <span>Estimate: {service.cost}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openBooking(service.title)}
                className="px-8 py-3.5 rounded-full bg-[#0F4C81] text-white font-bold hover:bg-[#0B3A63] transition-all shadow-lg shadow-[#0F4C81]/25 transform active:scale-95 text-xs uppercase tracking-wider"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right Benefits Box */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <ShieldCheck className="text-[#4FB3BF] w-6 h-6" /> Treatment Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0F4C81] dark:text-[#4FB3BF] stroke-[3]" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-200/50 dark:border-slate-800 shadow-md mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
            The Treatment Process: What to Expect
          </h2>
          <div className="relative border-l border-slate-100 dark:border-slate-800 pl-6 ml-4 space-y-10">
            {service.procedureSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Number bullet */}
                <div className="absolute -left-[38px] top-0.5 w-6 h-6 rounded-full bg-[#0F4C81] text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-800 shadow">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{step}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Specific FAQs */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800 shadow-md">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#4FB3BF]" /> Treatment FAQs
          </h3>
          <div className="space-y-6">
            {service.faq.map((faqItem, i) => (
              <div key={i} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">{faqItem.q}</h4>
                <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">{faqItem.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
export default ServiceDetails;
