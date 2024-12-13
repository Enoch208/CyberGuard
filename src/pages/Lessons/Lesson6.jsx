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
          fetch('https://cyberguard-hc2y.onrender.com/api/progress', {
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
      title="Module 6: Advanced Cybersecurity Practices & Professional Development" 
      description="Dive deep into the world of cybersecurity - from cutting-edge practices to building a rewarding career in this dynamic field."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Chapter 1: Advanced Security Practices for the Modern Digital Age
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            1.1 Password Security & Management
          </h3>
          <ul className={`list-disc pl-5 mt-2 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>
              <strong>Password Creation Strategy:</strong>
              <ul className="list-circle pl-5 mt-2">
                <li>Use at least 12 characters combining uppercase, lowercase, numbers, and symbols</li>
                <li>Avoid personal information like birthdays or names</li>
                <li>Consider using passphrases that are memorable but hard to guess</li>
              </ul>
            </li>
            <li>
              <strong>Multi-Factor Authentication (MFA):</strong>
              <ul className="list-circle pl-5 mt-2">
                <li>Enable MFA on all critical accounts (email, banking, social media)</li>
                <li>Use authenticator apps instead of SMS when possible</li>
                <li>Consider hardware security keys for maximum protection</li>
              </ul>
            </li>
          </ul>

          <h3 className={`text-xl font-semibold mt-6 mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            1.2 Data Protection & Privacy
          </h3>
          <ul className={`list-disc pl-5 mt-2 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>
              <strong>Encryption Best Practices:</strong>
              <ul className="list-circle pl-5 mt-2">
                <li>Use end-to-end encryption for sensitive communications</li>
                <li>Implement full-disk encryption on all devices</li>
                <li>Regularly backup encrypted data to secure locations</li>
              </ul>
            </li>
            <li>
              <strong>Safe Browsing Habits:</strong>
              <ul className="list-circle pl-5 mt-2">
                <li>Use a reputable VPN service when on public networks</li>
                <li>Keep browsers and extensions updated</li>
                <li>Enable HTTPS-only mode in your browser</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Chapter 2: Building a Successful Career in Cybersecurity
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            2.1 High-Demand Career Paths
          </h3>
          <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>
              <h4 className="font-bold">Security Operations Center (SOC) Analyst</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Monitor network security in real-time</li>
                <li>Investigate and respond to security alerts</li>
                <li>Average Salary: $65,000 - $100,000</li>
                <li>Required Skills: SIEM tools, network monitoring, incident response</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold">Penetration Tester/Ethical Hacker</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Conduct authorized security assessments</li>
                <li>Identify and exploit vulnerabilities</li>
                <li>Average Salary: $80,000 - $130,000</li>
                <li>Required Skills: Programming, networking, security tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Digital Forensics Investigator</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Recover and analyze digital evidence</li>
                <li>Document findings for legal proceedings</li>
                <li>Average Salary: $70,000 - $120,000</li>
                <li>Required Skills: Computer forensics tools, legal knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Final Chapter: Launching Your Cybersecurity Career
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Essential Steps for Success
          </h3>
          <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div>
              <h4 className="font-bold">1. Education and Certification</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>CompTIA Security+: Entry-level security certification</li>
                <li>Certified Ethical Hacker (CEH): Advanced penetration testing</li>
                <li>CISSP: Gold standard for security professionals</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">2. Practical Experience</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Build a home lab for hands-on practice</li>
                <li>Participate in bug bounty programs</li>
                <li>Contribute to open-source security projects</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">3. Networking and Community</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Join professional organizations (ISACA, (ISC)²)</li>
                <li>Attend security conferences (DEF CON, Black Hat)</li>
                <li>Participate in local cybersecurity meetups</li>
              </ul>
            </div>

            <p className="mt-6 text-lg italic">
              Remember: Cybersecurity is an ever-evolving field. Stay curious, keep learning, and never stop exploring new technologies and threats. Your journey in cybersecurity is a continuous adventure of discovery and growth.
            </p>
          </div>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson6;