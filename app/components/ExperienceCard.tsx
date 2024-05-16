"use client"
import { motion } from 'framer-motion';

interface ExperienceCardProps {
    companyName: string;
    role: string;
    date: string;
    
}

function ExperienceCard({ companyName, role, date}: ExperienceCardProps) {
    const cardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className= {`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}  
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 ">
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-1.25rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{companyName}</div>
                    <time className="font-caveat font-medium text-indigo-500">{date}</time>
                </div>
                <div className="text-slate-500">{role}</div>
            </div>
        </motion.div>
    );
}

export default ExperienceCard;
