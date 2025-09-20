import React from "react";

const MyProjects = () => {
  const projects = [
    { title: "AI Resume Analyzer", status: "Active", mentees: 5 },
    { title: "Smart Attendance System", status: "Completed", mentees: 12 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">My Projects 📋</h1>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow border border-purple-100">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>Status: <span className="font-medium">{project.status}</span></p>
            <p>Mentees: {project.mentees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
