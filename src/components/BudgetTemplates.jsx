import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Building, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BudgetTemplates = ({ setBudget }) => {
  const templates = [
    {
      name: 'Small Office',
      budget: 1500,
      icon: Building,
      description: 'Perfect for small businesses and startups',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Corporate',
      budget: 5000,
      icon: Users,
      description: 'Ideal for medium to large corporations',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Educational',
      budget: 3000,
      icon: GraduationCap,
      description: 'Designed for schools and universities',
      color: 'from-green-500 to-green-600'
    }
  ];

  const applyTemplate = (template) => {
    setBudget(template.budget);
    toast({
      title: "Template Applied! 📋",
      description: `${template.name} budget template ($${template.budget}) has been applied`,
    });
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5" />
        Budget Templates
      </h2>

      <div className="space-y-3">
        {templates.map((template, index) => {
          const IconComponent = template.icon;
          return (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              onClick={() => applyTemplate(template)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${template.color} flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">{template.name}</h3>
                  <p className="text-white/60 text-xs">{template.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">${template.budget.toLocaleString()}</p>
                  <p className="text-white/60 text-xs">monthly</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-xl border border-orange-300/30">
        <p className="text-white/80 text-xs text-center">
          💼 Click any template to apply it to your budget
        </p>
      </div>
    </div>
  );
};

export default BudgetTemplates;