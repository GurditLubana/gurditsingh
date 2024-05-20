"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 

interface ExperienceCardProps {
  companyName: string;
  role: string;
  date: string;
  logoUrl: string; 
}

function ExperienceCard({
  companyName,
  role,
  date,
  logoUrl,
}: ExperienceCardProps) {

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      transition={{ duration: 1.5, delay: 0 }}
    >
      
      <div className="flex items-center justify-center w-10 h-10 px-1 shrink-0 md:order-1 ">
      <Image 
                    src='/images/workIcon.png'
                    alt={`${companyName} logo`} 
                    width={40} 
                    height={40} 
                    className="object-contain rounded-full" 
                />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-1.25rem)] bg-white p-4 rounded border border-slate-200 shadow flex items-center space-x-4">
                <Image 
                    src={logoUrl} 
                    alt={`${companyName} logo`} 
                    width={40} 
                    height={40} 
                    className="object-contain rounded-full" 
                />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between space-x-4 mb-1">
                        <div className="font-bold text-slate-900">{companyName}</div>
                        <time className="font-caveat font-medium text-indigo-500">{date}</time>
                    </div>
                    <div className="text-slate-500">{role}</div>
                </div>
            </div>
    </motion.div>
  );
}

export default ExperienceCard;
