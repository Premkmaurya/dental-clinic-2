import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, Shield, Award, CheckSquare, ShieldCheck, Microscope
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useCountUp } from '../hooks/useCountUp';

import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Accordion from '../components/Accordion';
import SharedCTA from '../components/SharedCTA';
import { getDentistSchema } from '../data/localSeoData';

// Import local assets
import heroFallback from '../assets/images/hero_fallback.png';
import beforeTeeth from '../assets/images/before_teeth.png';
import afterTeeth from '../assets/images/after_teeth.png';
import gallery1 from '../assets/images/gallery_1.png';

export const Home: React.FC = () => {
  const { openBooking } = useBooking();
  const [triggerCounts, setTriggerCounts] = useState(false);

  useEffect(() => {
    setTriggerCounts(true);
  }, []);

  const countPatients = useCountUp(10000, 2000, triggerCounts);
  const countExperience = useCountUp(15, 1500, triggerCounts);

  const featuredServices = [
    { id: 'teeth-whitening', title: 'Teeth Whitening', desc: 'In-office professional Zoom bleaching for up to 8 shades brighter teeth.', icon: Sparkles },
    { id: 'dental-implants', title: 'Dental Implants', desc: 'Bio-compatible titanium anchors replacing missing teeth permanently.', icon: Shield },
    { id: 'invisalign', title: 'Invisalign aligners', desc: 'Clear, custom removable aligners to align teeth completely invisibly.', icon: CheckSquare }
  ];

  const clinicHighlights = [
    { title: 'Pain-Free Technology', desc: 'Advanced sedation and local computerized numbing minimize discomfort.', icon: ShieldCheck },
    { title: 'Experienced Specialists', desc: 'Consultations are handled directly by board-certified dental surgeons.', icon: Award },
    { title: 'DigitalCT Scanning', desc: 'Ultra-low radiation 3D scanning ensures surgical precision.', icon: Microscope }
  ];

  const faqs = [
    { question: 'Is dental treatment painful?', answer: 'Not at all. We utilize modern local anesthetics, advanced computerized numbing, and sedation options to make all procedures completely comfortable.' },
    { question: 'Do you accept insurance?', answer: 'Yes, we accept major PPO dental insurance policies. Our billing team files claims directly so you pay less.' },
    { question: 'How long does a procedure take?', answer: 'Teeth cleaning takes 45-60 mins, whitening takes 1 hour, and cosmetic bonding is completed in a single short visit.' }
  ];

  const dentistSchema = getDentistSchema();

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <SEO 
        title="SmileCare | Premium Private Dental Practice & Cosmetic Surgery"
        description="Experience advanced, pain-free dental care at SmileCare. We specialize in dental implants, Invisalign, veneers, whitening, and root canals."
        ogImage={heroFallback}
        schemas={[dentistSchema]}
      />

      {/* SECTION 1 — HERO SECTION */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        {/* Autoplay Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={heroFallback}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-treating-a-patient-41582-large.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col items-center text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="inline-block text-xs font-bold tracking-widest text-[#4FB3BF] uppercase mb-4">
              PREMIUM DENTAL CARE
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <h1 className="flex flex-col items-center tracking-tighter leading-none mb-6">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-slate-200">
                Healthy.
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#4FB3BF] mt-[-10px] md:mt-[-16px]">
                Confident Smiles.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Advanced dental care designed for comfort, confidence, and lifelong oral health. Experience dentistry redefined with luxury and technology.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => openBooking()}
                className="px-8 py-4 rounded-full bg-[#0F4C81] dark:bg-[#4FB3BF] text-white dark:text-slate-900 font-bold hover:bg-[#0B3A63] dark:hover:bg-[#3ea2ae] shadow-lg shadow-[#0F4C81]/25 hover:shadow-xl transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-wider"
              >
                Book Appointment
              </button>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-wider"
              >
                View Services
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">
              {[
                { value: `${countPatients.toLocaleString()}+`, label: 'Happy Patients' },
                { value: `${countExperience}+`, label: 'Years Experience' },
                { value: 'Modern', label: 'Technology' },
                { value: 'Certified', label: 'Specialists' },
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-950/40 backdrop-blur-md px-4 py-6 rounded-2xl border border-white/10 text-center shadow-sm hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <h4 className="text-2xl md:text-3xl font-extrabold text-[#4FB3BF]">{card.value}</h4>
                  <p className="text-[10px] font-bold text-slate-300 mt-1.5 uppercase tracking-wider">{card.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* SECTION 2 — FEATURED SERVICES */}
      <section className="py-24 bg-transparent border-y border-slate-200/20 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold text-[#4FB3BF] uppercase tracking-widest">Featured Treatments</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-2 mb-4">
                Smile Transformations
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Advanced clinical diagnostics and treatment options crafted for aesthetic symmetry and long-term chewing function.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal 
                  key={service.id} 
                  direction="up" 
                  delay={index * 0.1}
                >
                  <div className="glass-card glass-card-hover p-8 rounded-3xl h-full flex flex-col justify-between border border-slate-100 dark:border-slate-800/60 shadow-md">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-transparent flex items-center justify-center text-[#0F4C81] dark:text-[#4FB3BF] mb-6 shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-6">{service.desc}</p>
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] dark:text-[#4FB3BF] hover:text-[#4FB3BF] dark:hover:text-white transition-colors group mt-auto"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0F4C81] dark:text-[#4FB3BF] hover:text-[#4FB3BF] dark:hover:text-white transition-colors"
              >
                Explore All Services <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CLINIC HIGHLIGHTS */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#4FB3BF] uppercase tracking-widest">Excellence Redefined</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight">
                Why SmileCare Represents Premium Care
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We design dental consultations to feel relaxing. Our custom suites combine board-certified specialists, digital microscopes, and painless sedation layouts.
              </p>
              
              <div className="space-y-4">
                {clinicHighlights.map((hl, i) => {
                  const Icon = hl.icon;
                  return (
                    <div key={i} className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-[#0F4C81] dark:text-[#4FB3BF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm">{hl.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{hl.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-200/50 dark:border-slate-800">
              <img 
                src={gallery1} 
                alt="Clinic Treatment Operatory" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — BEFORE & AFTER COMPARISON */}
      <section className="py-24 bg-white dark:bg-slate-800 border-y border-slate-200/20 dark:border-slate-800/30">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold text-[#4FB3BF] uppercase tracking-widest">Real Results</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-2 mb-4">
                Smile Restorations
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Drag the interactive slider to compare clinical alignment and whitening outcomes.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <BeforeAfterSlider 
              beforeImage={beforeTeeth} 
              afterImage={afterTeeth} 
              beforeLabel="Before Veneers" 
              afterLabel="After Invisalign & Whitening"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — TESTIMONIALS */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold text-[#4FB3BF] uppercase tracking-widest">Patient Reviews</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white tracking-tight mt-2">
                What Our Patients Say
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — QUICK FAQ */}
      <section className="py-24 bg-white dark:bg-slate-800 border-t border-slate-200/20 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold text-[#4FB3BF] uppercase tracking-widest">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mt-2 mb-4">
                Common Questions answered
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <Accordion items={faqs} />
          </ScrollReveal>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Link 
                to="/faq" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0F4C81] dark:text-[#4FB3BF] hover:text-[#4FB3BF] dark:hover:text-white transition-colors"
              >
                Read All FAQs <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SharedCTA />
    </div>
  );
};
export default Home;
