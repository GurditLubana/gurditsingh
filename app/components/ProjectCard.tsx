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
      className="relative w-96 h-64 overflow-hidden rounded-lg group"
      whileHover={{ scale: 1.05 }}
    >
      <Image src={image} alt={title} width={400} height={200} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div className="text-white text-lg">{title}</div>
        <div className="text-white text-sm">{description}</div>
        <div className="flex space-x-4">
          <a href={liveLink} target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded">Live</a>
          <a href={codeLink} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded">Code</a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
