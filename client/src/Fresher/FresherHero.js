import React from "react";
// import { Link } from "react-router-dom";

const FresherHero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-white text-gray-800 font-sans min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold">
          <span className="text-gray-800">Project</span><span className="text-sky-500">Verse🔍</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="/" className="hover:text-sky-500">Home</a>
          <a href="/" className="hover:text-sky-500">Explore Projects</a>
          <a href="/" className="hover:text-sky-500">Saved Projects</a>
          <a href="/" className="hover:text-sky-500">Book Mentorship</a>
          <a href="/" className="hover:text-sky-500">Profile</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
          Explore Hire-Worthy Project Ideas
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-600">
          Browse top-notch project ideas, buy step-by-step guides, and book 1:1 mentorships to supercharge your learning journey!
        </p>
        <div className="space-x-4">
          <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition duration-300">
            🔍 Explore Projects
          </button>
          <button className="bg-white text-sky-600 hover:bg-sky-100 px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300 border border-sky-300">
            🤝 Book a Mentor
          </button>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Recommended for You 🎯</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Full-Stack Web App", desc: "Level: Intermediate" },
            { title: "AI Chatbot", desc: "Level: Advanced" },
            { title: "IoT Home Automation", desc: "Level: Beginner" },
          ].map((item, i) => (
            <div key={i} className="bg-purple-100 p-6 rounded-3xl shadow-md hover:scale-105 transition-transform duration-300 border border-purple-200">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-sm border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} ProjectVerse | Dream. Build. Achieve. 💙
      </footer>
    </div>
  );
};

export default FresherHero;
