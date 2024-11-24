import React, { useState } from 'react';
import { Shield, Book, Brain, Users, ChevronRight, Sun, Moon, ShieldCheck, Trophy } from 'lucide-react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './Auth/Login';
import Module from "./pages/Module";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/module" element={<Module />} />
      </Routes>
    </Router>
  );
};

export default App;


