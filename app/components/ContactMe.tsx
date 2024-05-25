"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 }
};

function ContactMe() {
  const [state, handleSubmit] = useForm("mzbnqevo");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    }
  }, [state.succeeded]);

  async function onSubmit(event: any){
    event.preventDefault();
    await handleSubmit(event);
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
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
        <Image src="/images/messageSentImg.png" alt="Mail Animation" width={350} height={400} />
        </div>

        <div className="w-full md:w-1/2 md:mt-12">
          {isSubmitted ? (
            <div className="flex flex-col items-center">
              <motion.div
                className="envelope"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <Image src="/images/paperPlane.png" alt="Mail Animation" width={200} height={200} />
              </motion.div>
              <motion.div
                className="send mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="text-4xl font-semibold text-amber-300">Message Delivered!</p>
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
                placeholder="Type your message here "
                rows= {5}
                required
                className="p-2 rounded bg-slate-700 text-white h-full"
                ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} className="button font-bold">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
