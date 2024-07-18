import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Navbar } from '../components/Navbar';

export const DashboardPage = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí define más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};
