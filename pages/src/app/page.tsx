"use client";

import React from 'react';
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          <a
            onClick={() => scrollToSection('top')}
            className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            HOME
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
            >
              Experience
            </a>
            <a
              onClick={() => scrollToSection('education')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
            >
              Education
            </a>
            <a
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
            >
              Projects
            </a>
            <Link
              href="/blogs"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
            >
              Blogs
            </Link>
            <a
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function Page() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    "Software Developer",
    "Machine Learning Engineer",
    "Deep Learning Enthusiast",
    "NLP Researcher",
    "Full Stack Developer",
    "Avid Reader",
    "Part Time Chef",
    "Maths & CS Student",
    "AI/ML Practitioner",
    "DevRev Builder",
    "Problem Solver",
    "Open Source Contributor"
  ], []);

  useEffect(() => {
    // Add smooth scrolling behavior to the whole document
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const typingSpeed = 80;  // Made typing slightly faster
    const deletingSpeed = 40;  // Made deleting slightly faster
    const pauseDuration = 1500;  // Reduced pause time to show more variations quicker

    const handleTyping = () => {
      const currentText = texts[currentIndex];

      if (!isDeleting) {
        // Typing
        if (displayText !== currentText) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="container mx-auto px-12 pt-28 pb-12">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-4 md:pl-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Altaf Ahmad
              </h1>
              <div className="h-20"> {/* Fixed height container to prevent layout shift */}
                <p className="text-xl text-gray-600 dark:text-gray-300 relative">
                  {displayText}
                  <span className="absolute ml-1 border-l-2 border-blue-500 animate-blink">&nbsp;</span>
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I am a software engineer with experience in building distributed systems, automation platforms, and developer tools.
                At DevRev, I have designed mission-critical solutions that enhance performance and reliability.
                With a strong foundation in cloud technologies and a background in research,
                I am passionate about solving complex problems, driving innovation, and collaborating to build scalable and efficient systems.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/188Ndk8w4ZNb2zrKWWoTVSupyLBE8Vr6Z/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <Image
                src="/img/headshot.jpeg"
                alt="Altaf Ahmad"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-12 py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            {/* DevRev Experience */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <a
                      href="https://devrev.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:opacity-80 transition-opacity"
                    >
                      DevRev
                    </a>
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Software Development Engineer
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  July 2023 - Present
                </p>
              </div>

              <div className="space-y-4 mt-4">
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Led <span className="font-semibold">global clustering architecture</span> for snap-ins enabling cross-region deployments with <span className="font-semibold">distributed service</span> design.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Developed <span className="font-semibold">template management platform</span>, enhancing efficiency for <span className="font-semibold">enterprise customers</span>.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Implemented <span className="font-semibold">specialized operations</span> in Workflow Builder including time-based executions like sleep-for, wait-for, and observability features.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Helped to build comprehensive <span className="font-semibold">developer platform</span> and documentation leading to successful third-party integrations.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced <span className="font-semibold">system reliability</span> through automated testing achieving <span className="font-semibold">60%</span> coverage across different microservices and 100% API coverage.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Established <span className="font-semibold">developer workshops</span> and tutorials, contributing to successful third-party adoption.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DevRev Internship */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <a
                      href="https://devrev.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:opacity-80 transition-opacity"
                    >
                      DevRev
                    </a>
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Software Development Intern
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  May 2022 - June 2023
                </p>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built multiple <span className="font-semibold">snap-in integrations</span> including Bitbucket, improving customer workflow automation.</span>
                </li>

                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Contributed to DevRev app by integrating <span className="font-semibold">external automation solutions</span> with the Snap-Ins team.</span>
                </li>

                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Facilitated convergence by integrating <span className="font-semibold">PLuG Conversations</span> and work items to enhance developer experience.</span>
                </li>
              </ul>
            </div>

            {/* Research Internship */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <a
                      href="https://uni-tuebingen.de/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:opacity-80 transition-opacity"
                    >
                      University of Tuebingen
                    </a>
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Research Intern - Climate Modeling & Machine Learning
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  May 2021 - Sept 2021
                </p>
              </div>

              <div className="space-y-4 mt-4">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  Focused on applying machine learning techniques to climate modeling and prediction using spatial data patterns.
                </p>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Developed <span className="font-semibold">deep neural networks</span> integrating thermodynamics knowledge to model climate uncertainties.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Analyzed high-resolution <span className="font-semibold">IMDAA dataset</span> with 12km spatial and 1-hour temporal resolution for regional climate patterns.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Created models incorporating multiple variables including geographical factors, historical data, and human-induced changes.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Implemented <span className="font-semibold">ANN models</span> for accurate regional climate prediction at kilometer-scale resolution.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IIT Bhubaneswar Internship */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <a
                      href="https://www.iitbbs.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:opacity-80 transition-opacity"
                    >
                      IIT Bhubaneswar
                    </a>
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Research Intern - Computational Mathematics
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  December 2020 - March 2021
                </p>
              </div>

              <div className="space-y-4 mt-4">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  Worked on DST-sponsored research project RP215: "Space-time domain decomposition methods for non-linear Cahn-Hilliard equation and their implementations in parallel computers"
                </p>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Implemented numerical solutions for <span className="font-semibold">non-linear Cahn-Hilliard equations</span> describing phase separation in binary mixtures.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Developed MATLAB code to solve <span className="font-semibold">fourth-order partial differential equations</span> with first-order time derivatives.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Applied <span className="font-semibold">Newton-Raphson technique</span> to solve block tridiagonal systems of equations.</span>
                  </li>

                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Implemented <span className="font-semibold">space-time domain decomposition methods</span> for efficient parallel computation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Work */}


        {/* Education Section */}
        <section id="education" className="bg-gray-50 dark:bg-gray-800 py-12 scroll-mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md 
                            transform transition-all duration-300 hover:scale-105 
                            hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                            cursor-pointer">
                <h3 className="text-xl font-bold mb-4">IIT Kharagpur</h3>
                <p className="text-gray-600 dark:text-gray-300">BS + MS in Mathematics and Computing, minor in Computer Science</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">CGPA: 9.12</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md 
                            transform transition-all duration-300 hover:scale-105 
                            hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                            cursor-pointer">
                <h3 className="text-xl font-bold mb-4">St. Michael&apos;s High School</h3>
                <p className="text-gray-600 dark:text-gray-300">AISSCE (Class XII)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">96.2%</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md 
                            transform transition-all duration-300 hover:scale-105 
                            hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                            cursor-pointer">
                <h3 className="text-xl font-bold mb-4">St. Karen&apos;s Secondary School</h3>
                <p className="text-gray-600 dark:text-gray-300">AISSE (Class X)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">10 CGPA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Project cards with fixed heights */}
              {/* Each project card should have this wrapper */}
              <div className="h-[700px]">
                <a
                  href="https://arxiv.org/abs/2206.14089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                                transform transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                                cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Project Gandhipedia</h3>
                    <p className="text-sm text-blue-600 mb-4">
                      Under Prof. Animesh Mukherjee at CNERG IIT Kharagpur
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Event extraction system for historical documents using advanced NLP techniques.
                      Developed novel tag curation and embedding techniques leveraging world knowledge.
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        NLP
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Event Extraction
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Coreference Resolution
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Text Summarization
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <h4 className="font-bold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Achieved 0.69 macro F1-score on Collected Works of Mahatma Gandhi</li>
                        <li>Achieved 0.65 macro F1-score on Abraham Lincoln database</li>
                        <li>Implemented coreference resolution and temporal information extraction</li>
                        <li>Developed novel tag curation-cum-embedding technique</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Technologies Used:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>Natural Language Processing</li>
                        <li>Machine Learning</li>
                        <li>Text Analysis</li>
                        <li>Information Extraction</li>
                      </ul>
                    </div>
                    <p className="text-blue-600 hover:underline inline-flex items-center">
                      View Project
                      <span className="ml-1">→</span>
                    </p>
                  </div>
                </a>
              </div>

              {/* Wrap other project cards similarly */}
              <div className="h-[700px]">
                <a
                  href="https://drive.google.com/file/d/10wlqyTPYHArONCnGsg7n337aWSu1l5be/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                                transform transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                                cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Puzzle Solver using Genetic Algorithms</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      An innovative approach to solving jigsaw puzzles using genetic algorithms, treating the problem as an extension
                      of the Travelling Salesman Problem. The solver reconstructs original images from scrambled pieces using natural
                      selection principles.
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Genetic Algorithms
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Image Processing
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Optimization
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Natural Selection
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <h4 className="font-bold mb-2">Implementation Details:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Population generation of scrambled images</li>
                        <li>Crossover and mutation operations for new generations</li>
                        <li>Elitism-based parent selection process</li>
                        <li>Edge piece compatibility measurement</li>
                        <li>Hybrid approach combining greedy and random screening methods</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Performance Metrics:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>100 blocks: &lt; 1 minute processing time</li>
                        <li>500 blocks: Few minutes processing time</li>
                        <li>1000 blocks: ~10 minutes processing time</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>Fitness function optimization</li>
                        <li>Multi-generational evolution</li>
                        <li>Local minima handling through genetic diversity</li>
                        <li>Efficient piece assembly strategy</li>
                      </ul>
                    </div>
                    <p className="text-blue-600 hover:underline inline-flex items-center">
                      View Project Documentation
                      <span className="ml-1">→</span>
                    </p>
                  </div>
                </a>
              </div>

              <div className="h-[700px]">
                <a
                  href="https://github.com/altafahmad623/Facial-Recognition-and-Sentiment-analysis-deployment-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                                transform transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                                cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Facial Recognition and Sentiment Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A web-based system that detects and classifies facial expressions into seven emotional categories in real-time
                      using a deep CNN architecture.
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Deep Learning
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        CNN
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Computer Vision
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Real-time Processing
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <h4 className="font-bold mb-2">Model Architecture:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>4 Convolutional layers with increasing filters (64→128→512→512)</li>
                        <li>Batch Normalization and MaxPooling after each conv layer</li>
                        <li>Dropout layers for regularization</li>
                        <li>Dense layers (256→512→7) for final classification</li>
                        <li>Total trainable parameters: 4.47M</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Real-time facial expression detection</li>
                        <li>Seven emotion categories classification</li>
                        <li>Web interface for easy access</li>
                        <li>Optimized for low-latency inference</li>
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <p className="text-blue-600 hover:underline inline-flex items-center">
                        View Project
                        <span className="ml-1">→</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="h-[700px]">
                <a
                  href="https://github.com/altafahmad623/NLP-Term-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                                transform transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                                cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Temporal Relation Extraction using LSTM</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Built an improved LSTM-based model for extracting temporal relations between events using the MATRES dataset.
                      The model determines whether events occurred before or after each other, advancing the field of natural language understanding.
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        LSTM
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        NLP
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Deep Learning
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        MATRES Dataset
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <h4 className="font-bold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Extended previous work to create an improved LSTM architecture</li>
                        <li>Trained on high-quality MATRES dataset</li>
                        <li>Handles complex temporal relationships in natural language</li>
                        <li>Improved upon traditional feature-based methods</li>
                      </ul>
                    </div>
                    <p className="text-blue-600 hover:underline inline-flex items-center">
                      View Project Details
                      <span className="ml-1">→</span>
                    </p>
                  </div>
                </a>
              </div>

              <div className="h-[700px]">
                <a
                  href="https://github.com/altafDevRev/IR_Assignments_Autumn_2022/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                                transform transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                                cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Information Retrieval System</h3>
                    <p className="text-sm text-blue-600 mb-4">
                      IIT Kharagpur - CS60092 Course Project
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Built an advanced document retrieval system using TF-IDF and Rocchio's algorithm for the CORD-19 dataset,
                      implementing both relevance and pseudo-relevance feedback mechanisms.
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Information Retrieval
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        TF-IDF
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Rocchio Algorithm
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        NDCG Scoring
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <h4 className="font-bold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Increased average NDCG score by ~13% using relevance feedback</li>
                        <li>Implemented lnc.ltc scheme for TF-IDF vectorization</li>
                        <li>Optimized memory usage for 50,000+ document processing</li>
                        <li>Developed efficient document ranking system</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Technical Implementation:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>Used NumPy for vectorized operations</li>
                        <li>Implemented Rocchio's algorithm with tunable parameters</li>
                        <li>Developed MAP@20 and NDCG@20 evaluation metrics</li>
                        <li>Optimized dictionary-based document retrieval</li>
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <p className="text-blue-600 hover:underline inline-flex items-center">
                        View Project Details
                        <span className="ml-1">→</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Dataset Cartography Project */}
              <div className="h-[700px]">
                <a
                  href="https://github.com/atharva-naik/cartography_model_cap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md
                                transform transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-600 
                                cursor-pointer h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Dataset Cartography: Model Capacity Effects</h3>
                    <p className="text-sm text-blue-600 mb-4">
                      Research Project - NLP Model Analysis
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Investigated the relationship between model capacity and data quality assessment through Data Maps,
                      introducing novel approaches to understand dataset characteristics and model behavior.
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        NLP
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Data Maps
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Model Analysis
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        Adapters
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <h4 className="font-bold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Increased overall variability by 5% using Adapter integration</li>
                        <li>Reduced confidence measures by 7% for better calibration</li>
                        <li>Achieved 80% agreement on easy-to-learn datasets</li>
                        <li>Identified distinct data regions affecting model behavior</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Research Insights:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>Discovered "ambiguous" regions crucial for out-of-distribution generalization</li>
                        <li>Identified "easy to learn" regions important for model optimization</li>
                        <li>Uncovered "hard to learn" instances often indicating labeling errors</li>
                        <li>Demonstrated importance of data quality over quantity</li>
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <p className="text-blue-600 hover:underline inline-flex items-center">
                        View Research Details
                        <span className="ml-1">→</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-16 scroll-mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg text-center">
              {/* Contact Info */}
              <div className="space-y-6 mb-8">
                <div className="space-y-4">
                  <p className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
                    <span className="text-xl">📞</span>
                    <span>+91-7362003273</span>
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
                      <span className="text-xl">📧</span>
                      <a href="mailto:altaf623a@gmail.com" className="text-blue-600 hover:underline">
                        altaf623a@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
                      <span className="text-xl">📧</span>
                      <a href="mailto:altaf.ahmad@devrev.ai" className="text-blue-600 hover:underline">
                        altaf.ahmad@devrev.ai
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <a
                  href="https://www.facebook.com/profile.php?id=100026964366418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/altaf-ahmad-9b579416b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
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
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.9 1.3 1.9 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/altafahmad623/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCg6CCHL88j8uarEX9HfeEzQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9-.83-1.48-1.73-1.73z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
