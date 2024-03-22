import React from "react";
import { LuTerminalSquare, LuFrame, LuLineChart } from "react-icons/lu";
import timeline1 from "@/public/timeline1.png"
import proj1 from "@/public/proj1.png"
import proj2 from "@/public/proj2.png"
import proj3 from "@/public/proj3.png"



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Full-Stack Developer Bootcamp",
    location: "Metro Manila",
    description:
      "I graduated after 3 months of course material involving the creation of a front-end, back-end, full-stack project.",
    icon: React.createElement(LuTerminalSquare),
    date: "2021",
  },
  {
    title: "Graduated UI/UX Design and Research Bootcamp",
    location: "Metro Manila",
    description:
      "To further enrich my skills as a frontend developer, I finished a UI/UX bootcamp ",
    icon: React.createElement(LuFrame),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Metro Manila",
    description:
      "I'm now a full-stack developer working as a freelancer. I am also currently looking for full-time work opportunities.",
    icon: React.createElement(LuLineChart),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Project One Title",
    description:
      "I worked on...I love cheese, especially babybel parmesan. When the cheese comes out everybody's happy when the cheese Swiss manchego fromage swiss castello chalk and cheese roquefort stilton.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: proj1,
  },
  {
    title: "Project Two Title",
    description:
      "Project that. It features...I worked on...I love cheese, especially babybel parmesan. When the cheese comes out everybody's happy when the cheese roquefort stilton.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: proj2,
  },
  {
    title: "Project Three Title",
    description:
      "A ... which functions as ...I worked on...I love cheese, especially babybel parmesan. When the cheese comes out everybody's happy when the cheese roquefort stilton.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: proj3,
  },
] as const;
// ^ hardcoding as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;