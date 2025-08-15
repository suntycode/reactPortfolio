import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaCertificate, FaCalendarAlt } from "react-icons/fa";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      year: "Apr 2024 - Jun 2024",
      role: "Cloud Engineer",
      company: "GTrusty Cloud Private Limited",
      description: "Led cloud infrastructure management for enterprise clients, managing DNS and MX configurations across 25+ domains while reducing email delivery issues by 50%.",
      technologies: ["Google Workspace", "DNS Management", "GAM", "GAMMO"],
      type: "work",
      achievements: [
        "Reduced email delivery issues by 50%",
        "Managed 25+ enterprise domains",
        "Improved team productivity by 30%",
        "Migrated 100GB+ data with minimal downtime"
      ]
    },
    {
      year: "Jan 2024 - Mar 2024",
      role: "Software Development Trainee",
      company: "Himank Soft Solution",
      description: "Developed responsive web components using modern React patterns and gained hands-on experience with full-stack development.",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "MongoDB"],
      type: "work",
      achievements: [
        "Improved loading speeds by 25%",
        "Built responsive web components",
        "Collaborated with senior developers",
        "Gained full-stack development experience"
      ]
    }
  ];

  const education = [
    {
      year: "2021 - 2024",
      role: "Bachelor of Computer Applications",
      company: "Manav Rachna University",
      description: "Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.",
      technologies: ["Java", "Python", "Database Management", "Software Engineering"],
      type: "education",
      achievements: [
        "Graduated with distinction",
        "Led multiple academic projects",
        "Active in coding competitions",
        "Strong foundation in algorithms"
      ]
    },
    {
      year: "2019 - 2021",
      role: "Senior Secondary",
      company: "Kendriya Vidyalaya",
      description: "Completed higher secondary education with focus on Science and Mathematics.",
      technologies: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      type: "education",
      achievements: [
        "Scored 85% overall",
        "Excellent in Mathematics",
        "Computer Science topper",
        "Active in technical clubs"
      ]
    }
  ];

  const certifications = [
    {
      year: "2024",
      role: "React.js Certification",
      company: "Meta (Facebook)",
      description: "Advanced React development including hooks, context, and modern patterns.",
      technologies: ["React", "Hooks", "Context API", "Redux"],
      type: "certification",
      achievements: [
        "Component lifecycle mastery",
        "State management expertise",
        "Performance optimization",
        "Modern React patterns"
      ]
    },
    {
      year: "2024",
      role: "Node.js Developer",
      company: "IBM",
      description: "Backend development with Node.js, Express, and database integration.",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
      type: "certification",
      achievements: [
        "RESTful API development",
        "Database design and optimization",
        "Authentication and security",
        "Scalable backend architecture"
      ]
    },
    {
      year: "2023",
      role: "Google Cloud Associate",
      company: "Google Cloud",
      description: "Cloud platform fundamentals and Google Workspace administration.",
      technologies: ["Google Cloud", "Workspace Admin", "Cloud Storage", "IAM"],
      type: "certification",
      achievements: [
        "Cloud infrastructure management",
        "Identity and access management",
        "Storage and networking",
        "Security best practices"
      ]
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "experience":
        return experiences;
      case "education":
        return education;
      case "certifications":
        return certifications;
      default:
        return experiences;
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "work":
        return <FaCode className="text-purple-500" />;
      case "education":
        return <FaGraduationCap className="text-blue-500" />;
      case "certification":
        return <FaCertificate className="text-green-500" />;
      default:
        return <FaCalendarAlt className="text-gray-500" />;
    }
  };

  const tabs = [
    { id: "experience", label: "Experience", icon: FaCode },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "certifications", label: "Certifications", icon: FaCertificate }
  ];

  return (
    <div className="border-b border-neutral-900 pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-10 lg:mb-12"
      >
        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">Journey</span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
          Explore my career path, educational background, and professional achievements that have shaped my expertise.
        </p>
      </motion.div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 sm:mb-8">
          <motion.div 
            className="flex space-x-1 bg-neutral-900/90 backdrop-blur-xl rounded-full p-1 border border-neutral-700/60 shadow-2xl shadow-purple-900/20"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm sm:text-base font-medium">{tab.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>


        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-neutral-900/50 via-neutral-800/30 to-purple-900/20 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-900/10"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>

            {getCurrentData().map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start mb-8 last:mb-0"
              >
                {/* Icon Circle */}
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-600/50 rounded-full flex items-center justify-center mr-6 z-10 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getIcon(item.type)}
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className="flex-1 bg-neutral-800/60 backdrop-blur-sm rounded-xl p-6 border border-neutral-600/40 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-white mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.role}
                      </motion.h3>
                      <motion.p 
                        className="text-purple-400 font-semibold text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.company}
                      </motion.p>
                    </div>
                    <motion.span 
                      className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 px-3 py-1.5 rounded-full text-sm font-medium border border-purple-500/40 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.year}
                    </motion.span>
                  </div>

                  <motion.p 
                    className="text-neutral-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-400 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2.5 py-1.5 bg-neutral-800/80 text-purple-300 rounded-full text-xs border border-neutral-600/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 mb-3">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <motion.div 
                          key={achIndex} 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + achIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                          <span className="text-neutral-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
