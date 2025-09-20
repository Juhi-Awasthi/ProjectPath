import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Project Details (ID: {id})</h1>
      <div className="bg-blue-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Sample Project Title</h2>
        <p className="mb-4">
          This project helps users do X using technologies like React, Node.js, and MongoDB.
        </p>
        <button className="bg-sky-500 text-white px-4 py-2 rounded mr-4 hover:bg-sky-600">
          Buy Step-by-Step Guide
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Book a Mentor for this Project
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
