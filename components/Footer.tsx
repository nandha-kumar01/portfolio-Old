"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import VisitorCounter from "./VisitorCounter";


export default function Footer() {
  const [showImage, setShowImage] = useState(false);

  return (
    <footer className="bg-[#2e2d3d] text-white py-3">
      <div className="container mx-auto text-center px-4">
        
        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap gap-3 mb-4">
  {[
    { icon: <FaFacebookF size={22} />, link: "https://www.facebook.com/nandhakumar.nandhakumar.735507", hoverBg: "bg-[#106aff]" },
    { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/mr_black_panther_nandha/?hl=en", hoverBg: "bg-pink-500" },
    { icon: <FaXTwitter size={22} />, link: "https://x.com/nandhamari03", hoverBg: "bg-black" },
    { icon: <FaLinkedinIn size={22} />, link: "https://www.linkedin.com/in/nandha-kumar-m-4bb751186/", hoverBg: "bg-[#126bc4]" },
    { icon: <FaGithub size={22} />, link: "https://github.com/nan8754949307", hoverBg: "bg-[#080808]" },
    { icon: <FaWhatsapp size={22} />,  link: "https://wa.me/918754949307",  hoverBg: "bg-[#46c556]" }
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-white p-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-bounce"
    >
      <span className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out ${item.hoverBg}`}>
        {item.icon}
      </span>
    </a>
  ))}
</div>

        
        {/* Navigation Links */}
        <nav>
          <ul className="grid grid-cols-2 md:flex md:justify-center md:space-x-6 gap-4 text-gray-400 text-lg">
            {[
              { name: "Home", link: "#" },
              { name: "Skills", link: "#skills" },
              { name: "Projects", link: "#projects" },
              { name: "Experience", link: "#experience" },
              { name: "Education", link: "#education" },
              { name: "Contact", link: "#contact" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#0f172a] hover:text-[#60a5fa]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative">
      <p className="text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Designed by{" "}
        <span
          className="text-yellow-100 cursor-pointer relative"
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
        >
          𝓝𝓪𝓷𝓭𝓱𝓪
          {showImage && (
           <Image
           src="/images/personal/nandha2.jpg" // Ensure this path is correct
           alt="Nandha"
           width={500} // Set the correct width
           height={500} // Set the correct height
           className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg"
         />
          )}
        </span>
      </p>
    </div>
      </div>
      <VisitorCounter/>
    </footer>
  );
}
