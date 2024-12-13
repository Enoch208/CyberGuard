import React, { useEffect } from 'react';
import LessonContent from '../../components/LessonContent';
import { useTheme } from '../../context/ThemeContext';

const Lesson5 = () => {
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
              progress5: 0.5
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
      title="Module 5: Cybersecurity Threats and Risk Management" 
      description="The digital world faces constant threats. But don’t worry—this chapter teaches you how to identify risks and manage them effectively."
    >
      {/* Chapter 1 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Chapter 1: Common Cybersecurity Threats
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>DDoS Attacks:</strong> Distributed Denial of Service (DDoS) attacks aim to overwhelm a website or service with excessive traffic, rendering it inaccessible to legitimate users. These attacks can be mitigated by using traffic filtering and load balancing techniques. Understanding the nature of DDoS attacks is crucial, as they can be orchestrated by botnets, which are networks of compromised computers controlled by attackers. By employing advanced threat detection systems and collaborating with internet service providers, organizations can better defend against these disruptive attacks.</li>
            <li><strong>Amplification Attacks:</strong> These attacks exploit vulnerabilities in network protocols to amplify the amount of data sent to a target, causing disruption. Understanding and securing network configurations can help prevent such attacks. Amplification attacks often leverage protocols like DNS or NTP, which can be manipulated to send large responses to small requests. By implementing rate limiting and filtering techniques, as well as keeping systems updated with the latest security patches, organizations can reduce the risk of falling victim to these attacks.</li>
            <li><strong>Man-in-the-Middle (MitM) Attacks:</strong> In these attacks, an attacker intercepts and potentially alters communication between two parties without their knowledge. Using encryption protocols like HTTPS and VPNs can protect against MitM attacks. It's essential to ensure that all communications are encrypted and that users are educated about the dangers of connecting to unsecured networks. Additionally, implementing strong authentication mechanisms and regularly monitoring network traffic can help detect and prevent MitM attacks.</li>
          </ul>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          Chapter 2: Managing Risks
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Risk management in cybersecurity involves a systematic approach to identifying, assessing, and mitigating risks. It's akin to preparing for a storm by taking proactive measures. This process begins with a thorough risk assessment, where potential threats and vulnerabilities are identified. By understanding the specific risks that an organization faces, tailored strategies can be developed to address them effectively.
          </p>
          <ul className={`list-disc pl-5 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li><strong>Identify Risks:</strong> Recognize potential threats and vulnerabilities in your systems and processes. This involves conducting regular security audits and vulnerability assessments to uncover weaknesses that could be exploited by attackers.</li>
            <li><strong>Assess Impact:</strong> Evaluate the potential consequences of each risk, considering both likelihood and severity. This step helps prioritize risks based on their potential impact on the organization, allowing for more efficient allocation of resources.</li>
            <li><strong>Mitigation Strategies:</strong> Implement measures to reduce the impact or likelihood of risks, such as regular software updates, employee training, and robust security policies. Developing a comprehensive incident response plan is also crucial, as it ensures that the organization is prepared to respond swiftly and effectively to any security incidents that may occur.</li>
          </ul>
          <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Example: A company might implement a comprehensive backup strategy to ensure data integrity and availability in the event of a cyberattack, minimizing downtime and data loss. This strategy could include regular data backups, offsite storage, and periodic testing of backup systems to ensure their reliability. By having a robust backup plan in place, organizations can quickly recover from data breaches or ransomware attacks, minimizing the impact on their operations.
          </p>
        </div>
      </section>

      {/* Final Chapter */}
      <section className={`rounded-xl p-6 mb-8 shadow-lg ${
        darkMode ? 'bg-[#1e293b] border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          Final Chapter: Be Prepared, Not Scared
        </h2>
        <div className={`rounded-lg p-6 ${
          darkMode ? 'bg-[#1a1f36]/60 backdrop-blur-sm' : 'bg-gray-50'
        }`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            By equipping yourself with the knowledge to identify threats and implement effective risk management strategies, you can confidently navigate the digital landscape. Remember, preparation is key to staying one step ahead of cybercriminals and ensuring the security of your digital assets. It's important to foster a culture of cybersecurity awareness within your organization, where employees are educated about the latest threats and best practices for staying safe online. Regular training sessions and simulated phishing exercises can help reinforce this knowledge and keep security top of mind. By taking a proactive approach to cybersecurity, you can protect your organization from potential threats and ensure the continued safety and integrity of your digital assets.
          </p>
        </div>
      </section>
    </LessonContent>
  );
};

export default Lesson5;