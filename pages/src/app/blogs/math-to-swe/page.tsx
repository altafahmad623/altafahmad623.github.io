"use client";

import React from 'react';
import Link from 'next/link';

export default function MathToSWEBlog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/blogs"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 
                     dark:hover:text-blue-300 flex items-center"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey from Mathematics to Software Engineering
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
            <span>March 1, 2024</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-blue-600 dark:text-blue-400">Career</span>
          </div>
        </header>

        {/* Blog Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The transition from pure mathematics to software engineering is a journey that combines
            abstract thinking with practical problem-solving. Here's my story of how I bridged these
            two worlds and found my passion in software development.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            The Mathematical Foundation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My academic journey began with a deep love for mathematics. At IIT Kharagpur, 
            I pursued a dual degree in Mathematics and Computing, where I was exposed to 
            both theoretical mathematics and computational thinking. The rigorous mathematical 
            training provided me with strong analytical skills and a structured approach to 
            problem-solving.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            The Bridge to Software Engineering
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The turning point came during my internships, where I discovered how mathematical 
            concepts could be applied to real-world software problems. From optimization algorithms 
            to distributed systems, I found that my mathematical background gave me a unique 
            perspective in approaching software challenges.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Key Learnings
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 mb-6">
            <li>Abstract thinking helps in system design</li>
            <li>Mathematical rigor improves code quality</li>
            <li>Problem-solving skills are transferable</li>
            <li>Theoretical knowledge enhances practical implementation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Current Role at DevRev
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Now at DevRev, I apply both mathematical thinking and engineering principles in 
            building scalable systems. The combination of these skills has been particularly 
            valuable in designing distributed systems and optimizing algorithms for better 
            performance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Advice for Math Students
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you're considering a similar transition, remember that your mathematical 
            background is a valuable asset. Focus on:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 mb-6">
            <li>Building practical programming skills</li>
            <li>Understanding software design principles</li>
            <li>Contributing to open-source projects</li>
            <li>Leveraging your analytical thinking in coding</li>
          </ul>
        </article>

        {/* Author Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            About the Author
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Altaf Ahmad is a Software Development Engineer at DevRev, with a background in 
            Mathematics and Computing from IIT Kharagpur. He specializes in distributed systems 
            and enjoys bridging the gap between theoretical concepts and practical engineering.
          </p>
        </div>
      </div>
    </div>
  );
} 