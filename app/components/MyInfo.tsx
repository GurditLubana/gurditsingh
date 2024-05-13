import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

//Add a typewriter effect

function MyInfo() {
  return (
    <div className="grid grid-cols-1 h-full w-full">
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
            className="py-2 hover:opacity-75 transition-opacity duration-300 me-6 px-6 rounded-sm border-solid border-2 border-amber-200 flex items-center justify-center"
            href="#"
          >
            <p className="text-amber-300">Resume</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
