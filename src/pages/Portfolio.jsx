import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import mypicture from "../../public/minepicture.png"


const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#0b0b0b] text-white">

     
        <section className=" flex flex-col md:flex-row items-center justify-between px-10 pt-24">

          
          <div className="max-w-xl">
            <p className="text-orange-500 mb-3">Creative Developer</p>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-none">
              <span className="bg-orange-500 text-black px-4 py-1 rounded-lg">
                PORT
              </span>
              FOLIO<span className="text-orange-500">.</span>
            </h1>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I design and build modern, responsive websites with a strong focus on
              user experience and clean interfaces. Turning ideas into functional,
              visually appealing digital products is what I do best.
            </p>

            <div className="mt-6 flex gap-4">
              <Link to="/viewproject"><button className="bg-orange-500 text-black px-6 py-2 rounded-lg">
                View Projects
              </button></Link>
              <Link to="/contact"><button className="border border-orange-500 px-6 py-2 rounded-lg text-orange-500">
                Contact Me
              </button></Link>
            </div>
          </div>

        
          <div className="relative mt-10 md:mt-0">
            <div className="absolute w-80 h-80 bg-orange-500/30 blur-[120px] rounded-full"></div>
            <img
              src={mypicture}
              alt=""
              className="w-72 md:w-80 relative z-10 rounded-2xl"
            />
          </div>

        </section>

        <section className="grid md:grid-cols-2 gap-12 px-10 py-20 items-center">

          <div className="relative">
            <div className="absolute w-72 h-72 bg-orange-500/20 blur-[100px] rounded-full"></div>
            <img src={mypicture} className="rounded-2xl relative z-10" />
          </div>

         
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Hello<span className="text-orange-500">.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              I'm Justina, a frontend developer passionate about building clean,
              modern and user-friendly interfaces. I focus on writing efficient
              code and creating designs that not only look good but also work
              seamlessly across devices.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I enjoy solving problems, learning new technologies, and bringing
              creative ideas to life through code.
            </p>

           
            <div className="grid grid-cols-2 gap-4 mt-6">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "UI/UX"].map(
                (tech, i) => (
                  <div
                    key={i}
                    className="border border-white/10 p-3 rounded-lg text-sm text-center"
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>

        </section>

        
        <section className="px-10 py-20">

          <h2 className="text-3xl font-bold mb-10">
            Experience<span className="text-orange-500">.</span>
          </h2>

          <div className="space-y-8">

            <div className="border-l-2 border-orange-500 pl-6">
              <h3 className="font-semibold text-lg">Frontend Developer</h3>
              <p className="text-gray-400 text-sm">2024 - Present</p>
              <p className="text-gray-500 mt-2">
                Building responsive and interactive web applications using React
                and modern frontend tools.
              </p>
            </div>

            <div className="border-l-2 border-orange-500 pl-6">
              <h3 className="font-semibold text-lg">Frontend Intern</h3>
              <p className="text-gray-400 text-sm">2024 - 2026</p>
              <p className="text-gray-500 mt-2">
                Worked on UI components, improved layouts and collaborated with
                developers on real-world projects.
              </p>
            </div>

          </div>

        </section>

        <section className="px-10 py-20">

          <h2 className="text-3xl font-bold text-center mb-12">
            What I Do<span className="text-orange-500">.</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Frontend Development",
              "Responsive Design",
              "UI Implementation",
              "Website Optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-orange-500 text-white p-6 rounded-2xl text-center font-semibold hover:scale-105 transition"
              >
                {item}
              </div>
            ))}

          </div>

        </section>
      
<div className="fixed bottom-0 left-0 w-full bg-black/40 border-t border-white/10 h-12 overflow-hidden flex items-center z-50">
  <div
    className="flex gap-16 whitespace-nowrap text-gray-300 animate-scroll"
  >
    {[
      "Website Design",
      "App design",
      "Website management",
      "Wireframe",
      "UI/UX design",
    ].map((text, i) => (
      <span key={i}>{text}</span>
    ))}
    {[
      "Website Design",
      "App design",
      "Website management",
      "Wireframe",
      "UI/UX design",
    ].map((text, i) => (
      <span key={i}>{text}</span>
    ))}
  </div>

  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 25s linear infinite;
      }
    `}
  </style>
</div>

      </div>
    </>
  );
};

export default Portfolio;