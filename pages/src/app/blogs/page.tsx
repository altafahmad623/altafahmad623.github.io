"use client";

import React from 'react';
import Link from 'next/link';
import SharedNavbar from '../components/SharedNavbar';

interface BlogPost {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

const blogPosts: Record<string, BlogPost[]> = {
  "Technical": [
    {
      title: "Building Scalable Snap-ins",
      description: "Insights into designing and implementing snap-ins for DevRev.",
      category: "System Design",
      date: "March 10, 2024",
      readTime: "8 min read",
      link: "https://developer.devrev.ai/snapin-development/tutorials/getting-started"
    }
  ],
  "Research": [
    {
      title: "Climate Modeling with Deep Learning",
      description: "Exploring the intersection of climate science and machine learning.",
      category: "ML Research",
      date: "March 5, 2024",
      readTime: "12 min read",
      link: "/blogs/climate-ml"
    }
  ],
  "Personal": [
    {
      title: "My Journey from Math to Software Engineering",
      description: "Personal reflection on transitioning from mathematics to software development.",
      category: "Career",
      date: "March 1, 2024",
      readTime: "6 min read",
      link: "/blogs/math-to-swe"
    }
  ]
};

export default function BlogsPage() {
  return (
    <>
      <SharedNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Blog Posts
          </h1>
          
          {Object.entries(blogPosts).map(([category, posts]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6
                             transform transition-all duration-300 hover:scale-105
                             hover:shadow-xl"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 
                                     text-blue-800 dark:text-blue-200 text-xs px-2 
                                     py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                      <Link 
                        href={post.link}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 
                                 dark:hover:text-blue-300 font-medium hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-300">
                © 2024 Altaf Ahmad. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/altaf-ahmad-9b579416b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://github.com/altafahmad623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                </svg>
              </a>
              <a
                href="mailto:altaf623a@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 