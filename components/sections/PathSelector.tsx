'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const paths = [
  {
    id: 'clinics',
    icon: '🏥',
    title: 'For Clinics',
    description: 'Scale your practice with proven systems that increase profitability, optimize operations, and deliver outstanding patient experiences.',
    link: '/for-clinics'
  },
  {
    id: 'suppliers',
    icon: '📦',
    title: 'For Suppliers',
    description: 'Strengthen your market position with strategic guidance on distribution, partnerships, and industry positioning.',
    link: '/for-suppliers'
  }
];

export default function PathSelector() {
  return (
    <section className="bg-apple-gray-50 py-24 px-5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[48px] md:text-[40px] sm:text-[32px] font-bold text-apple-text-primary mb-4 tracking-tight">
          Choose your path to growth
        </h2>
        
        <p className="text-center text-[21px] md:text-[17px] text-apple-text-secondary mb-16 max-w-[700px] mx-auto">
          Whether you're scaling a clinic or supplying the industry, 
          we have proven strategies designed for your success.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              id={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[18px] p-12 md:p-10 sm:p-8 text-center transition-all hover:shadow-2xl border border-black/5"
            >
              <motion.div 
                className="text-6xl mb-6 inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {path.icon}
              </motion.div>
              
              <h3 className="text-[32px] md:text-[28px] sm:text-[24px] font-bold text-apple-text-primary mb-4 tracking-tight">
                {path.title}
              </h3>
              
              <p className="text-[17px] text-apple-text-secondary leading-[1.5] mb-7">
                {path.description}
              </p>
              
              <Link
                href={path.link}
                className="inline-flex items-center gap-2 text-[17px] text-apple-blue font-medium hover:gap-3 transition-all"
              >
                {path.title === 'For Clinics' ? 'Explore clinic solutions' : 'Explore supplier solutions'} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
