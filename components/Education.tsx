"use client";  // Add this line at the top

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const Education = ({ direction = "left" }) => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const educationData = [
    {
      year: "2023 - 2024",
      title: "PGDCA",
      description:
"I completed a PGDCA (Post Graduate Diploma in Computer Applications) at Madurai Kamaraj University as a one-year part-time course. This program provided me with strong knowledge in software engineering, development programs, UI designing, computer fundamentals, and programming. Through this course, I gained hands-on experience in building applications, designing user interfaces, and understanding core computing concepts, enhancing my technical and problem-solving skills."        
    },
    {
      year: "2020 - 2022",
      title: "MSC-Physics",
      description:
      "I completed MSc Physics (2020-2022) at Vidhyagiri Arts and Science College, Pudhuvayal. My project focused on [Preparation and characterization of ZNO thin films by spray pyrolysis technology], where I worked on [key aspect like research, experiment, or simulation]. Through this, I gained skills in [mention key tools or techniques]. This experience strengthened my analytical and problem-solving abilities for future research and industry roles."
    },
    {
      year: "2017 - 2020",
      title: "BSC-Physics",
      description:
"I completed my BSc Physics (2017-2020) at Ananda College, Devakottai. My project, [Automatic Home System Using Bluetooth Module] focused on developing a smart home automation system. I also participated in an industrial visit to Bangalore, gaining insights into advanced technologies and industry practices. Additionally, I took part in an outreach program, enhancing my teamwork and practical skills."
    },
  ];

  return (
    <div style={{marginTop:"5%"}}>
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
          marginTop: isMobile ?"3%": "-1.5%",
          marginBottom: isMobile ? "6%" : "4%",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Education
      </h2>

      <div className="relative">
  <div className="absolute left-4 top-0 h-full w-1 bg-blue-500"></div>
  {educationData.map((item, index) => (
    <div key={index} className="relative flex items-start mb-8 pl-12">
      <div 
        className="absolute left-4" 
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <div className="w-4 h-4 bg-blue-500 rounded-full border-4  border-white hover:border-blue-500 " style={{position:"relative", left:"-37%"}}></div>

      </div>
      <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-[#19212c] p-4 shadow-md rounded-lg border border-[#515761] transition duration-300 ml-8 transform hover:-translate-y-2 hover:shadow-xl"
      style={{ position: "relative", left: "-5%" }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 
          className="text-lg text-[#60a5f9]" 
          style={{ fontWeight: "bold", fontFamily: 'Playfair Display' }}
        >
          {item.title}
        </h3>
        <p 
          className="text-white font-semibold" 
          style={{ textAlign: "right", fontFamily: 'Playfair Display' }}
        >
          {item.year}
        </p>
      </div>
      
      <p
        className="text-[#FFDFEF] overflow-hidden"
        style={{
          fontFamily: 'Nunito Sans',
          fontSize: "14.5px",
          textAlign: "justify",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isMobile ? 3 : 5,
          overflow: "hidden",
        }}
      >
        {item.description}
      </p>
    </motion.div>

    </div>
  ))}
</div>

    </div>


  );
};

export default Education;
