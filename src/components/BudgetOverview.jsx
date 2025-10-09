import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, TrendingUp, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BudgetOverview = ({ budget, setBudget, totalSpent, remaining }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleSaveBudget = () => {
    if (newBudget > 0) {
      setBudget(newBudget);
      setIsEditing(false);
      toast({
        title: "Budget Updated! 💰",
        description: `Your monthly budget has been set to $${newBudget}`,
      });
    }
  };

  const spentPercentage = budget > 0 ? (totalSpent / budget) * 100 : 0;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <DollarSign className="w-6 h-6" />
          Monthly Budget Overview
        </h2>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <Edit3 className="w-4 h-4" />
        </Button>
      </div>

      {isEditing ? (
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(Number(e.target.value))}
              className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter budget amount"
            />
            <Button onClick={handleSaveBudget} className="bg-green-500 hover:bg-green-600 text-white">
              Save
            </Button>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm font-medium">Total Budget</span>
            <DollarSign className="w-5 h-5 text-blue-200" />
          </div>
          <p className="text-3xl font-bold text-white">${budget.toLocaleString()}</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm font-medium">Total Spent</span>
            <TrendingDown className="w-5 h-5 text-red-200" />
          </div>
          <p className="text-3xl font-bold text-white">${totalSpent.toLocaleString()}</p>
          <p className="text-sm text-white/70 mt-1">{spentPercentage.toFixed(1)}% of budget</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`bg-gradient-to-br ${remaining >= 0 ? 'from-green-500/30 to-green-600/30' : 'from-red-500/30 to-red-600/30'} rounded-2xl p-6 border border-white/20`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm font-medium">Remaining</span>
            <TrendingUp className={`w-5 h-5 ${remaining >= 0 ? 'text-green-200' : 'text-red-200'}`} />
          </div>
          <p className="text-3xl font-bold text-white">${remaining.toLocaleString()}</p>
          <p className="text-sm text-white/70 mt-1">
            {remaining >= 0 ? 'Within budget' : 'Over budget'}
          </p>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-white/80 mb-2">
          <span>Budget Progress</span>
          <span>{spentPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(spentPercentage, 100)}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-3 rounded-full ${spentPercentage > 100 ? 'bg-red-500' : spentPercentage > 80 ? 'bg-yellow-500' : 'bg-green-500'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;