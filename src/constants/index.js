import taskManagerImg from "../assets/projects/project-1.jpg";
import financeTrackerImg from "../assets/projects/project-2.jpg";
import eventPlatformImg from "../assets/projects/project-3.jpg";
import schoolWebsiteImg from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate full stack developer crafting scalable web applications with React, Next.js, Node.js, and modern databases. I create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Dedicated full stack developer passionate about creating efficient, user-friendly web applications. Experienced with React, Next.js, Node.js, MySQL, and MongoDB. I thrive in collaborative environments, enjoy solving complex problems, and continuously explore new technologies to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "Apr 2024 - Jun 2024",
    role: "CLOUD ENGINEER",
    company: "GTrusty Cloud Private Limited",
    description: `Led cloud infrastructure management for enterprise clients, managing DNS and MX configurations across 25+ domains while reducing email delivery issues by 50%. Spearheaded Google Workspace implementation for 10+ organizations, resulting in 30% productivity improvement. Administered 500+ user accounts through G Suite Admin Console, ensuring 100% compliance with security policies. Successfully executed data migration projects exceeding 100GB with minimal downtime (<2 hours).`,
    technologies: ["Google Workspace", "DNS Management", "GAM", "GAMMO", "GASMO", "GWMME", "SysTool"],
  },
  {
    year: "Jan 2024 - Mar 2024",
    role: "SOFTWARE DEVELOPMENT TRAINEE",
    company: "Himank Soft Solution",
    description: `Developed responsive web components using modern React patterns and best practices. Collaborated with senior developers on front-end architecture and design system implementation. Optimized application performance through code splitting and efficient state management, achieving 25% improvement in loading speeds. Gained hands-on experience with full-stack development including database design and API integration.`,
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "MongoDB", "REST APIs"],
  },
];

export const PROJECTS = [
  {
    title: "Task Manager App",
    image: taskManagerImg,
    description:
      "A modern todo application with priority management, due dates, and local storage persistence. Features task filtering by status and priority with a beautiful dark theme UI.",
    technologies: ["React", "Vite", "Tailwind CSS", "Context API", "Local Storage"],
  },
  {
    title: "Personal Finance Tracker Plus",
    image: financeTrackerImg,
    description:
      "A full-stack web application for tracking daily expenses, setting monthly budgets, and viewing financial reports to understand spending patterns.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
  },
  {
    title: "Event Platform",
    image: eventPlatformImg,
    description:
      "A comprehensive event management platform for creating, organizing, and managing events. Features event registration, attendee management, and real-time updates.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Genius School Website",
    image: schoolWebsiteImg,
    description:
      "A modern educational institution website with responsive design, featuring school information, departments, faculty, and contact management system.",
    technologies: ["Node.js", "Express", "Handlebars", "MongoDB", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Sec-3, Ballabgarh, Faridabad, Haryana (Pincode - 121004)",
  phoneNo: "+91 8375988026",
  email: "nikhil.developer03@gmail.com",
};
