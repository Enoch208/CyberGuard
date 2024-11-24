import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Shield, Lock, Mail, ChevronRight, Sun, Moon, Info, Eye, EyeOff } from "lucide-react";

const Login = ({ isDarkMode, toggleDarkMode }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check for token and navigate if valid
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/module");
    }
  }, [navigate]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error when the user starts typing
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);

      if (response.data.success) {
        localStorage.setItem("token", "dummy_token_for_now"); // Replace with actual token
        navigate("/module");
      } else {
        setError("Invalid username or password. Please contact support.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please try again later.");
    }
  };

  // Open "Coming Soon" popup
  const openComingSoonPopup = (e) => {
    e.preventDefault();
    setIsComingSoonOpen(true);
  };

  // Close "Coming Soon" popup
  const closeComingSoonPopup = () => {
    setIsComingSoonOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 relative ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      {/* Coming Soon Popup */}
      {isComingSoonOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeComingSoonPopup}
        >
          <div
            className={`w-96 p-8 rounded-2xl shadow-2xl transform transition-all duration-300 ${
              isDarkMode ? "bg-slate-800 text-white" : "bg-white text-gray-900"
            } scale-100 opacity-100 hover:scale-105`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
              <Info
                className={`w-16 h-16 ${
                  isDarkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Coming Soon!</h2>
            <p
              className={`text-center mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We're working on the Create Account feature. Stay tuned for an easy registration process.
            </p>
            <button
              onClick={closeComingSoonPopup}
              className={`w-full py-3 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-emerald-700 hover:bg-emerald-600 text-white"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
              }`}
            >
              Understood
            </button>
          </div>
        </div>
      )}

<header className={`relative overflow-hidden ${isDarkMode ? 'bg-[#1a1f36]' : 'bg-blue-600'}`}>
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">CyberGuard</span>
            </div>
            </a>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-white" />}
              </button>
        
            </div>
          </div>
        </nav>
      </header>

      {/* Rest of the Login Component */}
      <section className="py-20 flex items-center justify-center px-4">
        <div
          className={`w-full max-w-md p-10 rounded-2xl shadow-2xl transition-all ${
            isDarkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-blue-100"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-10 tracking-tight">Login</h2>

          {error && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                isDarkMode
                  ? "bg-red-900/50 text-red-200 border border-red-800"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="relative group">
              <Mail
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? "text-slate-400" : "text-gray-400"
                } group-focus-within:text-emerald-500 transition-colors`}
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:border-emerald-500 transition-all ${
                  isDarkMode
                    ? "bg-slate-700 border-slate-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <Lock
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? "text-slate-400" : "text-gray-400"
                } group-focus-within:text-emerald-500 transition-colors`}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-12 py-3 rounded-lg border-2 focus:outline-none focus:border-emerald-500 transition-all ${
                  isDarkMode
                    ? "bg-slate-700 border-slate-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? "text-slate-400" : "text-gray-400"
                } hover:text-emerald-500 transition-colors`}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Login
              <ChevronRight className="ml-2" />
            </button>
          </form>

          <div className="text-center mt-6">
            <a
              href="#"
              onClick={openComingSoonPopup}
              className={`text-sm font-medium ${
                isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              } transition-colors`}
            >
              Create Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
