import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 flex flex-col items-center justify-center p-6">
      {/* Logo/Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-cyan-500">ProjectVerse</span>
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">
        A platform where <strong>Freshers</strong> explore hire-worthy project ideas and <strong>Professionals</strong> share guides and earn!
      </p>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Professional Card */}
        <Link to="/login/professional">
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-105 transform transition duration-300 text-center hover:shadow-pink-300 cursor-pointer">
            <div className="text-5xl mb-3">👨‍🏫</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">I'm a Professional</h2>
            <p className="text-gray-600 mb-4">Post your project ideas, earn money, and guide students</p>
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition">
              💼 Continue
            </button>
          </div>
        </Link>

        {/* Fresher Card */}
        <Link to="/login/fresher">
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-105 transform transition duration-300 text-center hover:shadow-pink-300 cursor-pointer">
            <div className="text-5xl mb-3">👩‍🎓</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">I'm a Fresher</h2>
            <p className="text-gray-600 mb-4">Explore projects, learn step-by-step, or book personal sessions</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
              🎓 Continue
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;