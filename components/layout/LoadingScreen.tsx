'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative perspective-[1000px]">
            <motion.div
              className="text-white text-[120px] md:text-[80px] sm:text-[64px] font-bold tracking-tight"
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            >
              {['E', 'Q', 'U', 'A', 'L', 'S', '3'].map((letter, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${letter === '3' ? 'text-apple-blue' : ''}`}
                  initial={{ 
                    opacity: 0, 
                    y: 100, 
                    rotateX: -90 
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0 
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-[6px] uppercase font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            >
              The Growth Collective
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
