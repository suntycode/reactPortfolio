import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ProjectShowcase from "./components/ProjectShowcase";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/5 to-transparent"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>


      <Navbar />
      

      <main className="relative">

        <section id="home" className="min-h-screen flex items-center">
          <div className="w-full">
            <Hero />
          </div>
        </section>
        

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          <section id="about" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <About />
            </div>
          </section>
          
          <section id="skills" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <Skills />
            </div>
          </section>
          
          <section id="timeline" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <Timeline />
            </div>
          </section>
          
          <section id="projects" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <ProjectShowcase />
            </div>
          </section>
          
          <section id="contact" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <Contact />
            </div>
          </section>
        </div>
      </main>
      

      <motion.footer 
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 bg-gradient-to-br from-neutral-900/90 via-neutral-800/80 to-purple-900/60 backdrop-blur-xl border-t border-neutral-700/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl py-8 sm:py-12 md:py-16">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Main Footer Content */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center justify-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-sm">N</span>
                </motion.div>
                <span className="text-xl sm:text-2xl font-bold text-white">
                  Nikhil <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Developer</span>
                </span>
              </motion.div>
              
              <motion.p 
                className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crafting digital experiences with passion, precision, and modern technologies. 
                Let's build something amazing together.
              </motion.p>
            </motion.div>

            {/* Tech Stack & Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-neutral-600/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Built With</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["React", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      className="px-2 py-1 bg-neutral-700/50 text-purple-300 rounded-full text-xs border border-neutral-600/40"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-neutral-600/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Features</h4>
                <div className="space-y-1 text-xs sm:text-sm text-neutral-400">
                  {[
                    { label: "Responsive Design", color: "bg-green-500" },
                    { label: "Modern UI/UX", color: "bg-blue-500" },
                    { label: "Fast Performance", color: "bg-purple-500" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={feature.label}
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <div className={`w-1.5 h-1.5 ${feature.color} rounded-full`}></div>
                      <span>{feature.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-neutral-600/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Connect</h4>
                <div className="flex justify-center space-x-3">
                  {[
                    { href: "https://github.com/NikhiL-Developer03", icon: "🐱", hoverColor: "hover:bg-purple-600/50" },
                    { href: "https://www.linkedin.com/in/nikhil-web-developer/", icon: "💼", hoverColor: "hover:bg-blue-600/50" },
                    { href: "mailto:nikhil.developer03@gmail.com", icon: "📧", hoverColor: "hover:bg-green-600/50" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`w-8 h-8 bg-neutral-700/50 ${social.hoverColor} rounded-lg flex items-center justify-center transition-all duration-300`}
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
              className="pt-6 sm:pt-8 border-t border-neutral-700/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                <p className="text-neutral-400 text-xs sm:text-sm">
                  © 2025 Nikhil Developer. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-xs sm:text-sm text-neutral-500">
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
                className="flex justify-center mt-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex space-x-1">
                  {[0, 0.5, 1].map((delay, index) => (
                    <motion.div 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-purple-500' : 
                        index === 1 ? 'bg-pink-500' : 'bg-cyan-500'
                      }`}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: delay 
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
