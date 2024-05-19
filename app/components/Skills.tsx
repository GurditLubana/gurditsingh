"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillProps {
  name: string;
  x: string;
  y: string;
  logoPath: string;
}

function Skill({ name, x, y, logoPath }: SkillProps) {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-slate-700 text-light py-2 px-4 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center">
        <Image
          src={logoPath}
          alt="skill Icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <span>{name}</span>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <div id="skillSection" className="mt-64">
      <h2 className="font-bold  text-4xl md:mb-8 text-center "></h2>
      <div className="w-full h-[80vh] relative flex items-center justify-center rounded-full circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2 cursor-pointer"
        >
          <h2 className="font-bold text-6xl text-center text-amber-300">Skills</h2>
        </motion.div>
        <Skill name="HTML" x="-15vw" y="2vw" logoPath="/svg/html-1.svg" />
        <Skill name="CSS" x="-5vw" y="-8vw" logoPath="/svg/css-3.svg" />
        <Skill
          name="JavaScript"
          x="15vw"
          y="4vw"
          logoPath="/svg/logo-javascript.svg"
        />
        <Skill name="ReactJS" x="0vw" y="10vw" logoPath="/svg/react-2.svg" />
        <Skill
          name="TypeScript"
          x="-15vw"
          y="-12vw"
          logoPath="/svg/typescript.svg"
        />
        <Skill
          name="Bootstrap"
          x="12vw"
          y="-10vw"
          logoPath="/svg/bootstrap-5-1.svg"
        />
        <Skill name="MySQL" x="25vw" y="-5vw" logoPath="/svg/mysql-logo.svg" />
        <Skill name="Postman" x="0vw" y="-15vw" logoPath="/svg/postman.svg" />
        <Skill name="MS SQL Server" x="-30vw" y="0vw" logoPath='/svg/microsoft-sql-server-1.svg' />
        <Skill name="NextJS" x="-15vw" y="12vw" logoPath="/svg/next-js.svg" />
        <Skill
          name="PostgreSQL"
          x="-30vw" y="12vw"
          logoPath="/svg/postgresql.svg"
        />
        <Skill name="Python" x="15vw" y="12vw" logoPath="/svg/python.svg" />
        <Skill name="Node" x="25vw" y="-15vw" logoPath="/svg/nodejs-1.svg" />
        <Skill name="Java" x="12vw" y="-18vw" logoPath="/svg/java.svg" />
        <Skill name="C" x="-20vw" y="-18vw" logoPath="/svg/c-1.svg" />
        <Skill name="TailwindCSS" x="30vw" y="10vw" logoPath="/svg/tailwindcss.svg" />
        <Skill
          name="Express"
          x="-30vw"
          y="-12vw"
          logoPath="/svg/express-109.svg"
        />
      </div>
    </div>
  );
}

export default Skills;
