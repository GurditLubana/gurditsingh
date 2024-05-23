"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react';

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
      <div className="flex flex-col md:flex-row w-3/4 mx-auto justify-between">
       
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-light mb-4">Email: gurditsingh7834@gmail.com</h2>
          <div className="flex space-x-4">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-1">
              <Image src="/svg/instagram.svg" alt="Instagram" width={30} height={30}  />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
              <Image src="/svg/linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
              <Image src="/svg/github.svg" alt="GitHub" width={30} height={30} className="transition hover:filter hover:invert hover:brightness-100" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
              <Image src="/svg/twitter.svg" alt="Twitter" width={35} height={37} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-2 rounded bg-slate-700 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="p-2 rounded bg-slate-700 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-2 rounded bg-slate-700 text-white"
            ></textarea>
            <button type="submit" className="p-2 rounded bg-amber-300 text-black font-bold">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;
