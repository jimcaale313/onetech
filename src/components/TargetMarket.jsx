import React from 'react';
import { motion } from 'framer-motion';
import { Building, Landmark, School, Store } from 'lucide-react';

const markets = [
  { name: 'Corporate Sector', icon: Building, description: 'Offices, NGOs, banks, and private companies.' },
  { name: 'Government Institutions', icon: Landmark, description: 'Ministries, agencies, and public service organizations.' },
  { name: 'Educational Institutions', icon: School, description: 'Schools, universities, and training centers.' },
  { name: 'Retail Customers', icon: Store, description: 'Walk-in clients and small businesses.' },
];

const TargetMarket = () => {
  return (
    <section id="target-market" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Target Market</h2>
          <p className="section-subtitle">Serving a diverse range of clients.</p>
        </div>
        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-purple text-white mx-auto mb-6">
                <market.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-brand-purple font-heading">{market.name}</h3>
              <p className="mt-2 text-gray-600">{market.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;