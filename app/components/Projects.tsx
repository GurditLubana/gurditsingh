"use client"
import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const projects = [
  {
    title: "React Reserve",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "/images/screenscan.jpg",
    liveLink: "https://reactbootcamp.com",
    codeLink: "www.google.com",
  },
  {
    title: "React Tracks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "/images/screenscan.jpg",
    liveLink: "https://reedbarger.com",
    codeLink: "www.google.com",
  },
  {
    title: "DevChat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "/images/screenscan.jpg",
    liveLink: "https://jsbootcamp.com",
    codeLink: "www.google.com",
  },
  {
    title: "Epic Todo App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "/images/screenscan.jpg",
    liveLink: "https://pythonbootcamp.com",
    codeLink: "www.google.com",
  },
  {
    title: "Epic Todo App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "/images/screenscan.jpg",
    liveLink: "https://pythonbootcamp.com",
    codeLink: "www.google.com",
  },
  {
    title: "Epic Todo App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "/images/aircanada.png",
    liveLink: "https://pythonbootcamp.com",
    codeLink: "www.google.com",
  },
];

const Projects: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div id="projectSection" className="w-full h-screen overflow-hidden">
      <h1 className="text-6xl font-bold mt-4 my-9 text-amber-300 text-center">Personal Projects</h1>
      <ProjectCarousel projects={projects} options={OPTIONS} />
    </div>
  );
};

export default Projects;
