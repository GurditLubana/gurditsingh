"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Education() {
  return (
    <div
      id="educationSection"
      className="w-full flex flex-col items-center py-16"
    >
      <motion.h1
        className="text-6xl font-bold my-9 text-amber-300 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={fadeInUpVariants}
      >
        Education
      </motion.h1>
      <motion.div
        className="darkBg p-8 rounded-lg w-3/4 md:w-5/6 flex flex-col md:flex-row items-center shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={fadeInUpVariants}
      >
        <Image
          src="/images/uofm-image.png"
          alt="University of Manitoba"
          width={500}
          height={300}
          className="rounded-lg mb-4 md:mb-0 md:mr-12 "
        />
        <div className="flex flex-col justify-center md:items-start w-full md:w-auto text-white">
          <h2 className="text-3xl font-semibold text-light text-amber-200 mb-2">
            University of Manitoba
          </h2>
          <h3 className="text-2xl font-medium text-gray-300 mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-lg text-gray-400 mb-2">Minors in Mathematics</p>
          <p className="text-lg text-gray-400 mb-6">
            September 2019 - December 2023
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-amber-200 mb-2">Honors</h3>
            <p className="text-gray-300">
              Dean&apos;s Honors List : 2020 & 2021
            </p>
            <p className="text-gray-300">
              Undergraduate Scholarship for Exceptional Academic Performance :
              2020, 2021 & 2022
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-amber-200 mb-2">
              Undergraduate Research Assistance for Mathematics Department
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <Link href="https://www.meredithsargent.com/" target="_blank">
                  Weighted orthogonal polynomials in the Drury-Arveson Space.
                  <Image
                    src="/svg/link.svg"
                    alt="link"
                    width={15}
                    height={10}
                    className="inline-block ml-2 hover:scale-110"
                  />
                </Link>
              </li>
              <li>
              The Dynamics of HPV Infection and Cervical Cancer Cells.
                
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-xl font-medium text-amber-200 mb-2">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap">
              <ul className="list-disc list-inside text-gray-300 w-3/5 pr-4">
                <li>Data Structures and Algorithms</li>
                <li>Software Engineering</li>
                <li>Object Orientated Programming</li>
                <li>Professional Practice in Computer Science.</li>
                <li>Human-Computer Interaction</li>
              </ul>
              <ul className="list-disc list-inside text-gray-300 w-2/5">
                <li>Distributed Computing</li>
                <li>Artificial Intelligence</li>
                <li>Discrete Mathematics</li>
                <li>Database Systems</li>
                <li>Linear Algebra</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
