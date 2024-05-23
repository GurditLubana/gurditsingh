import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

//Add a typewriter effect

interface MyinfoProps{
  classProp : string
}

function MyInfo({classProp}: MyinfoProps) {
  return (
    <div className={`grid grid-cols-1 h-full w-full ${classProp}`}>
      <div className="flex flex-col items-start justify-center p-5 m-auto rounded-lg max-w-2xl">
        <h1 className="text-8xl text-amber-300 font-bold mb-2">Gurdit Singh</h1>
        <p className="text-xl text-amber-200 font-semibold ">
          Full Stack Developer
        </p>
        <p className="text-2xl mt-8">
          In the world of code, I find my purpose, developing impactful software
          with every line I write. Let&apos;s make technology work for us.
        </p>
        
        <div className="flex space-x-4 mt-8">
        <Link
            className="button font-bold text-xl me-8"
            href="https://gurditlubana.github.io/resume.pdf"
            target="_blank"
          >
           Resume
          </Link>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mt-4 hover:scale-110 hover:opacity-1">
              <Image src="/svg/instagram.svg" alt="Instagram" width={30} height={30}  />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mt-4 hover:scale-110">
              <Image src="/svg/linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mt-4 hover:scale-110">
              <Image src="/svg/github.svg" alt="GitHub" width={30} height={30} className="filter invert" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mt-4 hover:scale-110">
              <Image src="/svg/twitter.svg" alt="Twitter" width={39} height={37} />
            </a>
          </div>
      </div>
    </div>
  );
}

export default MyInfo;
