// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          HackBox
        </Link>
        <div className="flex space-x-4">
          <Link href="/features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
