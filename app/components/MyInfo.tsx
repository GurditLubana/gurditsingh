"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";


interface MyinfoProps {
  classProp: string;
}

function MyInfo({ classProp }: MyinfoProps) {
  return (
    <div className={`grid grid-cols-1 h-full w-full ${classProp}`}>
      <div className="flex flex-col h-full items-center md:items-start justify-center p-5 m-auto rounded-lg max-w-2xl">
        <h1 className="text-6xl md:text-6xl 2xl:text-8xl text-amber-300 font-bold mb-2">Gurdit Singh</h1>
        <Typewriter 
          
          options={{
            strings: ['Full Stack Developer', 'UI/UX Designer', 'Cloud Practitioner', 'Front End Developer', "Backend Developer", "Data Analyst", "Active Learner" ],
            autoStart: true,
            loop: true,
            
    deleteSpeed: 30, 

            wrapperClassName: "text-2xl md:text-3xl text-amber-200 font-normal",
            
          }}

          
        />
        <p className="text-lg md:text-2xl text-gray-300 mt-8 md:mt-16">
          In the world of code, I find my purpose, developing impactful software
          with every line I write. Let&apos;s make technology work for us.
        </p>

        <div className="flex space-x-4 mt-8 md:mt-16">
          <Link
            className="button font-bold text-lg md:text-xl me-8"
            href="https://gurditlubana.github.io/Gurdit_Singh_Resume_2024.pdf"
            target="_blank"
          >
            Resume
          </Link>
          <a
            href="https://www.instagram.com/garry_singh_2307/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hover:scale-125 "
          >
            <Image
              src="/svg/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/gurdit-singh-956a47253/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hover:scale-125"
          >
            <Image
              src="/svg/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://github.com/GurditLubana/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hover:scale-125"
          >
            <Image
              src="/svg/github.svg"
              alt="GitHub"
              width={30}
              height={30}
              className="filter invert"
            />
          </a>
          <a
            href="https://x.com/learner_garry"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hover:scale-125"
          >
            <Image
              src="/svg/twitter.svg"
              alt="Twitter"
              width={39}
              height={37}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
