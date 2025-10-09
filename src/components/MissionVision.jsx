import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-brand-purple text-white p-8 lg:p-12 rounded-xl shadow-2xl h-full">
              <div className="flex items-center mb-4">
                <Eye className="w-10 h-10 text-brand-orange mr-4" />
                <h3 className="text-3xl font-bold font-heading">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-200">
                To become the most trusted and innovative provider of technology and stationery solutions in Somaliland, contributing to the growth and efficiency of organizations and individuals.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-8 lg:p-12 rounded-xl shadow-lg h-full">
              <div className="flex items-center mb-4">
                <Rocket className="w-10 h-10 text-brand-orange mr-4" />
                <h3 className="text-3xl font-bold text-brand-purple font-heading">Our Mission</h3>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Deliver high-quality products at competitive prices.</li>
                <li>Provide excellent after-sales support and customer service.</li>
                <li>Empower clients with tools for productivity and success.</li>
                <li>Build long-term partnerships based on reliability and trust.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;