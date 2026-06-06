import React from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';
import SharedCTA from '../components/SharedCTA';
import ScrollReveal from '../components/ScrollReveal';
import { googleReviews } from '../data/localSeoData';

export const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28">
      <SEO 
        title="Patient Reviews & Testimonials | SmileCare"
        description="Read real-world testimonials from patients who underwent Invisalign treatments, dental implants, veneers, and emergency dental surgery."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <MessageSquare className="w-4 h-4" /> Patient Feedback
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight animate-fade-in">
            Stories of Smile Transformations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Discover how our digital diagnostic technology and board-certified specialists have restored comfort, chewing capacity, and self-confidence.
          </p>
        </div>

        {/* Top Featured Reviews Carousel */}
        <div className="mb-24">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Featured Transformations
          </h3>
          <ScrollReveal>
            <StaggerTestimonials />
          </ScrollReveal>
        </div>

        {/* Google Reviews Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white">
              Google Customer Reviews
            </h2>
            <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
              Verified 5-Star Ratings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((rev) => (
              <ScrollReveal key={rev.id}>
                <div className="glass-card p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-md h-full flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
                  <div className="space-y-4">
                    {/* Star Rating */}
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-[#4FB3BF]/20" />
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40">
                    <img 
                      src={rev.avatar} 
                      alt={rev.author} 
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white">{rev.author}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">{rev.date} &bull; Verified Google Patient</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

      <SharedCTA />
    </div>
  );
};
export default Testimonials;
