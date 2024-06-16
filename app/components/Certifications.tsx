"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  link: string;

}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "February 2024",
    logo: "/images/aws.png",
    link: "https://www.credly.com/badges/15611aca-a8cb-479c-8f4d-4e18c423cf76/linked_in_profile",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "March 2024",
    logo: "/images/udemy.png",
    link: "https://www.udemy.com/certificate/UC-6ba4c958-7cb8-4cb9-be6f-868969d3d74e/",
  },
  // {
  //   title: "Foundational C# with Microsoft",
  //   issuer: "FreeCodeCamp",
  //   date: "March 2024",
  //   logo: "/images/freecodecamp.png",
  //   link: "https://www.udemy.com/certificate/UC-6ba4c958-7cb8-4cb9-be6f-868969d3d74e/",
  // },
];

function Certifications(){
  return (
    <div id="certificationsSection" className="w-full flex flex-col items-center py-16">
      <motion.h1
        className="text-5xl md:text-6xl font-bold my-9 text-amber-300 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{ hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0 } }}
      >
        Certifications
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="darkBg p-2 pb-4 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={cert.logo} alt={`${cert.issuer} logo`} width={300} height={100} className="mb-4"/>
            <h3 className="text-xl font-semibold text-amber-300 text-center">{cert.title}</h3>
            <p className="text-gray-300 text-center">{cert.issuer}</p>
            <p className="text-sm text-gray-400 text-center">{cert.date}</p>
            <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="button mt-3 bg-slate-700">View Certificate</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
