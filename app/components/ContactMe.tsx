"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 }
};

function ContactMe() {
  const [state, handleSubmit] = useForm("mzbnqevo");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

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
      <Image src="/images/messageSentImg.png" alt="Mail Animation" width={200} height={200} />
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-light mb-4">Email: gurditsingh7834@gmail.com</h2>
          <div className="flex space-x-4">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-1">
              <Image src="/svg/instagram.svg" alt="Instagram" width={30} height={30} />
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
          {isSubmitted ? (
            <div className="flex flex-col items-center">
              <motion.div
                className="envelope"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Image src="/svg/mail-animation.svg" alt="Mail Animation" width={200} height={200} />
              </motion.div>
              <motion.div
                className="send mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <p className="text-4xl font-semibold text-amber-300">Message Sent!</p>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="p-2 rounded bg-slate-700 text-white"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-2 rounded bg-slate-700 text-white"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="p-2 rounded bg-slate-700 text-white"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} className="p-2 rounded bg-amber-300 text-black font-bold">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
