import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { contactInfo, socialLinks } from '@/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | string>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <div className="pb-12 sm:pb-16 lg:pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center sm:mb-10 lg:mb-12"
      >
        <h1 className="mb-4 text-4xl font-bold xs:text-5xl sm:text-6xl lg:mb-6 lg:text-7xl">
          Let's Work{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Together
          </span>
        </h1>
        <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
          Ready to bring your ideas to life? Let's collaborate and create
          something amazing together.
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/50 via-neutral-800/30 to-purple-900/20 p-6 shadow-2xl shadow-purple-900/10 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <motion.h2
                  className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Get In{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Touch
                  </span>
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed text-neutral-300 sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I'm always open to discussing new opportunities, creative
                  projects, or potential collaborations. Whether you have a
                  project in mind or just want to connect, feel free to reach
                  out!
                </motion.p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = info.link ? (
                    <a
                      href={info.link}
                      className="text-neutral-300 transition-colors duration-300 hover:text-white"
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
                      className="flex items-start space-x-4 rounded-xl border border-neutral-600/40 bg-neutral-800/60 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 sm:p-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className={`${info.color} mt-1 text-xl sm:text-2xl`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {info.title}
                        </h3>
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
                <h3 className="mb-4 text-xl font-semibold text-white sm:mb-6 sm:text-2xl">
                  Connect With{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Me
                  </span>
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
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-600/50 bg-neutral-800/80 sm:h-14 sm:w-14 ${social.color} shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20`}
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-neutral-300"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-400 outline-none backdrop-blur-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-neutral-300"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-400 outline-none backdrop-blur-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-400 outline-none backdrop-blur-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    placeholder="Project Collaboration"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-400 outline-none backdrop-blur-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-neutral-700 text-neutral-400'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-green-600/50 bg-green-900/60 p-4 text-center text-green-300 backdrop-blur-sm"
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
