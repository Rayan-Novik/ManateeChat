import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import CalculoLucros from './pages/calculoLucros';
import DownloadButtons from './components/DownloadButtons'; // 🚀 Importando o componente novo

import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const themeClass = darkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(themeClass);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs darkMode={darkMode} />
              <Features darkMode={darkMode} />
              <Plans darkMode={darkMode} />
              <ContactPage darkMode={darkMode} />
              <DownloadButtons /> {/* ✅ Adicionando a seção de downloads */}
            </>
          }
        />
        <Route path="/calculoLucros" element={<CalculoLucros darkMode={darkMode} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
