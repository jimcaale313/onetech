import React from 'react';
import { Facebook, Instagram, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} One Technology and Stationery Supplies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://www.tiktok.com/@onetechandstationary" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
              <Link className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580678278696" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/onetech127?igsh=MWR1MjQxOG0wY2lyeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;