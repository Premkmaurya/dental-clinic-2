"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "My go-to dental clinic. The Invisalign process was smooth and the results are amazing!",
    by: "Alex Jenkins, Invisalign Patient",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 1,
    testimonial: "The dental implant procedure was completely pain-free. I highly recommend SmileCare!",
    by: "Dan Miller, Implant Patient",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 2,
    testimonial: "I've always been anxious about dentist visits, but the staff here made me feel so relaxed.",
    by: "Stephanie Ross, General Dentistry",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 3,
    testimonial: "SmileCare's preventative care keeps my family's teeth perfectly healthy. The best choice!",
    by: "Marie Adams, Family Plan Patient",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars for their cosmetic veneers, I'd give 12. Unbelievable results!",
    by: "Andre Chen, Veneers Patient",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY I found this clinic! They resolved my wisdom tooth pain in just one visit.",
    by: "Jeremy Scott, Emergency Patient",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing to get implants, but now that I have them, I'm never looking back.",
    by: "Pam Green, Restoration Patient",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 7,
    testimonial: "The restoration work is incredible. My self-confidence has improved so much!",
    by: "Daniel Foster, Cosmetic Patient",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 8,
    testimonial: "SmileCare is just the best dental practice. Period.",
    by: "Fernando Diaz, Preventative Patient",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 9,
    testimonial: "I started visiting SmileCare 5 years ago and my oral hygiene is at its absolute best.",
    by: "Andy Kim, Long-term Patient",
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for an honest, premium dentist for years. Glad I finally found SmileCare!",
    by: "Pete Sanders, General Dentistry",
    imgSrc: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 11,
    testimonial: "The treatment plan was clear and transparent. No surprise costs, just great results.",
    by: "Marina Velez, Invisalign Patient",
    imgSrc: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 12,
    testimonial: "SmileCare's patient care team is unparalleled. They checked on me the day after surgery.",
    by: "Olivia Harper, Surgery Patient",
    imgSrc: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 13,
    testimonial: "The comfort and professionalism at SmileCare are off the charts. Absolutely top tier!",
    by: "Raj Patel, Orthodontic Patient",
    imgSrc: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 14,
    testimonial: "Their digital 3D scanning is amazing. The crown fits perfectly. A true game-changer!",
    by: "Lila Young, Crown & Bridge Patient",
    imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 15,
    testimonial: "The root canal treatment was completely painless. Modern dentistry at its finest!",
    by: "Trevor Hall, Root Canal Patient",
    imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how SmileCare uses the latest laser and 3D technologies. Always one step ahead.",
    by: "Naomi Ward, Tech-driven Treatment",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 17,
    testimonial: "Getting teeth whitening here was a fantastic decision. The confidence boost is incredible!",
    by: "Victor Cruz, Whitening Patient",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 18,
    testimonial: "SmileCare's clinical hygiene is flawless and their rooms feel like a luxury spa. Perfect balance!",
    by: "Yuki Tanaka, Spa Experience",
    imgSrc: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=150&h=150&fit=crop&q=80"
  },
  {
    tempId: 19,
    testimonial: "We've tried many practices, but SmileCare stands out in terms of comfort and care.",
    by: "Zoe Bell, Family Dentistry",
    imgSrc: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop&q=80"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out select-none",
        isCenter 
          ? "z-10 bg-slate-900 text-white border-[#4FB3BF]" 
          : "z-0 bg-slate-950/90 text-slate-400 border-slate-800 hover:border-[#4FB3BF]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 0px #4FB3BF" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#4FB3BF]" : "bg-slate-800"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-6 h-14 w-12 bg-slate-800 object-cover object-top rounded-sm"
        style={{
          boxShadow: "3px 3px 0px #0f172a"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium leading-snug",
        isCenter ? "text-white" : "text-slate-300"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-xs font-semibold tracking-wide uppercase",
        isCenter ? "text-[#4FB3BF]" : "text-slate-500"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
            "bg-slate-950 border border-slate-800 text-slate-400 hover:bg-[#0F4C81] hover:text-white hover:border-[#0F4C81]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4FB3BF]"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
            "bg-slate-950 border border-slate-800 text-slate-400 hover:bg-[#0F4C81] hover:text-white hover:border-[#0F4C81]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4FB3BF]"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
