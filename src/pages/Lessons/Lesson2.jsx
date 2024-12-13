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
      title="Module 2: Network Security and Firewalls" 
      description="The internet is like a bustling highway, with data zipping back and forth. But just like a toll booth keeps out uninvited guests, firewalls act as the gatekeepers of your network."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Chapter 1: What is Network Security?
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Imagine your home: you lock the doors, close the windows, and maybe even install a security camera. Network security does the same for your digital space.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            It ensures that:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Only the right people can enter.</li>
            <li>Intruders are stopped in their tracks.</li>
            <li>Sensitive data is protected from prying eyes.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Chapter 2: Firewalls – The First Line of Defense
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Think of a firewall as a digital bouncer at a club, letting in the right crowd and keeping troublemakers out.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Firewalls work by:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Filtering incoming and outgoing traffic.</li>
            <li>Blocking access to harmful websites.</li>
            <li>Creating a barrier between your device and external threats.</li>
          </ul>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Example: You’re on your laptop at a coffee shop. A firewall ensures that no one on the same Wi-Fi can peek into your data or sneak malware onto your device.
          </p>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Chapter 3: Tools for Extra Protection
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            To further enhance your network security, consider using these tools:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Intrusion Detection Systems (IDS):</strong> Like a motion detector, it spots unusual activity and alerts you.</li>
            <li><strong>Virtual Private Networks (VPNs):</strong> A VPN is your invisibility cloak, encrypting your data so no one can spy on your online activities.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
          Chapter 4: Everyday Network Guardians
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Real-world examples of network security in action:
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Lee:</strong> Configured a firewall for their home network, blocking suspicious traffic and protecting their family’s devices.</li>
            <li><strong>Sam:</strong> Uses a VPN while working remotely, keeping company data secure.</li>
          </ul>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            You can take similar steps to safeguard your online world!
          </p>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Final Chapter: Become a Network Guardian
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            By understanding firewalls and other tools, you’re taking the first step toward defending your network.
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay informed. Stay secure. The digital world needs you!
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson2;