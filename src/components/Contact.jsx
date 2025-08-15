import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Sec-3, Ballabgarh, Faridabad, Haryana (121004)",
      color: "text-red-400"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "nikhil.developer03@gmail.com",
      link: "mailto:nikhil.developer03@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91 8375988026",
      link: "tel:+918375988026",
      color: "text-green-400"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nikhil-web-developer/",
      color: "text-blue-600 hover:text-blue-500",
      label: "LinkedIn"
    },
    {
      icon: FaGithub,
      url: "https://github.com/NikhiL-Developer03",
      color: "text-gray-400 hover:text-white",
      label: "GitHub"
    },
    {
      icon: FaTwitter,
      url: "https://www.twitter.com",
      color: "text-blue-400 hover:text-blue-300",
      label: "Twitter"
    }
  ];

  return (
    <div className="pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-10 lg:mb-12"
      >
        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">Together</span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
          Ready to bring your ideas to life? Let's collaborate and create something amazing together.
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-neutral-900/50 via-neutral-800/30 to-purple-900/20 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-purple-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Touch</span>
                </motion.h2>
                <motion.p 
                  className="text-neutral-300 leading-relaxed text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </motion.p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = info.link ? (
                    <a 
                      href={info.link} 
                      className="text-neutral-300 hover:text-white transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-neutral-300">{info.content}</span>
                  );

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-start space-x-4 p-4 sm:p-5 bg-neutral-800/60 rounded-xl border border-neutral-600/40 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div 
                        className={`${info.color} text-xl sm:text-2xl mt-1`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{info.title}</h3>
                        <div className="text-sm sm:text-base">{content}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
                </h3>
                <div className="flex space-x-4 sm:space-x-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-neutral-800/80 border border-neutral-600/50 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:border-purple-500/50 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20`}
                        aria-label={social.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <IconComponent className="text-xl sm:text-2xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Project Collaboration"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-800/60 border border-neutral-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-400 transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/60 border border-green-600/50 rounded-lg text-green-300 text-center backdrop-blur-sm"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
