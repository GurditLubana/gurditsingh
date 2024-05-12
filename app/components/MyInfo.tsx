import React from 'react';

function MyInfo() {
  return (
    <div className='grid grid-cols-1 h-full w-full'>
      
      <div className='flex flex-col items-start justify-center p-5 m-auto rounded-lg max-w-2xl'>
        <h1 className="text-6xl font-bold mb-2">Gurdit Singh</h1>
        <p className="text-xl font-semibold ">Full Stack Developer</p>
        <p className="mt-4">
          In the world of code, I find my purpose; developing impactful software with every line I write. Let&apos;s make technology work for us.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyInfo
