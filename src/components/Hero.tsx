import { useState, useEffect } from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Nikhil.webp';
import { motion } from 'framer-motion';

import { FaDownload, FaCode, FaRocket } from 'react-icons/fa';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Cloud Engineer',
    'Problem Solver',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const nextDelay = isDeleting ? 1000 : 2000;

    if (!isDeleting && typedText === currentRole) {
      setTimeout(() => setIsDeleting(true), nextDelay);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      setTimeout(() => {
        setTypedText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-20 w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight mb-4 lg:mb-8 leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Nikhil
            </span>
          </motion.h1>

          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mb-6 lg:mb-8"
          >
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent block min-h-[1.5rem] xs:min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-sm xs:text-base sm:text-lg md:text-xl font-light tracking-tighter text-neutral-300 leading-relaxed mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            >
              <FaRocket />
              <span>View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center space-x-2 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              <FaCode />
              <span>Let's Talk</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              href="https://drive.google.com/file/d/1oJaWeG6Uh4vwutbOA1p0k0f70y0QfaOD/view?usp=sharing"
              download
              className="flex items-center justify-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-neutral-600 w-full sm:w-auto"
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={container(2)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 max-w-xs xs:max-w-sm sm:max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                7+
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                1+
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm">Years Exp.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                7+
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Happy Clients
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative group"
          >
            <div className="absolute -inset-2 xs:-inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 xs:-inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            <img
              className="relative rounded-full w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover ring-4 ring-purple-500/50 shadow-2xl transition-transform duration-300 group-hover:scale-105"
              src={profilePic}
              alt="Nikhil Developer"
            />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -right-1 xs:-top-2 xs:-right-2 sm:-top-4 sm:-right-4 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaCode className="text-white text-xs xs:text-sm sm:text-xl" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute -bottom-1 -left-1 xs:-bottom-2 xs:-left-2 sm:-bottom-4 sm:-left-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-10 sm:h-10 bg-pink-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaRocket className="text-white text-xs sm:text-base" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
