import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Users, Leaf } from 'lucide-react';

const values = [
  { name: 'Integrity', icon: ShieldCheck, description: 'Honesty, transparency, and fairness in all our dealings.' },
  { name: 'Innovation', icon: Zap, description: 'Modern solutions to meet evolving needs.' },
  { name: 'Quality', icon: Award, description: 'High international standards for every product and service.' },
  { name: 'Customer Focus', icon: Users, description: 'Putting clients at the heart of our business.' },
  { name: 'Sustainability', icon: Leaf, description: 'Operating responsibly for our community and environment.' },
];

const CoreValues = () => {
  return (
    <section id="values" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide us.</p>
        </div>
        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange text-white mx-auto mb-5">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-purple font-heading">{value.name}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;