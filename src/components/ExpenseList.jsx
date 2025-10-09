import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Package, Monitor, Armchair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Office Supplies':
        return Package;
      case 'Technology':
        return Monitor;
      case 'Furniture':
        return Armchair;
      default:
        return Package;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Office Supplies':
        return 'from-blue-500 to-blue-600';
      case 'Technology':
        return 'from-purple-500 to-purple-600';
      case 'Furniture':
        return 'from-green-500 to-green-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const handleDelete = (expense) => {
    onDeleteExpense(expense.id);
    toast({
      title: "Expense Deleted! 🗑️",
      description: `${expense.description} has been removed`,
    });
  };

  const recentExpenses = expenses.slice(0, 8);

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-4">Recent Expenses</h2>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {recentExpenses.map((expense) => {
            const IconComponent = getCategoryIcon(expense.category);
            const colorClass = getCategoryColor(expense.category);
            
            return (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${colorClass} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{expense.description}</p>
                      <p className="text-white/60 text-xs">{expense.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">${expense.amount}</span>
                    <Button
                      onClick={() => handleDelete(expense)}
                      variant="ghost"
                      size="sm"
                      className="text-red-300 hover:text-red-200 hover:bg-red-500/20 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {expenses.length === 0 && (
          <div className="text-center py-8">
            <p className="text-white/60">No expenses yet. Add your first expense above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;