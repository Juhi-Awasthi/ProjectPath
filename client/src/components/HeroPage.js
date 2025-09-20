// import React from "react";
// import { Link } from "react-router-dom";

// const HeroPage = () => {
//   return (
//     <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-white text-gray-800 font-sans min-h-screen">

//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
//         <div className="text-2xl font-bold">
//           <span className="text-gray-800">Project</span><span className="text-sky-500">Verse🔍</span>
//         </div>
//         <div className="hidden md:flex gap-6 items-center">
//           <a href="/" className="hover:text-sky-500">Home</a>
//           <a href="/" className="hover:text-sky-500">Explore Project</a>
//           <a href="/" className="hover:text-sky-500">Post Project</a>
//           <a href="/" className="hover:text-sky-500">About Us</a>
//           <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded transition duration-200">
//             <Link to="/signup">Log In</Link>
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
//         Build Hire-Worthy Projects 💡
//         </h1>
//         <p className="text-lg md:text-xl max-w-xl mb-6 text-gray-600">
//         Get inspired by real-world project ideas posted by professionals. Buy detailed guides or book 1:1 mentorship sessions! 💻
//         </p>
//         <div className="space-x-4">
//           <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition duration-300">
//             🌈 Explore Projects
//           </button>
//           <button className="bg-white text-sky-600 hover:bg-sky-100 px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300 border border-sky-300">
//             🎯 Become a Mentor
//           </button>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 px-6 bg-white text-center">
//         <h2 className="text-3xl font-bold mb-10 text-gray-800">How It Works 💁‍♀️</h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             { step: "🌟 Browse Ideas", desc: "Pick a project you love!" },
//             { step: "🛍 Buy Guide or Book Session", desc: "Choose your learning style." },
//             { step: "🚀 Build & Impress", desc: "Add it to your resume!" },
//           ].map((item, i) => (
//             <div key={i} className="bg-purple-100 p-6 rounded-3xl shadow-md hover:scale-105 transition-transform duration-300 border border-purple-200">
//               <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-16 px-6 bg-blue-50">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Popular Categories 💻</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {["Web Dev", "AI/ML", "IoT", "Blockchain", "Data Science", "Cybersecurity"].map((cat) => (
//             <div key={cat} className="bg-white border border-sky-300 text-sky-600 px-6 py-3 rounded-full shadow hover:bg-sky-100 cursor-pointer transition duration-300">
//               {cat}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-6 bg-purple-50">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Freshers Say 🗣</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[1, 2, 3].map((t) => (
//             <div key={t} className="bg-white p-6 rounded-xl shadow-lg text-sm border border-gray-200">
//               <p className="mb-4 text-gray-600">"This platform helped me ace interviews and get noticed. The guide was super clear and cute!"</p>
//               <h4 className="text-gray-800 font-semibold">✨ Fresher {t}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 text-center px-6 bg-white">
//         <h2 className="text-3xl font-bold mb-4 text-gray-800">Let’s Build Something Amazing Together 🌈</h2>
//         <p className="text-lg text-gray-600 mb-6">Join a community of creative learners and mentors.</p>
//         <button className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transition duration-300">
//           🚀 Start Now
//         </button>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-400 py-6 text-sm border-t border-gray-200 bg-white">
//         © {new Date().getFullYear()} ProjectVerse | Designed with 💙 for Engineers
//       </footer>
//     </div>
//   );
// };

// export default HeroPage;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaUserGraduate, FaLaptopCode } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 font-sans min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold font-inter">
          <span className="text-gray-800">Project</span>
          <span className="text-sky-500">Verse🔍</span>
        </div>
        <div className="hidden md:flex gap-6 items-center font-medium">
          <Link to="/" className="hover:text-sky-500 transition duration-200">Home</Link>
          <Link to="/" className="hover:text-sky-500 transition duration-200">Explore Projects</Link>
          <Link to="/" className="hover:text-sky-500 transition duration-200">Post Project</Link>
          <Link to="/" className="hover:text-sky-500 transition duration-200">About Us</Link>
          <Link
            to="/signup"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
            Build Hire-Worthy Projects 💡
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Get inspired by real-world project ideas posted by professionals.
            Buy detailed guides or book 1:1 mentorship sessions! 💻
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:scale-105 transition px-6 py-3 text-white font-semibold rounded-xl shadow-lg">
              🌈 Explore Projects
            </button>
            <button className="bg-white border border-sky-400 text-sky-600 hover:bg-sky-50 transition px-6 py-3 font-semibold rounded-xl shadow">
              🎯 Become a Mentor
            </button>
          </div>
        </motion.div>

        
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">How It Works 💁‍♀️</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <FaLaptopCode size={30} />, step: "🌟 Browse Ideas", desc: "Pick a project you love!" },
            { icon: <FaUserGraduate size={30} />, step: "🛍 Buy or Book", desc: "Choose your learning style." },
            { icon: <FaRocket size={30} />, step: "🚀 Build & Impress", desc: "Add it to your resume!" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-purple-100 p-6 rounded-3xl shadow-md hover:scale-105 transition-transform duration-300 border border-purple-200"
            >
              <div className="text-purple-700 mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Popular Categories 💻</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Web Dev", "AI/ML", "IoT", "Blockchain", "Data Science", "Cybersecurity"].map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.1 }}
              className="bg-white border border-sky-300 text-sky-600 px-6 py-3 rounded-full shadow hover:bg-sky-100 cursor-pointer transition duration-300"
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-purple-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Freshers Say 🗣</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((t) => (
            <motion.div
              key={t}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg text-sm border border-gray-200"
            >
              <p className="mb-4 text-gray-600">
                "This platform helped me ace interviews and get noticed. The guide was super clear and cute!"
              </p>
              <h4 className="text-gray-800 font-semibold">✨ Fresher {t}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Let’s Build Something Amazing Together 🌈</h2>
        <p className="text-lg text-gray-600 mb-6">Join a community of creative learners and mentors.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transition duration-300"
        >
          🚀 Start Now
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 text-sm border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} ProjectVerse | Designed with 💙 for Engineers
      </footer>
    </div>
  );
};

export default HeroPage;
