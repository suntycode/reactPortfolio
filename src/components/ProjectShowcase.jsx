import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import project images
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const detailedProjects = [
    {
      id: 1,
      title: "Task Manager Pro",
      subtitle: "Advanced Todo Application",
      description: "A sophisticated task management application with priority levels, due dates, and advanced filtering. Features dark theme, local storage persistence, and intuitive user interface.",
      longDescription: "Built with React and modern hooks, this application showcases advanced state management using Context API. Features include drag-and-drop functionality, priority-based color coding, due date notifications, and comprehensive filtering options. The application uses Tailwind CSS for responsive design and Framer Motion for smooth animations.",
      image: project1,
      technologies: ["React", "Context API", "Tailwind CSS", "Local Storage", "Framer Motion"],
      features: [
        "Priority-based task management",
        "Due date tracking and notifications",
        "Advanced filtering and sorting",
        "Dark theme with modern UI",
        "Local storage persistence",
        "Responsive design"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/Task-Manger",
      liveUrl: "#",
      status: "Completed",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Personal Finance Tracker Plus",
      subtitle: "Smart Expense Management",
      description: "A comprehensive financial tracking application that helps users monitor expenses, set budgets, and analyze spending patterns with interactive charts and reports.",
      longDescription: "Full-stack application built with React frontend and Node.js backend. Features include expense categorization, budget planning, financial goal tracking, and detailed analytics. Uses Chart.js for data visualization and MongoDB for data persistence.",
      image: project2,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
      features: [
        "Expense tracking and categorization",
        "Budget planning and monitoring",
        "Interactive financial charts",
        "Goal setting and tracking",
        "Monthly/yearly reports",
        "Secure user authentication"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/Personal-Finance-Tracker-Plus",
      liveUrl: "#",
      status: "In Development",
      category: "Full-Stack Application"
    },
    {
      id: 3,
      title: "Event Platform",
      subtitle: "Event Management System",
      description: "A comprehensive platform for creating, managing, and attending events. Features event registration, attendee management, and real-time updates.",
      longDescription: "Built with Next.js and TypeScript for type safety and performance. Integrates with external APIs for payment processing and email notifications. Features server-side rendering for optimal SEO and user experience.",
      image: project3,
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Event creation and management",
        "User registration system",
        "Payment integration",
        "Real-time notifications",
        "Advanced search and filtering",
        "Mobile-responsive design"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/event_platform",
      liveUrl: "https://event-platform-gamma-hazel.vercel.app/",
      status: "Completed",
      category: "Full-Stack Application"
    },
    {
      id: 4,
      title: "Genius School Website",
      subtitle: "Educational Institution Portal",
      description: "A modern educational website with responsive design, featuring school information, departments, faculty profiles, and administrative tools.",
      longDescription: "Server-side rendered application using Express.js and Handlebars. Features content management system for easy updates, contact forms, and dynamic routing for different school sections.",
      image: project4,
      technologies: ["Node.js", "Express", "Handlebars", "MongoDB", "Bootstrap"],
      features: [
        "Responsive institutional design",
        "Faculty and department pages",
        "Contact and inquiry forms",
        "Content management system",
        "SEO optimized pages",
        "Admin dashboard"
      ],
      githubUrl: "https://github.com/NikhiL-Developer03/Genius",
      liveUrl: "#",
      status: "Completed",
      category: "Web Application"
    }
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % detailedProjects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + detailedProjects.length) % detailedProjects.length);
  };

  const currentProject = detailedProjects[selectedProject];

  return (
    <div className="border-b border-neutral-900 pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-10 lg:mb-12"
      >
        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">Projects</span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
          Explore my latest work showcasing modern web development, creative problem-solving, and innovative user experiences.
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 sm:mb-8">
          <motion.div 
            className="flex space-x-3 bg-neutral-900/90 backdrop-blur-xl rounded-full px-6 py-3 border border-neutral-700/60 shadow-2xl shadow-purple-900/20"
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
                className={`w-5 h-5 rounded-full transition-all duration-300 relative ${
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
            className="bg-gradient-to-br from-neutral-900/50 via-neutral-800/30 to-purple-900/20 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-purple-900/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
              {/* Enhanced Image Section */}
              <div className="relative group order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-xl border border-neutral-600/40 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-52 xs:h-60 sm:h-72 lg:h-80 xl:h-96 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
                
                {/* Status Badge */}
                <motion.div 
                  className="absolute top-3 right-3 z-30"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                    currentProject.status === 'Completed' 
                      ? 'bg-green-900/80 text-green-300 border border-green-600/50 shadow-lg shadow-green-900/30' 
                      : 'bg-yellow-900/80 text-yellow-300 border border-yellow-600/50 shadow-lg shadow-yellow-900/30'
                  }`}>
                    {currentProject.status}
                  </span>
                </motion.div>

                {/* Floating Action Buttons */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <motion.a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-neutral-900/90 backdrop-blur-md text-white p-2.5 rounded-full border border-neutral-600/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
                  >
                    <FaGithub className="text-sm" />
                  </motion.a>
                  <motion.a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600/90 backdrop-blur-md text-white p-2.5 rounded-full border border-purple-500/50 hover:border-purple-400/50 transition-all duration-300 shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 order-1 lg:order-2">
                <div>
                  <motion.span 
                    className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentProject.category}
                  </motion.span>
                  <motion.h2 
                    className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentProject.title}
                  </motion.h2>
                  <motion.h3 
                    className="text-base xs:text-lg sm:text-xl text-neutral-300 mt-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentProject.subtitle}
                  </motion.h3>
                </div>

                <motion.p 
                  className="text-neutral-300 leading-relaxed text-sm xs:text-base lg:text-lg"
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
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 xs:px-3 py-1.5 bg-neutral-800/80 text-purple-300 rounded-full text-xs xs:text-sm border border-neutral-600/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
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
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2">
                    {currentProject.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                        <span className="text-neutral-300 text-xs xs:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col xs:flex-row gap-3 xs:gap-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-4 xs:px-5 py-2.5 rounded-lg transition-all duration-300 border border-neutral-600/50 hover:border-neutral-500/50 text-sm xs:text-base backdrop-blur-sm"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 xs:px-5 py-2.5 rounded-lg transition-all duration-300 text-sm xs:text-base shadow-lg shadow-purple-900/30"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        {/* Enhanced Navigation */}
        <motion.div 
          className="flex justify-between items-center mt-6 sm:mt-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-all duration-300 text-sm xs:text-base bg-neutral-800/50 hover:bg-neutral-700/50 px-3 py-2 rounded-lg border border-neutral-700/50 hover:border-neutral-600/50 backdrop-blur-sm"
          >
            <FaChevronLeft className="text-xs xs:text-sm" />
            <span className="hidden xs:inline">Previous</span>
            <span className="xs:hidden">Prev</span>
          </motion.button>
          
          <div className="flex items-center space-x-3">
            <span className="text-neutral-500 text-xs xs:text-sm font-medium">
              {selectedProject + 1} of {detailedProjects.length}
            </span>
            <div className="w-px h-4 bg-neutral-600" />
            <span className="text-neutral-600 text-xs hidden sm:inline">
              Project Showcase
            </span>
          </div>
          
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-all duration-300 text-sm xs:text-base bg-neutral-800/50 hover:bg-neutral-700/50 px-3 py-2 rounded-lg border border-neutral-700/50 hover:border-neutral-600/50 backdrop-blur-sm"
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
