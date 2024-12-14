import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  Shield, Lock, Mail, ChevronRight, Sun, Moon, 
  Eye, EyeOff, UserPlus, UserCheck, KeyRound, 
  AtSign, ArrowLeft, User, Sparkles
} from "lucide-react";

const Login = React.memo(({ isDarkMode, toggleDarkMode }) => {
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "", 
    username: "", 
    confirmPassword: "" 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const [success, setSuccess] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const navigate = useNavigate();

  // Track mouse position for gradient effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Check for token and navigate if valid
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/module");
    }
    setIsPageLoaded(true);
  }, [navigate]);

  // Don't render anything until initial load is complete
  if (!isPageLoaded) {
    return null;
  }

  // Handle input changes with animation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");

    // Check password requirements in real time
    if (name === 'password') {
      setPasswordErrors({
        length: value.length < 8 || value.length > 32,
        uppercase: !/[A-Z]/.test(value),
        lowercase: !/[a-z]/.test(value),
        number: !/\d/.test(value),
        special: !/[@$!%*?&]/.test(value)
      });
    }
  };

  // Login form validation
  const validateLoginForm = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }

    return true;
  };

  // Signup form validation with enhanced password security
  const validateSignupForm = () => {
    const { email, username, password, confirmPassword } = formData;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!usernameRegex.test(username)) {
      setError("Username must be 3-20 characters and can only contain letters, numbers and underscores");
      return false;
    }

    if (password.length < 8 || password.length > 32) {
      setError("Password must be between 8 and 32 characters");
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return false;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return false;
    }

    if (!/\d/.test(password)) {
      setError("Password must contain at least one number");
      return false;
    }

    if (!/[@$!%*?&]/.test(password)) {
      setError("Password must contain at least one special character (@$!%*?&)");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  // Handle login form submission with success animation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateLoginForm()) return;
    setIsLoading(true);

    try {
      const response = await axios.post("https://cyberguard-hc2y.onrender.com/api/login", {
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/module");
      } else {
        setError(response.data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      
      if (!navigator.onLine) {
        setError("Unable to connect. Please check your internet connection.");
      } else if (err.response) {
        // Server responded with error
        if (err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else if (err.response.status === 500) {
          setError("Server error occurred. Please try again later.");
        } else {
          setError("Invalid credentials or server error. Please try again.");
        }
      } else if (err.request) {
        // Request made but no response
        setError("No response from server. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle signup form submission with enhanced feedback
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateSignupForm()) return;
    setIsLoading(true);

    try {
      const response = await axios.post("https://cyberguard-hc2y.onrender.com/api/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        setSuccess("Account created successfully! Please login.");
        setError("");
        setTimeout(() => {
          setShowSignup(false);
          setFormData({ email: "", password: "", username: "", confirmPassword: "" });
          setSuccess("");
        }, 2000);
      } else {
        setError(response.data.message || "Failed to create account. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      
      if (!navigator.onLine) {
        setError("Unable to connect. Please check your internet connection.");
      } else if (err.response) {
        // Server responded with error
        if (err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else if (err.response.status === 500) {
          setError("Server error occurred. Please try again later.");
        } else if (err.response.status === 409) {
          setError("Email or username already exists. Please try another.");
        } else {
          setError("Signup failed. Please try again with different credentials.");
        }
      } else if (err.request) {
        // Request made but no response
        setError("No response from server. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred during signup. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle between Login and Signup with animation
  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setError("");
    setSuccess("");
    setFormData({ email: "", password: "", username: "", confirmPassword: "" });
    setPasswordErrors({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false
    });
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-100"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                isDarkMode ? "bg-blue-500" : "bg-white"
              } opacity-20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
      </div>

      <header className="relative z-10 backdrop-blur-lg bg-opacity-80">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Shield className={`w-8 h-8 text-emerald-400 transition-all duration-300 ${
                isHovering ? 'animate-pulse rotate-12' : ''
              }`} />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                CyberGuard
              </span>
              {isHovering && (
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              )}
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg transition-all duration-300
                       hover:shadow-lg hover:scale-110 group"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="w-5 h-5 text-yellow-300 group-hover:rotate-180 transition-transform duration-500" /> : 
                <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
              }
            </button>
          </div>
        </nav>
      </header>

      <section className="relative z-10 py-20 px-4 flex items-center justify-center">
        <div 
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`w-full max-w-md p-8 rounded-2xl transition-all duration-500 transform hover:scale-[1.02]
            ${isDarkMode 
              ? "bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-emerald-500/10" 
              : "bg-white/70 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-500/10"
            }`}
          style={{
            background: isDarkMode 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 30%)`
              : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 30%)`
          }}
        >
          {/* Form Header with Enhanced Animation */}
          <div className="relative mb-8 text-center">
            {showSignup && (
              <button 
                onClick={toggleSignup}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-opacity-20 
                         hover:bg-slate-500 transition-all duration-300 hover:scale-110"
              >
                <ArrowLeft className={`
                  ${isDarkMode ? "text-slate-400" : "text-gray-600"}
                  transform transition-transform hover:-translate-x-1
                `} />
              </button>
            )}
            <h2 className={`text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent
              transition-all duration-300 ${isHovering ? 'scale-105' : ''}`}>
              {showSignup ? "Create Account" : "Welcome Back"}
            </h2>
            <p className={`mt-2 ${isDarkMode ? "text-slate-400" : "text-gray-600"} transition-opacity duration-300`}>
              {showSignup ? "Join our cybersecurity community" : "Secure your digital presence"}
            </p>
          </div>

          {/* Enhanced Error Message */}
          {error && (
            <div className={`mb-6 p-4 rounded-lg animate-shake ${
              isDarkMode
                ? "bg-red-900/30 text-red-200 border border-red-800/50"
                : "bg-red-100 text-red-800 border border-red-200"
            } transform transition-all duration-300 hover:scale-[1.02]`}>
              <p className="flex items-center">
                <span className="mr-2 animate-bounce">⚠️</span>
                {error}
              </p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className={`mb-6 p-4 rounded-lg ${
              isDarkMode
                ? "bg-green-900/30 text-green-200 border border-green-800/50"
                : "bg-green-100 text-green-800 border border-green-200"
            } transform transition-all duration-300 hover:scale-[1.02]`}>
              <p className="flex items-center">
                <span className="mr-2">✅</span>
                {success}
              </p>
            </div>
          )}

          {!showSignup ? (
            // Enhanced Login Form
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300
                    ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                    group-hover:text-emerald-500 group-hover:scale-110`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }
                      focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50
                      hover:shadow-lg hover:scale-[1.01]`}
                  />
                </div>

                <div className="relative group">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300
                    ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                    group-hover:text-emerald-500 group-hover:scale-110`}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }
                      focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50
                      hover:shadow-lg hover:scale-[1.01]`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300
                      ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                      hover:text-emerald-500 hover:scale-110`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-500
                  ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}
                  bg-gradient-to-r from-emerald-500 to-blue-500 text-white
                  shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50
                  hover:from-emerald-600 hover:to-blue-600
                  flex items-center justify-center space-x-2
                  transform hover:-translate-y-1`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Login</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          ) : (
            // Enhanced Signup Form
            <form onSubmit={handleSignupSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300
                    ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                    group-hover:text-emerald-500 group-hover:scale-110`}
                  />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }
                      focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50
                      hover:shadow-lg hover:scale-[1.01]`}
                  />
                </div>

                <div className="relative group">
                  <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300
                    ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                    group-hover:text-emerald-500 group-hover:scale-110`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }
                      focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50
                      hover:shadow-lg hover:scale-[1.01]`}
                  />
                </div>

                <div className="relative group">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300
                    ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                    group-hover:text-emerald-500 group-hover:scale-110`}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }
                      focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50
                      hover:shadow-lg hover:scale-[1.01]`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300
                      ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                      hover:text-emerald-500 hover:scale-110`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Requirements Checklist */}
                {showSignup && formData.password && (
                  <div className={`text-sm space-y-1 p-3 rounded-lg ${
                    isDarkMode ? "bg-slate-700/50" : "bg-gray-100/50"
                  }`}>
                    <p className={`font-medium ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}>
                      Password Requirements:
                    </p>
                    <ul className="space-y-1">
                      <li className={`flex items-center ${passwordErrors.length ? "text-red-500" : "text-green-500"}`}>
                        {passwordErrors.length ? "✗" : "✓"} 8-32 characters
                      </li>
                      <li className={`flex items-center ${passwordErrors.uppercase ? "text-red-500" : "text-green-500"}`}>
                        {passwordErrors.uppercase ? "✗" : "✓"} One uppercase letter
                      </li>
                      <li className={`flex items-center ${passwordErrors.lowercase ? "text-red-500" : "text-green-500"}`}>
                        {passwordErrors.lowercase ? "✗" : "✓"} One lowercase letter
                      </li>
                      <li className={`flex items-center ${passwordErrors.number ? "text-red-500" : "text-green-500"}`}>
                        {passwordErrors.number ? "✗" : "✓"} One number
                      </li>
                      <li className={`flex items-center ${passwordErrors.special ? "text-red-500" : "text-green-500"}`}>
                        {passwordErrors.special ? "✗" : "✓"} One special character (@$!%*?&)
                      </li>
                    </ul>
                  </div>
                )}

                <div className="relative group">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300
                    ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                    group-hover:text-emerald-500 group-hover:scale-110`}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDarkMode
                        ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }
                      focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50
                      hover:shadow-lg hover:scale-[1.01]`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300
                      ${isDarkMode ? "text-slate-400" : "text-gray-400"}
                      hover:text-emerald-500 hover:scale-110`}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-500
                  ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}
                  bg-gradient-to-r from-emerald-500 to-blue-500 text-white
                  shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50
                  hover:from-emerald-600 hover:to-blue-600
                  flex items-center justify-center space-x-2
                  transform hover:-translate-y-1`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Create Account</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Enhanced Toggle Link */}
          <div className="mt-6 text-center">
            <button 
              onClick={toggleSignup}
              className={`text-sm font-medium transition-all duration-300 hover:scale-110
                ${isDarkMode 
                  ? "text-emerald-400 hover:text-emerald-300" 
                  : "text-blue-600 hover:text-blue-700"}
                transform hover:-translate-y-1`}
            >
              {showSignup ? "Already have an account? Login" : "New to CyberGuard? Sign up"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
})

export default Login;