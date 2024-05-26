"use client"
import { useEffect, useRef } from "react";

function CustomCursor(){
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function moveCursor(e: MouseEvent){
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
