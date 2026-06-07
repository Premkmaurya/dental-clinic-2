import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onFinished: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const intervalTime = 20;
    
    const timer = setInterval(() => {
      // Simulate non-linear progress for a premium, organic feel
      let increment = 1;
      if (current < 30) {
        increment = Math.floor(Math.random() * 3) + 2; // fast start
      } else if (current < 75) {
        increment = Math.floor(Math.random() * 2) + 1; // slow middle
      } else {
        increment = Math.floor(Math.random() * 4) + 1; // fast end
      }
      
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          onFinished();
        }, 400); // Wait a brief moment at 100% before transition
      }
      setCount(current);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-[#FF4A22] flex flex-col justify-between p-6 select-none overflow-hidden"
    >
      {/* Top Black Bar */}
      <div className="w-full bg-black rounded-xl py-3 px-6 flex justify-between items-center text-white font-mono text-[9px] sm:text-[11px] tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A22] animate-pulse" />
          <span>SMILECARE // CLINIC</span>
        </div>
        <div>PREMIUM DENTAL PRACTICE</div>
      </div>

      {/* Center content spacer */}
      <div className="flex-grow" />

      {/* Bottom Section */}
      <div className="w-full flex justify-between items-end">
        {/* Left Side: Brand Icon Container */}
        <div className="mb-4">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 hover:scale-105 transition-transform duration-300">
            <Heart className="w-6 h-6 fill-[#FF4A22] text-[#FF4A22] animate-pulse" />
          </div>
        </div>

        {/* Right Side: Giant Counter */}
        <div className="font-sans font-extrabold text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] text-black leading-[0.8] tracking-tighter pr-2 select-none">
          {count < 10 ? `0${count}` : count}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
