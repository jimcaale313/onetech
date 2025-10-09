import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>OneTech - Your Trusted Partner for Technology and Office Solutions</title>
        <meta name="description" content="One Technology and Stationery Supplies is a dynamic, forward-thinking company established in Hargeisa, Somaliland, providing high-quality technology solutions, office equipment, and stationery products." />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;