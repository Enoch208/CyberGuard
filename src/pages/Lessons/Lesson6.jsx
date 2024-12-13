import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson6 = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      
      if (scrollPercent > 0.5) {
        const token = localStorage.getItem('token');
        
        if (token) {
          fetch('http://localhost:5000/api/progress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              progress6: 0.5
            })
          })
          .catch(err => console.error('Error updating progress:', err));
        }

        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LessonContent 
      title="Module 6: Cybersecurity Best Practices and Career Paths" 
      description="Cybersecurity isn’t just about technology—it’s also about habits and opportunities."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Chapter 1: Best Practices for Staying Safe
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Use strong, unique passwords for each account:</strong> Avoid using the same password across multiple sites. Use a password manager to keep track of your passwords.</li>
            <li><strong>Encrypt sensitive files before sharing them:</strong> Use encryption tools to protect your files from unauthorized access during transmission.</li>
            <li><strong>Practice secure browsing habits:</strong> Always ensure that the websites you visit are secure (look for HTTPS in the URL) and avoid clicking on suspicious links.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Chapter 2: Careers in Cybersecurity
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            From analysts to ethical hackers, cybersecurity offers exciting roles:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Incident Responder:</strong> Act fast during attacks to mitigate damage and restore normal operations.</li>
            <li><strong>Penetration Tester:</strong> Test systems for weaknesses by simulating attacks to identify vulnerabilities.</li>
            <li><strong>Forensic Analyst:</strong> Investigate cybercrimes by analyzing data and digital evidence to uncover how breaches occurred.</li>
          </ul>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Final Chapter: Your Cyber Journey Starts Here
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Cybersecurity is a field full of challenges and rewards. Whether you’re protecting your own data or helping others, every step you take makes the digital world a better place. Embrace the journey, stay curious, and continue learning to stay ahead of cyber threats.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson6;