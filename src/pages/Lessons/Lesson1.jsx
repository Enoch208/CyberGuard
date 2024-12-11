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
      title="Advanced Phishing Attack Prevention" 
      description="An in-depth exploration of sophisticated phishing techniques, real-world attack patterns, and enterprise-grade defense strategies."
    >
      {/* Introduction */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm ${
        darkMode ? 'bg-[#1e293b]/95 border border-gray-700 shadow-blue-900/20' : 'bg-white/90 border border-gray-200 shadow-gray-100'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Understanding Modern Phishing Threats
        </h2>
        <div className={`rounded-lg p-6 backdrop-filter ${
          darkMode ? 'bg-[#1a1f36]/80 shadow-inner shadow-blue-900/10' : 'bg-gray-50/95 shadow-inner shadow-gray-100'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Phishing attacks have become a major cyber threat in our connected world. According to the FBI, these scams cost victims $17.5 billion each year. Attackers now use clever tricks like social engineering and fake identities to target specific people and organizations.
          </p>
          <div className={`mt-4 p-4 border-l-4 rounded-r-lg ${
            darkMode ? 'border-indigo-500 bg-indigo-900/20 text-gray-300' : 'border-indigo-600 bg-indigo-50 text-gray-700'
          }`}>
            <p className="font-medium">Recent Trend Alert (2023):</p>
            <p>AI-powered phishing attacks have increased by 238% since 2022, utilizing deep fakes and natural language processing to create highly convincing impersonations.</p>
          </div>
        </div>
      </section>

      {/* Advanced Phishing Techniques */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
          Advanced Phishing Attack Vectors
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <div className="grid grid-cols-1 gap-6">
            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Business Email Compromise (BEC)
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Sophisticated attacks targeting C-suite executives and financial departments. Average loss per incident: $125,000 (2023 Data).
              </p>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h4 className="font-medium text-emerald-500 mb-2">Attack Pattern:</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>CEO fraud using compromised or spoofed email accounts</li>
                    <li>Invoice manipulation schemes</li>
                    <li>Data theft through employee impersonation</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h4 className="font-medium text-emerald-500 mb-2">Real Case Study:</h4>
                  <p>2023: Crypto.com lost $35M to BEC attacks using fake Outlook rules and mailbox manipulations</p>
                </div>
              </div>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Advanced Persistent Threats (APT)
              </h3>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h4 className="font-medium text-emerald-500 mb-2">Notable Groups:</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>APT29 (Cozy Bear): Sophisticated spear-phishing campaigns</li>
                    <li>Lazarus Group: Banking sector targeted attacks</li>
                    <li>FIN7: Retail and hospitality sector attacks</li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h4 className="font-medium text-emerald-500 mb-2">Recent Campaigns:</h4>
                  <p>2023: SolarWinds supply chain attack affecting 18,000 organizations including Fortune 500 companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Attack Analysis */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          High-Profile Attack Analysis
        </h2>
        <div className={`space-y-6 rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <div className={`p-5 rounded-lg ${
            darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              Colonial Pipeline Attack (2021)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <h4 className="font-medium text-red-500 mb-2">Attack Vector:</h4>
                <ul className={`list-disc pl-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>Compromised VPN credentials through spear-phishing</li>
                  <li>Ransomware deployment causing 5-day pipeline shutdown</li>
                  <li>$4.4 million ransom paid (partially recovered)</li>
                </ul>
              </div>
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <h4 className="font-medium text-red-500 mb-2">Impact:</h4>
                <ul className={`list-disc pl-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>45% of East Coast fuel supply disrupted</li>
                  <li>Gas prices increased by 7-25% in affected regions</li>
                  <li>Critical infrastructure vulnerability exposed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-lg ${
            darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              Microsoft Exchange Server Attack (2021)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <h4 className="font-medium text-red-500 mb-2">Attack Details:</h4>
                <ul className={`list-disc pl-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>State-sponsored attack by HAFNIUM group</li>
                  <li>Zero-day exploits combined with phishing</li>
                  <li>30,000+ organizations compromised globally</li>
                </ul>
              </div>
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-[#1e293b]/60 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}>
                <h4 className="font-medium text-red-500 mb-2">Aftermath:</h4>
                <ul className={`list-disc pl-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>Data theft from government agencies</li>
                  <li>Installation of web shells for persistent access</li>
                  <li>Emergency patches released by Microsoft</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Defense Strategies */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          Enterprise-Grade Defense Strategies
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Technical Controls
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• DMARC, SPF, and DKIM email authentication</li>
                <li>• AI-powered email filtering systems</li>
                <li>• Zero-trust network architecture</li>
                <li>• Hardware security keys for MFA</li>
              </ul>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Administrative Controls
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Security awareness training programs</li>
                <li>• Incident response planning</li>
                <li>• Regular phishing simulations</li>
                <li>• Clear reporting procedures</li>
              </ul>
            </div>

            <div className={`p-5 rounded-lg ${
              darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Emerging Technologies
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Blockchain-based email verification</li>
                <li>• Machine learning detection systems</li>
                <li>• Behavioral analytics</li>
                <li>• Cloud-based email security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Assessment */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
          Advanced Threat Recognition Exercise
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Analyze these sophisticated phishing attempts based on real-world attacks:
          </p>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border-l-4 ${
              darkMode ? 'bg-red-900/20 border-red-500 text-gray-300' : 'bg-red-50 border-red-500 text-gray-700'
            }`}>
              <h4 className="font-medium text-red-500 mb-2">Sample 1: Advanced BEC Attack</h4>
              <p>From: ceo.firstname.lastname@company-name.com</p>
              <p>Subject: Urgent Wire Transfer Required - Acquisition Deal</p>
              <p className="mt-2">Red Flags: Domain spoofing, urgency, unusual request</p>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              darkMode ? 'bg-green-900/20 border-green-500 text-gray-300' : 'bg-green-50 border-green-500 text-gray-700'
            }`}>
              <h4 className="font-medium text-green-500 mb-2">Sample 2: Legitimate Business Communication</h4>
              <p>From: firstname.lastname@company.com</p>
              <p>Subject: Q4 2023 Financial Report - Please Review</p>
              <p className="mt-2">Verification: Digital signature, expected communication, standard protocol</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
          Key Takeaways
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/80 backdrop-blur-sm' : 'bg-gray-50/95'
        }`}>
          <div className={`p-4 rounded-lg ${
            darkMode ? 'bg-[#1a2436]/90 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• Phishing attacks continue to evolve with technology</li>
              <li>• Financial impact reaches billions annually</li>
              <li>• Defense requires multi-layered approach</li>
              <li>• Regular training and updates are crucial</li>
              <li>• Report suspicious activities immediately</li>
            </ul>
          </div>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson1;