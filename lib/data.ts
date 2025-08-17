import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaMicrochip,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiIntel,
} from "react-icons/si";

export const personalInfo = {
  name: "Ahasan Ullah Khalid",
  bio: "A passionate Electronics & VLSI Engineer from CUET with a strong focus on both front & back-end hardware design in the VLSI domain.",
  location: "Dhaka, Bangladesh",
  email: "aukhalid02@gmail.com",
  phone: "+8801610074044",
  profileImage: "/khalid.jpg",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/aukhalid",
    linkedin: "https://linkedin.com/in/aukhalid",
    facebook: "https://www.facebook.com/aukhalid02",
    instagram: "https://www.instagram.com/aukhalid02",
    email: "mailto:aukhalid02@gmail.com",
  },
};

export const skills = [
  { name: "Cadence Virtuoso", icon: FaMicrochip, level: 85 },
  { name: "Quartus II", icon: SiIntel, level: 80 },
  { name: "Logisim Evolution", icon: FaProjectDiagram, level: 88 },
  { name: "React", icon: FaReact, level: 95 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "Next.js", icon: SiNextdotjs, level: 88 },
  { name: "Node.js", icon: FaNodeJs, level: 85 },
  { name: "Python", icon: FaPython, level: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
  { name: "MongoDB", icon: SiMongodb, level: 75 },
  { name: "Git", icon: FaGitAlt, level: 90 },
  { name: "AWS", icon: FaAws, level: 65 },
];

export const projects = [
  {
    id: 1,
    title: "SAP-1-CPU-Logisim",
    description:
      "A complete implementation of the Simple-As-Possible (SAP-1) CPU architecture designed and simulated using Logisim Evolution. This project includes a hardwired control unit, enabling automated execution of machine code programs, demonstrated with an 8-bit addition operation.",
    image: "/khalid_sap1_auto1.png",
    technologies: ["SAP-1 Basic", "CS", "Logisim Evolution", "Electronics"],
    githubUrl: "https://github.com/aukhalid/SAP-1-CPU-Logisim",
    liveUrl: "https://github.com/aukhalid/SAP-1-CPU-Logisim",
    featured: true,
  },

  {
    id: 2,
    title: "CMOS-VLSI-Designs-gpdk90",
    description:
      "A comprehensive collection of CMOS standard cells and digital system designs implemented using the gpdk90 open-source PDK in Cadence Virtuoso. Includes transistor-level schematics, layouts, symbols, and simulations in ADE L with verification against truth tables. Covers both fundamental gates (inverter, NAND, NOR, adders) and advanced circuits.",
    image: "/khalid_ha_la.png",
    technologies: ["Cdence Virtuoso", "ADE L", "gpdk90 PDK", "Layout XL"],
    githubUrl: "https://github.com/aukhalid/CMOS-VLSI-Logic-Designs-gpdk90",
    liveUrl: "https://github.com/aukhalid/CMOS-VLSI-Logic-Designs-gpdk90",
    featured: true,
  },

  {
    id: 3,
    title: "refun",
    description: "Awwwards winning website with react tailwind and gsap.",
    image: "/refun.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/aukhalid/refun",
    liveUrl: "https://refun-two.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "kreeshee",
    description:
      "kreeshee is an ecommerce platform in bangladesh for selling and buying fresh produce.",
    image: "/kreeshee.png",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/aukhalid/kreeshee",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Nokshia",
    description:
      "This is a website of a company called Nokshia. It's made of only HTML, CSS, Tailwind CSS, JS etc.",
    image: "/nokshia.png",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JS"],
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://nokshia.vercel.app/",
    featured: true,
  },
];

export const experience = [
  {
    title: "Ex-founder/Owner",
    company: "AshesToFlame Records",
    period: "2018 - 2021",
    description:
      "I started my own record label company AshesToFlame Records as a fun project. But we went big with 50+ artists in our community in a short time as we were the first ever EDM based record label in Bangladesh with distribution deal with Sony Music's label Distributor The Orchard.",
  },
  {
    title: "Full Stack Developer",
    company: "NoCpyrightNation",
    period: "2020 - 2022",
    description: "Built and maintained client website with best practices.",
  },
];
