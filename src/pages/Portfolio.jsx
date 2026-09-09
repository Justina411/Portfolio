import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import mypicture from "../../public/minepicture.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#0b0b0b] text-white overflow-x-hidden">
        
     
        <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 pt-28 md:pt-32">
          
          <div className="max-w-xl w-full text-center md:text-left">
            <p className="text-orange-500 mb-3 font-medium">Software Engineer</p>

            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight md:leading-none break-words">
              <span className="bg-orange-500 text-black px-2 sm:px-4 py-1 rounded-lg">
                PORT
              </span>
              FOLIO<span className="text-orange-500">.</span>
            </h1>

            <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              I design and build modern, responsive web applications end to end 
              from frontend interfaces to backend systems  with a strong focus on
              user experience and clean interfaces. Turning ideas into functional,
              visually appealing digital products is what I do best.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/viewproject" className="w-full sm:w-auto">
                <button className="w-full bg-orange-500 text-black px-6 py-3 rounded-lg font-bold">
                  View Projects
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full border border-orange-500 px-6 py-3 rounded-lg text-orange-500 font-bold">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>

         
          <div className="relative mt-16 md:mt-0 flex justify-center">
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-orange-500/30 blur-[100px] sm:blur-[120px] rounded-full"></div>
            <img
              src={mypicture}
              alt="Profile"
              className="w-60 sm:w-72 md:w-80 relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </section>

       
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 py-20 items-center">
          <div className="relative flex justify-center md:order-1 order-2">
            <div className="absolute w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
            <img src={mypicture} alt="About me" className="rounded-2xl relative z-10 w-full max-w-sm" />
          </div>

          <div className="md:order-2 order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Hello<span className="text-orange-500">.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              I'm Justina, a software engineer passionate about building clean,
              modern and user friendly applications across the full stack. I focus
              on writing efficient code, designing solid backend systems, and
              creating interfaces that work seamlessly across devices.
            </p>

           
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Express", "MongoDB", "UI/UX"].map(
                (tech, i) => (
                  <div
                    key={i}
                    className="border border-white/10 p-3 rounded-lg text-xs sm:text-sm text-center bg-white/5"
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

       
        <section className="px-6 sm:px-10 py-20">
          <h2 className="text-3xl font-bold mb-10">
            Experience<span className="text-orange-500">.</span>
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-orange-500 pl-6">
              <h3 className="font-semibold text-lg">Software Engineer</h3>
              <p className="text-gray-400 text-sm">2024 - Present</p>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Building responsive and interactive web applications using React
                on the frontend and Node.js/Express with MongoDB on the backend.
              </p>
            </div>

            <div className="border-l-2 border-orange-500 pl-6">
              <h3 className="font-semibold text-lg">Frontend Intern</h3>
              <p className="text-gray-400 text-sm">2024 - 2026</p>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Worked on UI components, improved layouts and collaborated with
                developers on real-world projects.
              </p>
            </div>
          </div>
        </section>

       
        <section className="px-6 sm:px-10 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Do<span className="text-orange-500">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Frontend Development",
              "Backend Development",
              "Responsive Design",
              "UI/UX Design",
              "App Development",
              "Website Optimization",
              "Networking",
              "Tech and Law",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-orange-500 text-white p-6 rounded-2xl text-center font-bold hover:scale-105 transition duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

     
        <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-white/10 h-12 overflow-hidden flex items-center z-50">
          <div className="flex gap-16 whitespace-nowrap text-gray-300 animate-scroll">
            {[
              "Website Design", "App design", "Backend Development", "Website management", "Wireframe", "UI/UX design"
            ].map((text, i) => (
              <span key={i} className="text-xs sm:text-sm font-medium">{text}</span>
            ))}
          
            {[
              "Website Design", "App design", "Backend Development", "Website management", "Wireframe", "UI/UX design"
            ].map((text, i) => (
              <span key={`dup-${i}`} className="text-xs sm:text-sm font-medium">{text}</span>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Portfolio;