'use client'

import { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  location: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Front End Developer",
    company: "Laabamone Business Solutions Madurai",
    location: "https://www.google.com/maps/place/Laabamone+Business+Solutions+%7C+ERP+Software+%7C+Billing+%7C+CRM+%7C+Web+Development+%7C+Mobile+App+Development/@9.9232203,78.14321,17z/data=!4m14!1m7!3m6!1s0xa7eb974178ea5d69:0x892715c85b74aaa0!2sLaabamone+Business+Solutions+%7C+ERP+Software+%7C+Billing+%7C+CRM+%7C+Web+Development+%7C+Mobile+App+Development!8m2!3d9.923215!4d78.1457849!16s%2Fg%2F11krckq2k5!3m5!1s0xa7eb974178ea5d69:0x892715c85b74aaa0!8m2!3d9.923215!4d78.1457849!16s%2Fg%2F11krckq2k5?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    period: "Mar-2024 - Present",
    description: "I worked as a Front-End Developer at Laabamone Business Solutions for one year, specializing in React.js, JavaScript, HTML, and CSS. My role involved building responsive UI components, integrating APIs, and optimizing performance. This experience enhanced my skills in modern web development and collaboration.",
    skills: ["React", "Next.js", "Node.js", "CSS", "Tailwind CSS", "Typescript"]
  },
  {
    title: "React JS Intern",
    company: "WiseLearnz Madurai",
    location: "https://www.google.com/maps/place/WiseLearnz/@9.9219816,78.1459293,17z/data=!4m14!1m7!3m6!1s0x3b00c559c95901bf:0xf6b8dd9d86eadba3!2sWiseLearnz!8m2!3d9.9219763!4d78.1485042!16s%2Fg%2F11t2stbtmr!3m5!1s0x3b00c559c95901bf:0xf6b8dd9d86eadba3!8m2!3d9.9219763!4d78.1485042!16s%2Fg%2F11t2stbtmr?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
    period: "Sept-2023 - Feb-2024",
    description: "WiseLearnz IT System Training and Support offers a comprehensive Full Stack React JS course designed to equip learners with the skills needed to build modern web applications. This program covers both frontend and backend development, ensuring students gain hands-on experience with the latest technologies in the industry.",
    skills: ["HTML", "CSS", "Java Script", "React", "MySql"]
  }
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    <section id="experience" className="scroll-mt-20" style={{ marginTop: "5%" }}>
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
          color: "#9fa0ab",
          marginTop: isMobile ? "3%" : "-1.5%",
          marginBottom: isMobile ? "6%" : "3.8%",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Times New Roman, Times, serif"

        }}
      >
        Experience
      </h2>
      <div className="space-y-4">
  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Even: Left, Odd: Right
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card
        className={`relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-lg border border-white border-opacity-25 transition-all duration-200 ${
          hoveredIndex === index
            ? "transform scale-[1.01] border-blue-400/50 shadow-lg shadow-blue-400/10"
            : ""
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
       <CardContent className="relative z-10 p-5">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
    <h3
      className="text-lg font-semibold text-gray-100"
      style={{
        fontFamily: "Playfair Display",
      }}
    >
      {exp.title}
    </h3>
    <span
      className="text-sm text-white"
      style={{
        fontFamily: "Playfair Display",
      }}
    >
      {exp.period}
    </span>
  </div>

  <p
  className="text-blue-400 mb-2 font-medium cursor-pointer no-underline transition-all duration-200 hover:text-blue-500"
  style={{
    fontFamily:
      'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  }}
  onClick={() => window.open(exp.location, "_blank")}
>
  {exp.company}
</p>


  <p
    className="text-[#FFDFEF] mb-4"
    style={{
      fontFamily: "Nunito Sans !important",
      fontSize: "14.5px",
      textAlign: "justify",
    }}
  >
    {exp.description}
  </p>

  <div className="flex flex-wrap gap-1.5">
    {exp.skills.map((skill, skillIndex) => (
      <Badge
        key={skillIndex}
        variant="secondary"
        className="bg-blue-400/20 text-blue-200 border border-blue-400/30 transition-all duration-200 hover:bg-blue-400/30 hover:scale-105"
        style={{ fontFamily: "Nunito Sans !important" }}
      >
        {skill}
      </Badge>
    ))}
  </div>
</CardContent>

      </Card>
    </motion.div>
  ))}
</div>

    </section>
  )
}