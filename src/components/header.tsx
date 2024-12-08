"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Vector from '@/public/Vector.png'; // Path to your logo (adjust if needed)
import Login from '../app/Login/page';
import Cart from '../app/Cart/page';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src={Vector} alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/store" className="hover:text-gray-400">Find a Store</Link>
          <Link href="/help" className="hover:text-gray-400">Help</Link>
          <Link href="/join-us" className="hover:text-gray-400">Join Us</Link>
          <Link href="/signin" className="hover:text-gray-400">Sign In</Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white`}>
        <div className="flex flex-col space-y-4 py-4 px-6">
          <Link href="/store" className="hover:text-gray-400">Find a Store</Link>
          <Link href="/help" className="hover:text-gray-400">Help</Link>
          <Link href="/join-us" className="hover:text-gray-400">Join Us</Link>
          <Link href="/signin" className="hover:text-gray-400">Sign In</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;