import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Reusing our generated high-quality images for testimonial profiles
import patient1 from '../assets/images/doctor_2.png'; // Smiling female
import patient2 from '../assets/images/doctor_3.png'; // Friendly male/female
import patient3 from '../assets/images/doctor_1.png'; // Smiling male

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Invisalign Patient",
    image: patient1,
    rating: 5,
    text: "The Invisalign treatment completely transformed my smile! The doctors were incredibly professional and walked me through every step. The clinic feels like a premium wellness spa rather than a dental office."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Dental Implant Patient",
    image: patient2,
    rating: 5,
    text: "I was extremely nervous about getting a dental implant, but the pain-free procedures here are the real deal. The digital scanning technology is state-of-the-art. Highly recommended!"
  },
  {
    id: 3,
    name: "David Ross",
    role: "Cosmetic Veneers Patient",
    image: patient3,
    rating: 5,
    text: "SmileCare gave me the confidence I needed. The teeth whitening and veneer procedures were flawless, and the staff treated me with exceptional care. A true luxury healthcare experience!"
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-[#E8F4FF] to-transparent rounded-full filter blur-3xl opacity-60 pointer-events-none" />

      <div className="relative overflow-hidden min-h-[320px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full glass-card p-8 md:p-12 rounded-3xl border border-white/50 flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Patient Photo */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <Quote className="w-10 h-10 text-[#4FB3BF]/40 mb-3" />
              
              <p className="text-lg text-white/80 italic leading-relaxed mb-6 font-medium">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Patient Meta */}
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-[#4FB3BF] font-semibold uppercase tracking-wider">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0F4C81] hover:text-white transition-colors duration-300 shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0F4C81] hover:text-white transition-colors duration-300 shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > activeIndex ? 1 : -1);
              setActiveIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 bg-[#0F4C81]' : 'bg-slate-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default TestimonialCarousel;
