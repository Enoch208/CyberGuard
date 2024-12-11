import React from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson1 = () => {
  const { darkMode } = useTheme();
  return (
    <LessonContent 
      title="Mobile Device Security" 
      description="Securing smartphones, recognizing malicious apps, and safe public WiFi practices."
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
            Mobile devices have become essential tools in our daily lives, storing vast amounts of personal and sensitive information. Understanding how to secure these devices is crucial for protecting your digital life.
          </p>
          <p className={`text-lg leading-relaxed mt-4 border-l-4 border-purple-300 pl-4 py-2 rounded ${
            darkMode ? 'bg-[#2d1f36]/40 text-gray-300' : 'bg-white text-gray-600'
          }`}>
            Consider this: Your smartphone contains your emails, banking apps, photos, contacts, and location data. Without proper security measures, this wealth of personal information could be exposed to cybercriminals.
          </p>
        </div>
      </section>

      {/* Understanding Mobile Security Risks */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Understanding Mobile Security Risks
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Mobile devices face numerous security threats daily. Recent studies show that mobile malware attacks have increased by 50% in the last year.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Common mobile security threats include:
          </p>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Malicious Apps:</strong> Fake applications designed to steal data or install malware.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Public WiFi Risks:</strong> Unsecured networks that can expose your data to attackers.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Device Loss/Theft:</strong> Physical loss of devices containing sensitive information.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>OS Vulnerabilities:</strong> Security flaws in outdated operating systems.
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
            Recent mobile security incidents:
          </p>
          <div className={`grid grid-cols-1 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-rose-300 text-black dark:text-gray-200`}>
              <strong className={`text-rose-500 dark:text-red-400`}>Malicious App Campaign:</strong> Fake banking apps on app stores that stole users' credentials and financial information.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-orange-300 text-black dark:text-gray-200`}>
              <strong className={`text-orange-500 dark:text-orange-400`}>WiFi Honeypot Attack:</strong> Hackers setting up fake public WiFi networks to intercept users' data.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-300 text-black dark:text-gray-200`}>
              <strong className={`text-yellow-500 dark:text-yellow-400`}>OS Exploit:</strong> Widespread vulnerability affecting millions of unpatched Android devices.
            </div>
          </div>
        </div>
      </section>

      {/* Protection Strategies */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          How to Protect Your Device
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Essential mobile security measures:
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Screen Lock:</strong> Use biometric security and strong PIN/password protection.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>App Security:</strong> Only install apps from official stores and check permissions carefully.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Updates:</strong> Keep your device's OS and apps up-to-date with security patches.
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
          Mobile Security Tips
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Use a VPN when connecting to public WiFi networks.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Enable remote tracking and wiping capabilities.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Regularly backup your device data securely.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Be cautious of app permissions and review them regularly.</span>
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
            Can you identify which mobile device setup is more secure?
          </p>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <div className={`bg-white dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-red-600 dark:text-red-400`}>Device 1:</strong> No screen lock, automatic WiFi connection enabled, outdated OS, apps from unknown sources
            </div>
            <div className={`bg-white dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-green-600 dark:text-green-400`}>Device 2:</strong> Biometric lock, VPN enabled, regular updates, official app store only
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
            Mobile device security is essential in today's digital world. By implementing strong security measures and following best practices, you can protect your personal information and use your device with confidence.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;