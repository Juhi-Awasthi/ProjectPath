import React from "react";

const SavedProjects = () => {
  const saved = [];

  return (
    <div className="p-6 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Saved Projects</h1>
      {saved.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t saved any projects yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {saved.map((item, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-xl shadow">
              <h2>{item.title}</h2>
              <button className="text-red-500 mt-2">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedProjects;
