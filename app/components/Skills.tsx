"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { once } from "events";

interface SkillProps {
  name: string;
  x: string;
  y: string;
  logoPath: string;
}

function Skill({ name, x, y, logoPath }: SkillProps) {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-slate-700 text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
    >
      <div className="flex flex-row items-center">
        <Image
          src={logoPath}
          alt="skill Icon"
          width={25}
          height={25}
          className="mr-2"
        />
        <span>{name}</span>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <div id="skillSection">
      <h2 className="font-bold text-6xl md:mb-12 text-center"></h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4cursor-pointer"
         
        >
                <h2 className="font-bold text-6xl text-center">Skills</h2>

        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" logoPath="/svg/html-1.svg" />
        <Skill name="CSS" x="-5vw" y="-10vw" logoPath="/svg/css-3.svg" />
        <Skill
          name="JavaScript"
          x="20vw"
          y="6vw"
          logoPath="/svg/logo-javascript.svg"
        />
        <Skill name="ReactJS" x="0vw" y="12vw" logoPath="/svg/react-2.svg" />
        <Skill
          name="TypeScript"
          x="-20vw"
          y="-15vw"
          logoPath="/svg/typescript.svg"
        />
        <Skill
          name="Bootstrap"
          x="15vw"
          y="-12vw"
          logoPath="/svg/bootstrap-5-1.svg"
        />
        <Skill name="MySQL" x="32vw" y="-5vw" logoPath="/svg/mysql-logo.svg" />
        <Skill name="Postman" x="0vw" y="-20vw" logoPath="/svg/postman.svg" />
        <Skill name="MS SQL Server" x="-40vw" y="0vw" logoPath='/svg/microsoft-sql-server-1.svg' />
        <Skill name="NextJS" x="-19vw" y="15vw" logoPath="/svg/next-js.svg" />
        <Skill
          name="PostgreSQL"
          x="-39vw" y="15vw"
          logoPath="/svg/postgresql.svg"
        />
        <Skill name="Python" x="19vw" y="15vw" logoPath="/svg/python.svg" />
        <Skill name="Node" x="30vw" y="-20vw" logoPath="/svg/nodejs-1.svg" />
        <Skill name="Java" x="15vw" y="-25vw" logoPath="/svg/java.svg" />
        <Skill name="C" x="-25vw" y="-23vw" logoPath="/svg/c-1.svg" />
        <Skill name="TailwindCSS" x="39vw" y="10vw" logoPath="/svg/tailwindcss.svg" />
        <Skill
          name="Express"
          x="-40vw"
          y="-15vw"
          logoPath="/svg/express-109.svg"
        />
        {/* <Skill name="jQuery" x="17vw" y="-9vw" logoPath='/svg/jquery-1.svg' />
        <Skill name="NPM" x="10vw" y="-35vw" logoPath='/svg/npm.svg' />
        <Skill name="C#" x="5vw" y="-40vw" logoPath='/svg/csharp-1.svg' />
        <Skill name="MongoDB" x="15vw" y="35vw" logoPath='/svg/mongodb-icon-2.svg' />*/}
      </div>
    </div>
  );
}

export default Skills;
