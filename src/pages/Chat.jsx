import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Shield, Sun, Moon, Link2, Sparkles, Loader, Trash2, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNavigate } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { motion, AnimatePresence } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [username, setUsername] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [markdownPreview, setMarkdownPreview] = useState('');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
        setShowScrollButton(!isNearBottom);
      }
    };

    const chatContainer = chatContainerRef.current;
    chatContainer?.addEventListener('scroll', handleScroll);
    return () => chatContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    const verifyToken = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/verify-token', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Token invalid');
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
          setMessages([{
            text: `# Welcome back ${storedUsername}! 👋\n\nI'm your CyberGuard AI Assistant, ready to help you with all things cybersecurity. What would you like to learn about today?`,
            sender: 'ai',
            timestamp: new Date().toISOString()
          }]);
        }
      } catch (err) {
        console.error('Token verification failed:', err);
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
      }
    };
    verifyToken();
  }, [navigate]);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.style.setProperty('--transition-speed', '0.7s');
    setDarkMode(!darkMode);
  };

  const clearChat = () => {
    setMessages([{
      text: `# Let's start fresh ${username}! \n\nWhat would you like to know about cybersecurity? 🔐`,
      sender: 'ai',
      timestamp: new Date().toISOString()
    }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login', { replace: true });
        return;
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
                text: `You are CyberGuard AI, a friendly and knowledgeable cybersecurity assistant dedicated to teaching university students about cybersecurity. Your mission is to explain concepts clearly and engagingly, using markdown formatting to structure responses for easy readability.

                Guidelines:
                - Format all responses in markdown with proper headings (#, ##, ###)
                - Use proper spacing between sections (add empty lines)
                - Create clear lists with bullet points (-) or numbers (1.)
                - Use emphasis (* or _) for important points
                - Make links stand out by adding a 🔗 icon before them
                - Format links as [Title](URL) with descriptive titles
                - Group related links in their own section
                - Code blocks should specify language
                - Keep paragraphs short and well-spaced
                - Add subheadings to break up long sections
                - Use up to 2 relevant emojis per section
                - Avoid using ** or __ for bold text
                - For links, use this exact format to make them stand out:
                  🔗 <a href="URL" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-2 hover:decoration-4 transition-all duration-200">Title <Link2 className="w-4 h-4" /></a>
                
                Example Response Format:
                # Understanding SQL Injection 🛡️

                SQL injection is a critical web security vulnerability that can compromise your database.

                ## What is SQL Injection?
                
                A malicious technique where attackers insert SQL commands into input fields.

                ## Common Attack Vectors
                
                1. Form inputs
                2. URL parameters
                3. Cookie values

                ## Prevention Methods
                
                - Use prepared statements
                - Input validation
                - Proper error handling

                ## Code Example
                
                \`\`\`python
                # Unsafe
                query = "SELECT * FROM users WHERE id = " + user_input
                
                # Safe
                query = "SELECT * FROM users WHERE id = ?"
                \`\`\`

                ## Additional Resources
                
                🔗 <a href="https://owasp.org/sql-injection" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-2 hover:decoration-4 transition-all duration-200">OWASP SQL Injection Guide <Link2 className="w-4 h-4" /></a>
                
                🔗 <a href="https://sqlinjection.net" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-2 hover:decoration-4 transition-all duration-200">Interactive SQL Injection Tutorial <Link2 className="w-4 h-4" /></a>
                
                Here's the user question: ${input}`
            }]
          }]
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = {
          text: "# Oops! \n\nI'm having trouble accessing my knowledge base. Please try again! 🔄",
          sender: 'ai',
          isError: true,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, errorMessage]);
        return;
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsTyping(false);

      // Get response text and preview markdown
      let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "# Connection Issue \n\nI'm having a brief connection issue. Let's try again! 🔄";
      
      // Format the text with proper spacing and preview
      responseText = responseText
        .replace(/\n#/g, '\n\n#')
        .replace(/\n-/g, '\n\n-')
        .replace(/\n\d\./g, '\n\n1.');
      
      setMarkdownPreview(responseText);

      const aiMessage = {
        text: responseText,
        sender: 'ai',
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        text: "# Error Connecting 🤖 \n\nI'm having trouble connecting right now. Let's try again in a moment!",
        sender: 'ai',
        isError: true,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
    setIsTyping(false);
    inputRef.current?.focus();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-all duration-700 ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" 
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between mb-8 p-4 sm:p-6 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300 ${
            darkMode ? 'bg-slate-800/40 hover:bg-slate-800/50' : 'bg-white/70 hover:bg-white/80'
          }`}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" 
            onClick={() => navigate('/module')}
          >
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 animate-pulse" />
            <h1 className={`text-lg sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent`}>
              CyberGuard AI
            </h1>
          </motion.div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearChat}
              className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
                darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-100'
              }`}
              title="Clear chat"
            >
              <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 sm:p-3 rounded-full transition-all duration-300"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? 
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" /> : 
                <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              }
            </motion.button>
          </div>
        </motion.div>

        <div 
          ref={chatContainerRef}
          className={`h-[calc(100vh-300px)] sm:h-[600px] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 overflow-y-auto backdrop-blur-lg shadow-lg transition-all duration-300 scroll-smooth ${
            darkMode ? 'bg-slate-800/40 hover:bg-slate-800/50' : 'bg-white/70 hover:bg-white/80'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start space-x-2 sm:space-x-3 mb-6 sm:mb-8 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'ai' && (
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-500 shadow-lg transition-all duration-300"
                  >
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                )}
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`${message.sender === 'user' ? 'max-w-[60%] sm:max-w-[40%]' : 'max-w-[85%] sm:max-w-[70%]'} p-4 sm:p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                    message.sender === 'user'
                      ? darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : message.isError
                        ? darkMode
                          ? 'bg-red-900/50 text-red-200'
                          : 'bg-red-100 text-red-800'
                        : darkMode
                          ? 'bg-slate-700/90 text-gray-200'
                          : 'bg-white/90 text-gray-800'
                  }`}
                >
                  {message.sender === 'ai' ? (
                    <div className="markdown-preview prose dark:prose-invert max-w-none">
                      <ReactMarkdown 
                        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
                        remarkPlugins={[remarkGfm]}
                      >
                        {message.text}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-base sm:text-lg leading-relaxed">{message.text}</p>
                  )}
                  {message.sender === 'ai' && (
                    <div className="text-[10px] sm:text-xs opacity-50 mt-4">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </div>
                  )}
                </motion.div>

                {message.sender === 'user' && (
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg transition-all duration-300"
                  >
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-500 shadow-lg"
              >
                <Loader className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`p-4 sm:p-6 rounded-2xl shadow-lg ${
                  darkMode ? 'bg-slate-700/90 text-gray-200' : 'bg-white/90 text-gray-800'
                }`}
              >
                <p className="text-base sm:text-lg flex items-center gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  Thinking...
                </p>
              </motion.div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToBottom}
              className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-8 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 ${
                darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 rotate-90" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="relative"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about cybersecurity..."
            className={`w-full p-5 sm:p-6 pr-14 sm:pr-16 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
              darkMode 
                ? 'bg-slate-800/40 text-white placeholder-gray-400 hover:bg-slate-800/50' 
                : 'bg-white/70 text-gray-900 placeholder-gray-500 hover:bg-white/80'
            }`}
          />
          <motion.button
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={isLoading}
            className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500 hover:text-white'
            }`}
          >
            <Send className={`w-4 h-4 sm:w-5 sm:h-5 ${
              darkMode ? 'text-emerald-400' : 'text-emerald-600'
            }`} />
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Chat;
