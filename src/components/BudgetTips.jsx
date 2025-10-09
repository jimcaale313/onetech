import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BudgetTips = () => {
  const tips = [
    "Track every expense, no matter how small - they add up quickly!",
    "Set aside 20% of your budget for unexpected office supplies.",
    "Buy technology equipment in bulk to get better deals.",
    "Review your monthly expenses to identify spending patterns.",
    "Consider leasing expensive equipment instead of buying.",
    "Negotiate with suppliers for better rates on regular orders.",
    "Use digital tools to reduce paper and printing costs.",
    "Plan major purchases at the beginning of the fiscal year.",
    "Keep receipts organized for better expense tracking.",
    "Set up automatic alerts when you're close to budget limits.",
    "Compare prices from multiple suppliers before purchasing.",
    "Invest in quality furniture that lasts longer.",
    "Consider refurbished technology for cost savings.",
    "Schedule regular budget reviews with your team.",
    "Use energy-efficient equipment to reduce long-term costs."
  ];

  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [tips.length]);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(randomIndex);
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5" />
          Budget Tips
        </h2>
        <Button
          onClick={getRandomTip}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <motion.div
        key={currentTip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl p-4 border border-yellow-300/30"
      >
        <p className="text-white/90 text-sm leading-relaxed">
          💡 {tips[currentTip]}
        </p>
      </motion.div>

      <div className="flex justify-center mt-4">
        <div className="flex gap-1">
          {tips.slice(0, 5).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTip % 5 ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetTips;