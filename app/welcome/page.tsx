"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Welcome() {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text = "Nandha";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 700 : 650;
    const timeout = setTimeout(() => {
      if (!deleting && index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else if (deleting && index > 0) {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
      } else {
        setDeleting(!deleting);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/welcome/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]" style={{marginTop:isMobile?"40%":"0px"}}>
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-[40px] text-white font-semibold leading-relaxed">
            <span className="ml-0">Hi I&apos;m&nbsp;&nbsp;</span> 
            <span className="text-white leading-relaxed">{displayedText}</span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 leading-snug"
              style={{ fontSize: isMobile ? "26px" : "36px" }}
            >
              &quot;Creative Frontend Developer focused on crafting visually stunning, user-friendly websites.&quot;
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex justify-center items-center h-1/3 w-[60%] md:w-[34%] backdrop-blur-lg" style={{borderRadius:"5%"}}>
              <button 
                className="relative px-6 py-3 text-white font-semibold uppercase flex items-center gap-2 transition-all duration-300 overflow-hidden border-t border-b border-white border-opacity-50 group"
                onClick={() => router.push("/portfolio")}
              >           
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">
                  Get Start
                </span>
                <ArrowRight className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/welcome/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40 hidden md:block"
        />

        <Image
          src="/welcome/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="hidden md:block"
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/welcome/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/welcome/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
