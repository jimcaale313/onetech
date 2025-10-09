import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <img class="w-full h-full object-cover" alt="Modern office background" src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
      </div>
      <div className="absolute inset-0 bg-brand-purple opacity-80 z-10"></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl font-heading"
        >
          Welcome to <span className="text-brand-orange">OneTech</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          Your Trusted Partner for Technology and Office Solutions in the heart of Hargeisa, Somaliland.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10"
        >
          <div className="rounded-md shadow">
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-500 md:py-4 md:text-lg md:px-10 cursor-pointer transition-transform transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-brand-purple md:py-4 md:text-lg md:px-10 cursor-pointer transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">
          <div className="w-8 h-14 border-2 border-gray-300 rounded-full flex justify-center items-start p-1">
            <motion.div 
              className="w-2 h-2 bg-gray-300 rounded-full"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;