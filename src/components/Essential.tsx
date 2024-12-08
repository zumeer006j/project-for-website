"use client"
import React from 'react';
import Image from 'next/image';
import Frame2 from '@/public/Frame (2).png';
import Frame3 from '@/public/Frame (3).png';
import Frame11 from '@/public/Frame (11).png';
const EssentialsSection = () => {
  const categories = [
    {
      id: 1,
      label: "Men's",
      image: '/essentials-mens.jpg', // Replace with actual image path
    },
    {
      id: 2,
      label: "Women's",
      image: '/essentials-womens.jpg',
    },
    {
      id: 3,
      label: "Kids'",
      image: '/essentials-kids.jpg',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          The Essentials
        </h2>
        <div className="w-16 h-1 mx-auto bg-black mt-2"></div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={category.image}
              alt={category.label}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-bold">{category.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialsSection;
