import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Printer, Network, Wrench, BookOpen, ShoppingCart, PenTool, Briefcase } from 'lucide-react';

const services = [
  {
    category: 'Technology Solutions',
    items: [
      { name: 'Computers & Laptops', icon: Laptop },
      { name: 'Networking & IT', icon: Network },
      { name: 'Printers & Scanners', icon: Printer },
      { name: 'Technical Support', icon: Wrench },
    ],
  },
  {
    category: 'Office Equipment & Stationery',
    items: [
      { name: 'General Stationery', icon: BookOpen },
      { name: 'Office Furniture', icon: Briefcase },
      { name: 'School Supplies', icon: ShoppingCart },
      { name: 'Printing Paper', icon: PenTool },
    ],
  },
  {
    category: 'Value-Added Services',
    items: [
      { name: 'Bulk Supply', icon: ShoppingCart },
      { name: 'Custom Branding', icon: PenTool },
      { name: 'Procurement Services', icon: Briefcase },
    ],
  },
];

const ProductsServices = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Products & Services</h2>
          <p className="section-subtitle">A one-stop shop for all your office needs.</p>
        </div>
        <div className="mt-16 space-y-16">
          {services.map((serviceCat, catIndex) => (
            <div key={serviceCat.category}>
              <h3 className="text-2xl font-bold text-center text-brand-purple mb-10 font-heading">{serviceCat.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceCat.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange text-white mb-4">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-brand-purple">{item.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;