import { useState, useRef, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";

const testimonials = [
  { name: "Hyman Brady", text: "Amazing service and quick communication. I’ll definitely work with them again." },
  { name: "Sarah J", text: "Very professional and delivered exactly what I wanted. Highly recommend!" },
  { name: "David K", text: "Great experience, smooth process and beautiful result at the end." },
  { name: "Blessing A", text: "Clean design and very responsive work. I love the final result!" },
  { name: "Michael T", text: "Top-notch frontend skills. Everything was delivered perfectly." },
  { name: "Grace O", text: "Very easy to work with and understands design very well." },
];

export default function Testimonials() {
  const [active, setActive] = useState(2);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current[active]) {
      cardRefs.current[active].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen text-white flex items-center justify-center overflow-x-hidden">


      <div className="absolute inset-0 bg-[#0b0b0b]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-orange-500/20"></div>

    
      <div className="absolute top-10 right-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 left-[-100px] w-[400px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          Client <span className="text-orange-500">Feedback</span>
        </h2>

       
        <div className="flex items-center gap-8 overflow-x-auto overflow-y-hidden px-6 py-6 scroll-smooth snap-x snap-mandatory scrollbar-hide">

          {testimonials.map((item, index) => {
            const isActive = index === active;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => handleClick(index)}
                className={`relative flex-shrink-0 w-[260px] p-6 rounded-2xl text-center cursor-pointer transition-all duration-500 snap-center
                  ${isActive ? "scale-110 border border-orange-500 opacity-100" : "scale-95 opacity-60"}
                  bg-white/10 backdrop-blur-lg border border-white/20`}
              >
            
                <div className="absolute -left-3 top-4 bg-white text-black p-1.5 rounded-full">
                  <FaQuoteLeft size={12} />
                </div>

                <div className="absolute -right-3 bottom-4 bg-white text-black p-1.5 rounded-full">
                  <FaQuoteRight size={12} />
                </div>

             
                <div className="flex justify-center text-yellow-400 mb-3 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xs text-gray-200 mb-3">
                  {item.text}
                </p>

                {/* Name */}
                <p className="font-semibold text-sm text-white mb-4">
                  - {item.name}
                </p>

           
                <div className="flex justify-center">
                  <div className="w-24 h-6 border-b border-white/30 rounded-b-full"></div>
                </div>
              </div>
            );
          })}

        </div>
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
    </section>
    </>
  );
}