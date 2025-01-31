"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const SharedNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              HOME
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/#experience"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
              >
                Experience
              </Link>
              <Link
                href="/#education"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
              >
                Education
              </Link>
              <Link
                href="/#projects"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
              >
                Blogs
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button - Updated with !important and additional classes */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="!inline-flex !items-center !justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                style={{ display: 'inline-flex !important' }}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separate from nav */}
      <div
        className={`fixed md:hidden top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-3 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/#experience"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/#education"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            href="/#projects"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/#contact"
            className="block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default SharedNavbar; 