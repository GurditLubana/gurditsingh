"use client";
import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import { EmblaOptionsType } from "embla-carousel";

const projects = [
  {
    title: "SnackStats - Track Your Food Delivery Spending",
    description:
      "SnackStats is your go-to Chrome extension for uncovering and managing your food delivery habits. Whether you order from Uber Eats, DoorDash, or SkipTheDishes, SnackStats provides a comprehensive report detailing your spending patterns and favorite restaurants.",
    image: "/images/SnackStats.jpg",
    liveLink:
      "https://chromewebstore.google.com/detail/snackstats-%E2%80%93-track-your-f/dpamdjimipnebihinoccnfehkohpeagh",
    codeLink: "https://github.com/GurditLubana/SnackStats--Chrome-Extension",
  },
  {
    title: "ScreenScan - Instant Screenshot Search",
    description:
      "ScreenScan enhances the browsing experience by providing users with a swift, one-click solution to capture any visual content on their screen—be it text, images, or video stills—and seamlessly search for it using Google Lens and image search.",
    image: "/images/screenscan.jpg",
    liveLink:
      "https://chromewebstore.google.com/detail/screenscan-instant-screen/aipbmogagldlnpfkhbkceoplgjppplac",
    codeLink: "https://github.com/GurditLubana/ScreenScan--Chrome-Extension",
  },
  {
    title: "ChitChat - Chat Application",
    description:
      "Real-time chat application built with React, Node.js, and WebSocket, enabling instant messaging and broadcast capabilities across connected users. Designed to explore full-stack development practices and real-time data communication.",
    image: "/images/chitchat.png",
    liveLink: "https://jsbootcamp.com",
    codeLink: "https://github.com/GurditLubana/Chat-Application/tree/main",
  },
  {
    title: "Student management Desktop Application",
    description:"This desktop application is a student management system in which user can manupulate all sort of student information present in the MySQL database (i.e. perform CRUD operations).",
        image: "/images/SMDA.png",
    liveLink: "https://pythonbootcamp.com",
    codeLink: "https://github.com/GurditLubana/Student-mangement-Application/tree/main",
  },
  {
    title: "Weather Application",
    description:"Check the weather around you and all over the world at a glance. Rely on the accurate weather forecast and adjust your schedule to the weather coming in. You won’t even have to look out the window as the app will make you feel like you are already outside!",
        image: "/images/weatherapp.png",
    liveLink: "https://garrys-weather-app.netlify.app/",
    codeLink: "https://github.com/GurditLubana/Weather-Application?tab=readme-ov-file",
  },
];

const Projects: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div id="projectSection" className="w-full h-screen overflow-hidden">
      <h1 className="text-6xl font-bold mt-4 my-9 text-amber-300 text-center">
        Personal Projects
      </h1>
      <ProjectCarousel projects={projects} options={OPTIONS} />
    </div>
  );
};

export default Projects;
