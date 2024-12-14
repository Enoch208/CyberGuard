import React, { useState } from 'react';
import { Shield, Book, Brain, Users, ChevronRight, Sun, Moon, ShieldCheck, Trophy, Lock, Eye, MessageCircle, Bot } from 'lucide-react';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const testimonials = [
    {
      name: "Enoch Idowu",
      work: "Student, OAU.",
      message: "Cyberguard made me aware of many real world security concerns. It has been a great learning experience for me.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFxb-K7NBjEpg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711889764443?e=1737590400&v=beta&t=AXgreEqI959xPs_UsEymDs_j8IPpVWyrYW3erpPSk7E"
    },
    {
      name: "Adekanmi Mojirade", 
      work: "Student, OAU.",
      message: "CyberGuard has been a game changer for me. From staying updated to taking security quizzes, this platform has made me more security conscious.",
      image: "https://i.ibb.co/FXjzZgg/moji.jpg"
    },
    {
      name: "Akinsunmade Temitope",
      work: "Student, OAU.",
      message: "CyberGuard's AI-powered learning and real-world scenarios stand out from other websites.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHkVZbqo5HK6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684199032792?e=1737590400&v=beta&t=tRslhQzpjn6n85e6G1IzPtQJqAwsLK-WamAcEZxl_3U"
    }
  ];

  const features = [
    {
      title: "Educational Content",
      description: "Access comprehensive modules covering essential cybersecurity topics like phishing, malware, and safe browsing practices.",
      icon: <Book className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 group-hover:text-white transition-colors" />
    },
    {
      title: "Interactive Learning",
      description: "Engage with hands-on exercises and dynamic quizzes that provide instant feedback to reinforce your knowledge.",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-400 group-hover:text-white transition-colors" />
    },
    {
      title: "AI Mentorship",
      description: "Get personalized guidance and adaptive learning paths powered by our advanced AI system.",
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 group-hover:text-white transition-colors" />
    }
  ];

  const stats = [
    { icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />, value: "95%", label: "Course Completion Rate" },
    { icon: <Users className="w-8 h-8 md:w-10 md:h-10" />, value: "5+", label: "Registered Users" },
    { icon: <Trophy className="w-8 h-8 md:w-10 md:h-10" />, value: "50+", label: "Educational Modules" }
  ];

  return (
    <div 
      className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#0B1120] via-[#0F2847] to-[#162454] text-white"
          : "bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#BAE6FD] text-gray-900"
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Matrix-like Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                darkMode ? "bg-gradient-to-r from-cyan-400 to-blue-500" : "bg-gradient-to-r from-blue-300 to-cyan-200"
              } opacity-20 animate-float blur-sm`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <nav className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 animate-pulse" />
              <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">CyberGuard</span>
            </div>
            <div className="hidden lg:flex space-x-8 md:space-x-12">
              <a href="#features" className={`text-sm md:text-base transition-colors font-medium ${darkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600'}`}>Features</a>
              <a href="#benefits" className={`text-sm md:text-base transition-colors font-medium ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Benefits</a>
              <a href="#testimonials" className={`text-sm md:text-base transition-colors font-medium ${darkMode ? 'hover:text-indigo-400' : 'hover:text-blue-600'}`}>Testimonials</a>
            </div>
            <div className="flex items-center space-x-3 md:space-x-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 md:p-2.5 rounded-full hover:bg-cyan-500/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? 
                  <Sun className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" /> : 
                  <Moon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                }
              </button>
              <Link 
                to="login" 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-4 md:px-8 py-2 md:py-3 rounded-lg text-white text-sm md:text-base font-semibold 
                  transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 hover:animate-pulse"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Cyber Grid Background */}
        <div className="" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? 'rgba(0,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite',
        }}/>

        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
                Empower Your Digital Security Journey
              </h1>
              <p className={`text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 leading-relaxed ${darkMode ? 'opacity-90' : 'opacity-80'}`}>
                Join our thriving community of cybersecurity enthusiasts. Master the art of digital defense through interactive learning, AI-powered guidance, and real-world scenarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                <Link 
                  to="login" 
                  className="group bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 md:px-10 py-3 md:py-4 rounded-lg text-white text-sm md:text-base font-semibold 
                    transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 hover:animate-pulse flex items-center justify-center"
                >
                  Start Learning 
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  className={`px-6 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold border-2 ${
                    darkMode ? 'border-blue-500/30 hover:bg-blue-500/10' : 'border-blue-400/30 hover:bg-blue-400/10'
                  } transition-all transform hover:scale-105 flex items-center justify-center backdrop-blur-sm`}
                >
                  <Eye className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Watch Demo
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative group">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-30 
                    group-hover:opacity-50 transition-opacity animate-pulse"
                  style={{
                    transform: isHovering ? `translate(${(mousePosition.x - 400) / 50}px, ${(mousePosition.y - 300) / 50}px)` : ''
                  }}
                />
                <img
                  src="https://i.postimg.cc/Ssj9xnrD/cybersecurity-awareness-in-a-demure-way-super-realistic-and-cool-1-4.jpg"
                  alt="Cybersecurity Illustration"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500
                    hover:shadow-blue-500/30 backdrop-blur-sm w-full"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-xl backdrop-blur-lg transition-all transform hover:scale-105
                  ${darkMode ? 'bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10' : 
                  'bg-black/5 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-cyan-400/10'} 
                  hover:shadow-lg hover:shadow-blue-500/20`}
              >
                <div className="text-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`text-sm md:text-base ${darkMode ? 'opacity-80' : 'opacity-70'} font-medium`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group p-6 md:p-8 rounded-xl transition-all transform hover:scale-105 hover:-translate-y-2
                  ${darkMode ? 'bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10' : 
                  'bg-black/5 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-cyan-400/10'} 
                  hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 
                  ${darkMode ? 'bg-white/5 group-hover:bg-gradient-to-r group-hover:from-cyan-400/20 group-hover:to-blue-500/20' : 
                  'bg-black/5 group-hover:bg-gradient-to-r group-hover:from-blue-400/20 group-hover:to-cyan-400/20'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className={`text-sm md:text-base ${darkMode ? 'opacity-80' : 'opacity-70'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`p-6 md:p-8 rounded-xl transition-all transform hover:scale-105
                  ${darkMode ? 'bg-white/5 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-500/10' : 
                  'bg-black/5 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-cyan-400/10'} 
                  hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 p-1">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg md:text-xl font-semibold">{testimonial.name}</p>
                    <p className={`text-sm md:text-base ${darkMode ? 'opacity-60' : 'opacity-50'}`}>{testimonial.work}</p>
                  </div>
                </div>
                <p className={`text-base md:text-lg italic leading-relaxed ${darkMode ? 'opacity-80' : 'opacity-70'}`}>
                  "{testimonial.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className={`p-8 md:p-16 rounded-2xl ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className={`text-lg md:text-xl ${darkMode ? 'opacity-80' : 'opacity-70'} mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed`}>
              Join thousands of students who have transformed their cybersecurity awareness with our cutting-edge platform.
            </p>
            <Link 
              to="login" 
              className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 px-8 md:px-12 py-3 md:py-4 rounded-lg text-white text-lg md:text-xl 
                font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50">
        <Link 
          to="/chat" 
          className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transition-transform transform hover:scale-110`}
          aria-label="Chat with us"
        >
          <Bot className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;