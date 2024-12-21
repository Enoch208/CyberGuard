import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, ChevronRight, AlertTriangle, CheckCircle, XCircle, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Quiz = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [username, setUsername] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { darkMode, setDarkMode } = useTheme(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchQuiz = async () => {
      try {
        // just to verify if the user is logged in
        const verifyResponse = await fetch('https://cyberguard-hc2y.onrender.com/api/verify-token', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!verifyResponse.ok) {
          throw new Error('Token verification failed');
        }

        // Get username from localStorage instead of API response
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);

        // Then fetch quiz data
        const response = await fetch(`https://cyberguard-hc2y.onrender.com/api/quiz/${lessonId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) {
          setQuiz(data.quiz);
          // Add sparkle animation on quiz load
          const sparkleEffect = document.createElement('div');
          sparkleEffect.className = 'sparkle-effect';
          document.body.appendChild(sparkleEffect);
          setTimeout(() => sparkleEffect.remove(), 1000);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        navigate('/login');
      }
    };

    fetchQuiz();
  }, [lessonId, navigate]);

  // Track mouse movement for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAnswerSelect = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);
      const correct = answer === quiz.questions[currentQuestion].answer;
      setIsCorrect(correct);
      if (correct) {
        setScore(score + 1);
        // Add success animation
        const successRipple = document.createElement('div');
        successRipple.className = 'success-ripple';
        document.body.appendChild(successRipple);
        setTimeout(() => successRipple.remove(), 1000);
      }
    }
  };

  const getRemarks = (percentage) => {
    if (percentage >= 90) return "Outstanding! You're a cybersecurity expert!";
    if (percentage >= 80) return "Excellent work! Keep it up!";
    if (percentage >= 70) return "Good job! You're getting there!";
    if (percentage >= 60) return "Not bad, but there's room for improvement.";
    return "You might want to review the lesson material again.";
  };

  const handleNext = async () => {
    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      // Add transition animation
      const transitionEffect = document.createElement('div');
      transitionEffect.className = 'slide-transition';
      document.body.appendChild(transitionEffect);
      setTimeout(() => transitionEffect.remove(), 500);
    } else {
      setShowResults(true);
      const token = localStorage.getItem('token');
      const progress = score / quiz.questions.length;
      
      try {
        await fetch('https://cyberguard-hc2y.onrender.com/api/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            [`progress${lessonId}`]: progress
          })
        });
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    }
  };

  const handleQuit = () => {
    navigate('/module');
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-slate-900' : 'bg-blue-50'
      }`}>
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-blue-50 text-gray-900'
      }`}>
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Quiz not found</h2>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className={`min-h-screen flex items-center justify-center transition-all duration-700 ${
        darkMode ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" : "bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-100"
      }`}>
        <div className={`max-w-2xl w-full mx-4 p-8 rounded-xl backdrop-blur-lg ${darkMode ? 'bg-slate-800/30' : 'bg-white/70'}`}>
          <div className="text-center">
            <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quiz Results</h2>
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse" style={{clipPath: `polygon(0 0, 100% 0, 100% ${100-percentage}%, 0 ${100-percentage}%)`}} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{percentage}%</span>
              </div>
            </div>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {getRemarks(percentage)}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate(`/module/${lessonId}`)}
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                Return to Lesson
              </button>
              <button
                onClick={() => navigate('/module')}
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
              >
                Back to Modules
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-100"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4 py-8">
        <div className={`max-w-3xl mx-auto p-8 rounded-xl backdrop-blur-lg transform transition-all duration-500 ${
          darkMode ? 'bg-slate-800/30' : 'bg-white/70'
        } ${isHovering ? 'scale-[1.02] shadow-2xl' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              <div>
                <h1 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{quiz.title}</h1>
                <div className="flex items-center space-x-2">
                  <Sparkles className={`w-4 h-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Welcome, {username}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg transition-all duration-300
                         hover:shadow-lg hover:scale-110 group"
                aria-label="Toggle dark mode"
              >
                {darkMode ? 
                  <Sun className="w-5 h-5 text-yellow-300 group-hover:rotate-180 transition-transform duration-500" /> : 
                  <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
                }
              </button>
              <button
                onClick={handleQuit}
                className="p-2 rounded-full hover:bg-gray-200/20 transition-colors"
              >
                <X className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className={`text-lg font-bold px-4 py-2 rounded-full ${
                  darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-900'
                }`}>
                  {currentQuestion + 1}/{quiz.questions.length}
                </div>
                <div className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Questions
                </div>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                darkMode ? 'bg-slate-700' : 'bg-white'
              }`}>
                <span className={`font-bold ${
                  darkMode ? 'text-emerald-400' : 'text-emerald-500'
                }`}>{score}</span>
                <span className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Points</span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-gray-600/30 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className={`text-xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {quiz.questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.charAt(0))}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 transform hover:scale-[1.02] ${
                    isAnswered
                      ? option.charAt(0) === quiz.questions[currentQuestion].answer
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : option.charAt(0) === selectedAnswer
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : darkMode ? 'bg-slate-700/50' : 'bg-white/50'
                      : darkMode
                        ? 'bg-slate-700/50 hover:bg-slate-600/50'
                        : 'bg-white/50 hover:bg-white/80'
                  } ${darkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  {option}
                  {isAnswered && option.charAt(0) === quiz.questions[currentQuestion].answer && (
                    <CheckCircle className="inline ml-2 text-green-500" />
                  )}
                  {isAnswered && option.charAt(0) === selectedAnswer && option.charAt(0) !== quiz.questions[currentQuestion].answer && (
                    <XCircle className="inline ml-2 text-red-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-lg font-semibold transition-all duration-500
                bg-gradient-to-r from-emerald-500 to-blue-500 text-white
                shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50
                hover:from-emerald-600 hover:to-blue-600
                flex items-center justify-center space-x-2
                transform hover:-translate-y-1"
            >
              <span>{currentQuestion + 1 === quiz.questions.length ? 'Submit Quiz' : 'Next Question'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
