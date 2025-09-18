'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, X, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 768); // Mobile size check (adjust breakpoint if needed)
      };
  
      checkScreenSize(); // Initial check
      window.addEventListener("resize", checkScreenSize);
  
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <aside
      className="lg:w-1/3 md:w-1/2 w-full min-h-screen bg-gray-800 
      p-2 sm:p-0 shadow-2xl flex flex-col transform transition-all duration-500 ease-in-out 
      hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{marginTop:isMobile?"10%":"0%"}}
       data-aos-duration="3000"
    >
      <div className="relative w-full h-full rounded-lg bg-gray-800 p-4 sm:p-6" data-aos="fade-up"
    >
        <div className="box absolute inset-0 rounded-lg"></div>

        <div className="flex-grow space-y-6 relative z-10">
          <div className="text-center relative">
          <div className="relative inline-block rounded-full transition-all duration-300">
      {/* Profile Image with Hover Effect */}
      <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Image
        src="/images/personal/nandhaa.png"
        alt="NandhaKumar"
        width={500}
        height={500}
        className="rounded-2xl mx-auto transition-all duration-300 cursor-pointer"
      />

      {/* Hover Effect - Card (Only on Image Hover) */}
      {!isMobile && isHovered && (
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{
            boxShadow: "0 0 15px 5px rgba(96, 165, 250, 0.7)",
            filter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
      )}

      {/* Animated Text (Only on Image Hover) */}
      {!isMobile && isHovered && (
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm transition-all duration-10000 animate-fade-in text-center">
      &quot;Hi, I&apos;m Nandha Kumar, a passionate Frontend Developer with a strong
      foundation in problem-solving and analytical thinking, thanks to my
      MSc in Physics. I specialize in building interactive and responsive
      web applications using modern technologies like React, Next,
      JavaScript, and CSS. I enjoy creating seamless user experiences and
      bringing designs to life with clean, efficient code. Always eager to
      learn and innovate, I stay updated with the latest trends in frontend
      development to deliver high-quality solutions. Let&apos;s build something
      amazing together!&quot;
    </div>
    
      )}
    </div>
    </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-6">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/nandha-kumar-m-4bb751186/', label: 'LinkedIn' },
                { Icon: Github, href: 'https://github.com/nan8754949307', label: 'GitHub' },
                // { Icon: Twitter, href: 'https://x.com/nandhamari03', label: 'Twitter' },
                // { Icon: Instagram, href: 'https://www.instagram.com/mr_black_panther_nandha/?hl=en', label: 'Instagram' },
                // { Icon: Facebook, href: 'https://www.facebook.com/nandhakumar.nandhakumar.735507', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-125 hover:rotate-12 relative group"
                >
                  <Icon size={28} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Title & Description */}
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-4 text-blue-400 transition-all duration-300 transform hover:scale-110 hover:text-white"  style={{
    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
              FrontEnd Developer
            </h1>
            <h3 className="text-base sm:text-lg font-medium mt-2 text-white" style={{fontFamily:"Nunito Sans !important"}}>
              Building Responsive, Functional, and Detail-Focused Websites
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-2 font-serif">
              Based In Karaikudi, TamilNadu<br />
              Physics-Undergraduate/PostGraduate<br />
              Web Development | Open Source
            </p>
          </div>

            
           
<div className="w-full h-40 flex flex-col items-center justify-center gap-4 space-y-6 mt-6">
  <a href="/resume/NandhaTamilresume.pdf" target="_blank" className="relative inline-flex items-center justify-start px-6 py-3 w-full overflow-hidden font-medium transition-all bg-[#217ded] rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f172a] rounded group-hover:-mr-4 group-hover:-mt-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#217ded]"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0f172a] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-center text-[#0f172a] transition-colors duration-200 ease-in-out group-hover:text-white">View Resume</span>
  </a>

  <a 
        href="#_" 
        onClick={() => setIsPopupOpen(true)} 
        className="relative inline-flex items-center justify-start px-6 py-3 w-full overflow-hidden font-medium transition-all bg-[#217ded] rounded-xl group"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f172a] rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#217ded]"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0f172a] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-center text-[#0f172a] transition-colors duration-200 ease-in-out group-hover:text-white">Contact Me</span>
      </a>
</div>

        </div>
      </div>

      {/* Popup Modal - Centered */}
     {isPopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-96 relative">
      <button
        onClick={() => setIsPopupOpen(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-all"
      >
        <X size={24} />
      </button>
      <h2 className="text-xl font-bold mb-4 text-center">Contact Information</h2>
      <div className="flex flex-col space-y-3">
        <p className="flex items-center space-x-2 text-lg">
          <Mail size={20} className="text-blue-400" />
          <span>marinandhu659@gmail.com</span>
        </p>
        <p className="flex items-center space-x-2 text-lg">
          <Phone size={20} className="text-green-400" />
          <span>+91 8754949307</span>
          <span>+91 6380881128</span>
        </p>
      </div>
      <button
        onClick={() => setIsPopupOpen(false)}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg w-full transition-all duration-300"
      >
        Close
      </button>
    </div>
  </div>
)}

    </aside>
  );
}
