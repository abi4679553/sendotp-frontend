import React from "react";


export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-8 min-h-[80vh] flex items-center"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        
          {/* Left Content */}
          <div>
            <p className="text-cyan-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h2 className="text-2xl md:text-3xl text-gray-400 mt-4">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 mt-6 max-w-xl leading-7">
              I build modern, responsive and user-friendly web applications
              using React, Node.js, Express and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-950 transition"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8 text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition">
                GitHub
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                LinkedIn
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Instagram
              </a>
            </div>
          </div>

          {/* Right Profile */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-7xl">
                  👨‍💻
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Small Intro */}
      <section className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-3">
            Turning ideas into beautiful and functional web applications.
          </p>
        </div>
      </section>

    </div>
  );
};