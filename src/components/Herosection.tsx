"use client"
import React from 'react';
import Image from 'next/image';
import Image12 from '@/public/Image12.png'

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/Image12.png" // Replace with the path to your image
          alt="Nike Air Max Pulse"
          className="w-full object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-sm text-gray-500 uppercase">First Look</p>
          <h1 className="text-4xl font-bold text-gray-800">NIKE AIR MAX PULSE</h1>
          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
              Notify Me
            </button>
            <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-200">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>

      {/* Footer Logos */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <img src="/logo1.png" alt="Logo 1" className="h-6" />
        <img src="/logo2.png" alt="Logo 2" className="h-6" />
        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default Hero;
