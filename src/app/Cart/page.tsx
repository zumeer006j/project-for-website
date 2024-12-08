import React from 'react';
import Image from 'next/image';
import Frame8 from '@/public/Frame (8).png'
import Image5 from '@/public/Image (5).png'

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Nike Dri-FIT ADV TechKnit Ultra',
      description: "Men's Short-Sleeve Running Top",
      size: 'L',
      quantity: 1,
      price: '₹ 3,895.00',
      image: '/product-1.jpg', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Nike Air Max 97 SE',
      description: "Men's Shoes",
      size: '8',
      quantity: 1,
      price: '₹ 16,995.00',
      image: '/product-2.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      {/* Free Delivery Banner */}
      <div className="bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded-md mb-6">
        Free Delivery applies to orders of ₹ 8,000.00 or more.{' '}
        <a href="#" className="text-black underline">
          View details
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bag Section */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Bag</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              {/* Product Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={"Image5"}
                  alt={"shirts"}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              {/* Product Price */}
              <div>
                <p className="text-lg font-bold text-gray-800">{item.price}</p>
              </div>
              {/* Remove Button */}
              <button className="text-gray-400 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>₹ 20,890.00</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
          </div>
          {/* Checkout Button */}
          <button className="w-full bg-black text-white py-2 mt-6 rounded-lg hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
