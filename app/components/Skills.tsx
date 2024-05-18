"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

function Skill({ name, x, y }: SkillProps) {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
}

function Skills() {
  return (
    <div id="skillSection">
      <h2 className="font-bold text-8xl  w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full circularLight">
      
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="10vw" y="-5vw" />
        <Skill name="JavaScript" x="-10vw" y="5vw" />
        <Skill name="React" x="5vw" y="10vw" />
        <Skill name="Node.js" x="0vw" y="15vw" />
        <Skill name="Python" x="-15vw" y="0vw" />
        <Skill name="Java" x="15vw" y="-15vw" />
      </div>
    </div>
  );
}

export default Skills;
