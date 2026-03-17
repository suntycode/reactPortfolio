import { useState, useEffect } from 'react';
import { HERO_CONTENT, roles } from '@constants/index';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaRocket } from 'react-icons/fa';
import { IMAGES } from '@/assets/images';

const Hero = () => {
  const [typedText, setTypedText] = useState('');

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

  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-16 xl:gap-20">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mb-4 text-3xl font-medium leading-tight tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:mb-8 lg:text-7xl xl:text-8xl"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Rajat
            </span>
          </motion.h1>

          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mb-6 lg:mb-8"
          >
            <span className="block min-h-[1.5rem] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg tracking-tight text-transparent xs:min-h-[2rem] xs:text-xl sm:min-h-[2.5rem] sm:text-2xl md:min-h-[3rem] md:text-3xl lg:text-4xl">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-8 max-w-2xl text-sm font-light leading-relaxed tracking-tighter text-neutral-300 xs:text-base sm:text-lg md:text-xl lg:mx-0 lg:mb-12"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:mb-12 lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="flex w-full items-center justify-center space-x-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-purple-500/25 sm:w-auto"
            >
              <FaRocket />
              <span>View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-purple-500 bg-transparent px-6 py-3 font-semibold text-purple-400 transition-all duration-300 hover:bg-purple-500 hover:text-white sm:w-auto"
            >
              <FaCode />
              <span>Let's Talk</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              href="https://drive.google.com/file/d/1QCLeZ6FfxEWeN5g3hhoOGZJVg5DSj3Hz/view?usp=sharing"
              download
              className="flex w-full items-center justify-center space-x-2 rounded-lg border border-neutral-600 bg-neutral-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-neutral-700 sm:w-auto"
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={container(2)}
            initial="hidden"
            animate="visible"
            className="mx-auto grid max-w-xs grid-cols-3 gap-3 xs:max-w-sm xs:gap-4 sm:max-w-md sm:gap-6 lg:mx-0"
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-white xs:text-xl sm:text-2xl">
                7+
              </h3>
              <p className="text-xs text-neutral-400 sm:text-sm">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white xs:text-xl sm:text-2xl">
                1.5+
              </h3>
              <p className="text-xs text-neutral-400 sm:text-sm">Years Exp.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white xs:text-xl sm:text-2xl">
                7+
              </h3>
              <p className="text-xs text-neutral-400 sm:text-sm">
                Happy Clients
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="group relative"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-50 xs:-inset-4"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-40 xs:-inset-2"></div>

            <img
              className="relative h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-purple-500/50 transition-transform duration-300 group-hover:scale-105 xs:h-48 xs:w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
              src={IMAGES.profilePic}
              alt="Rajat Developer"
            />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 shadow-lg xs:-right-2 xs:-top-2 xs:h-8 xs:w-8 sm:-right-4 sm:-top-4 sm:h-12 sm:w-12"
            >
              <FaCode className="text-xs text-white xs:text-sm sm:text-xl" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute -bottom-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 shadow-lg xs:-bottom-2 xs:-left-2 xs:h-6 xs:w-6 sm:-bottom-4 sm:-left-4 sm:h-10 sm:w-10"
            >
              <FaRocket className="text-xs text-white sm:text-base" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-neutral-400"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 h-3 w-1 rounded-full bg-neutral-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
