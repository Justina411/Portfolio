import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Justina! 👋

My name is ${formData.name}.

Email: ${formData.email}

Message:
${formData.message}`;

    const whatsappURL = `https://wa.me/2348141105863?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/2348141105863?text=Hello%20Justina!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20chat%20with%20you.",
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-white">

        {/* =========================
            BACKGROUND GLOW
        ========================= */}

        <div className="absolute inset-0 bg-linear-to-br from-black via-[#111111] to-orange-500/10"></div>

        <div className="absolute -top-20 -right-20 h-100 w-100 rounded-full bg-orange-500/15 blur-[120px]"></div>

        <div className="absolute bottom-0 -left-20 h-100 w-100 rounded-full bg-orange-600/10 blur-[120px]"></div>

        {/* =========================
            DECORATIVE LINES
        ========================= */}

        <div className="absolute top-35 left-0 hidden h-px w-48 rotate-35 bg-linear-to-r from-transparent via-orange-500/60 to-transparent md:block"></div>

        <div className="absolute top-55 right-0 hidden h-px w-52 -rotate-35 bg-linear-to-r from-transparent via-orange-500/60 to-transparent md:block"></div>

        <div className="absolute bottom-30 left-0 hidden h-px w-40 -rotate-25 bg-linear-to-r from-transparent via-orange-500/40 to-transparent md:block"></div>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 md:px-10 lg:pt-40">

          {/* BIG BACKGROUND TITLE */}

          <div className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 select-none md:top-32">
            <h1 className="whitespace-nowrap text-[70px] font-black uppercase tracking-[8px] text-white/[0.035] sm:text-[100px] md:text-[150px] lg:text-[190px]">
              Contact
            </h1>
          </div>

          {/* SMALL CONTACT LABEL */}

          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
              <FaEnvelope className="text-sm text-orange-500" />
            </div>

            <span className="text-sm font-medium tracking-wide text-gray-300">
              Let's Connect
            </span>
          </div>

          {/* GRID */}

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* =========================
                LEFT SIDE
            ========================= */}

            <div>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Get in{" "}
                <span className="text-orange-500">
                  touch
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
                Have a project in mind, a question, or just want to
                say hello? I'd love to hear from you. Feel free to
                reach out through any of the channels below.
              </p>

              {/* =========================
                  CONTACT CARDS
              ========================= */}

              <div className="mt-10 space-y-4">

                {/* WHATSAPP */}

                <button
                  onClick={openWhatsApp}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                    <FaWhatsapp className="text-xl text-orange-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      WhatsApp Me
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      08141105863
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-orange-500 group-hover:text-black">
                    <FaExternalLinkAlt className="text-xs" />
                  </div>

                </button>

                {/* CALL */}

                <a
                  href="tel:+2348141105863"
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                    <FaPhone className="text-lg text-orange-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      Call Me
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      08141105863
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-orange-500 group-hover:text-black">
                    <FaExternalLinkAlt className="text-xs" />
                  </div>

                </a>

                {/* EMAIL */}

                <a
                  href="mailto:atujustinairuoma411@gmail.com"
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition group-hover:border-orange-500/40 group-hover:bg-orange-500/10">
                    <FaEnvelope className="text-lg text-orange-500" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white">
                      Email Me
                    </h3>

                    <p className="mt-1 truncate text-sm text-gray-400">
                      atujustinairuoma411@gmail.com
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-orange-500 group-hover:text-black">
                    <FaExternalLinkAlt className="text-xs" />
                  </div>

                </a>

                {/* LOCATION */}

                <div className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <FaMapMarkerAlt className="text-lg text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Location
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Enugu, Nigeria
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* =========================
                RIGHT SIDE FORM
            ========================= */}

            <div className="relative">

              {/* Glow behind form */}

              <div className="absolute -inset-4 rounded-3xl bg-orange-500/5 blur-2xl"></div>

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl sm:p-7 md:p-8">

                <div className="mb-7">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Send me a{" "}
                    <span className="text-orange-500">
                      message
                    </span>
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Fill out the form and I'll get back to you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* NAME */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows="6"
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-black transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    Send via WhatsApp

                    <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Contact;