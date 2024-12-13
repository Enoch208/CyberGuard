import React, { useEffect, useState } from 'react';
import { Shield, MessageCircle, Download, HelpCircle, Sun, Moon, Lock, Key, Globe, Database, AlertTriangle, FileText, ChevronRight, Sparkles, CheckCircle, LogOut, Bot } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Module = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { darkMode, setDarkMode } = useTheme();
  const [progress, setProgress] = useState({
    progress1: 0,
    progress2: 0,
    progress3: 0,
    progress4: 0,
    progress5: 0,
    progress6: 0
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { 
      navigate('/login', { replace: true });
      return;
    }

    const verifyToken = async () => {
      try {
        const verifyResponse = await fetch('https://cyberguard-hc2y.onrender.com/api/verify-token', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!verifyResponse.ok) {
          throw new Error('Token verification failed');
        }

        const response = await fetch('https://cyberguard-hc2y.onrender.com/api/progress', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch progress');
        }

        const data = await response.json();
        setProgress(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error:', err);
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
      }
    };

    verifyToken();
  }, [navigate]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const modules = [
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Learn the basics of cybersecurity, including key principles, common threats, and essential security practices.',
      progress: progress.progress1 * 100,
      lesson: 1,
      icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
    },
    {
      title: 'Network Security',
      description: 'Master network security concepts including firewalls, IDS, and VPNs. Learn practical configuration skills.',
      progress: progress.progress2 * 100,
      lesson: 2,
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
    },
    {
      title: 'Malware Protection',
      description: 'Understand different malware types and learn effective protection strategies using anti-virus tools.',
      progress: progress.progress3 * 100,
      lesson: 3,
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
    },
    {
      title: 'Social Engineering',
      description: 'Learn to identify and prevent social engineering attacks like phishing and pretexting.',
      progress: progress.progress4 * 100,
      lesson: 4,
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
    },
    {
      title: 'Threat Management',
      description: 'Study cyber threats and develop risk management strategies for better security.',
      progress: progress.progress5 * 100,
      lesson: 5,
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
    },
    {
      title: 'Security Career Guide',
      description: 'Explore cybersecurity best practices and discover career opportunities in the field.',
      progress: progress.progress6 * 100,
      lesson: 6,
      icon: <Key className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
    }
  ];

  const sections = [
    {
      title: 'AI Security Coach',
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
      description: 'Get instant AI-powered security advice and threat analysis',
      bgGradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Security Reports',
      icon: <Download className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      description: 'Access detailed security incident reports and analysis',
      bgGradient: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      title: 'Quick Response',
      icon: <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
      description: 'Emergency response guides for security incidents',
      bgGradient: 'from-red-500/20 to-orange-500/20'
    },
    {
      title: 'Security Check',
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      description: 'Evaluate your security practices and find gaps',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Threat Alert',
      icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
      description: 'Real-time updates on emerging security threats',
      bgGradient: 'from-yellow-500/20 to-amber-500/20'
    },
    {
      title: 'Best Practices',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
      description: 'Learn industry-standard security guidelines',
      bgGradient: 'from-cyan-500/20 to-sky-500/20'
    }
  ];

  return (
    <>
      {isLoading ? (
        <div className={`min-h-screen flex items-center justify-center ${
          darkMode ? 'bg-slate-900' : 'bg-blue-50'
        }`}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-100"
        }`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full ${
                    darkMode ? "bg-blue-500" : "bg-white"
                  } opacity-20 animate-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 10 + 10}s`
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 animate-pulse"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
          </div>

          {/* Header */}
          <header className="relative z-10 backdrop-blur-lg bg-opacity-80">
            <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <a 
                  href="/" 
                  className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Shield className={`w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 transition-all duration-300 ${
                    isHovering ? 'animate-pulse rotate-12' : ''
                  }`} />
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    CyberGuard
                  </span>
                  {isHovering && (
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-spin" />
                  )}
                </a>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-lg transition-all duration-300
                    ${darkMode ? 'bg-slate-700/50 text-white' : 'bg-white/50 text-gray-900'}`}>
                    <span className="text-sm sm:text-base font-medium">Hi, {username || 'User'}</span>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 sm:p-2.5 rounded-full bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg transition-all duration-300
                             hover:shadow-lg hover:scale-110 group"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? 
                      <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 group-hover:rotate-180 transition-transform duration-500" /> : 
                      <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
                    }
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 sm:p-2.5 rounded-full bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg transition-all duration-300
                             hover:shadow-lg hover:scale-110 group"
                    aria-label="Logout"
                  >
                    <LogOut className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-red-400' : 'text-red-500'} 
                      group-hover:rotate-12 transition-transform duration-300`} />
                  </button>
                </div>
              </div>
            </nav>
          </header>

          {/* Modules Section */}
          <section className="relative z-10 py-8 sm:py-16 px-4">
            <div className="container mx-auto">
              <h2 className={`text-2xl sm:text-4xl font-bold text-center mb-2 sm:mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Security Awareness Training
              </h2>
              <p className={`text-sm sm:text-base text-center mb-8 sm:mb-12 max-w-2xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Master essential cybersecurity skills through interactive lessons and real-world scenarios
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 rounded-xl backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative
                      ${darkMode 
                        ? 'bg-slate-800/30 hover:bg-slate-700/40' 
                        : 'bg-white/70 hover:bg-white/90'}`}
                  >
                    {module.progress === 100 && (
                      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full p-1.5 sm:p-2 shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    )}
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      {module.icon}
                      <h3 className={`text-base sm:text-xl font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {module.title}
                      </h3>
                    </div>
                    <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {module.description}
                    </p>
                    <div className="relative w-full bg-gray-600/30 rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4 group">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-300"
                        style={{ width: `${module.progress}%` }}
                      >
                        <div className="absolute -right-4 -top-8 bg-emerald-500 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {Math.round(module.progress)}%
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate(`/module/${module.lesson}`)}
                      className="w-full py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-500
                        bg-gradient-to-r from-emerald-500 to-blue-500 text-white
                        shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50
                        hover:from-emerald-600 hover:to-blue-600
                        flex items-center justify-center space-x-2
                        transform hover:-translate-y-1"
                    >
                      <span>{module.progress === 100 ? 'Review Module' : 'Start Training'}</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Features */}
          <section className="relative z-10 py-8 sm:py-16 px-4">
            <div className="container mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 rounded-xl backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-2 
                      bg-gradient-to-br ${section.bgGradient} cursor-pointer
                      ${darkMode ? 'hover:bg-opacity-30' : 'hover:bg-opacity-70'}`}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      {section.icon}
                      <h3 className={`text-base sm:text-xl font-semibold ml-2 sm:ml-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {section.title}
                      </h3>
                    </div>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chat Button */}
          <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50">
            <Link 
              to="/chat" 
              className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transition-transform transform hover:scale-110`}
              aria-label="Chat with us"
            >
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </Link>
          </div>

          {/* Footer */}
          <footer className="relative z-10 py-6 sm:py-8 backdrop-blur-lg bg-opacity-80">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  <span className={`text-sm sm:text-base font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    CyberGuard
                  </span>
                </div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  © 2024 CyberGuard. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Module;
