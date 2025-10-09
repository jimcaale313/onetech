import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Charts = ({ expenses }) => {
  const [activeChart, setActiveChart] = useState('category');

  // Category breakdown
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const categoryColors = {
    'Office Supplies': 'bg-blue-500',
    'Technology': 'bg-purple-500',
    'Furniture': 'bg-green-500'
  };

  // Weekly data (last 4 weeks)
  const getWeeklyData = () => {
    const weeks = [];
    const now = new Date();
    
    for (let i = 3; i >= 0; i--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - (i * 7) - now.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      const weekExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= weekStart && expenseDate <= weekEnd;
      });
      
      const total = weekExpenses.reduce((sum, expense) => sum + expense.amount, 0);
      weeks.push({
        label: `Week ${4 - i}`,
        amount: total
      });
    }
    
    return weeks;
  };

  const weeklyData = getWeeklyData();
  const maxWeekly = Math.max(...weeklyData.map(w => w.amount), 1);

  const totalExpenses = Object.values(categoryData).reduce((sum, amount) => sum + amount, 0);

  const renderCategoryChart = () => (
    <div className="space-y-4">
      {Object.entries(categoryData).map(([category, amount]) => {
        const percentage = totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0;
        return (
          <div key={category} className="space-y-2">
            <div className="flex justify-between text-white/80 text-sm">
              <span>{category}</span>
              <span>${amount.toLocaleString()} ({percentage.toFixed(1)}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-3 rounded-full ${categoryColors[category]}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderWeeklyChart = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {weeklyData.map((week, index) => {
          const height = maxWeekly > 0 ? (week.amount / maxWeekly) * 100 : 0;
          return (
            <div key={week.label} className="text-center">
              <div className="h-32 flex items-end justify-center mb-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="w-8 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg min-h-[4px]"
                />
              </div>
              <p className="text-white/80 text-xs">{week.label}</p>
              <p className="text-white font-semibold text-sm">${week.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          Expense Analytics
        </h2>
        
        <div className="flex gap-2">
          <Button
            onClick={() => setActiveChart('category')}
            variant={activeChart === 'category' ? 'default' : 'ghost'}
            size="sm"
            className={`${activeChart === 'category' ? 'bg-white/30' : 'bg-white/10'} text-white hover:bg-white/20`}
          >
            <PieChart className="w-4 h-4 mr-1" />
            Categories
          </Button>
          <Button
            onClick={() => setActiveChart('weekly')}
            variant={activeChart === 'weekly' ? 'default' : 'ghost'}
            size="sm"
            className={`${activeChart === 'weekly' ? 'bg-white/30' : 'bg-white/10'} text-white hover:bg-white/20`}
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            Weekly
          </Button>
        </div>
      </div>

      <motion.div
        key={activeChart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeChart === 'category' ? renderCategoryChart() : renderWeeklyChart()}
      </motion.div>

      {expenses.length === 0 && (
        <div className="text-center py-8">
          <p className="text-white/60">Add some expenses to see analytics!</p>
        </div>
      )}
    </div>
  );
};

export default Charts;