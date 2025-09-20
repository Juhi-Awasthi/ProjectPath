import React from "react";

const ProfessionalDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome Back, Pro! 👋</h1>

      {/* Stats */}
      <section className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Projects Posted", value: "10" },
          { label: "Earnings", value: "$500" },
          { label: "Mentees", value: "25" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-purple-600">{item.value}</h2>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Notifications */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications 🔔</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">New mentee applied to "AI Resume Analyzer"</li>
          <li className="text-gray-600">Your project "Smart Attendance System" was viewed 5 times today</li>
        </ul>
      </section>
    </div>
  );
};

export default ProfessionalDashboard;
