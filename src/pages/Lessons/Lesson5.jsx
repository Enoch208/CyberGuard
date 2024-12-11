import React from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson1 = () => {
  const { darkMode } = useTheme();
  return (
    <LessonContent 
      title="Personal Data Protection" 
      description="Handling sensitive information, secure online banking, and identity theft prevention."
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
            In today's digital age, our personal data is more valuable and vulnerable than ever before. Understanding how to protect your sensitive information is crucial for maintaining your privacy and financial security.
          </p>
          <p className={`text-lg leading-relaxed mt-4 border-l-4 border-purple-300 pl-4 py-2 rounded ${
            darkMode ? 'bg-[#2d1f36]/40 text-gray-300' : 'bg-white text-gray-600'
          }`}>
            Consider this: Your personal information, from social security numbers to banking credentials, is constantly at risk of theft. Proper security measures are essential to protect against identity theft and financial fraud.
          </p>
        </div>
      </section>

      {/* Understanding Data Security Risks */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Understanding Data Security Risks
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Personal data breaches are becoming increasingly common. Statistics show that identity theft cases have risen by 70% in recent years.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Common threats to personal data include:
          </p>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Phishing Attacks:</strong> Fraudulent attempts to obtain sensitive information by posing as trustworthy entities.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Data Breaches:</strong> Large-scale theft of personal information from companies and organizations.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Identity Theft:</strong> Criminals using stolen personal information for fraudulent purposes.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Financial Fraud:</strong> Unauthorized access to banking and financial accounts.
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
            Recent personal data security incidents:
          </p>
          <div className={`grid grid-cols-1 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-rose-300 text-black dark:text-gray-200`}>
              <strong className={`text-rose-500 dark:text-red-400`}>Major Bank Data Breach:</strong> Millions of customers' financial information exposed through a sophisticated cyber attack.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-orange-300 text-black dark:text-gray-200`}>
              <strong className={`text-orange-500 dark:text-orange-400`}>Social Media Identity Theft:</strong> Criminals creating fake profiles to scam connections of legitimate users.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-300 text-black dark:text-gray-200`}>
              <strong className={`text-yellow-500 dark:text-yellow-400`}>Healthcare Records Leak:</strong> Patient medical histories and personal information exposed in ransomware attack.
            </div>
          </div>
        </div>
      </section>

      {/* Protection Strategies */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          How to Protect Your Personal Data
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Essential data protection measures:
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Strong Passwords:</strong> Use unique, complex passwords for all accounts and enable 2FA.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Secure Banking:</strong> Use official apps and websites, monitor transactions regularly.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Data Encryption:</strong> Use encryption tools for sensitive files and communications.
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
          Personal Data Protection Tips
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Regularly monitor your credit reports and bank statements.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Never share sensitive information through unsecured channels.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Keep software and security tools up to date.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Be cautious of unsolicited requests for personal information.</span>
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
            Can you identify which scenario is more secure for personal data protection?
          </p>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <div className={`bg-white dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-red-600 dark:text-red-400`}>Scenario 1:</strong> Using same password for all accounts, sharing banking details over email, clicking on links in unexpected emails
            </div>
            <div className={`bg-white dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-green-600 dark:text-green-400`}>Scenario 2:</strong> Using password manager, enabling 2FA, verifying requests through official channels
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
            Protecting your personal data is crucial in preventing identity theft and financial fraud. By implementing strong security measures and staying vigilant, you can significantly reduce the risk of your sensitive information being compromised.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;