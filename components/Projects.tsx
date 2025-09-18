'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Eye } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'People Plus | News Platform',
    description: 'Full Stack Web Application | Platform to build your Website with customizable templates',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS'],
    image: '/images/project-sc/peopleplus.jpg',
    demo: 'https://www.peopleplus.press/en',
  },
  {
    title: 'Gemtrove | Diamonds Platform',
    description: 'Full Stack Web Application | A platform for developers to learn and improve their skills',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    image: '/images/project-sc/gemtrove.jpg',
    demo: 'https://gemtrove.vercel.app/',
  },
]

function ProjectCard({ project }: { project: Project, isMobile: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false)
  
  return (
    <motion.div
      className="relative w-72 h-64 cursor-pointer shadow-[0_0_15px_rgba(33,125,237)]"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl rounded-lg h-full flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-lg text-blue-400 font-semibold leading-tight">{project.title}</CardTitle>
              <CardDescription className="text-gray-300 text-sm leading-tight">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2 overflow-hidden">
                {project.technologies.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs shadow-md">{tech}</span>
                ))}
              </div>
              {project.technologies.length > 3 && (
                <div className="flex justify-center mt-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs shadow-md">{project.technologies[3]}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full flex flex-col justify-center items-center backface-hidden bg-gray-900 rounded-lg shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image src={project.image} alt={project.title} width={270} height={160} className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm shadow-lg flex items-center gap-2 
             cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#283960] hover:scale-105"
  initial={{ y: -10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  <Eye size={16} /> View Project
</motion.a>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="projects" className="scroll-mt-20 relative py-10">
      <h2
        style={{
          backgroundColor: "#111827",
          boxShadow: "0px 0px 8px #9dfc44",
          padding: "5px",
          borderRadius: "5px",
          textAlign: "center",
          width: "57%",
          margin: "auto",
          display: "block",
          color: "#9fa0ab",
          marginTop: isMobile ? "6%" : "-1.5%",
          marginBottom: isMobile ? "6%" : "3.8%",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Times New Roman, Times, serif"
        }}
      >
        Projects
      </h2>     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0 md:ml-6 space-y-6 md:space-y-0" style={{ marginTop: isMobile ? "2%" : "5%" ,marginBottom: isMobile ? "2%" : "-3%"}}>
  {projects.map((project, index) => (
    <div key={project.title} className={index % 2 === 0 ? "md:pr-6" : "md:pl-6"}>
      <ProjectCard project={project} isMobile={isMobile} />
    </div>
  ))}
</div>

    </section>
  )
}
