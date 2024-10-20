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
        <div className="flex items-center space-x-4">
          {/* Features Link Scrolls to Platform Features on the homepage */}
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          + Host
          </span>
          </button>
          <Link href="/#features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/#footer" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link href="/#footer" className="text-gray-300 hover:text-white">
            Sign-Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
