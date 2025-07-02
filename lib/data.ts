import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export const personalInfo = {
  name: "Ahasan Ullah Khalid",
  title: "Web Developer",
  bio: "A passionate self-taught developer with a background in ETE from CUET. Focused on development with React, Next etc. and building cool stuff with code",
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
  { name: "React", icon: FaReact, level: 95 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "Next.js", icon: SiNextdotjs, level: 88 },
  { name: "Node.js", icon: FaNodeJs, level: 85 },
  { name: "Python", icon: FaPython, level: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
  { name: "MongoDB", icon: SiMongodb, level: 75 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 78 },
  { name: "Git", icon: FaGitAlt, level: 90 },
  { name: "Docker", icon: FaDocker, level: 70 },
  { name: "AWS", icon: FaAws, level: 65 },
];

export const projects = [
  {
    id: 1,
    title: "refun",
    description: "Awwwards winning website with react tailwind and gsap.",
    image: "/refun.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/aukhalid/refun",
    liveUrl: "https://refun-two.vercel.app",
    featured: true,
  },
  {
    id: 2,
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
    id: 3,
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
