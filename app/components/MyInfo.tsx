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
        <div className="mt-6">
          <Link
            className="button font-bold text-xl"
            href="https://gurditlubana.github.io/resume.pdf"
            target="_blank"
          >
           Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
