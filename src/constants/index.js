import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  gdg,
  ambalay,
  ministry,
  prodigy,
  iot,
  lms,
  realestate,
  blog
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience"
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
    description: "Building end-to-end web applications with modern frameworks and architectures"
  },
  {
    title: "React Native Developer",
    icon: mobile,
    description: "Creating cross-platform mobile applications with React Native"
  },
  {
    title: "IoT Engineer",
    icon: backend,
    description: "Developing smart solutions combining hardware and software for real-world problems"
  },
  {
    title: "Technical Instructor",
    icon: creator,
    description: "Teaching modern web development technologies and best practices"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Module Instructor",
    company_name: "Google Developer Group (GDG)",
    icon: gdg,
    iconBg: "#4285F4",
    date: "March 2025 - Present",
    points: [
      "Deliver comprehensive React.js training covering fundamentals to advanced concepts",
      "Develop curriculum focusing on React hooks, state management, and performance optimization",
      "Guide students through building real-world projects to reinforce learning",
      "Conduct code reviews and provide personalized feedback to accelerate skill development"
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Amabalay Maps",
    icon: ambalay,
    iconBg: "#1E90FF",
    date: "January 2025 - Present",
    points: [
      "Lead frontend development for Ethiopia's alternative mapping solution",
      "Implement geospatial visualization features using MapLibre and OpenMapTiles",
      "Develop localization features including Amharic language support",
      "Optimize performance for low-bandwidth environments and offline usage"
    ],
  },
  {
    title: "Computer Engineer Intern",
    company_name: "Ministry of Industry",
    icon: ministry,
    iconBg: "#383E56",
    date: "October 2024 - January 2025",
    points: [
      "Developed import/export management system with HS code integration",
      "Researched wireless audio technology for local manufacturing",
      "Collaborated with cross-functional teams on technical solutions",
      "Documented system architecture and user workflows"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Prodigy InfoTech",
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Implemented responsive UI components using modern CSS frameworks",
      "Collaborated on JavaScript application development",
      "Participated in agile development processes",
      "Contributed to code quality through testing and reviews"
    ],
  },
];

const testimonials = [
  {
    testimonial: "Mekin's work on our mapping platform transformed our user experience. His attention to performance optimization for low-bandwidth environments was particularly impressive.",
    name: "Ambalay Team Lead",
    designation: "CTO",
    company: "Amabalay Maps",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial: "As a student in Mekin's React course, I appreciated his clear explanations and practical approach. He made complex concepts accessible to beginners.",
    name: "GDG Participant",
    designation: "Junior Developer",
    company: "GDG AAiT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "The IoT sewage monitoring system Mekin developed shows remarkable innovation in addressing urban infrastructure challenges.",
    name: "Faculty Advisor",
    designation: "Professor",
    company: "AAiT",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "IoT-Based Smart Sewage Monitoring System",
    description:
      "An innovative solution combining hardware sensors and cloud-based monitoring to address urban drainage challenges. The system provides real-time alerts for potential overflow situations and hazardous gas concentrations, helping municipalities prevent flooding and health hazards.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "ESP8266",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      }
    ],
    image: iot,
    source_code_link: "https://github.com/",
    features: [
      "Real-time monitoring of pH levels, gas concentrations, and water levels",
      "Mobile and web dashboard for municipal workers",
      "Automated alert system for critical conditions",
      "Historical data analysis for predictive maintenance"
    ]
  },
  {
    name: "Industrial LMS Platform",
    description:
      "A comprehensive learning management system built with cutting-edge technologies to support scalable course delivery. The platform supports multimedia content, quizzes, certifications, and advanced analytics for both learners and administrators.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "purple-text-gradient",
      }
    ],
    image: lms,
    source_code_link: "https://github.com/",
    features: [
      "JWT authentication with email verification",
      "Real-time notifications using Socket.io",
      "Admin dashboard with detailed analytics",
      "Social login integration (Google/Facebook)",
      "Performance optimized with Redis caching"
    ]
  },
  {
    name: "Real Estate Marketplace",
    description:
      "A full-featured property listing platform with advanced search capabilities, image management, and secure transaction features. The application provides tools for both property seekers and agents to connect and manage listings efficiently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "purple-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: realestate,
    source_code_link: "https://github.com/",
    features: [
      "Advanced property search with filters and geolocation",
      "Firebase-based image upload and management",
      "Google OAuth integration",
      "Responsive design optimized for all devices",
      "Favorites and comparison features"
    ]
  },
  {
    name: "Modern Blog Platform",
    description:
      "A feature-rich blogging application supporting rich content creation, community engagement through comments, and comprehensive content management tools for authors and administrators.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "orange-text-gradient",
      }
    ],
    image: blog,
    source_code_link: "https://github.com/",
    features: [
      "Secure user authentication system",
      "Admin dashboard for content management",
      "Markdown support for rich content creation",
      "Commenting and interaction system",
      "Responsive design with dark mode"
    ]
  }
];

export { services, technologies, experiences, testimonials, projects };