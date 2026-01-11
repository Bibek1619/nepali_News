import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const Login = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    console.log("Form Data:", { email: trimmedEmail, password: trimmedPassword });

    if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
      toast.error("कृपया मान्य इमेल प्रविष्ट गर्नुहोस्।");
      setIsLoading(false);
      return;
    }

    if (!trimmedPassword || trimmedPassword.length < 6) {
      toast.error("पासवर्ड कम्तीमा ६ अक्षरको हुनुपर्छ।");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation for demonstration purposes
      if (trimmedEmail === "admin@hamrosuchana.com" && trimmedPassword === "admin123") {
        toast.success("सफल लगइन! तपाईं ड्यासबोर्डमा प्रवेश गर्नुभयो।");
        localStorage.setItem("isAuthenticated", "true"); // Save authentication state
        onLogin(); // Trigger onLogin passed as prop
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        toast.error("लगइन असफल! इमेल वा पासवर्ड गलत छ।");
      }
    } catch (error) {
      toast.error("लगइन असफल! कृपया पुनः प्रयास गर्नुहोस्।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white shadow-xl rounded-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin लगइन</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">इमेल</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition duration-300"
              placeholder="तपाईंको इमेल प्रविष्ट गर्नुहोस्"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">पासवर्ड</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition duration-300"
                placeholder="तपाईंको पासवर्ड प्रविष्ट गर्नुहोस्"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition duration-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center disabled:bg-red-400"
            disabled={isLoading}
          >
            {isLoading ? "लोड हुँदै..." : "लगइन गर्नुहोस्"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
