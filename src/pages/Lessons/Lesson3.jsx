import React from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson1 = () => {
  const { darkMode } = useTheme();
  return (
    <LessonContent 
      title="Social Media Safety" 
      description="Protecting personal information, identifying fake profiles, and avoiding social media scams."
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
            Social media has become an integral part of our daily lives, but it also presents significant privacy and security risks. Understanding how to protect yourself online is crucial in today's interconnected world.
          </p>
          <p className={`text-lg leading-relaxed mt-4 border-l-4 border-purple-300 pl-4 py-2 rounded ${
            darkMode ? 'bg-[#2d1f36]/40 text-gray-300' : 'bg-white text-gray-600'
          }`}>
            Consider this: Every piece of information you share on social media can be potentially used against you by cybercriminals. From your vacation photos revealing when you're away from home to seemingly innocent personal details that could help answer security questions - everything needs to be shared thoughtfully.
          </p>
        </div>
      </section>

      {/* Understanding Social Media Risks */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Understanding Social Media Risks
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Social media platforms expose users to various security risks. Recent statistics show that social media-related cyber attacks have increased by 300% in the past year.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Common social media threats include:
          </p>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Identity Theft:</strong> Criminals using personal information to impersonate or defraud users.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Phishing Scams:</strong> Fake profiles and messages designed to steal personal information or spread malware.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Privacy Breaches:</strong> Oversharing personal information that could be exploited by bad actors.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Social Engineering:</strong> Manipulative tactics used to gain trust and access to personal information.
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
            Recent social media security incidents:
          </p>
          <div className={`grid grid-cols-1 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-rose-300 text-black dark:text-gray-200`}>
              <strong className={`text-rose-500 dark:text-red-400`}>Celebrity Impersonation Scams:</strong> Fake profiles of celebrities used to promote cryptocurrency scams, resulting in millions in losses.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-orange-300 text-black dark:text-gray-200`}>
              <strong className={`text-orange-500 dark:text-orange-400`}>Data Scraping Incidents:</strong> Large-scale collection of user data from social platforms for malicious purposes.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-300 text-black dark:text-gray-200`}>
              <strong className={`text-yellow-500 dark:text-yellow-400`}>Romance Scams:</strong> Fraudsters using fake profiles to build relationships and eventually scam victims out of money.
            </div>
          </div>
        </div>
      </section>

      {/* Protection Strategies */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          How to Protect Yourself
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Essential social media safety measures:
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Privacy Settings:</strong> Regularly review and update your privacy settings on all social media platforms.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Strong Authentication:</strong> Enable two-factor authentication and use unique, complex passwords.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Content Control:</strong> Think carefully about what personal information you share online.
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
          Social Media Safety Tips
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Be skeptical of unsolicited messages and friend requests from strangers.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Avoid clicking on suspicious links or downloading unknown attachments.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Regularly monitor your accounts for suspicious activity.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Never share sensitive personal or financial information on social media.</span>
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
            Can you identify which social media behavior is safer?
          </p>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <div className={`bg-white dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-red-600 dark:text-red-400`}>Profile 1:</strong> Public profile, location sharing enabled, accepting all friend requests, sharing personal documents
            </div>
            <div className={`bg-white dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-green-600 dark:text-green-400`}>Profile 2:</strong> Private profile, limited personal info, verified connections only, two-factor authentication enabled
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
            Social media safety is crucial in protecting your digital identity and personal information. By following security best practices and staying vigilant, you can enjoy social media while keeping yourself safe from various online threats.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;