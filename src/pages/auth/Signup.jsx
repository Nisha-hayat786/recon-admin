import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Sign Up</h1>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-blue-200 font-bold text-xl">Recon</span>
            <span className="text-white font-bold text-xl">Control</span>
          </div>
          <p className="text-blue-100 text-sm">Smart Detailing Management</p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Steve Harvey"
              className="w-full px-3 py-3 bg-transparent border-b-2 border-white text-white placeholder-blue-200 focus:outline-none focus:border-blue-200 transition-colors"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Steve Harvey"
              className="w-full px-3 py-3 bg-transparent border-b-2 border-white text-white placeholder-blue-200 focus:outline-none focus:border-blue-200 transition-colors"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Smart Car Wash"
              className="w-full px-3 py-3 bg-transparent border-b-2 border-white text-white placeholder-blue-200 focus:outline-none focus:border-blue-200 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-3 py-3 bg-transparent border-b-2 border-white text-white placeholder-blue-200 focus:outline-none focus:border-blue-200 transition-colors"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-3 bg-transparent border-b-2 border-white text-white placeholder-blue-200 focus:outline-none focus:border-blue-200 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-3 bg-transparent border-b-2 border-white text-white placeholder-blue-200 focus:outline-none focus:border-blue-200 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showConfirmPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative">
            {/* <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white border-opacity-30"></div>
            </div> */}
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white">Or Login with</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            {/* Facebook */}
            <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
              <span className="text-blue-600 font-bold text-lg">f</span>
            </button>

            {/* Google */}
            <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
              <span className="text-red-500 font-bold text-lg">G</span>
            </button>

            {/* Apple */}
            <button className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm">
            Don't have an account?{' '}
            <Link to="/signin" className="text-white underline hover:text-blue-200 transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;