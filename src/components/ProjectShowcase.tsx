import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

// Import project images

import { detailedProjects } from '@/constants';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % detailedProjects.length);
  };

  const prevProject = () => {
    setSelectedProject(
      (prev) => (prev - 1 + detailedProjects.length) % detailedProjects.length
    );
  };

  const currentProject = detailedProjects[selectedProject];

  return (
    <div className="border-b border-neutral-900 pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center sm:mb-10 lg:mb-12"
      >
        <h1 className="mb-4 text-4xl font-bold xs:text-5xl sm:text-6xl lg:mb-6 lg:text-7xl">
          Featured{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
          Explore my latest work showcasing modern web development, creative
          problem-solving, and innovative user experiences.
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center sm:mb-8">
          <motion.div
            className="flex space-x-3 rounded-full border border-neutral-700/60 bg-neutral-900/90 px-6 py-3 shadow-2xl shadow-purple-900/20 backdrop-blur-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {detailedProjects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedProject(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`relative h-5 w-5 rounded-full transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-lg shadow-purple-500/60'
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                title={project.title}
              >
                {selectedProject === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/50 via-neutral-800/30 to-purple-900/20 p-4 shadow-2xl shadow-purple-900/10 backdrop-blur-xl sm:p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Enhanced Image Section */}
              <div className="group relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-xl border border-neutral-600/40 shadow-2xl">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="h-52 w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 xs:h-60 sm:h-72 lg:h-80 xl:h-96"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Status Badge */}
                <motion.div
                  className="absolute right-3 top-3 z-30"
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${
                      currentProject.status === 'Completed'
                        ? 'border border-green-600/50 bg-green-900/80 text-green-300 shadow-lg shadow-green-900/30'
                        : 'border border-yellow-600/50 bg-yellow-900/80 text-yellow-300 shadow-lg shadow-yellow-900/30'
                    }`}
                  >
                    {currentProject.status}
                  </span>
                </motion.div>

                {/* Floating Action Buttons */}
                <div className="absolute bottom-3 left-3 right-3 z-30 flex justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-purple-500/50 bg-purple-600/90 p-2.5 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-purple-400/50"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                </div>
              </div>

              {/* Content Section */}
              <div className="order-1 space-y-3 sm:space-y-4 lg:order-2 lg:space-y-5">
                <div>
                  <motion.span
                    className="text-xs font-semibold uppercase tracking-wider text-purple-400 sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentProject.category}
                  </motion.span>
                  <motion.h2
                    className="mt-1 text-xl font-bold leading-tight text-white xs:text-2xl sm:text-3xl lg:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentProject.title}
                  </motion.h2>
                  <motion.h3
                    className="mt-1 text-base text-neutral-300 xs:text-lg sm:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentProject.subtitle}
                  </motion.h3>
                </div>

                <motion.p
                  className="text-sm leading-relaxed text-neutral-300 xs:text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {currentProject.longDescription}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="mb-2 text-base font-semibold text-white xs:text-lg">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-neutral-600/50 bg-neutral-800/80 px-2.5 py-1.5 text-xs text-purple-300 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 xs:px-3 xs:text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="mb-2 text-base font-semibold text-white xs:text-lg">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5 xs:gap-2 sm:grid-cols-2">
                    {currentProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 xs:h-2 xs:w-2" />
                        <span className="text-xs text-neutral-300 xs:text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col gap-3 pt-2 xs:flex-row xs:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  {currentProject.liveUrl != '' && (
                    <motion.a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:from-purple-700 hover:to-pink-700 xs:px-5 xs:text-base"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation */}
        <motion.div
          className="mt-6 flex items-center justify-between px-2 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 rounded-lg border border-neutral-700/50 bg-neutral-800/50 px-3 py-2 text-sm text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600/50 hover:bg-neutral-700/50 hover:text-white xs:text-base"
          >
            <FaChevronLeft className="text-xs xs:text-sm" />
            <span className="hidden xs:inline">Previous</span>
            <span className="xs:hidden">Prev</span>
          </motion.button>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-medium text-neutral-500 xs:text-sm">
              {selectedProject + 1} of {detailedProjects.length}
            </span>
            <div className="h-4 w-px bg-neutral-600" />
            <span className="hidden text-xs text-neutral-600 sm:inline">
              Project Showcase
            </span>
          </div>

          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 rounded-lg border border-neutral-700/50 bg-neutral-800/50 px-3 py-2 text-sm text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600/50 hover:bg-neutral-700/50 hover:text-white xs:text-base"
          >
            <span className="hidden xs:inline">Next</span>
            <span className="xs:hidden">Next</span>
            <FaChevronRight className="text-xs xs:text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
