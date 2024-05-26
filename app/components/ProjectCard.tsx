"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
}

function ProjectCard({ image, title, description, liveLink, codeLink } : ProjectCardProps) {
  return (
    <motion.div
      className="relative w-full h-full overflow-hidden rounded-lg group"
      whileHover={{ scale: 1.15 }}
    >
      <Image src={image} alt={title} width={600} height={400} className="w-full h-full object-cover" />
      <div className="py-2 text-center text-md md:text-xl bg-amber-300 text-black font-bold" >{title}</div>
      <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div className="text-amber-300 text-md md:text-xl font-bold text-center ">{title}</div>
        <div className="text-white text-sm md:text-lg">{description}</div>
        <div className="flex mt-2 space-x-4">
          <Link href={liveLink} target="_blank" className="button md:font-bold">Live</Link>
          <Link href={codeLink} target="_blank" className="button md:font-bold">Code</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
