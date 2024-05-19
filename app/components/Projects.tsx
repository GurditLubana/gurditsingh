"use client"
import Image from 'next/image';
import React , { useRef } from 'react'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';
import { EmblaOptionsType } from 'embla-carousel'


function Projects() {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  return (
    <div id="projectSection" className="w-full h-screen overflow-x-scroll">
      <h1 className="text-6xl font-bold mt-4 my-9 text-amber-300 text-center">Personal Projects</h1>
      <ProjectCarousel slides={SLIDES} options={OPTIONS}/>
    </div>
  )
}

export default Projects
