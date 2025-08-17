import { IMAGES } from '@/assets/images';
import {
  FaCertificate,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTools,
  FaTwitter,
} from 'react-icons/fa';

export const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Beckend Specialist',
  'Web designier',
];

export const HERO_CONTENT = `Passionate full stack developer crafting scalable web applications with React, Next.js, Node.js, Angular js and modern databases. I create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Dedicated full stack developer passionate about creating efficient, user-friendly web applications. Experienced with React, Next.js,Angular js, Node.js, MySQL,Postman and MongoDB. I thrive in collaborative environments, enjoy solving complex problems, and continuously explore new technologies to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: 'Apr 2024 - Jun 2024',
    role: 'CLOUD ENGINEER',
    company: 'GTrusty Cloud Private Limited',
    description: `Led cloud infrastructure management for enterprise clients, managing DNS and MX configurations across 25+ domains while reducing email delivery issues by 50%. Spearheaded Google Workspace implementation for 10+ organizations, resulting in 30% productivity improvement. Administered 500+ user accounts through G Suite Admin Console, ensuring 100% compliance with security policies. Successfully executed data migration projects exceeding 100GB with minimal downtime (<2 hours).`,
    technologies: [
      'Google Workspace',
      'DNS Management',
      'GAM',
      'GAMMO',
      'GASMO',
      'GWMME',
      'SysTool',
    ],
  },
  {
    year: 'Jan 2024 - Mar 2024',
    role: 'SOFTWARE DEVELOPMENT TRAINEE',
    company: 'Himank Soft Solution',
    description: `Developed responsive web components using modern React patterns and best practices. Collaborated with senior developers on front-end architecture and design system implementation. Optimized application performance through code splitting and efficient state management, achieving 25% improvement in loading speeds. Gained hands-on experience with full-stack development including database design and API integration.`,
    technologies: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'MongoDB',
      'REST APIs',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Task Manager App',
    image: IMAGES.taskManager,
    description:
      'A modern todo application with priority management, due dates, and local storage persistence. Features task filtering by status and priority with a beautiful dark theme UI.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Context API',
      'Local Storage',
    ],
  },
  {
    title: 'Personal Finance Tracker Plus',
    image: IMAGES.financeTracker,
    description:
      'A full-stack web application for tracking daily expenses, setting monthly budgets, and viewing financial reports to understand spending patterns.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
  },
  {
    title: 'Event Platform',
    image: IMAGES.eventPlatform,
    description:
      'A comprehensive event management platform for creating, organizing, and managing events. Features event registration, attendee management, and real-time updates.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    title: 'Genius School Website',
    image: IMAGES.schoolWebsite,
    description:
      'A modern educational institution website with responsive design, featuring school information, departments, faculty, and contact management system.',
    technologies: ['Node.js', 'Express', 'Handlebars', 'MongoDB', 'Bootstrap'],
  },
];

export const CONTACT = {
  address: 'Sec-3, Ballabgarh, Faridabad, Haryana (Pincode - 121004)',
  phoneNo: '+91 8375988026',
  email: 'rajatdev1299@gmail.com',
};

export const highlights = [
  {
    icon: FaCode,
    title: 'Frontend',
    description: 'React, Next.js, Angular js',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaLaptopCode,
    title: 'Backend',
    description: 'Node.js, Express, MongoDB,MySQL',
    color: 'from-green-500 to-emerald-500',
  },

  {
    icon: FaTools,
    title: 'Tools',
    description: 'Git, VS Code, Figma, Postman',
    color: 'from-orange-500 to-red-500',
  },
];

export const stats = [
  { number: '7+', label: 'Projects Completed' },
  { number: '1.5+', label: 'Years Experience' },
  { number: '7+', label: 'Happy Clients' },
];

export const tabs = [
  { id: 'experience', label: 'Experience', icon: FaCode },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'certifications', label: 'Certifications', icon: FaCertificate },
];

export const experiences = [
  {
    year: 'March 2025 - Present',
    role: 'Software Developer',
    company: 'BCoder Castle Pvt. Ltd.',
    description:
      'Contributing to modern web projects by developing reusable components with React.js, Next.js, and AngularJS. Leveraged Tailwind CSS for responsive designs and integrated MongoDB for scalable data management.',
    technologies: [
      'React.js',
      'Next.js',
      'AngularJS',
      'Tailwind CSS',
      'MongoDB',
    ],
    type: 'work',
    achievements: [
      'Built and optimized reusable React and Next.js components, improving development speed by 40%',
      'Improved application performance and loading speed by 25% through efficient state management and code splitting',
      'Developed responsive UIs with Tailwind CSS, ensuring cross-device compatibility',
      'Collaborated with senior developers on full-stack features, gaining hands-on experience with scalable architectures',
    ],
  },
  {
    year: 'Feb 2024 - March 2025',
    role: 'Software Developer',
    company: 'Apptechies | Custom Mobile App Development Company',
    description:
      'Worked as a full-stack developer, building scalable web applications using React.js, Node.js, Express, and MongoDB. Collaborated with cross-functional teams to deliver efficient and maintainable solutions while optimizing performance and scalability.',
    technologies: ['React.js', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'],
    type: 'work',
    achievements: [
      'Developed and deployed multiple full-stack features using MERN stack',
      'Optimized backend APIs with Express.js, improving response times by 30%',
      'Implemented MongoDB schemas and queries for scalable data handling',
      'Enhanced UI consistency with reusable React + Bootstrap components',
    ],
  },
];

export const education = [
  {
    year: '2021 - 2024',
    role: 'Bachelor of Computer Science',
    company: 'Ch. Devi Lal State Institute of Engineering & Technology',
    description:
      'Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.',
    technologies: [
      'Java',
      'Python',
      'Database Management',
      'Software Engineering',
    ],
    type: 'education',
    achievements: [
      'Graduated with distinction',
      'Led multiple academic projects',
      'Active in coding competitions',
      'Strong foundation in algorithms',
    ],
  },
];

export const certifications = [
  {
    year: '2024',
    role: 'React.js Certification',
    company: 'Meta (Facebook)',
    description:
      'Advanced React development including hooks, context, and modern patterns.',
    technologies: ['React', 'Hooks', 'Context API', 'Redux'],
    type: 'certification',
    achievements: [
      'Component lifecycle mastery',
      'State management expertise',
      'Performance optimization',
      'Modern React patterns',
    ],
  },
  {
    year: '2024',
    role: 'Node.js Developer',
    company: 'IBM',
    description:
      'Backend development with Node.js, Express, and database integration.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    type: 'certification',
    achievements: [
      'RESTful API development',
      'Database design and optimization',
      'Authentication and security',
      'Scalable backend architecture',
    ],
  },
  {
    year: '2023',
    role: 'MERN Stack Developer',
    company: 'CODEHELP',
    description:
      'Completed an intensive MERN stack development program covering frontend, backend, database management, and API integration. Gained hands-on experience in building full-stack web applications using modern JavaScript frameworks and tools.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    type: 'certification',
    achievements: [
      'Developed dynamic frontend applications with React.js',
      'Built RESTful APIs and server-side logic using Node.js & Express.js',
      'Designed and optimized MongoDB schemas for scalable data handling',
      'Integrated full-stack features and implemented authentication & routing',
    ],
  },
];

export const detailedProjects = [
  {
    id: 1,
    title: 'CollectaGift',
    subtitle: 'Collaborative Gift Contribution Platform',
    description:
      'A platform that enables users to arrange group gifts by collecting contributions from multiple participants.',
    longDescription:
      'Developed a web application using Angular for managing collaborative gift contributions. Users can create gift campaigns, invite contributors, track contributions, and manage payment progress seamlessly. Focused on building an intuitive UI, secure contribution flow, and scalable architecture to support multiple concurrent campaigns.',
    image: IMAGES.schoolWebsite,
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Bootstrap'],
    features: [
      'Create and manage group gift campaigns',
      'Invite users to contribute',
      'Track contributions in real-time',
      'Secure payment and contribution flow',
      'Responsive Angular-based UI',
      'Scalable backend for multiple campaigns',
    ],

    liveUrl: 'https://collectagift.com/',
    status: 'Completed',
    category: 'Web Application',
  },
  {
    id: 2,
    title: 'Admin Panel for Mobile App User Management',
    subtitle: 'User & Seller Management Dashboard',
    description:
      'An admin panel to manage mobile app users and third-party sellers, ensuring smooth marketing and user workflows.',
    longDescription:
      'Designed and developed an admin panel using React.js and Redux for responsive interface and strong state management. Features include creating and managing user accounts, controlling third-party sellers, and managing products efficiently. Focused on scalability, clean code practices, and reliable workflows for future enhancements.',
    image: IMAGES.financeTracker,
    technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
    features: [
      'User account creation and management',
      'Admin control over third-party sellers',
      'Product and seller management',
      'Responsive and scalable dashboard',
      'Robust state management with Redux',
      'Clean and maintainable codebase',
    ],

    liveUrl: 'https://adminatra.deploywork.com/seller/sign-in',
    status: 'Completed',
    category: 'Admin Panel',
  },
  {
    id: 3,
    title: 'E-commerce SaaS for Beauty & Makeover',
    subtitle: 'Appointment Booking Platform',
    description:
      'A SaaS-based platform for booking beauty and makeover appointments with admin management features.',
    longDescription:
      'Developed a modern e-commerce SaaS application using Next.js, Node.js, and Tailwind CSS. The platform allows users to book beauty and makeover appointments, while the admin panel (built in React.js) provides full control over appointments, services, and user data. Backend powered by Node.js and MongoDB ensures scalability and reliability.',
    image: IMAGES.eventPlatform, // replace with beauty project image
    technologies: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Appointment booking system',
      'Service and user management',
      'Admin panel for full control',
      'Responsive and modern UI',
      'Scalable backend with Node.js & MongoDB',
      'SaaS-ready architecture',
    ],

    liveUrl: '',
    status: 'In Progress',
    category: 'SaaS Application',
  },
  {
    id: 4,
    title: 'E-commerce Automobile Platform',
    subtitle: 'Online Automobile Marketplace',
    description:
      'A dynamic e-commerce platform for automobiles with advanced features like product viewing, rating, purchasing, and guest access.',
    longDescription:
      'Developed a scalable e-commerce platform using React.js, Tailwind CSS, and Redux. Built reusable components for maintainability, integrated secure payment gateway and shipping API, and designed an admin panel to manage site operations and user data. Followed best practices and design patterns to ensure clean workflows and robust performance.',
    image: IMAGES.taskManager, // replace with automobile project image
    technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Product viewing, rating, and purchasing',
      'Guest user functionality',
      'Secure payment gateway integration',
      'Shipping API integration',
      'Admin panel for site and user management',
      'Reusable and scalable components',
    ],

    liveUrl: '',
    status: 'Completed',
    category: 'E-commerce',
  },
];

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    content: 'Sec-58, Mohali, Punjab (160055)',
    color: 'text-red-400',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'rajatdev1299@gmail.com',
    link: 'mailto:rajatdev1299@gmail.com',
    color: 'text-blue-400',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    content: '+91 8398929837',
    link: 'tel:+918398929837',
    color: 'text-green-400',
  },
];

export const socialLinks = [
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/rajat-kumar-6995081b4',
    color: 'text-blue-600 hover:text-blue-500',
    label: 'LinkedIn',
  },
  {
    icon: FaGithub,
    url: 'https://github.com/suntycode',
    color: 'text-gray-400 hover:text-white',
    label: 'GitHub',
  },
  {
    icon: FaTwitter,
    url: 'https://www.twitter.com',
    color: 'text-blue-400 hover:text-blue-300',
    label: 'Twitter',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'timeline', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
