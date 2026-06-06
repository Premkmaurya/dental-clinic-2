import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            className={`border rounded-2xl overflow-hidden glass-card transition-all duration-300 ${
              isOpen ? 'border-[#4FB3BF]/30 shadow-md shadow-[#0F4C81]/5' : 'border-slate-200/50'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-white/80 hover:text-[#109fffc7] transition-colors focus:outline-none"
            >
              <span className="pr-4">{item.question}</span>
              <div className={`p-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#E8F4FF]' : 'bg-slate-100'}`}>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#0F4C81]' : ''
                  }`} 
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="px-6 pb-6 text-white/80 leading-relaxed text-[15px] border-t border-slate-100/50 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
