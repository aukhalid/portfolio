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
  bio: "RTL Design & Verification Engineer | VLSI Enthusiast | RISC-V | FPGA | RTL-to-GDSII ASIC Design",
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
  { name: "Verilog HDL", icon: FaMicrochip, level: 90 },
  { name: "SystemVerilog", icon: FaProjectDiagram, level: 88 },
  { name: "AMD Xilinx Vivado", icon: SiIntel, level: 80 },
  { name: "Logisim Evolution", icon: FaProjectDiagram, level: 88 },
  { name: "OpenROAD", icon: FaPython, level: 80 },
  { name: "Yosys", icon: FaReact, level: 95 },
  { name: "GTKWave", icon: SiTypescript, level: 90 },
  { name: "KLayout", icon: SiTypescript, level: 90 },
  { name: "Python", icon: FaPython, level: 80 },
  { name: "React", icon: FaReact, level: 95 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "Next.js", icon: SiNextdotjs, level: 88 },
  { name: "Node.js", icon: FaNodeJs, level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
  { name: "Git", icon: FaGitAlt, level: 90 },
];

export const projects = [
  {
    id: 1,
    title: "EVPIX-RV32: Custom RISC-V SoC",
    description:
      "A custom 32-bit, 5-stage pipelined RISC-V processor core featuring dedicated hardware accelerators and custom instruction extensions optimized for edge vision and real-time image processing tasks.",
    image: "/soc_top_3.png",
    technologies: ["RISC-V", "SystemVerilog", "Computer Architecture", "RTL Design"],
    githubUrl: "https://github.com/aukhalid/evpix_rv32",
    liveUrl: "https://github.com/aukhalid/evpix_rv32",
    featured: true,
  },
  {
    id: 2,
    title: "EVPIX-RV32: FPGA Implementation & Verification",
    description:
      "Hardware validation and prototyping of the EVPIX-RV32 processor core on physical FPGA hardware. Includes testbench development, hardware-in-the-loop validation, and resource optimization utilizing Quartus II.",
    image: "/full_setup.jpg",
    technologies: ["FPGA", "Xilinx Vivado", "SystemVerilog", "Hardware Validation"],
    githubUrl: "https://github.com/aukhalid/evpix_rv32",
    liveUrl: "https://github.com/aukhalid/evpix_rv32",
    featured: true,
  },
  {
    id: 3,
    title: "EVPIX-RV32: RTL-to-GDSII ASIC Flow Layout",
    description:
      "Physical design and synthesis of the EVPIX-RV32 edge vision processor using an advanced open-source PDK flow. Covers the entire RTL-to-GDSII ASIC implementation pipeline including logic synthesis, floorplanning, placement, CTS, and routing.",
    image: "/asic_without_pwr_gnd.png", //
    technologies: ["ASIC Design", "OpenROAD", "SkyWater 130nm", "Physical Design"],
    githubUrl: "https://github.com/aukhalid/evpix_rv32",
    liveUrl: "https://github.com/aukhalid/evpix_rv32",
    featured: true,
  },
  {
    id: 4,
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
    id: 5,
    title: "CMOS-VLSI-Designs-gpdk90",
    description:
      "A comprehensive collection of CMOS standard cells and digital system designs implemented using the gpdk90 open-source PDK in Cadence Virtuoso. Includes transistor-level schematics, layouts, symbols, and simulations in ADE L with verification against truth tables. Covers both fundamental gates (inverter, NAND, NOR, adders) and advanced circuits.",
    image: "/khalid_ha_la.png",
    technologies: ["Cadence Virtuoso", "ADE L", "gpdk90 PDK", "Layout XL"],
    githubUrl: "https://github.com/aukhalid/CMOS-VLSI-Logic-Designs-gpdk90",
    liveUrl: "https://github.com/aukhalid/CMOS-VLSI-Logic-Designs-gpdk90",
    featured: true,
  },

  {
    id: 6,
    title: "Nokshia",
    description:
      "This is a website of a company called Nokshia. It's made of only HTML, CSS, Tailwind CSS, JS etc.",
    image: "/nokshia.png",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JS"],
    githubUrl: "https://github.com/aukhalid/Nokshia",
    liveUrl: "https://nokshia.vercel.app/",
    featured: true,
  },
];

export const experience = [
  {
    title: "RTL Design & Verification Engineer (Intern)",
    company: "ADN Semiconductors Ltd.",
    period: "2026 - Present",
    description:
      "RTL Design Projects with SystemVerilog HDL, verifying them with testbench and full ASIC/FPGA implementation for different clients.",
  },
  {
    title: "VLSI Lecturer (Part-time)",
    company: "Manarat International University (MIU)",
    period: "2026 - Present",
    description: "Delivering comprehensive lectures and practical sessions on VLSI design for the EEE department, developing quizzes and examination questions, evaluating student assignments and assessments.",
  },

    {
    title: "Intern",
    company: "Teletalk Bangladesh Ltd.",
    period: "2025",
    description: "Completed industrial attachment and learned about how the networking works in circuit switching and packet switching.",
  },

    {
    title: "Founder / Co-Owner",
    company: "AshesToFlame Records",
    period: "2019 - 2022",
    description: "Managed music production, release workflow, branding, collaborations, artists/talents management.",
  },
];