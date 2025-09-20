import React from "react";
import { Link } from "react-router-dom";

const ProfessionalHero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-white text-gray-800 font-sans min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold">
          <span className="text-gray-800">Project</span><span className="text-purple-500">Verse🔍</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard" className="hover:text-purple-500">Home</Link>
          <Link to="/post-project" className="hover:text-purple-500">Post Project</Link>
          <Link to="/my-projects" className="hover:text-purple-500">My Projects</Link>
          <Link to="/earnings" className="hover:text-purple-500">Earnings</Link>
          <Link to="/profile" className="hover:text-purple-500">Profile</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
          Empower Freshers with Your Ideas 🚀
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-600">
          Post impactful projects, mentor future engineers, and earn while inspiring the next generation!
        </p>
        <div className="space-x-4">
          <Link to="/post-project">
            <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition duration-300">
              ➕ Post New Project
            </button>
          </Link>
          <Link to="/my-projects">
            <button className="bg-white text-purple-600 hover:bg-purple-100 px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300 border border-purple-300">
              📋 View My Projects
            </button>
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Your Stats 📊</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { stat: "10", label: "Projects Posted" },
            { stat: "25", label: "Mentees Guided" },
            { stat: "$500", label: "Total Earnings" },
          ].map((item, i) => (
            <div key={i} className="bg-blue-100 p-6 rounded-3xl shadow-md hover:scale-105 transition-transform duration-300 border border-blue-200">
              <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-sm border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} ProjectVerse | Empowering Engineers 🚀
      </footer>
    </div>
  );
};

export default ProfessionalHero;
