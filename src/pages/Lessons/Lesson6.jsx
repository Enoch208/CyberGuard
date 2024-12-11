import React from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson1 = () => {
  const { darkMode } = useTheme();
  return (
    <LessonContent 
      title="Modern Scam Awareness" 
      description="Current cryptocurrency scams, romance fraud, and investment scheme recognition."
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
            In today's digital world, scammers are becoming increasingly sophisticated in their methods. From cryptocurrency fraud to romance scams, understanding how to identify and avoid these schemes is crucial for protecting yourself.
          </p>
          <p className={`text-lg leading-relaxed mt-4 border-l-4 border-purple-300 pl-4 py-2 rounded ${
            darkMode ? 'bg-[#2d1f36]/40 text-gray-300' : 'bg-white text-gray-600'
          }`}>
            Remember: If an opportunity seems too good to be true, it probably is. Modern scams often prey on emotions like greed, loneliness, or fear to manipulate victims.
          </p>
        </div>
      </section>

      {/* Understanding Modern Scams */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Common Modern Scams
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Modern scams have evolved with technology, causing billions in losses annually. Here are the most prevalent types:
          </p>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Crypto Scams:</strong> Fake exchanges, pump-and-dump schemes, and fraudulent ICOs promising huge returns.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Romance Fraud:</strong> Scammers building fake relationships to exploit victims financially.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>Investment Schemes:</strong> High-yield investment programs and Ponzi schemes disguised as legitimate opportunities.
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-black dark:text-gray-200`}>
              <strong className={`text-emerald-500 dark:text-emerald-300`}>NFT Fraud:</strong> Fake NFT marketplaces and artificial price manipulation.
            </li>
          </ul>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Recent Scam Cases
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Notable recent scam incidents:
          </p>
          <div className={`grid grid-cols-1 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-rose-300 text-black dark:text-gray-200`}>
              <strong className={`text-rose-500 dark:text-red-400`}>OneCoin Crypto Scam:</strong> $4 billion cryptocurrency pyramid scheme affecting millions worldwide.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-orange-300 text-black dark:text-gray-200`}>
              <strong className={`text-orange-500 dark:text-orange-400`}>Tinder Swindler:</strong> Romance scammer who defrauded multiple victims through dating apps.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-300 text-black dark:text-gray-200`}>
              <strong className={`text-yellow-500 dark:text-yellow-400`}>Fake Trading Platform:</strong> Sophisticated investment scam using social media influencers to promote fraudulent trading software.
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
            Essential protection measures:
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Research:</strong> Always verify investment opportunities and crypto projects thoroughly.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Verify Identity:</strong> Use video calls and meet in person before sending money to online connections.
            </div>
            <div className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-black dark:text-gray-200`}>
              <strong className={`text-indigo-500 dark:text-indigo-400`}>Use Licensed Platforms:</strong> Only trade on regulated exchanges and investment platforms.
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
          Red Flags to Watch For
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Promises of guaranteed high returns with no risk.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Pressure to act quickly or invest immediately.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Requests for cryptocurrency or wire transfers.</span>
            </li>
            <li className={`bg-white dark:bg-[#1a2436]/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center space-x-2 text-black dark:text-gray-200`}>
              <span className={`w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full`}></span>
              <span>Unverified social media profiles or dating accounts.</span>
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
            Can you identify which scenario is likely a scam?
          </p>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <div className={`bg-white dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-red-600 dark:text-red-400`}>Scenario 1:</strong> An online friend you've never met asks for emergency cryptocurrency transfer, promising double returns tomorrow.
            </div>
            <div className={`bg-white dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 dark:text-gray-200`}>
              <strong className={`text-green-600 dark:text-green-400`}>Scenario 2:</strong> A regulated investment platform requires ID verification and offers market-standard returns.
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
            Staying informed about modern scams and maintaining a healthy skepticism is crucial in today's digital world. Remember to verify everything, never rush into investments, and protect yourself from emotional manipulation in online relationships.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;