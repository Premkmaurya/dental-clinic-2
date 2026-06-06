import React, { useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import SharedCTA from '../components/SharedCTA';
import ScrollReveal from '../components/ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'insurance' | 'treatment';
}

const faqs: FAQItem[] = [
  {
    question: 'Is dental treatment painful?',
    answer: 'Not at all. We utilize modern local anesthetics, advanced computerized numbing technology, and soft-tissue sedation options to make all procedures, including extractions and root canals, completely comfortable and virtually pain-free.',
    category: 'general'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major PPO dental insurance plans. Our front desk staff will handle all claims processing and help you maximize your dental benefits so you have minimal out-of-pocket costs.',
    category: 'insurance'
  },
  {
    question: 'How long does a procedure take?',
    answer: 'It depends on the treatment. A dental hygiene cleaning takes about 45 to 60 minutes. Zoom teeth whitening takes 1 hour. Complex procedures like veneers or crowns are completed in 2-3 short appointments.',
    category: 'treatment'
  },
  {
    question: 'What are your consultation charges?',
    answer: 'Initial comprehensive exams, which include high-resolution dental photos and a consult with our dentists, cost $99. This fee is fully waived if you choose to proceed with any treatment plan or if covered by insurance.',
    category: 'general'
  },
  {
    question: 'Do you provide emergency care?',
    answer: 'Yes, we offer emergency appointments on the same day for patients experiencing acute pain, swelling, tooth trauma, or broken dental restorations. Please call our emergency helpline directly.',
    category: 'general'
  },
  {
    question: 'How does insurance verification work?',
    answer: 'Before your first visit, you can submit your PPO details through our booking system. Our team contacts your provider to verify coverage levels, explaining co-pays and deductibles before any procedure starts.',
    category: 'insurance'
  },
  {
    question: 'What is the recovery time for a dental implant?',
    answer: 'The surgical procedure takes 1-2 hours. Initial gums healing takes 5-7 days. However, the implant post takes 3 to 6 months to fuse with the jawbone (osseointegration) before mounting the final crown.',
    category: 'treatment'
  }
];

export const FAQ: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'general' | 'insurance' | 'treatment'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(item => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': filteredFaqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28">
      <SEO 
        title="Patient FAQ & Insurance Guide | SmileCare"
        description="Find answers to common dental questions, check accepted PPO insurance plans, and review consultation rates at SmileCare."
        schemas={[schema]}
      />

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <HelpCircle className="w-4 h-4" /> Patient Helpdesk
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Have questions about root canals, whitening procedures, or PPO insurance claims? Review our patient answers below or search your query.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search questions (e.g. pain, insurance)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm dark:text-white"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center gap-2 md:gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {[
            { label: 'All Questions', value: 'all' },
            { label: 'General & Hours', value: 'general' },
            { label: 'Insurance & Costs', value: 'insurance' },
            { label: 'Dental Procedures', value: 'treatment' },
          ].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tab.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                filter === tab.value
                  ? 'bg-[#0F4C81] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <ScrollReveal>
          {filteredFaqs.length > 0 ? (
            <Accordion items={filteredFaqs} />
          ) : (
            <div className="text-center py-12 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <p className="text-slate-500 dark:text-slate-400 font-semibold">No questions matched your search term.</p>
              <button 
                onClick={() => { setSearchQuery(''); setFilter('all'); }}
                className="mt-4 text-[#0F4C81] dark:text-[#4FB3BF] text-sm font-bold"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </ScrollReveal>

      </div>

      <SharedCTA />
    </div>
  );
};
export default FAQ;
