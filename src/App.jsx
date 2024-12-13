import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './Auth/Login';
import Module from './pages/Module';
import LessonModule from './pages/LessonModule';
import Chat from './pages/Chat';
import Quiz from './components/quiz';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/login" element={<Login isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/module" element={<Module />} />
            <Route path="/module/:id" element={<LessonModule />} />
            <Route path="/quiz/:lessonId" element={<Quiz />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
