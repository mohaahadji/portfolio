
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaJs, FaCss3Alt, FaHtml5, FaStripe, FaDatabase, FaLinkedin } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiFramer, SiMongodb } from 'react-icons/si';
import { DiChrome } from 'react-icons/di';
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaSun, FaMoon } from 'react-icons/fa';
import { IoLogoFirebase, IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaWordpress } from "react-icons/fa";
import { SiPlaycanvas } from "react-icons/si";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Projects with their tech stack
  const projects = [
    {
      title: 'MerchPixel.com',
      description:
        'A custom web app for AI-designed t-shirts, featuring a seamless e-commerce experience with Stripe integration, dynamic design rendering, and an AI-driven backend using Replicate API.',
        iframe: 'https://merchpixel.com', // Replace with the actual URL you want to display
        techStack: [
        { icon: <FaReact />, label: 'React' },
        { icon: <SiNextdotjs />, label: 'Next.js' },
        { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
        { icon: <FaStripe />, label: 'Stripe' },
        { icon: <IoLogoFirebase />, label: 'Firebase' },
        { icon: <FaLock />, label: 'Next Auth' },
        { icon: <SiFramer />, label: 'Framer' },
        { icon: <SiPlaycanvas />, label: 'FabricJS' },


     ],
    },
    {
      title: 'MercherWorld.com',
      description:
        'A platform for print-on-demand products, leveraging Next.js and Tailwind CSS, with Firebase for authentication and data storage, providing creators with streamlined merchandise management.',
        iframe: 'https://mercherworld.com/', // Replace with the actual URL you want to display
        techStack: [
          { icon: <FaWordpress />, label: 'Wordpress' },
          { icon: <FaJs />, label: 'JavaScript' },
          { icon: <FaHtml5 />, label: 'HTML' },
          { icon: <FaCss3Alt />, label: 'CSS' },
          { icon: <DiChrome />, label: 'Chrome Extension' },

      ],
    },
    {
      title: 'AutoFill Chrome Extension',
      description:
        'A Chrome extension that automates data entry for KDP authors, built with JavaScript, HTML, and CSS for seamless integration with browser workflows.',
        iframe: 'https://autofill.mercherworld.com', // Replace with the actual URL you want to display
        techStack: [
          { icon: <FaWordpress />, label: 'Wordpress' },
        { icon: <FaJs />, label: 'JavaScript' },
        { icon: <FaHtml5 />, label: 'HTML' },
        { icon: <FaCss3Alt />, label: 'CSS' },
        { icon: <DiChrome />, label: 'Chrome Extension' },
      ],
    },
    
    {
      title: 'Merch Automation Tool',
      description:
        'An automation tool for managing merchandise listings, utilizing React, Node.js, and Framer Motion for animations, with MongoDB for data storage.',
        iframe: 'https://automation.mercherworld.com', // Replace with the actual URL you want to display
        techStack: [
          { icon: <FaWordpress />, label: 'Wordpress' },
          { icon: <FaJs />, label: 'JavaScript' },
          { icon: <FaHtml5 />, label: 'HTML' },
          { icon: <FaCss3Alt />, label: 'CSS' },
          { icon: <DiChrome />, label: 'Chrome Extension' },
      ],
    },
    
  ];

  // Animation variants for tech stack scrolling
  const techStackAnimation = {
    animate: {
      x: [-50, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 5,
        },
      },
    },
  };

  return (
    <>
    <div className="bg-gray-100 w-full dark:bg-neutral-900 text-gray-800 dark:text-neutral-200 min-h-screen p-8 font-sans transition-colors duration-300">
       
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-indigo-900 text-gray-800 dark:text-neutral-200"
        >
          {!darkMode ? <FaSun className="w-6 h-6 text-orange-400" /> : <FaMoon className="w-6 h-6 " />}
        </button>
      </div>

      {/* Header Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={techStackAnimation}
        className="text-center mb-12 items-center"
      >
        <div className="flex items-center justify-center m-2">
      <p className="text-sm flex items-center space-x-4">
        
        
        
      </p>
              {/* Typewriter Effect for About Me Section */}

    </div>
    <div className="flex w-full justify-center mb-4">
       <img
                  src='moha.jpeg'
                  title='Elquran App'
                  className="rounded-full overflow-hidden mb-10 w-1/4 md:w-1/12 "
                  frameBorder="0"
                  style={{ overflow: 'hidden' }}
                />
      </div>
        <h1 className="text-5xl font-bold">Mohamed Hadji</h1>
              <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 mt-4">
        <Typewriter
          options={{
            strings: [
              '<span> I am a <span class="text-blue-500">Full Stack </span>Developer.</span>',
              '<span> I love developing <span class="text-green-500">Web Apps</span>.</span>',
             '<span> I specialize in <span class="text-purple-500">React, Next.js</span>.</span>',
              '<span> I am a <span class="text-yellow-500">Problem Solver</span>.</span>',
              '<span> I innovate with <span class="text-pink-500">AI</span>.</span>'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
          
        />
      </div>
                
        
        
                <div className="w-full md:w-4/5 lg:w-3/5 m-2 mx-auto text-center">
                <p className="text-sm">
  A passionate web and app developer focused on building user-friendly, impactful digital solutions. I thrive on innovation, problem-solving, and continuously expanding my skills to create seamless experiences.
</p>
          </div>     

{/* Action Buttons */}
<div className="flex w-full justify-center space-x-4 mt-6">
          {/* Resume Button */}
          <a
            href="/Mohamed_Hadji_Resume.pdf"
            download
            className=" flex bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
          >
            <FaFilePdf className='mt-1 mr-2' />
            Resume
          </a>

          {/* Get In Touch Button */}
          <a
            href="mailto:moha.hadji@hotmail.com"
            className="bg-green-500 flex text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition-colors duration-300"
          >
          <FaEnvelope className="text-white mt-1 mr-2" />

            Get In Touch
          </a>
        </div>

      </motion.header>

      {/* Portfolio Section */}
      <section className="mb-16">
        
        <div className="flex w-full items-center justify-center mb-20 bg-gray-100 dark:bg-neutral-900">
      <div className="flex bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 w-full md:w-4/5 h-5/6 shadow-lg rounded-md overflow-hidden">

        {/* Sidebar */}
        <div className="w-12 bg-gray-300 dark:bg-gray-700 flex flex-col items-center py-4 space-y-4">
          <span className="w-4 h-4  rounded-full bg-red-500"></span>
          <span className="w-4 h-4  rounded-full bg-yellow-400"></span>
          <span className="w-4 h-4  rounded-full bg-green-500"></span>
        </div>

        {/* Code Editor Section */}
        <div className="flex p-4 overflow-y-auto">
          <pre className="font-mono text-sm leading-relaxed">
            <span className="text-gray-500 dark:text-gray-400">1</span> <span className="text-blue-600 dark:text-blue-400"> My Journey into Coding</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">2</span> <span className="text-gray-700 dark:text-gray-300">My journey into coding began with a simple curiosity—how do the websites</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">3</span> <span className="text-gray-700 dark:text-gray-300">and tools I use daily come to life? This curiosity quickly became a passion,</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">4</span> <span className="text-gray-700 dark:text-gray-300">driving me to learn everything I could about development. I started with small</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">5</span> <span className="text-gray-700 dark:text-gray-300">projects, experimenting with code and building basic websites, but as my skills</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">6</span> <span className="text-gray-700 dark:text-gray-300">grew, so did my ambitions.</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">7</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">8</span> <span className="text-blue-600 dark:text-blue-400"> Building Platforms</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">9</span> <span className="text-gray-700 dark:text-gray-300">Building platforms like </span><span className="text-green-700 dark:text-green-400">MerchPixel.com</span><span className="text-gray-700 dark:text-gray-300"> and </span><span className="text-green-700 dark:text-green-400">MercherWorld.com</span><span className="text-gray-700 dark:text-gray-300"> allowed me to merge</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">10</span> <span className="text-gray-700 dark:text-gray-300">my interest in e-commerce with a love for creativity, creating custom tools</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">11</span> <span className="text-gray-700 dark:text-gray-300">for print-on-demand and streamlined, user-centered interfaces. I dived into</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">12</span> <span className="text-gray-700 dark:text-gray-300">backend logic and frontend design, bringing each project to life with responsive</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">13</span> <span className="text-gray-700 dark:text-gray-300">layouts, dynamic animations, and robust, AI-driven solutions. Along the way,</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">14</span> <span className="text-gray-700 dark:text-gray-300">I tackled challenges with Chrome extensions, automation, and even crafted</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">15</span> <span className="text-gray-700 dark:text-gray-300">specialized apps for unique user needs. Every project brought new lessons,</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">16</span> <span className="text-gray-700 dark:text-gray-300">shaping my understanding of what technology could achieve.</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">17</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">18</span> <span className="text-blue-600 dark:text-blue-400"> The Meaning of Coding</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">19</span> <span className="text-gray-700 dark:text-gray-300">Coding This isn&rsquo;t just about writing lines of code for me—it&rsquo;s about solving real</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">20</span> <span className="text-gray-700 dark:text-gray-300">problems, bringing ideas to life, and continuously learning. Each website,</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">21</span> <span className="text-gray-700 dark:text-gray-300">each app, each tool is a testament to my dedication and passion for making</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">22</span> <span className="text-gray-700 dark:text-gray-300">technology that feels seamless, intuitive, and impactful. I&rsquo;m excited to keep</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">23</span> <span className="text-gray-700 dark:text-gray-300">pushing boundaries, building tools that empower others, and exploring the</span>{"\n"}
            <span className="text-gray-500 dark:text-gray-400">24</span> <span className="text-gray-700 dark:text-gray-300">limitless possibilities of code. </span>
          </pre>
        </div>
      </div>
    </div>
    <motion.h2
          initial="hidden"
          animate="visible"
          className="text-5xl items-center font-semibold text-center m-10"
        >  <h1 className="text-5xl font-bold mb-10">Projects</h1>

      <div className="w-full md:w-5/6 md:w-4/5 lg:w-4/5 mx-auto text-center">
  <p className="text-sm">
    Here are some of the recent projects I’ve developed, each reflecting my commitment to creating impactful and innovative solutions. From e-commerce platforms to automation tools, these projects demonstrate my dedication to seamless user experiences, efficient functionality, and modern design. Each one has been a unique opportunity to blend creativity and technical skill, helping users achieve their goals in new and engaging ways.
  </p>
</div>      
          
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-col items-center bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden w-full md:max-w-[90%] mx-auto"
            >
              {/* Browser Window Style */}
              <div className="w-full max-w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg p-3 flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="flex-1 text-center text-sm font-semibold text-gray-500 dark:text-gray-300">
                  {project.title}
                </span>
              </div>

              {/* Iframe Section (Full Width) */}
              <div className="w-full h-[600px] border-t dark:border-gray-700">
                <iframe
                  src={project.iframe}
                  title={project.title}
                  width="100%"
                  height="100%"
                  className="rounded-b-lg overflow-hidden"
                  frameBorder="0"
                  style={{ overflow: 'hidden' }}
                />
              </div>

              {/* Project Info Section */}
              <div className="p-6 w-full text-center">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech Stack */}
              <div className="flex justify-center space-x-4 mt-4 text-gray-600 dark:text-gray-400 overflow-x-auto">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-1">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
          <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-col items-center bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden max-w-[90%] mx-auto"
            >
              {/* Browser Window Style */}
              <div className="w-full max-w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg p-3 flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="flex-1 text-center text-sm font-semibold text-gray-500 dark:text-gray-300">
                  Elquran App
                </span>
              </div>

              {/* Iframe Section (Full Width) */}
              <div className="w-full h-auto border-t dark:border-gray-700 mb-20">
                <img
                  src='quran-mp3.png'
                  title='Elquran App'
                  width="100%"
                  height="100%"
                  className="rounded-b-lg overflow-hidden mb-10 "
                  frameBorder="0"
                  style={{ overflow: 'hidden' }}
                />
              </div>

              {/* Project Info Section */}
              <div className="p-6 w-full text-center">
                <h3 className="text-2xl font-bold mb-4">Elquran MP3</h3>
                <p>Quran App</p>
                <p>The app provides a user-friendly interface to enjoy Quranic recitations, with organized sections and easy navigation between the home, search, and library tabs.</p>

                {/* Tech Stack */}
                <div className="flex justify-center space-x-4 mt-4 text-gray-600 dark:text-gray-400">
                      <span className="text-2xl"><TbBrandReactNative /></span>
                      <span>React Native</span>
                      <span className="text-2xl"><SiExpo />
                      </span>
                      <span>Expo</span>
                    </div>

              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-col items-center bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden max-w-[90%] mx-auto"
            >
              {/* Browser Window Style */}
              <div className="w-full max-w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg p-3 flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="flex-1 text-center text-sm font-semibold text-gray-500 dark:text-gray-300">
                  Read Quran
                </span>

              </div>

              {/* Iframe Section (Full Width) */}
              <div className="w-full h-auto border-t dark:border-gray-700 mb-20">
                <img
                  src='read-quran.png'
                  title='Elquran App'
                  width="100%"
                  height="100%"
                  className="rounded-b-lg overflow-hidden mb-10 "
                  frameBorder="0"
                  style={{ overflow: 'hidden' }}
                />
              </div>

              {/* Project Info Section */}
              <div className="p-6 w-full text-center">
                <h3 className="text-2xl font-bold mb-4">Read Quran</h3>
                <p>Quran App</p>
                <p>The app provides a user-friendly interface to read the Quran in structured & enjoy Quranic recitations of each verse, with organized sections and easy navigation to bookmarked verses.</p>

                {/* Tech Stack */}
                <div className="flex justify-center space-x-4 mt-4 text-gray-600 dark:text-gray-400">
                      <span className="text-2xl"><TbBrandReactNative /></span>
                      <span>React Native</span>
                      <span className="text-2xl"><SiExpo />
                      </span>
                      <span>Expo</span>
                    </div>
              </div>
              
            </motion.div>
            <div class="flex justify-center items-center min-h-1/2">
  <div class="bg-gray-100 w-5/6 text-black dark:bg-neutral-800 dark:text-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-2">Open to New Opportunities!</h1>
    <p class="text-lg mb-4">
      I’m excited to connect with professionals and explore new job opportunities in web development, app creation, and AI projects. If you’re looking for a dedicated developer with experience in building web apps, coding, and innovative solutions, I’d love to chat!
    </p>
    <p class="text-lg">
      Let’s connect and see how we can collaborate or work together. Feel free to reach out for networking, job discussions, or just a friendly chat about the tech industry!
    </p>
  </div>
</div>
        </motion.div>

        
        
      </section>

      {/* Footer */}
      
    </div>
    <footer className="w-full bg-gray-300 dark:bg-neutral-800 py-2 text-center text-black dark:text-white">
    <div className="flex justify-center space-x-6 m-2">
    <a
        href="mailto:moha.hadji@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400"
      >
        <IoMail size={24} />
      </a>
      <a
        href="https://instagram.com/mohaahadji"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://github.com/mohaahadji"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://twitter.com/Mohamed65563667"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohahadji/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
    <span className='text-sm text-black dark:text-white mt-8'> © 2024 Mohamed Hadji.</span>

  </footer>
  </>
  );
}