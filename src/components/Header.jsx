import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
        OneTech Budget Tracker
      </h1>
      
      <p className="text-lg text-white/90 mb-2">
        Smart Financial Management for Technology & Office Solutions
      </p>
      
      <p className="text-sm text-white/70">
        Electronics | Stationery | Furniture - Your Trusted Partner
      </p>
    </motion.header>
  );
};

export default Header;