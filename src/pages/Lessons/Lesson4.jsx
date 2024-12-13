import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson4 = () => {
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
          fetch('https://cyberguard-hc2y.onrender.com/api/progress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              progress4: 0.5
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
      title="Module 4: Social Engineering and Phishing" 
      description="Not all hackers use code—some use clever tricks to fool people. Let’s learn to spot and avoid these scams."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Chapter 1: What is Social Engineering?
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Imagine someone pretending to be your friend to borrow money and never returning it. Social engineering works similarly—tricking you into giving away sensitive information.
          </p>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Chapter 2: Types of Social Engineering Attacks
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Phishing:</strong> Fake emails or messages asking for passwords or money.</li>
            <li><strong>Pretexting:</strong> Scammers pretend to be someone you trust, like a coworker or tech support.</li>
            <li><strong>Baiting:</strong> Leaving infected USB drives in public, hoping someone plugs them in.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Chapter 3: How to Stay Safe
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Verify the sender of emails before clicking links.</li>
            <li>Avoid sharing sensitive info over calls or messages.</li>
            <li>Be cautious of unsolicited offers or prizes.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          Chapter 4: Everyday Scam Stoppers
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Riley spotted a phishing email and reported it instead of clicking the link.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Jamie never plugs in unknown USB drives, avoiding potential malware.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            You can protect yourself and others by staying alert!
          </p>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Final Chapter: Don’t Get Fooled
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Understanding social engineering tricks is the best defense against them.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson4;