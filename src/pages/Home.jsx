import React, { useState } from 'react';
import { Shield, Book, Brain, Users, ChevronRight, Sun, Moon, ShieldCheck, Trophy } from 'lucide-react';
import Footer from '../components/Footer';


const Home = ({isDarkMode, toggleDarkMode}) => {


  const testimonials = [
    {
      name: "Adekanmi Mojirade",
      work: "Student, OAU.",
      message: "CyberGuard has been a game changer for me. From staying updated to taking security quizzes, this platform has made me more security conscious.",
      image: "https://i.ibb.co/FXjzZgg/moji.jpg"
    },
    {
      name: "Enoch Idowu",
      work: "Student, OAU.",
      message: "Cyberguard made me aware of many real world security concerns. It has been a great learning experience for me.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFxb-K7NBjEpg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711889764443?e=1737590400&v=beta&t=AXgreEqI959xPs_UsEymDs_j8IPpVWyrYW3erpPSk7E"
    },
    {
      name: "Akinsunmade Temitope",
      work: "Student, OAU.",
      message: "CyberGuard's AI-powered learning and real-world scenarios stand out from other websites.",
      image:  "https://media.licdn.com/dms/image/v2/D4D03AQHkVZbqo5HK6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684199032792?e=1737590400&v=beta&t=tRslhQzpjn6n85e6G1IzPtQJqAwsLK-WamAcEZxl_3U"
    }
  ];

  const features = [
    {
      title: "Educational Content",
      description: "Access modules covering topics like phishing, malware, and safe browsing.",
      icon: <Book className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Interactive Learning",
      description: "Engage with exercises and quizzes for real-time feedback.",
      icon: <Brain className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "AI Mentorship",
      description: "Get personalized guidance to tackle cybersecurity challenges.",
      icon: <Shield className="w-6 h-6 text-cyan-500" />
    }
  ];

  const stats = [
    { icon: <ShieldCheck className="w-8 h-8" />, value: "95%", label: "Course Completion Rate" },
    { icon: <Users className="w-8 h-8" />, value: "5+", label: "Registered Users" },
    { icon: <Trophy className="w-8 h-8" />, value: "50+", label: "Educational Modules" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`relative overflow-hidden ${isDarkMode ? 'bg-[#1a1f36]' : 'bg-blue-600'}`}>
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">CyberGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-emerald-300 transition">Features</a>
              <a href="#benefits" className="text-white hover:text-emerald-300 transition">Benefits</a>
              <a href="#testimonials" className="text-white hover:text-emerald-300 transition">Testimonials</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-white" />}
              </button>
              <a  href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-full text-sm font-semibold transition text-white">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 text-white mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Empower Your Digital Security Journey</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Join our community staying alert about current cyber threats and scams. Learn about common attacks, test your security awareness through quizzes, and get personalized guidance from our AI assistant.
            </p>
            <div className="flex space-x-4">
              <a href='/login' className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition flex items-center">
                Start Learning <ChevronRight className="ml-2" />
              </a>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-20 blur-3xl`}></div>
              <img
                src="https://i.postimg.cc/Ssj9xnrD/cybersecurity-awareness-in-a-demure-way-super-realistic-and-cool-1-4.jpg"
                alt="Cybersecurity Illustration"
                className="relative w-full z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`flex items-center space-x-4 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-10'}`}>
                <div className="text-emerald-400">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-50"></div>
      </header>

      {/* Features Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1a1f36]' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-7">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#1a1f36] hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition-all shadow-lg`}>
                <div className="flex items-center mb-6">
                 
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                  <img className='block w-full h-12 object-cover rounded-full' src={testimonial.image} alt="" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.work}
                    </p>
                  </div>
                </div>
                <p className={`italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {testimonial.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1a1f36]' : 'bg-blue-600'}`}>
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing community of students who have transformed their 
            cybersecurity awareness with our platform.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition">
          <a  href="/login" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-full text-sm font-semibold transition text-white">
            Get Started Now
            </a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
};

export default Home;