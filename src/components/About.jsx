import React from "react";
import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaCloud, FaTools, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Frontend",
      description: "React, Next.js, TypeScript",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaLaptopCode,
      title: "Backend", 
      description: "Node.js, Express, MongoDB",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaCloud,
      title: "Cloud",
      description: "Google Cloud, AWS, Docker",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: FaTools,
      title: "Tools",
      description: "Git, VS Code, Figma",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "7+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "7+", label: "Happy Clients" }
  ];

  return (
    <div className="border-b border-neutral-900 pb-8 sm:pb-12 md:pb-16 lg:pb-20">

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center my-6 sm:my-8 md:my-12 lg:my-16"
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 xl:gap-16 mb-8 lg:mb-12">

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative group">

              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              

              <div className="relative">
                <img 
                  className="rounded-2xl w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover shadow-2xl border-2 border-neutral-700/50 group-hover:border-purple-500/50 transition-all duration-500 group-hover:scale-105" 
                  src={aboutImg} 
                  alt="About Nikhil" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent rounded-2xl"></div>
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <FaGraduationCap className="text-white text-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <FaLightbulb className="text-white text-sm" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <div className="space-y-4 lg:space-y-6">

              <div className="text-center lg:text-left">
                <motion.h2 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-3"
                >
                  Passionate Developer & 
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Problem Solver</span>
                </motion.h2>
                
                <motion.p 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-neutral-300 max-w-2xl mx-auto lg:mx-0"
                >
                  {ABOUT_TEXT}
                </motion.p>
              </div>
              

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3"
              >
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
                    >

                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10 text-center">
                        <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${item.color} p-2 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        <h3 className="font-semibold text-white mb-1 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-400 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>


        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 lg:mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-3 sm:p-4 bg-neutral-900/30 backdrop-blur-sm rounded-xl border border-neutral-700/30"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
          >
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
