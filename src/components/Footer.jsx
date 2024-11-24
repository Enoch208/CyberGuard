import { Shield, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = ({isDarkMode, toggleDarkMode}) => {

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer 
      className={`
        ${isDarkMode ? 'bg-neutral-900 text-neutral-200' : 'bg-neutral-100 text-neutral-800'}
        transition-colors duration-300 ease-in-out
        py-16 relative
      `}
    >

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className={`w-8 h-8 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                CyberGuard
              </span>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Empowering digital safety through cutting-edge cybersecurity awareness and protection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
              Quick Links
            </h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {['Home', 'About', 'Threats', 'Security Tips', 'Resources'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="transition-colors hover:text-emerald-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Base */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
              Knowledge Base
            </h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {['Common Attacks', 'Security Quiz', 'AI Assistant', 'Resources', 'FAQs'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="transition-colors hover:text-emerald-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
              Stay Informed
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Subscribe for the latest cybersecurity insights and protection strategies.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className={`
                  w-full p-2 rounded-md transition-all
                  ${isDarkMode 
                    ? 'bg-neutral-800 text-neutral-200 placeholder-neutral-500 focus:ring-emerald-500' 
                    : 'bg-white text-neutral-800 placeholder-neutral-400 focus:ring-emerald-600'}
                  focus:outline-none focus:ring-2
                `}
              />
              <button 
                type="submit" 
                className={`
                  w-full p-2 rounded-md transition-colors
                  ${isDarkMode 
                    ? 'bg-emerald-700 hover:bg-emerald-600 text-white' 
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'}
                `}
              >
                Subscribe
              </button>
            </form>

            {isSubscribed && (
              <div 
                className={`
                  mt-2 p-2 rounded-md text-center text-sm
                  ${isDarkMode 
                    ? 'bg-emerald-900 text-emerald-300' 
                    : 'bg-emerald-100 text-emerald-800'}
                `}
              >
                Thanks for subscribing! 📩
              </div>
            )}

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 justify-center">
              {[
                { Icon: Twitter, href: "https://x.com/sweetner_pal?t=cpOxNq1rlljXm6-ItNMH7Q&s=09" },
                { Icon: Instagram, href: "https://www.instagram.com/sweetner_pale/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mojirade-adekanmi-971a05248" }
              ].map(({ Icon, href }) => (
                <a 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`
                    transition-colors
                    ${isDarkMode 
                      ? 'text-neutral-400 hover:text-white' 
                      : 'text-neutral-600 hover:text-neutral-900'}
                  `}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className={`
            mt-12 pt-6 text-center border-t
            ${isDarkMode 
              ? 'border-neutral-700 text-neutral-500' 
              : 'border-neutral-300 text-neutral-600'}
          `}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {[
              { Icon: Mail, text: "mojiradeoluranti@gmail.com" },
              { Icon: Phone, text: "+234 901 680 0091" },
              { Icon: MapPin, text: "Lagos, Nigeria" }
            ].map(({ Icon, text }) => (
              <div 
                key={text} 
                className="flex items-center space-x-2"
              >
                <Icon className={`w-5 h-5 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
          
          <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-700'}`}>
            © 2024 CyberGuard. All Rights Reserved.
          </p>
          <p className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
            Protecting You in the Digital World
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;