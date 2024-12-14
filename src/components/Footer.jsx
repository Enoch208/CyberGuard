import { Shield, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
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
        ${darkMode ? 'bg-neutral-900 text-neutral-200' : 'bg-neutral-100 text-neutral-800'}
        transition-colors duration-300 ease-in-out
        py-12 sm:py-16 lg:py-20 relative
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-6">
              <Shield className={`w-8 h-8 sm:w-10 sm:h-10 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                CyberGuard
              </span>
            </div>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-neutral-400' : 'text-neutral-600'} max-w-xs mx-auto sm:mx-0`}>
              Empowering digital safety through cutting-edge cybersecurity awareness and protection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className={`text-lg sm:text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Quick Links
            </h3>
            <ul className={`space-y-3 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {['Home', 'About', 'Threats', 'Security Tips', 'Resources'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="transition-all duration-300 hover:text-emerald-500 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Base */}
          <div className="text-center sm:text-left">
            <h3 className={`text-lg sm:text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Knowledge Base
            </h3>
            <ul className={`space-y-3 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {['Common Attacks', 'Security Quiz', 'AI Assistant', 'Resources', 'FAQs'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="transition-all duration-300 hover:text-emerald-500 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className={`text-lg sm:text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Stay Informed
            </h3>
            <p className={`text-sm sm:text-base mb-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Subscribe for the latest cybersecurity insights and protection strategies.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className={`
                    w-full p-3 rounded-lg transition-all duration-300
                    ${darkMode 
                      ? 'bg-neutral-800 text-neutral-200 placeholder-neutral-500' 
                      : 'bg-white text-neutral-800 placeholder-neutral-400'}
                    focus:outline-none focus:ring-2 focus:ring-emerald-500
                    shadow-sm hover:shadow-md
                  `}
                />
              </div>
              <button 
                type="submit" 
                className={`
                  w-full p-3 rounded-lg transition-all duration-300
                  ${darkMode 
                    ? 'bg-emerald-600 hover:bg-emerald-500' 
                    : 'bg-emerald-500 hover:bg-emerald-600'}
                  text-white font-medium
                  transform hover:scale-[1.02] hover:shadow-lg
                `}
              >
                Subscribe
              </button>
            </form>

            {isSubscribed && (
              <div 
                className={`
                  mt-4 p-3 rounded-lg text-center text-sm animate-fade-in
                  ${darkMode 
                    ? 'bg-emerald-900/50 text-emerald-300' 
                    : 'bg-emerald-100 text-emerald-800'}
                `}
              >
                Thanks for subscribing! 📩
              </div>
            )}

            {/* Social Icons */}
            <div className="flex space-x-6 mt-8 justify-center sm:justify-start">
              {[
                { Icon: Twitter, href: "https://x.com/enochidx" },
                { Icon: Instagram, href: "https://www.instagram.com/enochid200" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/enochid" }
              ].map(({ Icon, href }) => (
                <a 
                  key={href} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`
                    transition-all duration-300
                    ${darkMode 
                      ? 'text-neutral-400 hover:text-emerald-400' 
                      : 'text-neutral-600 hover:text-emerald-600'}
                    transform hover:scale-110
                  `}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className={`
            mt-12 pt-8 text-center border-t
            ${darkMode 
              ? 'border-neutral-800' 
              : 'border-neutral-200'}
          `}
        >
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[
              { Icon: Mail, text: "enochid200@gmail.com" },
              { Icon: Phone, text: "+234 701 325 8955" },
              { Icon: MapPin, text: "Lagos, Nigeria" }
            ].map(({ Icon, text }) => (
              <div 
                key={text} 
                className="flex items-center space-x-2 group"
              >
                <Icon className={`w-5 h-5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} group-hover:scale-110 transition-transform duration-300`} />
                <span className={`text-sm sm:text-base ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>{text}</span>
              </div>
            ))}
          </div>
          
          <p className={`text-sm sm:text-base font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-700'}`}>
            © 2024 CyberGuard. All Rights Reserved.
          </p>
          <p className={`text-xs sm:text-sm mt-2 ${darkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
            Protecting You in the Digital World
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;