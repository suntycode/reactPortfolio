import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/5 to-transparent"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
          <div className="absolute right-1/4 top-3/4 h-1 w-1 animate-ping rounded-full bg-pink-500"></div>
          <div className="absolute left-3/4 top-1/2 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500"></div>
        </div>
      </div>

      <Navbar />

      <main className="relative">
        <section id="home" className="flex min-h-screen items-center">
          <div className="w-full">
            <Hero />
          </div>
        </section>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          <section id="about" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
              <About />
            </div>
          </section>

          <section id="skills" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
              <Skills />
            </div>
          </section>

          <section id="timeline" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
              <Timeline />
            </div>
          </section>

          <section id="projects" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
              <ProjectShowcase />
            </div>
          </section>

          <section id="contact" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
              <Contact />
            </div>
          </section>
        </div>
      </main>

      <motion.footer
        className="mt-12 border-t border-neutral-700/50 bg-gradient-to-br from-neutral-900/90 via-neutral-800/80 to-purple-900/60 backdrop-blur-xl sm:mt-16 md:mt-20 lg:mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 xl:px-12">
          <div className="space-y-6 text-center sm:space-y-8">
            {/* Main Footer Content */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="mb-4 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-sm font-bold text-white">N</span>
                </motion.div>
                <span className="text-xl font-bold text-white sm:text-2xl">
                  Nikhil{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Developer
                  </span>
                </span>
              </motion.div>

              <motion.p
                className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crafting digital experiences with passion, precision, and modern
                technologies. Let's build something amazing together.
              </motion.p>
            </motion.div>

            {/* Tech Stack & Features */}
            <motion.div
              className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="rounded-xl border border-neutral-600/30 bg-neutral-800/50 p-4 backdrop-blur-sm sm:p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">
                  Built With
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'Tailwind CSS', 'Framer Motion'].map(
                    (tech, index) => (
                      <motion.span
                        key={tech}
                        className="rounded-full border border-neutral-600/40 bg-neutral-700/50 px-2 py-1 text-xs text-purple-300"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl border border-neutral-600/30 bg-neutral-800/50 p-4 backdrop-blur-sm sm:p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">
                  Features
                </h4>
                <div className="space-y-1 text-xs text-neutral-400 sm:text-sm">
                  {[
                    { label: 'Responsive Design', color: 'bg-green-500' },
                    { label: 'Modern UI/UX', color: 'bg-blue-500' },
                    { label: 'Fast Performance', color: 'bg-purple-500' },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <div
                        className={`h-1.5 w-1.5 ${feature.color} rounded-full`}
                      ></div>
                      <span>{feature.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl border border-neutral-600/30 bg-neutral-800/50 p-4 backdrop-blur-sm sm:p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">
                  Connect
                </h4>
                <div className="flex justify-center space-x-3">
                  {[
                    {
                      href: 'https://github.com/NikhiL-Developer03',
                      icon: '🐱',
                      hoverColor: 'hover:bg-purple-600/50',
                    },
                    {
                      href: 'https://www.linkedin.com/in/nikhil-web-developer/',
                      icon: '💼',
                      hoverColor: 'hover:bg-blue-600/50',
                    },
                    {
                      href: 'mailto:nikhil.developer03@gmail.com',
                      icon: '📧',
                      hoverColor: 'hover:bg-green-600/50',
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-8 w-8 bg-neutral-700/50 ${social.hoverColor} flex items-center justify-center rounded-lg transition-all duration-300`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-xs">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="border-t border-neutral-700/30 pt-6 sm:pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-center justify-between space-y-3 sm:flex-row sm:space-y-0">
                <p className="text-xs text-neutral-400 sm:text-sm">
                  © 2025 Nikhil Developer. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-xs text-neutral-500 sm:text-sm">
                  <span className="flex items-center space-x-1">
                    <span>Made with</span>
                    <motion.span
                      className="text-red-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ❤️
                    </motion.span>
                    <span>in India</span>
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex space-x-1">
                  {[0, 0.5, 1].map((delay, index) => (
                    <motion.div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index === 0
                          ? 'bg-purple-500'
                          : index === 1
                            ? 'bg-pink-500'
                            : 'bg-cyan-500'
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: delay,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
