"use client";
import { motion } from "framer-motion";
import React from 'react'

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 }
  };

function ContactMe() {
  return (
    <div id="contactMeSection" className="w-full h-full my-9 overflow-hidden">
      <motion.h1
        className="text-6xl font-bold mt-4 my-9 text-amber-300 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={fadeInUpVariants}
      >
        Contact Me
      </motion.h1>

      yo you
    </div>
  )
}

export default ContactMe
