import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Values', to: 'values' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <img className="h-12 w-auto" src="https://horizons-cdn.hostinger.com/82193ebb-3959-4558-ab96-3dd2f539e383/e7afee8144ff5b0cadb236cb5282590a.png" alt="OneTech Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`px-4 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors ${isScrolled ? 'text-brand-purple' : 'text-white'} hover:text-brand-orange`}
                  activeClass="text-brand-orange"
                  spy={true}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-brand-purple' : 'text-white'} hover:text-brand-orange`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-brand-purple hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                activeClass="text-brand-orange"
                spy={true}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;