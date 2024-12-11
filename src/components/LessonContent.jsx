import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LessonContent = ({ title, description, children }) => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (validate token)
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      // Fetch username from local storage
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
      setIsLoading(false); // Set loading to false after fetching username
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-[#0f172a]">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1 left-1 w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slower"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode ? 'bg-[#0f172a] text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`relative overflow-hidden ${
        darkMode ? 'bg-[#1e293b]' : 'bg-gradient-to-r from-blue-500 to-indigo-600'
      } shadow-sm`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/module" className="transition-transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <Shield className={`w-8 h-8 ${darkMode ? 'text-emerald-400' : 'text-white'}`} />
                <span className="text-xl font-bold text-white">
                  CyberGuard
                </span>
              </div>
            </a>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="group relative p-2 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                <div className={`w-14 h-7 rounded-full transition-colors duration-300 ${
                  darkMode ? 
                  'bg-indigo-900/40 shadow-inner shadow-indigo-950/50' : 
                  'bg-emerald-100 shadow-inner shadow-emerald-200/50'
                }`}>
                  <div className={`absolute top-1 w-5 h-5 rounded-full shadow-lg transform transition-all duration-500 ${
                    darkMode ?
                    'right-1 bg-indigo-500 shadow-indigo-400/50 group-hover:bg-indigo-400' :
                    'left-1 bg-emerald-500 shadow-emerald-400/50 group-hover:bg-emerald-400'
                  }`}>
                    {darkMode ? 
                      <Moon className="w-3 h-3 absolute top-1 left-1 text-indigo-100" /> :
                      <Sun className="w-3 h-3 absolute top-1 left-1 text-emerald-100" />
                    }
                  </div>
                </div>
              </button>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                darkMode ? 
                'bg-gray-800 hover:bg-gray-700' : 
                'bg-white bg-opacity-20 hover:bg-opacity-30'
              } transition-all`}>
                <span className="font-semibold text-white">
                  Hi, {username || 'User'}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Lesson Content */}
      <div className="container mx-auto px-6 py-8">
        <div className={`p-8 rounded-xl transition-all duration-300 ${
          darkMode ? 
          'bg-[#1e293b] shadow-xl border border-gray-700' : 
          'bg-white shadow-lg border border-gray-200'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${
            darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>{title}</h2>
          <p className={`mb-6 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>{description}</p>
          <div className="space-y-6">{children}</div>
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Chat with AI
            </button>
            <button
              onClick={() => navigate('/test')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-6 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Take Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;