import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IMAGES } from '@/assets/images';
import { navItems, socialLinks } from '@/constants';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-purple-500/20 bg-gradient-to-r from-neutral-900/95 via-neutral-900/90 to-neutral-900/95 shadow-xl shadow-purple-500/10 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex h-14 items-center justify-between xs:h-16 lg:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 xs:space-x-3"
            >
              <img
                className="ring-gradient-to-r h-8 w-8 rounded-full ring-2 ring-purple-500/70 transition-all duration-300 hover:ring-purple-400/90 xs:h-10 xs:w-10 lg:h-12 lg:w-12"
                src={IMAGES.logo}
                alt="Rajat Developer"
              />
              <span className="hidden bg-gradient-to-r from-white to-purple-200 bg-clip-text text-base font-bold text-transparent xs:block xs:text-lg lg:text-xl">
                Rajat Developer
              </span>
            </motion.div>

            <div className="hidden items-center space-x-2 lg:flex xl:space-x-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mx-1 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'text-neutral-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white hover:backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="hidden items-center space-x-3 lg:flex xl:space-x-4">
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
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 ${social.color} backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20`}
                  >
                    <IconComponent className="text-sm" />
                  </motion.a>
                );
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 xs:h-10 xs:w-10 lg:hidden"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-sm xs:text-base" />
              ) : (
                <FaBars className="text-sm xs:text-base" />
              )}
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
              className="fixed inset-0 z-40 bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-full border-l border-purple-500/20 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900/95 shadow-2xl shadow-purple-500/10 backdrop-blur-md xs:w-80 sm:w-96 lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-purple-500/20 p-4 xs:p-6">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-base font-bold text-transparent xs:text-lg">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-6 w-6 items-center justify-center rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 text-white transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 xs:h-8 xs:w-8"
                >
                  <FaTimes className="text-xs xs:text-sm" />
                </button>
              </div>

              <div className="space-y-3 p-4 xs:space-y-4 xs:p-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-300 xs:px-4 xs:py-3 xs:text-base ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-neutral-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 xs:bottom-6 xs:left-6 xs:right-6">
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
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 xs:h-10 xs:w-10 ${social.color} backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20`}
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
