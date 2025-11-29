'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '£30M+', label: 'Budgets Managed' },
  { number: '10+', label: 'Global Brands' },
  { number: '400+', label: 'Team Members Led' }
];

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!inView) return;
    
    // Extract number and suffix (e.g., "25+" -> 25 and "+")
    const match = value.match(/^([£]?)(\d+)([+]?)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const [, prefix, numStr, suffix] = match;
    const targetNumber = parseInt(numStr);
    const duration = 2000;
    const steps = 60;
    const increment = targetNumber / steps;
    
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setDisplayValue(`${prefix}${targetNumber}${suffix}`);
        clearInterval(interval);
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [value, inView]);
  
  return <>{displayValue}</>;
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-5"
            >
              <div className="text-[56px] md:text-[48px] sm:text-[40px] font-bold text-apple-text-primary mb-2 tracking-tight">
                <AnimatedNumber value={stat.number} inView={inView} />
              </div>
              <div className="text-[17px] text-apple-text-secondary font-normal">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
