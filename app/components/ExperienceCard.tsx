"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ExperienceCardProps {
  companyName: string;
  role: string;
  date: string;
  logoUrl: string;
  responsibilities: string; // Added responsibilities prop
}

function ExperienceCard({
  companyName,
  role,
  date,
  logoUrl,
  responsibilities, // Added responsibilities prop
}: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.div
        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active text-white rounded-lg p-4"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <div className="flex items-center justify-center w-14 h-14 mx-8 shrink-0 md:order-1 rounded-full bg-white">
          <Image 
            src={logoUrl} 
            alt={`${companyName} logo`} 
            width={48}
            height={48}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-gray-700 p-4 py-6 rounded-lg border border-gray-800 flex flex-col space-y-2">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-white text-lg">{companyName}</div>
              <time className="font-caveat font-medium text-indigo-400">{date}</time>
            </div>
            <div className="text-gray-300">{role}</div>
          </div>
          <button
            onClick={toggleModal}
            className="self-center text-indigo-400 hover:text-indigo-600 transition-colors duration-200"
          >
            View Responsibilities
          </button>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 w-11/12 md:w-1/2 lg:w-1/3 text-white">
            <h2 className="text-xl font-bold mb-4">{companyName} - {role}</h2>
            <p>{responsibilities}</p>
            <button
              onClick={toggleModal}
              className="mt-4 text-indigo-400 hover:text-indigo-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExperienceCard;
