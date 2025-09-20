import React from "react";
import { Link } from "react-router-dom";

const BookMentorship = () => {
  const mentors = [
    { id: 1, name: "Aman Singh", expertise: "Full-Stack", rating: "4.9" },
    { id: 2, name: "Ritika Mehra", expertise: "AI/ML", rating: "4.8" },
  ];

  return (
    <div className="p-6 min-h-screen bg-purple-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Book a Mentor</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <p>Expertise: {mentor.expertise}</p>
            <p>Rating: ⭐ {mentor.rating}</p>
            <Link
              to={`/mentor-booking/${mentor.id}`}
              className="inline-block mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            >
              Book Session
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMentorship;
