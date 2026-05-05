import mypicture from "../../public/minepicture.png"
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="relative w-full min-h-screen flex items-start justify-center bg-[#0b0b0b] text-white overflow-hidden px-6 pt-35">

      
        <div className="absolute inset-0">
          <img
            src={mypicture}
            alt="background"
            className="w-full h-full object-cover blur-2xl opacity-20 scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={mypicture}
                alt="profile"
                className="w-[260px] h-[330px] object-cover rounded-2xl border border-white/20 shadow-xl"
              />

          
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-2xl -z-10"></div>
            </div>
          </div>

       
          <div className="flex-1 w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-4">
              About <span className="text-orange-500">Me</span>
            </h2>

            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              I am a passionate software engineer and UI/UX designer who enjoys creating
              modern, user-friendly digital experiences. I combine design thinking
              with frontend development to build interfaces that are both visually
              appealing and highly functional.
            </p>

            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              My focus is on understanding user needs, designing intuitive layouts,
              and bringing them to life using clean and efficient code.
            </p>

          
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-500">
                What I Do
              </h3>

              <div className="flex flex-nowrap gap-3 overflow-x-auto scrollbar-hide">
                {["UI/UX Design", "HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs whitespace-nowrap rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      
        <div className="fixed bottom-0 left-0 w-full bg-black/40 border-t border-white/10 h-12 overflow-hidden flex items-center z-50">
          <div className="flex gap-16 whitespace-nowrap text-gray-300 animate-scroll">
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

      </section>
    </>
  );
}