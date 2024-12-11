import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson2 = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      
      // If user has scrolled more than 50% of the page
      if (scrollPercent > 0.5) {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (token) {
          // Make API call to update progress
          fetch('http://localhost:5000/api/progress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              progress2: 0.5
            })
          })
          .catch(err => console.error('Error updating progress:', err));
        }

        // Remove scroll listener after updating progress
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LessonContent 
      title="Remote Work Security" 
      description="Learn how to set up a secure home office, use VPNs properly, and protect company data while working remotely."
    >
      {/* Introduction */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Introduction
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Remote work has become increasingly common, bringing new cybersecurity challenges. When working from home, employees must take extra precautions to protect sensitive company data and maintain a secure connection to corporate networks.
          </p>
          <p className={`text-lg leading-relaxed mt-4 border-l-4 border-purple-300 pl-4 py-2 rounded ${
            darkMode ? 'bg-[#2d1f36]/40 text-gray-300' : 'bg-white text-gray-600'
          }`}>
            Consider this: You're working from home on an important project using your personal WiFi network. Without proper security measures like a VPN and encrypted connection, your sensitive work data could be vulnerable to cyber threats. This highlights why remote work security is crucial in today's digital workplace.
          </p>
        </div>
      </section>

      {/* What is Remote Work Security? */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          What is Remote Work Security?
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Remote work security encompasses all measures taken to protect company data and resources when employees work outside the traditional office environment. According to recent studies, over 20% of cyber incidents are related to remote work vulnerabilities.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Key components of remote work security include:
          </p>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Secure Network Setup:</strong> Implementing strong WiFi encryption, firewall protection, and regular network security updates.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>VPN Usage:</strong> Using Virtual Private Networks to create secure, encrypted connections to company resources.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Device Security:</strong> Securing all devices used for work with proper antivirus software and security updates.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Data Protection:</strong> Implementing encryption and secure file sharing practices for sensitive company information.
            </li>
          </ul>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Real-World Examples
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's examine some notable remote work security incidents:
          </p>
          <div className={`grid grid-cols-1 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-rose-300 text-black dark:text-gray-200`}>
              <strong className={`text-rose-500 dark:text-red-400`}>Zoom Security Issues (2020):</strong> The rapid shift to remote work exposed security vulnerabilities in video conferencing platforms, leading to "Zoombombing" and data privacy concerns.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-orange-300 text-black dark:text-gray-200`}>
              <strong className={`text-orange-500 dark:text-orange-400`}>Remote Desktop Protocol Attacks (2021):</strong> Cybercriminals exploited unsecured RDP connections, leading to numerous data breaches in remote work environments.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-300 text-black dark:text-gray-200`}>
              <strong className={`text-yellow-500 dark:text-yellow-400`}>Cloud Storage Breaches (2022):</strong> Improper configuration of cloud storage services led to multiple data leaks from remote workers sharing sensitive files.
            </div>
          </div>
        </div>
      </section>

      {/* How to Secure Remote Work */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          How to Secure Your Remote Workspace
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Essential security measures for remote work:
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>VPN Connection:</strong> Always use a company-approved VPN when accessing work resources to ensure encrypted, secure connections.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Secure WiFi:</strong> Use WPA3 encryption for your home network and change default router passwords.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Regular Updates:</strong> Keep all work devices, software, and security tools up to date with the latest patches.
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
          Best Practices for Remote Work
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Use strong, unique passwords for all work accounts and enable 2FA.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Separate personal and work activities on different devices when possible.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Use company-approved tools for file sharing and collaboration.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Create a dedicated, secure workspace away from household distractions.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
          Interactive Activity
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Identify which remote work setup is more secure:
          </p>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <div className={`bg-white dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-red-600 dark:text-red-400`}>Setup 1:</strong> Using public WiFi without VPN, personal email for work files, default router settings
            </div>
            <div className={`bg-white dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-green-600 dark:text-green-400`}>Setup 2:</strong> Secured home network, VPN enabled, company-approved tools, regular security updates
            </div>
          </div>
        </div>
      </section>

      {/* Wrap-up */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Conclusion
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Remote work security is essential in today's digital workplace. By following proper security protocols and best practices, you can create a safe and productive remote work environment while protecting both personal and company data.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson2;