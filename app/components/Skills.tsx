"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Image from "next/image";

const skills = [
  { name: "HTML", x: "-15vw", y: "2vw", logoPath: "/svg/html-1.svg" },
  { name: "CSS", x: "-5vw", y: "-8vw", logoPath: "/svg/css-3.svg" },
  {
    name: "JavaScript",
    x: "15vw",
    y: "4vw",
    logoPath: "/svg/logo-javascript.svg",
  },
  { name: "ReactJS", x: "0vw", y: "10vw", logoPath: "/svg/react-2.svg" },
  {
    name: "TypeScript",
    x: "-15vw",
    y: "-12vw",
    logoPath: "/svg/typescript.svg",
  },
  {
    name: "Bootstrap",
    x: "12vw",
    y: "-10vw",
    logoPath: "/svg/bootstrap-5-1.svg",
  },
  { name: "MySQL", x: "25vw", y: "-5vw", logoPath: "/svg/mysql-logo.svg" },
  { name: "Postman", x: "0vw", y: "-15vw", logoPath: "/svg/postman.svg" },
  {
    name: "MS SQL Server",
    x: "-30vw",
    y: "0vw",
    logoPath: "/svg/microsoft-sql-server-1.svg",
    imgClass: "h-10 w-10 filter invert",
  },
  {
    name: "NextJS",
    x: "-15vw",
    y: "12vw",
    logoPath: "/svg/next-js.svg",
    imgClass: "filter invert",
  },
  {
    name: "PostgreSQL",
    x: "-30vw",
    y: "12vw",
    logoPath: "/svg/postgresql.svg",
  },
  { name: "Python", x: "15vw", y: "12vw", logoPath: "/svg/python.svg" },
  { name: "Node", x: "25vw", y: "-15vw", logoPath: "/svg/nodejs-1.svg" },
  { name: "Java", x: "12vw", y: "-18vw", logoPath: "/svg/java.svg" },
  { name: "C", x: "-20vw", y: "-18vw", logoPath: "/svg/c-1.svg" },
  {
    name: "TailwindCSS",
    x: "30vw",
    y: "10vw",
    logoPath: "/svg/tailwindcss.svg",
  },
  {
    name: "Express",
    x: "-30vw",
    y: "-12vw",
    logoPath: "/svg/express-109.svg",
    imgClass: "h-10 w-10 filter invert",
  },
  { name: "AWS", x: "30vw", y: "0vw", logoPath: "/svg/aws.svg", imgClass: "filter invert",},
  { name: "MongoDB", x: "-41vw", y: "-5vw", logoPath: "/svg/mongoDB.svg" },
  { name: "Git", x: "35vw", y: "-8vw", logoPath: "/svg/git.svg" },

];


const skillGridVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

function Skills() {
  return (
    <div id="skillSection" className="mt-16">
      <div className="md:h-[20vh] "></div>
      <div className="hidden  w-full h-[80vh] relative md:flex items-center justify-center rounded-full circularLight">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2 cursor-pointer">
          <h2 className="font-bold text-5xl md:text-6xl text-center text-amber-300">
            Skills
          </h2>
        </motion.div>
     

        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            x={skill.x}
            y={skill.y}
            logoPath={skill.logoPath}
            imgClass={skill.imgClass}
          />
        ))}
  
      </div>
      <motion.div className="md:hidden flex justify-center rounded-full font-semibold bg-dark text-light p-2">
          <h2 className="font-bold text-5xl text-center text-amber-300 mb-8">
            Skills
          </h2>
        </motion.div>
        <motion.div 
        className="md:hidden grid grid-cols-4 gap-4 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={skillGridVariants}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            variants={skillGridVariants}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}

          >
            <Image src={skill.logoPath} alt="skill Icon" width={40} height={40} className={skill.imgClass} />
            <span className="mt-2 text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
   
  );
}

export default Skills;
