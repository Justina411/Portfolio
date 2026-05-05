import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import {  FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // REMINDER: ADD YOUR WEB3FORMS ACCESS KEY HERE
    // Example: formData.append("access_key", "12345-abcde-...");
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset(); // Clear the form
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen bg-[#0b0b0b] text-white overflow-hidden font-sans py-20 px-6 pt-34 md:px-20">
  
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#1a1a1a] to-orange-500/20 pointer-events-none"></div>

   
      <div className="absolute top-10 -right-25 w-100 h-100 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 -left-25 w-100 h-100 bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>



   
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h1 className="text-[14rem] md:text-[20rem] font-extrabold opacity-[0.015] tracking-tighter text-white">CONTACT</h1>
      </div>



      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
       
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] uppercase tracking-widest mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
               Contact
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Get in touch</h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Have questions or ready to transform your business with expert solutions? I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
           
            <div className="group flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-xl">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Email us</p>
                  <a href="mailto:atujustinairuoma411@gmail.com" className="text-sm hover:text-orange-400 transition-colors">
                    atujustinairuoma411@gmail.com
                  </a>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600" />
            </div>

          
            <div className="group flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-xl">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Call us</p>
                  <p className="text-sm">08141105863</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600" />
            </div>

       
            <div className="group flex items-center justify-between p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-xl">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Our location</p>
                  <p className="text-sm text-zinc-400">Ndiaga Ugwuaji enugu south LGA, Enugu state Nigeria</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600" />
            </div>
          </div>

        
          <div className="flex gap-3 pt-2">
              <a href="https://twitter.com/atujustinairuoma411@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:bg-orange-500 hover:text-black transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/atujustinairuoma411@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:bg-orange-500 hover:text-black transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3.5 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:bg-orange-500 hover:text-black transition-all">
                <FaTiktok className="w-5 h-5" />
              </a>
          </div>
        </div>

       
        <div className="relative lg:col-span-3 bg-[#121212]/50 backdrop-blur-xl border border-zinc-800/50 rounded-4xl p-8 md:p-10 shadow-2xl z-10">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase ml-1">Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  className="w-full bg-zinc-800/20 border border-zinc-800/50 rounded-xl p-4 outline-none focus:border-orange-500/50 transition-colors placeholder:text-zinc-700"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase ml-1">Email</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="w-full bg-zinc-800/20 border border-zinc-800/50 rounded-xl p-4 outline-none focus:border-orange-500/50 transition-colors placeholder:text-zinc-700"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase ml-1">Message</label>
                <textarea 
                  name="message"
                  rows="5" 
                  required
                  className="w-full bg-zinc-800/20 border border-zinc-800/50 rounded-xl p-4 outline-none focus:border-orange-500/50 transition-colors placeholder:text-zinc-700 resize-none"
                ></textarea>
            </div>
            
            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-orange-500 hover:text-white disabled:bg-zinc-600 disabled:text-zinc-400 transition-all py-4 rounded-xl font-bold text-sm uppercase tracking-widest mt-4 shadow-lg flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
            
            {result && (
                <p className={`text-center text-sm font-medium mt-6 ${result.includes("Success") ? "text-green-500" : "text-orange-500"}`}>
                    {result}
                </p>
            )}
          </form>
        </div>
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
    </>
  );
};

export default Contact;