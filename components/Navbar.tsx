'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { FaHome, FaTools, FaLayerGroup, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [text, setText] = useState('')
  const fullText = 'NandhaKumar'
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

 
  
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 150)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true)
        }, 1000)
        return () => clearTimeout(timeout)
      }
    }
  }, [text, isTyping])

  const navItems = [
    { href: "#", icon: <FaHome />, label: "Home" },
    { href: "#skills", icon: <FaTools />, label: "Skills" },
    { href: "#projects", icon: <FaLayerGroup />, label: "Projects" },
    { href: "#experience", icon: <FaBriefcase />, label: "Experience" },
    { href: "#education", icon: <FaGraduationCap />, label: "Education" },
    { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full bg-[#2a2840] z-50 transition-all duration-300 ease-in-out 
      ${isScrolled ? 'bg-[#2e2d3d] shadow-lg' : ''}`} 
>
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <a href="#" className="group relative">
        <span className="text-xl font-bold text-blue-400">
          {text}
        </span>
        <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-blue-400 animate-blink"/>
      </a>

      {/* Nav Items Div */}
      <div className="hidden md:flex space-x-4 bg-[#0f172a] p-4 rounded-lg 
    transition-all duration-300 
    hover:shadow-[0_0_8px_#9dfc44]">

        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-all duration-300 relative 
            hover:bg-[#707e94] hover:text-black rounded-lg"
          >
            <motion.span
              className="text-lg"
              animate={{
                y: [0, -5, 5, -5, 0],
                transition: { repeat: Infinity, duration: 5 }
              }}
            >
              {item.icon}
            </motion.span>
            <span className="font-nunito">{item.label}</span>
          </a>
        ))}
      </div>
      

      <button 
        className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </div>

    {isOpen && (
     <div className="md:hidden flex flex-col items-start space-y-4 bg-[#0f172a] p-4 rounded-lg">
     {[
       { href: "#", icon: <FaHome />, label: "Home" },
       { href: "#skills", icon: <FaTools />, label: "Skills" },
       { href: "#projects", icon: <FaLayerGroup />, label: "Projects" },
       { href: "#experience", icon: <FaBriefcase />, label: "Experience" },
       { href: "#education", icon: <FaGraduationCap />, label: "Education" },
       { href: "#contact", icon: <FaEnvelope />, label: "Contact" }
     ].map((item, index) => (
       <a
         key={index}
         href={item.href}
         className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
       >
         <span className="w-6 flex justify-center">{item.icon}</span> 
         <span className="whitespace-nowrap">{item.label}</span>
       </a>
     ))}
   </div>
   
    )}
  </div>
</nav>

  )
}
