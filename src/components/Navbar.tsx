"use client"
import Image from 'next/image';
import React from 'react';
import Frame4 from '@/public/Frame4.png';
import Frame1 from '@/public/Frame1.png';
import AutoLayoutHorizontal from '@/public/Auto Layout Horizontal.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div>
        <img
          src="/Frame1.png" // Replace with your logo's path
          alt="Nike Logo"
          className="h-6"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-black">New & Featured</a>
        <a href="#" className="text-gray-600 hover:text-black">Men</a>
        <a href="#" className="text-gray-600 hover:text-black">Women</a>
        <a href="#" className="text-gray-600 hover:text-black">Kids</a>
        <a href="#" className="text-gray-600 hover:text-black">Sale</a>
        <a href="#" className="text-gray-600 hover:text-black">SNKRS</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-1">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-gray-600 w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Wishlist Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16h16M4 12h16M4 8h16"
          />
        </svg>

        {/* Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18M3 3l1.35 6.7c.11.55.45 1.02.95 1.25m15.4-1.25L21 3M7 3v2M17 3v2m2 7H5m2 0a4 4 0 100 8m10-8a4 4 0 100 8"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
