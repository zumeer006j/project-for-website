"use client"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Find a Store</h3>
            <ul>
              <li><Link href="/store">Store Locator</Link></li>
              <li><Link href="/store">Find by City</Link></li>
              <li><Link href="/store">Store Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get Help</h3>
            <ul>
              <li><Link href="/help">Customer Support</Link></li>
              <li><Link href="/help">Returns</Link></li>
              <li><Link href="/help">Shipping Information</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About Nike</h3>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/about">Careers</Link></li>
              <li><Link href="/about">Investors</Link></li>
              <li><Link href="/about">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Join Us</h3>
            <ul>
              <li><Link href="/join">Become a Member</Link></li>
              <li><Link href="/sign-in">Sign In</Link></li>
              <li><Link href="/join">Sign Up for Email</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
          <p className="mt-2">
            <Link href="/guides" className="underline">Guides</Link> | 
            <Link href="/terms-of-sale" className="underline"> Terms of Sale</Link> | 
            <Link href="/terms-of-use" className="underline"> Terms of Use</Link> | 
            <Link href="/privacy-policy" className="underline"> Nike Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
