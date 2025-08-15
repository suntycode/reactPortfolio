import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/nikhil-web-developer/", color: "text-blue-600" },
    { icon: FaGithub, url: "https://github.com/NikhiL-Developer03", color: "text-gray-400" },
    { icon: FaTwitter, url: "https://www.twitter.com", color: "text-blue-400" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-gradient-to-r from-neutral-900/95 via-neutral-900/90 to-neutral-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-xl shadow-purple-500/10" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-14 xs:h-16 lg:h-20">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 xs:space-x-3"
            >
              <img 
                className="w-8 h-8 xs:w-10 xs:h-10 lg:w-12 lg:h-12 rounded-full ring-2 ring-gradient-to-r ring-purple-500/70 hover:ring-purple-400/90 transition-all duration-300" 
                src={logo} 
                alt="Nikhil Developer" 
              />
              <span className="text-base xs:text-lg lg:text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent hidden xs:block">
                Nikhil Developer
              </span>
            </motion.div>


            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 mx-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-neutral-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:backdrop-blur-sm"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>


            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 ${social.color} hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 backdrop-blur-sm`}
                  >
                    <IconComponent className="text-sm" />
                  </motion.a>
                );
              })}
            </div>


            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 text-white hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <FaTimes className="text-sm xs:text-base" /> : <FaBars className="text-sm xs:text-base" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>


      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full xs:w-80 sm:w-96 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900/95 border-l border-purple-500/20 shadow-2xl shadow-purple-500/10 z-50 lg:hidden backdrop-blur-md"
            >
              <div className="flex items-center justify-between p-4 xs:p-6 border-b border-purple-500/20">
                <span className="text-base xs:text-lg font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-6 h-6 xs:w-8 xs:h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 text-white hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300"
                >
                  <FaTimes className="text-xs xs:text-sm" />
                </button>
              </div>

              <div className="p-4 xs:p-6 space-y-3 xs:space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 xs:px-4 py-2 xs:py-3 rounded-lg font-medium transition-all duration-300 text-sm xs:text-base ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                        : "text-neutral-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6">
                <div className="flex justify-center space-x-3 xs:space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 ${social.color} hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 backdrop-blur-sm`}
                      >
                        <IconComponent className="text-sm xs:text-base" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      <div className="h-14 xs:h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
