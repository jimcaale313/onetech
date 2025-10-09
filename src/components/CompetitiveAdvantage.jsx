import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const advantages = [
  'A one-stop shop for both technology and stationery needs.',
  'Strong supplier partnerships ensuring quality and affordability.',
  'Skilled technical team providing reliable support.',
  'Commitment to customer satisfaction and long-term business relationships.',
];

const CompetitiveAdvantage = () => {
  return (
    <section id="advantage" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="section-title">Our Competitive Advantage</h2>
          <p className="section-subtitle">Why choose OneTech?</p>
        </div>
        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-orange text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-brand-purple">{advantage}</p>
                </dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;