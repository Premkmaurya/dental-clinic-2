import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  MapPin, Phone, Mail, Clock, Heart, Send, CheckCircle2, 
  Compass, ShieldCheck 
} from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { serviceAreas, nearbyLocations, businessHours, emergencyContact } from '../data/localSeoData';

interface ContactInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>();

  const onSubmit = async (_data: ContactInput) => {
    setIsPending(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsPending(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28">
      <SEO 
        title="Contact Us & Hours | SmileCare Dental Clinic"
        description="Connect with our clinic team. Get directions, business hours, emergency helplines, and send clinical queries online."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <Compass className="w-4 h-4" /> Locate Practice
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Connect With SmileCare
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Have questions about veneer procedures, Invisalign quotes, or scheduling slots? Send our front-desk specialists a message or call us.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Clinic Headquarters</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/20 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Office Address</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">123 Dental Suite, Medical District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/20 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Call Center</h4>
                  <p className="text-[#0F4C81] dark:text-[#4FB3BF] font-semibold text-xs mt-1">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/20 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">Clinic Schedule</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Mon - Fri: {businessHours.weekday}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Saturday: {businessHours.saturday}</p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Map Mockup */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-lg bg-slate-200 dark:bg-slate-800 h-[220px]">
              <div className="absolute inset-0 bg-sky-50 dark:bg-slate-900 grid grid-cols-6 grid-rows-4 gap-2 p-2 opacity-80">
                <div className="col-span-2 row-span-2 bg-slate-300 dark:bg-slate-800 rounded-xl" />
                <div className="col-span-3 bg-slate-300 dark:bg-slate-800 rounded-xl" />
                <div className="col-span-1 bg-slate-300 dark:bg-slate-800 rounded-xl" />
                <div className="col-span-4 bg-slate-300 dark:bg-slate-800 rounded-xl" />
                <div className="col-span-2 bg-slate-300 dark:bg-slate-800 rounded-xl" />
              </div>
              {/* Roads */}
              <div className="absolute inset-0 flex flex-col justify-around pointer-events-none">
                <div className="h-4 bg-white/95 dark:bg-slate-800/90 w-full rotate-2 shadow-sm" />
                <div className="h-4 bg-white/95 dark:bg-slate-800/90 w-full -rotate-6 shadow-sm" />
              </div>
              <div className="absolute inset-0 flex justify-around pointer-events-none">
                <div className="w-4 bg-white/95 dark:bg-slate-800/90 h-full rotate-12 shadow-sm" />
                <div className="w-4 bg-white/95 dark:bg-slate-800/90 h-full -rotate-12 shadow-sm" />
              </div>
              {/* Map pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#0F4C81] border-2 border-white shadow-lg animate-bounce flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <span className="mt-1.5 px-3 py-1 bg-[#202A36] text-white text-[9px] font-bold rounded-lg shadow-md uppercase tracking-wider whitespace-nowrap">
                  SmileCare Clinic
                </span>
              </div>
            </div>

          </div>

          {/* Right contact form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              {isSuccess ? (
                <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl border border-emerald-200/50 dark:border-emerald-900/30 text-center shadow-xl space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Message Dispatched!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you. Your message has been successfully routed to our front desk. We will respond via email within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0F4C81] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3A63] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-xl space-y-6"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      <Mail className="text-[#4FB3BF] w-6 h-6" /> Online Query Desk
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Submit general questions or pricing queries.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold uppercase mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 rounded-xl border dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm dark:text-white ${
                          errors.name ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
                        })}
                        className={`w-full px-4 py-3 rounded-xl border dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm dark:text-white ${
                          errors.email ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-2">
                      <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold uppercase mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(123) 456-7890"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm dark:text-white"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold uppercase mb-2">Message</label>
                      <textarea
                        rows={5}
                        placeholder="How can we assist you?"
                        {...register("message", { required: "Message is required" })}
                        className={`w-full px-4 py-3 rounded-xl border dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm dark:text-white resize-none ${
                          errors.message ? 'border-red-400' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-full bg-[#0F4C81] hover:bg-[#0B3A63] text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#0F4C81]/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isPending ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

        </div>

        {/* Local SEO metadata block */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-3">
              <h4 className="font-extrabold text-[#0F4C81] dark:text-[#4FB3BF] uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> Covered Service Areas
              </h4>
              <ul className="space-y-1.5 text-slate-500 dark:text-slate-400 text-xs">
                {serviceAreas.map((area, idx) => (
                  <li key={idx}>&bull; {area}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-3">
              <h4 className="font-extrabold text-[#0F4C81] dark:text-[#4FB3BF] uppercase tracking-wider text-xs flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Nearby Landmarks
              </h4>
              <ul className="space-y-1.5 text-slate-500 dark:text-slate-400 text-xs">
                {nearbyLocations.map((landmark, idx) => (
                  <li key={idx}>&bull; {landmark}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="space-y-3">
              <h4 className="font-extrabold text-[#0F4C81] dark:text-[#4FB3BF] uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Emergency Dentistry
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                {emergencyContact.guidelines}
              </p>
              <div className="mt-2 text-xs font-bold text-[#0F4C81] dark:text-[#4FB3BF]">
                Helpline: {emergencyContact.phone}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
};
export default Contact;
