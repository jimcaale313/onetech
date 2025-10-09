import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Company Overview</h2>
          <p className="section-subtitle">Bridging technology and business needs in Somaliland.</p>
        </motion.div>
        <div className="mt-12 max-w-4xl mx-auto text-center text-gray-700 space-y-5 text-lg leading-relaxed">
          <p>
            One Technology and Stationery Supplies is a dynamic, forward-thinking company established in Hargeisa, Somaliland. Our mission is to bridge the gap between modern technology and everyday business needs by providing high-quality technology solutions, office equipment, and stationery products.
          </p>
          <p>
            We are committed to supporting businesses, educational institutions, government agencies, and individuals with reliable products and excellent customer service. By combining global best practices with local market understanding, we aim to be the leading provider of integrated office and technology solutions in Somaliland.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;