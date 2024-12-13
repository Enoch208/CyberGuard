import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson1 = () => {
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
              progress1: 0.5
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
      title="Cybersecurity Chronicles: Guarding the Digital World" 
      description="In today’s world, where our phones, computers, and gadgets connect us to everything, we also face risks. Just like we lock our homes to keep our valuables safe, we need to protect ourselves online. This is where cybersecurity comes in—a story about everyday people like you stepping up to defend the digital space."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm ${
        darkMode ? 'bg-[#1e293b]/95 border border-gray-700 shadow-blue-900/20' : 'bg-white/90 border border-gray-200 shadow-gray-100'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Chapter 1: What is Cybersecurity?
        </h2>
        <div className={`rounded-lg p-6 backdrop-filter ${
          darkMode ? 'bg-[#1a1f36]/80 shadow-inner shadow-blue-900/10' : 'bg-gray-50/95 shadow-inner shadow-gray-100'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Think of the internet as a big city—it’s full of opportunities but also has its dangers. People realized that personal things like photos, emails, and bank details could get stolen or messed with online.
          </p>
          <p className={`mt-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This led to the creation of cybersecurity—a way to keep the digital world safe. It’s based on three simple ideas:
          </p>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Confidentiality
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Keep your info private, like locking your diary.
              </p>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Integrity
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Make sure no one changes your data, like swapping "buy groceries" with "pay $500."
              </p>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Availability
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Your data should be there when you need it, like a flashlight with fresh batteries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          Chapter 2: Common Online Threats
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            As technology grew, so did sneaky tricks to steal or harm your data. Here are a few to watch out for:
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                Phishing
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Fake emails or messages that trick you into sharing passwords or bank info. Always check the sender’s details—it might look real but isn’t.
              </p>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                Malware
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Harmful programs pretending to be useful. Examples:
                <br />• Viruses: Destroy files.
                <br />• Worms: Spread across networks.
                <br />• Ransomware: Lock your files and demand money.
              </p>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                Social Engineering
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Scammers pretending to be someone trustworthy, like tech support, to get your private information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
          Chapter 3: How to Protect Yourself
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            You don’t need to be a tech expert to stay safe. Here are some easy steps:
          </p>
          <ul className={`list-disc pl-6 mt-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>Strong Passwords: Use unique passwords like "Sunset!45&Wave" instead of "123456."</li>
            <li>Two-Factor Authentication (2FA): Add an extra layer of security by requiring a code sent to your phone.</li>
            <li>Avoid Suspicious Links: If a message says you’ve won $1 million, think twice—it’s probably fake.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
          Chapter 4: Everyday Cyber Heroes
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Cybersecurity isn’t just for tech professionals—it’s for everyone.
          </p>
          <p className={`mt-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Karen noticed a strange email from a coworker and deleted it instead of opening the attachment. She avoided a phishing scam.
          </p>
          <p className={`mt-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Alex enabled 2FA, so even when someone stole his password, they couldn’t log in to his account.
          </p>
          <p className={`mt-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            By staying alert, you can be a hero too!
          </p>
        </div>
      </section>

      {/* Chapter 5 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Chapter 5: Careers in Cybersecurity
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Cybersecurity is also an exciting career field with many opportunities:
          </p>
          <ul className={`list-disc pl-6 mt-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>Ethical Hacker: Find security weaknesses before real hackers do.</li>
            <li>Incident Responder: Solve problems when something goes wrong, like a digital firefighter.</li>
            <li>Cybersecurity Analyst: Watch for threats and stop them before they happen.</li>
          </ul>
          <p className={`mt-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            These jobs are needed everywhere—from hospitals to gaming companies.
          </p>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Final Chapter: Be a Cyber Guardian
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            The digital world is full of opportunities, but it needs protectors. By learning and practicing cybersecurity, you’re making the online space safer for everyone.
          </p>
          <ul className={`list-disc pl-6 mt-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>Stay curious: Technology keeps changing, so always keep learning.</li>
            <li>Stay cautious: Think before you click.</li>
            <li>Stay proactive: Every step you take helps protect the digital community.</li>
          </ul>
          <div className={`mt-6 p-4 border-l-4 rounded-r-lg ${
            darkMode ? 'border-purple-500 bg-purple-900/20 text-gray-300' : 'border-purple-600 bg-purple-50 text-gray-700'
          }`}>
            <p className="font-medium">The choice is yours—will you rise as a Cyber Guardian? The world is counting on you!</p>
          </div>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;