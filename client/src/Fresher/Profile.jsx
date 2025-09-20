import React from "react";

const Profile = () => {
  return (
    <div className="p-6 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">My Profile</h1>
      <div className="max-w-md mx-auto bg-blue-100 p-6 rounded-xl shadow">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>About:</strong> Final year student interested in AI and Web Development.</p>
        <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
