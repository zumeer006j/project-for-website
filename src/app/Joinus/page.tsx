import Link from 'next/link';
import React from 'react';


const RegistrationForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/nike-logo.png" alt="Nike Logo" className="h-6" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best of Nike
          products, inspiration and community.
        </p>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* First Name Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Country Dropdown */}
          <div className="mb-4">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* Gender Radio Buttons */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="text-black focus:ring-black"
                  required
                />
                <span className="ml-2 text-gray-600">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="text-black focus:ring-black"
                  required
                />
                <span className="ml-2 text-gray-600">Female</span>
              </label>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-black focus:ring-black"
              />
              <span className="ml-2 text-gray-600 text-sm">
                Sign up for emails to get updates from Nike on products, offers and your
                Member benefits.
              </span>
            </label>
          </div>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            JOIN US
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already a Member?{' '}
          <a href="#" className="font-medium text-black hover:underline">
            Sign In.
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
