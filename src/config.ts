export const siteConfig = {
  name: "Mithun Dhanasuthan",
  title: "Junior Software Developer",
  description:
    "IB student and developer from Ottawa. Mobile dev co-op experience, hackathon winner, and builder of tools for sports analytics, sleep tracking, and sustainability.",
  accentColor: "#1d4ed8",
  location: "Ottawa, ON",
  social: {
    email: "dmithun2022@gmail.com",
    phone: "+1 613-869-6064",
    linkedin: "https://linkedin.com/in/mithun-dhanasuthan",
    github: "https://github.com/mithun-dhanasuthan",
  },
  aboutMe:
    "I'm finishing Grade 12 (IB & OSSD) at Merivale High School and aiming to become a software engineer. I'm learning AI/ML and exploring other parts of software—full-stack, mobile, and hardware. I've done a Mobile Developer Co-op at Brash Inc - Velavu, won 1st at SHAD/UWaterloo Catalyst and runner-up at Hack the Hill II, and I'm an Hack Club executive. I'm open to any advice or opportunities; feel free to reach out via email or my socials.",
  skills: [
    "JavaScript/TypeScript",
    "Python",
    "SQLite",
    "React.js",
    "React Native",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Firebase",
    "NumPy",
    "pandas",
    "FastAPI",
    "Groq",
    "PyTorch",
    "MongoDB",
    "Git",
    "Figma",
    "Jira",
    "Android Studio",
  ],
  projects: [
    {
      name: "Happiness Farms — Farmers Market App",
      description:
        "Winner (Most Creative Hacks) at Boost Hacks II. Empowers local farmers with a digital platform: user side (home, events, products, reviews, place order) and business side (schedules, orders, products, stats). Java backend with React Native frontend; I led the front-end and GUI.",
      link: "https://github.com/mithustar39/Farmers-Market-App-",
      devpostLink: "https://devpost.com/software/happiness-farms-online-platforms",
      skills: ["Java", "React Native", "JavaScript"],
    },
    {
      name: "ZeeZ — Sleep Watch",
      description:
        "Runner-up at Hack the Hill II. AI-powered sleep optimizer for insomnia: Arduino Nano 33 BLE + MAX30102 heart-rate sensor → MongoDB; PyTorch reinforcement learning for personalized plans; React + Node.js web app (Clerk auth). Built in 48 hours with no prior PyTorch experience.",
      link: "https://github.com/mithustar39/Sleep-Tracker-Hack-the-Hill---Mithun-Surya-Henry-Ryan",
      devpostLink: "https://devpost.com/software/zeez",
      skills: ["React", "Node.js", "MongoDB", "Python", "PyTorch", "Arduino", "C++"],
    },
    {
      name: "NBA Position Analyzer",
      description:
        "Analytics web app (FastAPI + SQLite) that uses historical NBA data to recommend positions and training plans. Computes a similarity score between the user and pro player profiles and outputs a data-backed training roadmap.",
      link: "https://github.com/mithustar39/Basketball-Position-Analytics",
      skills: ["Python", "FastAPI", "SQLite", "pandas", "NumPy", "JavaScript"],
    },
  ],
  experience: [
    {
      company: "Brash Inc - Velavu",
      title: "Mobile Developer (Co-op)",
      dateRange: "Jun 2025 – Sep 2025",
      bullets: [
        "Integrated the Gateway product into the mobile app.",
        "Updated the mobile app from Figma designs using React and Swift.",
        "Visualized real-time metrics from Gateway devices using JSON and JavaScript.",
      ],
    },
    {
      company: "SHAD / UWaterloo Catalyst",
      title: "Participant / Winner",
      dateRange: "Jul 2024 – Aug 2024",
      bullets: [
        "Collaborated with top students nationwide to develop and pitch a solution to a real-world design challenge.",
        "Participated in workshops on innovation, science, technology, and entrepreneurship; achieved 1st place for a sustainability project.",
        "Strengthened teamwork, leadership, public speaking, and design thinking through hands-on projects.",
      ],
    },
    {
      company: "Ottawa Tamil Association",
      title: "Student Worker",
      dateRange: "Jun 2024 – Jun 2025",
      bullets: [
        "Updated the website regularly using HTML, CSS, and JavaScript.",
        "Created email templates in Constant Contact for 200+ people.",
        "Assisted with food preparation, admin, front-desk customer service, and transactions during festivals and events.",
      ],
    },
  ],
  education: [
    {
      school: "Merivale High School",
      degree: "International Baccalaureate (IB) and OSSD",
      dateRange: "June 2026",
      achievements: ["GPA: 94"],
    },
  ],
  certifications: [
    { name: "Responsive Web Design", issuer: "freeCodeCamp", link: undefined },
    { name: "Advanced Game Development", issuer: "WhitehatJr", link: undefined },
    { name: "Digital Exploration Opportunities Program (DEOP)", issuer: "Natural Resources Canada", link: undefined },
    { name: "SHAD", issuer: "2024", link: undefined },
    { name: "University of Waterloo Catalyst", issuer: "2024", link: undefined },
  ],
};
