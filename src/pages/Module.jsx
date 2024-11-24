import React, { useEffect, useState } from 'react';
import { Shield, MessageCircle, Download, HelpCircle, Sun, Moon, Lock, Key, Globe, Database, AlertTriangle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';

const Module = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check if user is logged in (validate token)
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const modules = [
    {
      title: 'Phishing Awareness',
      description: 'Real-world phishing examples, CEO fraud cases, and how to verify suspicious emails.',
      progress: 25,
    },
    {
      title: 'Remote Work Security',
      description: 'Secure home office setup, VPN usage, and protecting company data while working remotely.',
      progress: 40,
    },
    {
      title: 'Social Media Safety',
      description: 'Protecting personal information, identifying fake profiles, and avoiding social media scams.',
      progress: 60,
    },
    {
      title: 'Mobile Device Security',
      description: 'Securing smartphones, recognizing malicious apps, and safe public WiFi practices.',
      progress: 15,
    },
    {
      title: 'Personal Data Protection',
      description: 'Handling sensitive information, secure online banking, and identity theft prevention.',
      progress: 30,
    },
    {
      title: 'Modern Scam Awareness',
      description: 'Current cryptocurrency scams, romance fraud, and investment scheme recognition.',
      progress: 45,
    }
  ];

  const sections = [
    {
      title: 'Security Coach AI',
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      description: 'Get real-time advice on suspicious emails, links, and potential security threats',
    },
    {
      title: 'Incident Reports',
      icon: <Download className="w-6 h-6 text-emerald-400" />,
      description: 'Access real case studies of security incidents and lessons learned from them',
    },
    {
      title: 'Emergency Response',
      icon: <HelpCircle className="w-6 h-6 text-emerald-400" />,
      description: "Step-by-step guides on what to do if you suspect your account has been compromised",
    },
    {
      title: 'Security Checkup',
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      description: 'Interactive tools to assess your current security practices and vulnerabilities',
    },
    {
      title: 'Threat Radar',
      icon: <AlertTriangle className="w-6 h-6 text-emerald-400" />,
      description: 'Live feed of emerging cyber threats and scams in your region',
    },
    {
      title: 'Best Practices',
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      description: 'Industry-standard security protocols and everyday safety guidelines',
    }
  ];

  return (
    <>
      {show ? (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
          {/* Header */}
          <header className={`relative overflow-hidden ${darkMode ? 'bg-[#1a1f36]' : 'bg-blue-600'}`}>
            <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <a href="/">
                  <div className="flex items-center space-x-2">
                  <Shield className="w-8 h-8 text-emerald-400" />
                  <span className="text-xl font-bold text-white">CyberGuard</span>
                </div>
                </a>
        
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700 transition-colors"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? 
                      <Sun className="w-5 h-5 text-yellow-400" /> : 
                      <Moon className="w-5 h-5 text-white" />
                    }
                  </button>
                  <div className="flex items-center space-x-2 bg-opacity-10 bg-white px-4 py-2 rounded-full">
                    <span className="text-white font-semibold">Welcome Admin</span>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          {/* Modules Section */}
          <section className={`py-12 ${darkMode ? 'bg-[#1a1f36]' : 'bg-blue-50'}`}>
            <div className="container mx-auto px-6">
              <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Security Awareness Training
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all ${
                      darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-100'
                    }`}
                  >
                    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {module.title}
                    </h3>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {module.description}
                    </p>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-4">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-full text-white transition">
                      Start Training
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Features */}
          <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-blue-100'}`}
                  >
                    <div className="flex items-center mb-4">
                      {section.icon}
                      <h3 className="text-xl font-semibold ml-2">{section.title}</h3>
                    </div>
                    <p className={`text-gray-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#1a1f36] py-6">
            <div className="container mx-auto px-6 text-center text-gray-400">
              © 2024 CyberGuard. All rights reserved.
            </div>
          </footer>
        </div>
      ) : (
        <Loading isDark />
      )}
    </>
  );
};

export default Module;
