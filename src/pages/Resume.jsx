import React from "react";
import mypicture from "../../public/minepicture.png"
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex items-center justify-center pb-16 pt-24">

      
        <div className="absolute inset-0 bg-linear-to-br from-black via-[#1a1a1a] to-orange-500/20"></div>

        
        <div className="absolute top-10 bg-linear-to-br w-100 h-100 bg-orange-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 -left-25 w-100 h-100 bg-orange-600/20 blur-[120px] rounded-full"></div>

      
        <div className="relative z-10 max-w-6xl w-full bg-[#111111]/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-3">

      
          <div className="bg-[#161616] text-white p-6 space-y-8">

            <div className="flex justify-center">
              <img
                src={mypicture}
                alt="profile"
                className="w-32 h-32 object-cover rounded-xl border-4 border-orange-500"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2 text-orange-500">PROFILE</h2>
              <p className="text-sm text-gray-300">
                Passionate frontend developer focused on building responsive and user-friendly web applications.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-3 text-orange-500">SKILLS</h2>
              <div className="space-y-3">
                {["HTML/CSS", "JavaScript", "React", "UI/UX"].map((skill, i) => (
                  <div key={i}>
                    <p className="text-sm">{skill}</p>
                    <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-4/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>


          <div className="col-span-2 p-8 space-y-8">

            <div>
              <h1 className="text-3xl font-bold">
                JUSTINA <span className="text-orange-500">DEV</span>
              </h1>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-orange-500">WORK EXPERIENCE</h2>

              <div className="space-y-6">
                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="font-bold">Frontend Developer</h3>
                  <p className="text-sm text-gray-400">2025 - Present</p>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    <li>Built responsive web apps using React</li>
                    <li>Improved UI/UX design</li>
                  </ul>
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="font-bold">Intern Developer</h3>
                  <p className="text-sm text-gray-400">2025 - 2026</p>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    <li>Worked with HTML, CSS, JavaScript</li>
                    <li>Collaborated with team members</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-orange-500">EDUCATION</h2>
              <p className="text-gray-300">Software Engineering</p>
            </div>

          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-full bg-black/40 border-t border-white/10 h-12 overflow-hidden flex items-center z-50">

          <div className="flex gap-16 whitespace-nowrap text-gray-300 animate-scrollX w-max">

            {[
              "Website Design",
              "App design",
              "Website management",
              "Wireframe",
              "UI/UX design",
            ].map((text, i) => (
              <span key={`a-${i}`}>{text}</span>
            ))}

            {[
              "Website Design",
              "App design",
              "Website management",
              "Wireframe",
              "UI/UX design",
            ].map((text, i) => (
              <span key={`b-${i}`}>{text}</span>
            ))}

          </div>

          <style>
            {`
              @keyframes scrollX {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .animate-scrollX {
                animation: scrollX 20s linear infinite;
              }
            `}
          </style>

        </div>

      </div>
    </>
  );
};

export default Resume;