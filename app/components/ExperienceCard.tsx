"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ExperienceCardProps {
  companyName: string;
  role: string;
  date: string;
  logoUrl: string;
  responsibilities: string; 
}

function ExperienceCard({
  companyName,
  role,
  date,
  logoUrl,
  responsibilities, 
}: ExperienceCardProps) {

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
          </div>
          
        </div>
      </motion.div>

    </>
  );
}

export default ExperienceCard;
