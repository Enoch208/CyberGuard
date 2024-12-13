import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Shield, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LessonContent = ({ title, description, children }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { darkMode, setDarkMode } = useTheme();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validateAndLoadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login', { replace: true });
          return;
        }

        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    validateAndLoadUser();
  }, [navigate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#0f172a] p-4">
        <div className="text-red-500 text-lg sm:text-xl font-semibold mb-4 text-center">
          Error loading lesson content
        </div>
        <div className="text-gray-600 dark:text-gray-300 text-center">
          {error}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-[#0f172a]">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1 left-1 w-10 h-10 sm:w-14 sm:h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute top-2 left-2 w-8 h-8 sm:w-12 sm:h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slower"></div>
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
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <a href="/module" className="transition-transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <Shield className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-emerald-400' : 'text-white'}`} />
                <span className="text-lg sm:text-xl font-bold text-white">
                  CyberGuard
                </span>
              </div>
            </a>
            <div className="flex items-center space-x-3 sm:space-x-6">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="group relative p-1.5 sm:p-2 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                <div className={`w-12 sm:w-14 h-6 sm:h-7 rounded-full transition-colors duration-300 ${
                  darkMode ? 
                  'bg-indigo-900/40 shadow-inner shadow-indigo-950/50' : 
                  'bg-emerald-100 shadow-inner shadow-emerald-200/50'
                }`}>
                  <div className={`absolute top-1 w-4 sm:w-5 h-4 sm:h-5 rounded-full shadow-lg transform transition-all duration-500 ${
                    darkMode ?
                    'right-1 bg-indigo-500 shadow-indigo-400/50 group-hover:bg-indigo-400' :
                    'left-1 bg-emerald-500 shadow-emerald-400/50 group-hover:bg-emerald-400'
                  }`}>
                    {darkMode ? 
                      <Moon className="w-2.5 sm:w-3 h-2.5 sm:h-3 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-indigo-100" /> :
                      <Sun className="w-2.5 sm:w-3 h-2.5 sm:h-3 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-emerald-100" />
                    }
                  </div>
                </div>
              </button>
              <div className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${
                darkMode ? 
                'bg-gray-800 hover:bg-gray-700' : 
                'bg-white bg-opacity-20 hover:bg-opacity-30'
              } transition-all`}>
                <span className="text-sm sm:text-base font-semibold text-white truncate max-w-[100px] sm:max-w-none">
                  Hi, {username || 'User'}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Lesson Content */}
      <Suspense fallback={
        <div className="flex justify-center items-center py-8 sm:py-12">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }>
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className={`p-4 sm:p-8 rounded-xl transition-all duration-300 ${
            darkMode ? 
            'bg-[#1e293b] shadow-xl border border-gray-700' : 
            'bg-white shadow-lg border border-gray-200'
          }`}>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>{title}</h2>
            <p className={`mb-4 sm:mb-6 text-base sm:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{description}</p>
            <div className="space-y-4 sm:space-y-6">{children}</div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:justify-between">
              <button
                onClick={() => navigate('/chat')}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Chat with AI
              </button>
              <button
                onClick={() => navigate(`/quiz/${id}`)}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Take Tests
              </button>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default LessonContent;