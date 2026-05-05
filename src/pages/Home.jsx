import React from 'react'
import { Link } from 'react-router-dom' 
import Navbar from '../components/Navbar'
import mypicture from "../../public/minepicture.png"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative bg-[#0b0b0b] text-white overflow-hidden min-h-screen flex items-center">

     
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-orange-500/20"></div>

      
        <div className="absolute top-10 right-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 left-[-100px] w-[400px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 pt-24 pb-12 px-8 grid md:grid-cols-2 items-center gap-10 w-full">

      
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-orange-500">Justina</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Frontend Developer crafting modern, responsive and visually appealing web experiences.
            </p>

            <Link to="/portfolio">
              <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-lg text-white font-semibold shadow-lg shadow-orange-500/20">
                View Portfolio
              </button>
            </Link>
          </div>

     
          <div className="relative flex justify-center">
            <div className="absolute w-[300px] h-[300px] bg-orange-500/30 blur-[100px] rounded-full"></div>
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-[40px] shrink-0">
              <img
                src={mypicture}
                alt="Justina"
                className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] object-cover rounded-[30px]"
              />
            </div>
          </div>

        </div>
      </div>

     
      <div className="bg-[#e6ded3] h-12 overflow-hidden flex items-center">
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{
            animation: "scrollX 25s linear infinite",
            width: "max-content"
          }}
        >
          <span className="text-sm font-medium text-black">Website Design</span>
          <span className="text-sm font-medium text-black">App design</span>
          <span className="text-sm font-medium text-black">Website management</span>
          <span className="text-sm font-medium text-black">Wireframe</span>
          <span className="text-sm font-medium text-black">UI/UX design</span>
          
         
          <span className="text-sm font-medium text-black">Website Design</span>
          <span className="text-sm font-medium text-black">App design</span>
          <span className="text-sm font-medium text-black">Website management</span>
          <span className="text-sm font-medium text-black">Wireframe</span>
          <span className="text-sm font-medium text-black">UI/UX design</span>
        </div>
      </div>

      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </>
  )
}

export default Home;