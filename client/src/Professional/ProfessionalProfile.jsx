import React, { useState } from "react";

const ProfessionalProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Senior Developer & Mentor",
    skills: "React, Node.js, MongoDB",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // API call to save profile
    console.log("Saved:", profile);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Your Profile 👤</h1>
      <div className="space-y-4">
        <input name="name" value={profile.name} onChange={handleChange} className="w-full p-3 border rounded" />
        <textarea name="bio" value={profile.bio} onChange={handleChange} className="w-full p-3 border rounded" rows={3} />
        <input name="skills" value={profile.skills} onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="linkedin" value={profile.linkedin} onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="github" value={profile.github} onChange={handleChange} className="w-full p-3 border rounded" />
        <button onClick={handleSave} className="bg-purple-500 text-white px-6 py-3 rounded-xl shadow">Save Changes</button>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
