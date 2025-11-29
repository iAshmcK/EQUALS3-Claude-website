'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center px-5 pt-32 pb-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-[980px] text-center">
        <p className="text-[17px] text-apple-blue font-semibold mb-2 tracking-wide">
          EQUALS3 — The Growth Collective
        </p>
        
        <h1 className="text-[80px] md:text-[64px] sm:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] mb-4 text-apple-text-primary">
          Transforming aesthetic<br />medicine businesses
        </h1>
        
        <p className="text-[28px] md:text-[21px] sm:text-[17px] text-apple-text-secondary mb-8 leading-[1.4]">
          Data-driven growth strategies from billion-pound brands,<br className="hidden md:block" />
          tailored for ambitious clinics and suppliers.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap mt-6">
          <Link
            href="/#clinics"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-apple-blue text-white rounded-full text-[17px] font-medium hover:bg-apple-blue-hover transition-all hover:scale-[1.02]"
          >
            Explore Solutions
          </Link>
          
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-apple-blue border-2 border-apple-blue rounded-full text-[17px] font-medium hover:bg-apple-blue/5 transition-all hover:scale-[1.02]"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
