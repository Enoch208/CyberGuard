import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson1 = () => {
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
              progress1: 0.5
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
      title="Cybersecurity Fundamentals" 
      description="An introduction to the core concepts of cybersecurity, including understanding threats, vulnerabilities, and defense mechanisms."
    >
      {/* Introduction */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm ${
        darkMode ? 'bg-[#1e293b]/95 border border-gray-700 shadow-blue-900/20' : 'bg-white/90 border border-gray-200 shadow-gray-100'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          What is Cybersecurity?
        </h2>
        <div className={`rounded-lg p-6 backdrop-filter ${
          darkMode ? 'bg-[#1a1f36]/80 shadow-inner shadow-blue-900/10' : 'bg-gray-50/95 shadow-inner shadow-gray-100'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Cybersecurity involves protecting computer systems and networks from theft, damage, and unauthorized access. It is essential for safeguarding sensitive data, maintaining operational integrity, and ensuring privacy in the digital world.
          </p>
          <div className={`mt-4 p-4 border-l-4 rounded-r-lg ${
            darkMode ? 'border-indigo-500 bg-indigo-900/20 text-gray-300' : 'border-indigo-600 bg-indigo-50 text-gray-700'
          }`}>
            <p className="font-medium">Fact:</p>
            <p>Globally, cybercrime is predicted to cost $8 trillion in 2023, making it a top priority for individuals and organizations alike.</p>
          </div>
        </div>
      </section>

      {/* Core Cybersecurity Concepts */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
          Key Cybersecurity Principles
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <div className="grid grid-cols-1 gap-6">
            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Confidentiality
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ensures sensitive information is accessed only by authorized individuals.
              </p>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Integrity
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Protects data from being altered without authorization, maintaining its accuracy and reliability.
              </p>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Availability
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ensures authorized users have reliable access to data and systems when needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;
