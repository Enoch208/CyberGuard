import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson3 = () => {
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
              progress3: 0.5
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
      title="Module 3: Malware and Anti-Virus Software" 
      description="The internet has its pests too—malware! These sneaky programs can wreak havoc on your devices. Let’s learn how to stop them."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Chapter 1: What is Malware?
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Malware is any software designed to harm or exploit devices. It comes in many forms, including:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Viruses:</strong> Spread like germs, attaching to files and infecting systems.</li>
            <li><strong>Worms:</strong> Self-replicating programs that hop from device to device.</li>
            <li><strong>Ransomware:</strong> Locks your files and demands payment to unlock them.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Chapter 2: How Does Malware Spread?
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Malware often disguises itself as:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Email attachments.</li>
            <li>Fake software updates.</li>
            <li>Suspicious downloads.</li>
          </ul>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Example: Clicking a pop-up that says, “Your computer is infected! Download this tool now!” could lead to a real infection.
          </p>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Chapter 3: Fighting Back with Anti-Virus Software
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Anti-virus software is like a shield, scanning your system for threats and removing them.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Tips for success:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Keep your anti-virus updated.</li>
            <li>Schedule regular scans.</li>
            <li>Avoid pirated software—it’s a common malware source.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          Chapter 4: Everyday Malware Defenders
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Mia accidentally downloaded a suspicious file, but her updated anti-virus software detected and removed the threat immediately.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Chris avoided ransomware by never clicking unknown links.
          </p>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Final Chapter: Stay Malware-Free
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            By learning about malware and using anti-virus tools, you can keep your devices safe and running smoothly.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson3;