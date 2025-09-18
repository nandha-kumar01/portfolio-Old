'use client'

import { useState, useEffect } from 'react'
import {FaJs, FaReact, FaHtml5, FaCss3Alt, FaJava,} from 'react-icons/fa'
import {SiTypescript, SiNextdotjs, SiTailwindcss, SiC, SiCplusplus} from 'react-icons/si'


const skills = [

  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'C', icon: SiC },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Java', icon: FaJava },
]

function SkillItem({
  name,
  Icon,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  name: string
  Icon: React.ComponentType<{ size: number; className?: string }>
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      className="group relative flex flex-col items-center p-4 bg-gray-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 border border-white border-opacity-30"
      onMouseEnter={() => {
        onMouseEnter()
      }}
      onMouseLeave={onMouseLeave}
    >
      <Icon
        size={32}
        className={`text-blue-400 transition-transform duration-700 ${isHovered ? 'rotate-[720deg] scale-110' : ''}`}
      />
      <span
        className={`mt-2 text-sm transition-colors duration-300  font-[Playfair Display]${isHovered ? 'text-white' : 'text-gray-300'}`}
      >
        {name}
      </span>
      <div
        className={`absolute inset-0 rounded-lg transition-transform duration-300 ${isHovered ? 'border-2 border-purple-300 opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

   const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
      };
  
      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  
  return (
    <section id="skills" className="scroll-mt-20" style={{marginTop:"2.8%"}}>
      <h2
  style={{
    backgroundColor: "#111827",
      boxShadow: "0px 0px 8px #9dfc44", // Even shadow on all sides
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    width: "57%", // Adjust width as needed
    margin: "auto", // Centers the element
    display: "block",
    color:"#9fa0ab",
    marginTop:"-1.5%",
  marginBottom: isMobile ?  "6%" : "3.8%",
    fontSize:"24px",
    fontWeight:"700",
    fontFamily: "Times New Roman, Times, serif"
    
  }}
>
  Skills
</h2>

<div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 
                 opacity-0 translate-x-full animate-slide-in"
    style={{marginBottom:isMobile ?  "-26%" : "-6%"}}
    >
      {skills.map((skill) => (
        <SkillItem
          key={skill.name}
          name={skill.name}
          Icon={skill.icon}
          isHovered={hoveredSkill === skill.name}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        />
      ))}
    </div>
    </section>
  )
}
