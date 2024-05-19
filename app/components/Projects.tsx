"use client"
import Image from 'next/image';
import React , { useRef } from 'react'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';



function Projects() {
  const projects = [
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://reactbootcamp.com",
      codeLink: "www.google.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://reedbarger.com",
      codeLink: "www.google.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://jsbootcamp.com",
      codeLink: "www.google.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://pythonbootcamp.com",
      codeLink: "www.google.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://pythonbootcamp.com",
      codeLink: "www.google.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://pythonbootcamp.com",
      codeLink: "www.google.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "/images/screenscan.jpg",
      liveLink: "https://pythonbootcamp.com",
      codeLink: "www.google.com",
    },
  ];
  const carouselRef = useRef<HTMLDivElement>(null);
  return (
    <div id="projectSection" className="w-full h-auto overflow-x-scroll">
      <h1 className="text-6xl font-bold mt-4 my-9 text-amber-300 text-center">Personal Projects</h1>
      <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex space-x-4 p-8"
        ref={carouselRef}
        drag="x"
        dragConstraints={{ right: 0, left: -carouselRef.current?.scrollWidth! + carouselRef.current?.clientWidth! }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </motion.div>
    </div>
    </div>
  )
}

export default Projects
