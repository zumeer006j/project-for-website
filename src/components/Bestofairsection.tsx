"use client"
import React from 'react';
import Image from 'next/image';
import Frame5 from '@/public/Frame5.png'

const BestOfAirMax = () => {
  const products = [
    {
      id: 1,
      name: 'Nike Air Max Pulse',
      category: "Women's Shoes",
      price: '₹ 13,995',
      image: '/air-max-pulse-women.jpg', // Replace with actual image paths
    },
    {
      id: 2,
      name: 'Nike Air Max Pulse',
      category: "Men's Shoes",
      price: '₹ 13,995',
      image: '/air-max-pulse-men.jpg',
    },
    {
      id: 3,
      name: 'Nike Air Max 97 SE',
      category: "Men's Shoes",
      price: '₹ 16,995',
      image: '/air-max-97.jpg',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      {/* Section Header */}
      <div className="flex justify-between items-center px-6">
        <h2 className="text-2xl font-bold text-gray-800">Best of Air Max</h2>
        <a href="#" className="text-gray-500 hover:text-black">Shop</a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="/Frame5"
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfAirMax;
