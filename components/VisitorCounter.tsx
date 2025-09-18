"use client";

import React from "react";
import Image from "next/image";

export default function VisitorCounter() {
  return (
    <div className="flex justify-center items-center p-4">
      <a 
        href="https://www.hitwebcounter.com" 
        target="_blank" 
        className="flex items-center justify-center text-decoration-none p-2 rounded-lg bg-gray-900 duration-200 ease-in-out w-32 sm:w-40 md:w-48 shadow-[0px_0px_8px_#9dfc44] transition-all"
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <Image 
          src="https://hitwebcounter.com/counter/counter.php?page=19767581&style=0001&nbdigits=3&type=page&initCount=0" 
          title="Counter Widget" 
          alt="Visit counter For Websites"
          width={96} 
          height={32} 
          className="border-none drop-shadow-md"
        />
      </a>
    </div>
  );
}
