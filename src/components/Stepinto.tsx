"use client"
import React from 'react';
import Image from 'next/image';
import Image4 from '@/public/Image (4).png'

const FeaturedSection = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/Image4" // Replace with your image path
          alt="Running outdoors"
          className="w-full h-[70vh] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-gray-500 uppercase mb-2">Featured</p>
          <h1 className="text-4xl font-bold text-gray-900">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-lg text-gray-700 mt-2">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
            Find Your Shoe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;