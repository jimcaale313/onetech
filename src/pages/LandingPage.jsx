import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import CoreValues from '@/components/CoreValues';
import ProductsServices from '@/components/ProductsServices';
import TargetMarket from '@/components/TargetMarket';
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <CoreValues />
        <ProductsServices />
        <TargetMarket />
        <CompetitiveAdvantage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;