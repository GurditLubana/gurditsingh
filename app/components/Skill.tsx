import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillProps {
    name: string;
    x: string;
    y: string;
    logoPath: string;
    imgClass?: string;
  }
  
  function Skill({ name, x, y, logoPath, imgClass }: SkillProps) {
    return (
      <motion.div
        className="flex items-center justify-center rounded-full font-bold darkBg text-light py-2 md:py-4 px-4 md:px-6 shadow-dark cursor-pointer absolute"
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
            className= {`h-8 w-8 mr-2 md:mr-4 ${imgClass}`}
          />
          <span>{name}</span>
        </div>
      </motion.div>
    );
  }

export default Skill
