import pro1 from "../public/assest/pro1.png";
import pro2 from "../public/assest/pro2.png";

export const profile = {
  name: "Harshda Gargi",
  role: "Computer Science Student",
  tagline: "Frontend developer · DSA enthusiast · 160 days of consistency",
  status: "Open to internships",
  resumeUrl: "https://drive.google.com/file/d/1w_YerEzFJCXS-upZPj8IEflMnYQnPOKd/view?usp=sharing",
  email: "harshdagargi@gmail.com",
  socials: {
    github: "https://github.com/harshda95",
    linkedin: "https://linkedin.com/in/harshda-gargi",
    leetcode: "https://leetcode.com/harshda26",
    
  },
};

export const about = {
  bio: [
    "I'm a computer science student who enjoys building clean, fast interfaces and solving hard problems with data structures and algorithms.",
    "Currently deep into a 160-day DSA challenge, while also shipping frontend projects and exploring full-stack development.",
  ],
  stats: [
    { label: "Days of DSA streak", value: "160" },
    { label: "Projects shipped", value: "8" },
    { label: "Internships completed", value: "2" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "Code2",
    items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Redux"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    category: "CS fundamentals",
    icon: "Cpu",
    items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "OOP", "System Design basics"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git & GitHub", "VS Code", "Postman", "Figma", "Docker (basics)"],
  },
];

export const projects = [
  {
   title: "AccuraType",
  description:
    "A responsive Typing Speed Test web application that helps users improve typing accuracy and speed. It provides real-time WPM, CPM, accuracy tracking, mistake highlighting, and performance statistics through an interactive and user-friendly interface.",
  tags: ["React", "JavaScript", "Tailwind CSS"],
  image: pro1,
  github: "https://github.com/Harshda95/accuraType",
  live: "https://accuratype.netlify.app/",
  featured: true,
  },
  {
   title: "MarineMinds",
  description:
    "MarineMinds is an interactive educational platform dedicated to ocean exploration and marine conservation. The application helps users discover marine biodiversity, understand environmental challenges, and learn sustainable practices through engaging content, modern design, and an intuitive user experience.",
  tags: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  image: pro2,
  github: "https://github.com/Harshda95/MarineMinds1.0",
  live: "https://marine-minds1-0-b3jx.vercel.app/",
  featured: true,
  },
  {
    title: "Project Three",
    description: "A short, punchy description of what it does and the problem it solves.",
    tags: ["JavaScript", "API"],
    image: "/projects/project-3.png",
    github: "https://github.com/yourusername/project-three",
    live: "",
    featured: false,
  },
  {
    title: "Project Four",
    description: "A short, punchy description of what it does and the problem it solves.",
    tags: ["React", "Chart.js"],
    image: "/projects/project-4.png",
    github: "https://github.com/yourusername/project-four",
    live: "https://project-four.vercel.app",
    featured: false,
  },
];

export const experience = [

    {
    role: "Young Professional Trainee",
    company: "TCS iON",
    duration: "2025",
    points: [
      "Completed the TCS iON Career Edge – Young Professional program.",
      "Strengthened communication, presentation, and workplace readiness skills.",
      "Learned business etiquette, teamwork, and professional conduct.",
      "Enhanced problem-solving and interview preparation skills.",
    ],
    },
  {
    role: "Web Development Intern",
    company: "NIELIT EC Muzaffarpur",
    duration: "2024",
    points: [
      "Completed a 4-week Web Development internship focused on modern web technologies.",
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Implemented user-friendly interfaces with mobile-first design principles.",
      "Gained practical experience in frontend development and project deployment.",
    ],
  },
  {
     role: "Internet of Things (IoT) Intern",
    company: "Career Simplify Multi Utility Pvt. Ltd.",
    duration: "2025",
    points: [
      "Successfully completed a 6-week IoT internship program.",
      "Worked with IoT architecture, sensors, and embedded systems concepts.",
      "Developed smart monitoring solutions using connected devices.",
      "Learned real-time data collection, processing, and cloud integration fundamentals.",
    ],
  },
];

export const achievements = [
  {
    title: "160-Day DSA Challenge",
    description: "Actively solving Data Structures and Algorithms problems on GeeksforGeeks.",
    icon: "Flame",
    link: "",
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    description: "Completed professional development training focused on workplace readiness, communication, and career skills.",
    icon: "Award",
    link: "",
  },
  {
    title: "McKinsey Forward Program",
    description: "Completed McKinsey's Forward Program, developing leadership, problem-solving, adaptability, and professional skills.",
    icon: "Trophy",
    link: "",
  },
  {
    title: "Infosys Springboard - Python Programming",
    description: "Successfully completed Python Programming certification through Infosys Springboard.",
    icon: "Code",
    link: "",
  },
  {
    title: "NPTEL Cloud Computing & Distributed Systems",
    description: "Earned Elite certification from NPTEL in Cloud Computing and Distributed Systems.",
    icon: "Award",
    link: "",
  },
  {
    title: "Cisco CCNA Enterprise Networking",
    description: "Completed Enterprise Networking, Security, and Automation certification through Cisco Networking Academy.",
    icon: "Medal",
    link: "",
  },
];
