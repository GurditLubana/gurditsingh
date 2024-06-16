"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ExperienceCardProps {
  companyName: string;
  role: string;
  date: string;
  logoUrl: string;
  responsibilities: string[]; 
}

function ExperienceCard({
  companyName,
  role,
  date,
  logoUrl,
  responsibilities,
}: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active text-white rounded-lg pt-4 pe-2 md:p-4"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <div className="flex items-center justify-center w-14 h-14 mx-8 shrink-0 md:order-1 rounded-full bg-white border-amber-300">
          <Image
            src={logoUrl}
            alt={`${companyName} logo`}
            width={48}
            height={48}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] darkBg p-4 py-6 rounded-lg border border-amber-100 flex flex-col space-y-2">
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row items-center justify-between mb-2">
              <div className="font-bold text-amber-300 text:md md:text-lg">{companyName}</div>
              <time className="font-caveat font-medium text-amber-100">{date}</time>
            </div>
            <div className="text-center md:text-start text-gray-300">{role}</div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="button text-center text-gray-300 mt-4 md:mx-24 2xl:mx-56"
            >
              Responsibilities
            </button>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white darkBg p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-amber-300 mb-4">{companyName}</h2>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">{role}</h3>
            <h4 className="text-lg font-medium text-amber-300 mb-4">Responsibilities:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ExperienceCard;
