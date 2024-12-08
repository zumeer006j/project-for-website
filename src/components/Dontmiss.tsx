"use client"
import React from 'react';
import Image from 'next/image';
import Image11 from '@/public/Image (11).png';

const FlightEssentials = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 uppercase">Don’t Miss</p>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {/* Left Image */}
        <div>
          <img
            src="/Image10" // Replace with your image path
            alt="Flight Essentials Model"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-lg p-6">
          <img
            src="/flight-essentials-right.jpg" // Replace with your image path
            alt="Flight Essentials Detail"
            className="mb-4 rounded-md"
          />
          <p className="text-sm text-gray-500 uppercase">Jordan Brand</p>
          <p className="text-sm text-gray-500 uppercase">Spring 2023</p>
        </div>
      </div>

      {/* Text and CTA */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-900">FLIGHT ESSENTIALS</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-2">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800">
          Shop
        </button>
      </div>
    </div>
  );
};

export default FlightEssentials;
