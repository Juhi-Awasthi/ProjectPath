import React from "react";
import { Link } from "react-router-dom";

const ExploreProjects = () => {
  const projects = [
    { id: 1, title: "Full-Stack Blog App", level: "Intermediate" },
    { id: 2, title: "AI Resume Analyzer", level: "Advanced" },
    { id: 3, title: "IoT Smart Garden", level: "Beginner" },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Explore Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link to={`/project-details/${project.id}`} key={project.id}>
            <div className="p-4 bg-white shadow rounded-xl hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.level}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreProjects;
