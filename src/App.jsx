import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} toggleLanguage={toggleLanguage} language={language} />
        <div id="home" ><Home language={language}/></div>
        <div id="about"><About language={language} /></div>
        <div id="projects"><Projects language={language} /></div>
        <div id="contact"><Contact language={language} /></div>
    </div>
  );
}

export default App;
