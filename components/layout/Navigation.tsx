'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navigation after loading animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/10"
      initial={{ opacity: 0, y: -100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-apple-text-primary tracking-tight">
          EQUALS<span className="text-apple-blue">3</span>
        </Link>
        
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link 
              href="/#clinics" 
              className="text-sm text-apple-text-primary hover:opacity-60 transition-opacity"
            >
              For Clinics
            </Link>
          </li>
          <li>
            <Link 
              href="/#suppliers" 
              className="text-sm text-apple-text-primary hover:opacity-60 transition-opacity"
            >
              For Suppliers
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-sm text-apple-text-primary hover:opacity-60 transition-opacity"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/resources" 
              className="text-sm text-apple-text-primary hover:opacity-60 transition-opacity"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-sm text-apple-text-primary hover:opacity-60 transition-opacity"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
