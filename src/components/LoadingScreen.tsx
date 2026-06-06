import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-[#0F4C81] dark:border-t-[#4FB3BF]"
        />

        {/* Logo in the center */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0F4C81] flex items-center justify-center text-white"
        >
          <Heart className="w-6 h-6 fill-white" />
        </motion.div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-8 tracking-wider uppercase"
        >
          SmileCare
        </motion.h2>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold tracking-widest mt-1.5 uppercase">
          Excellence in Dental Care
        </p>
      </div>
    </motion.div>
  );
};
export default LoadingScreen;
