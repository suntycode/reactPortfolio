import { IMAGES } from '@/assets/images';
import { ABOUT_TEXT, highlights, stats } from '../constants';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaCloud,
  FaTools,
  FaGraduationCap,
  FaLightbulb,
} from 'react-icons/fa';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-6 text-center sm:my-8 md:my-12 lg:my-16"
      >
        <h1 className="mb-3 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center gap-6 lg:mb-12 lg:flex-row lg:gap-12 xl:gap-16">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex w-full justify-center lg:w-5/12"
          >
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg transition-all duration-500 group-hover:blur-xl"></div>

              <div className="relative">
                <img
                  className="h-56 w-56 rounded-2xl border-2 border-neutral-700/50 object-cover shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/50 xs:h-64 xs:w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                  src={IMAGES.aboutImg}
                  alt="About"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent"></div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                >
                  <FaGraduationCap className="text-lg text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                >
                  <FaLightbulb className="text-sm text-white" />
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
                  className="mb-3 text-2xl font-bold text-white xs:text-3xl sm:text-4xl"
                >
                  Building Scalable,
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    User-Friendly Web Solutions
                  </span>
                </motion.h2>

                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg lg:mx-0"
                >
                  I’m a dedicated Full Stack Developer with a strong focus on
                  building scalable, user-friendly web applications. Skilled in{' '}
                  <strong>React</strong>, <strong>Next.js</strong>,{' '}
                  <strong>AngularJS</strong>, <strong>Node.js</strong>,{' '}
                  <strong>MySQL</strong>, <strong>MongoDB</strong>, and{' '}
                  <strong>Postman</strong>, I combine technical expertise with
                  problem-solving skills to deliver efficient solutions. I
                  thrive in collaborative environments, enjoy tackling complex
                  challenges, and continuously explore emerging technologies to
                  craft high-quality, innovative products.
                </motion.p>
              </div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-3 lg:grid-cols-4"
              >
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative overflow-hidden rounded-xl border border-neutral-700/50 bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                      ></div>

                      <div className="relative z-10 text-center">
                        <div
                          className={`mx-auto mb-2 h-10 w-10 rounded-lg bg-gradient-to-br ${item.color} p-2 shadow-lg transition-shadow duration-300 group-hover:shadow-xl`}
                        >
                          <IconComponent className="h-full w-full text-white" />
                        </div>
                        <h3 className="mb-1 text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-tight text-neutral-400">
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
          className="mb-6 grid grid-cols-3 gap-3 sm:gap-6 lg:mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-neutral-700/30 bg-neutral-900/30 p-3 text-center backdrop-blur-sm sm:p-4"
            >
              <h3 className="mb-1 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-3xl">
                {stat.number}
              </h3>
              <p className="text-xs text-neutral-400 sm:text-sm">
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
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative transform rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
