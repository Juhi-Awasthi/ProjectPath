import React, { useState } from "react";

const PostProject = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    timeline: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // API call to save project
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl mt-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-600">Post a New Project ➕</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" onChange={handleChange} value={form.title} placeholder="Project Title" className="w-full p-3 border rounded" />
        <textarea name="description" onChange={handleChange} value={form.description} placeholder="Project Description" className="w-full p-3 border rounded" rows={4} />
        <input name="skills" onChange={handleChange} value={form.skills} placeholder="Required Skills (comma-separated)" className="w-full p-3 border rounded" />
        <input name="timeline" onChange={handleChange} value={form.timeline} placeholder="Timeline (e.g., 2 weeks)" className="w-full p-3 border rounded" />
        <input name="price" onChange={handleChange} value={form.price} placeholder="Earning per mentee ($)" className="w-full p-3 border rounded" />
        <button type="submit" className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow">Publish Project</button>
      </form>
    </div>
  );
};

export default PostProject;
