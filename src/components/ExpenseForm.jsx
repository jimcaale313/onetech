import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Package, Monitor, Armchair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Office Supplies');

  const categories = [
    { name: 'Office Supplies', icon: Package, color: 'from-blue-500 to-blue-600' },
    { name: 'Technology', icon: Monitor, color: 'from-purple-500 to-purple-600' },
    { name: 'Furniture', icon: Armchair, color: 'from-green-500 to-green-600' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description.trim() || !amount || amount <= 0) {
      toast({
        title: "Invalid Input ⚠️",
        description: "Please fill in all fields with valid values",
        variant: "destructive"
      });
      return;
    }

    onAddExpense({
      description: description.trim(),
      amount: parseFloat(amount),
      category
    });

    setDescription('');
    setAmount('');
    
    toast({
      title: "Expense Added! ✅",
      description: `${description} - $${amount} added to ${category}`,
    });
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Plus className="w-6 h-6" />
        Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="e.g., Office Supplies - Notebooks"
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Amount ($)
          </label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm font-medium mb-3">
            Category
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <motion.button
                  key={cat.name}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategory(cat.name)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    category === cat.name
                      ? 'border-white bg-white/30'
                      : 'border-white/30 bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 p-1.5 rounded-lg bg-gradient-to-r ${cat.color}`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{cat.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Expense
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;