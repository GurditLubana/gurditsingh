"use client";
import { motion } from "framer-motion";
import React from 'react';
// import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-light mb-4">Email: your.email@example.com</h2>
          <div className="flex space-x-4">
            {/* <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl text-amber-300"><FaInstagram /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl text-amber-300"><FaLinkedin /></a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl text-amber-300"><FaGithub /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl text-amber-300"><FaTwitter /></a> */}
          </div>
        </div>

        {/* Right Side */}
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
