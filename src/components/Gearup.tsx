"use client"
import React from 'react';
import Image from 'next/image';
import Frame6 from '@/public/Frame (6).png';
import Frame7 from '@/public/Frame (7).png'

const GearUpSection = () => {
  const mensProducts = [
    {
      id: 1,
      name: 'Nike Dri-FIT ADV TechKnit Ultra',
      description: "Men's Short-Sleeve Running Top",
      price: '₹ 3,895',
      image: '/men-top.jpg', // Replace with actual image paths
    },
    {
      id: 2,
      name: 'Nike Dri-FIT Challenger',
      description: "Men's 18cm (approx) 2-in-1 Versatile Shorts",
      price: '₹ 2,495',
      image: '/men-shorts.jpg',
    },
  ];

  const womensProducts = [
    {
      id: 3,
      name: 'Nike Dri-FIT ADV Run Division',
      description: "Women's Long-Sleeve Running Top",
      price: '₹ 5,295',
      image: '/women-top.jpg',
    },
    {
      id: 4,
      name: 'Nike Fast',
      description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: '₹ 3,795',
      image: '/women-leggings.jpg',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Gear Up</h2>

      {/* Men's Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center px-6">
          <h3 className="text-xl font-medium text-gray-800">Shop Men's</h3>
          <div className="flex space-x-4">
            <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
              &#8592;
            </button>
            <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
              &#8594;
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-6">
          {mensProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={"Frame6"}
                alt={"stt"}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Women's Section */}
      <div>
        <div className="flex justify-between items-center px-6">
          <h3 className="text-xl font-medium text-gray-800">Shop Women's</h3>
          <div className="flex space-x-4">
            <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
              &#8592;
            </button>
            <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
              &#8594;
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-6">
          {womensProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={"Frame7"}
                alt={"T99"}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium text-gray-800">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GearUpSection;
