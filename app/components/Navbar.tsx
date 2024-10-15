'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home/Logo Link */}
        <Link href="/" className="text-white text-lg font-bold">
          HackBox
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {/* Features Link Scrolls to Platform Features on the homepage */}
          <Link href="/#features" scroll={false} className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/#footer" scroll={false} className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
