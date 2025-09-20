// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const MentorBooking = () => {
//   const { mentorId } = useParams();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     timeSlot: "10:00 AM - 11:00 AM",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/bookings", {
//         mentorId,
//         ...formData,
//       });
//       setMessage("✅ Booking confirmed! Check your email for details.");
//       setFormData({ name: "", email: "", date: "", timeSlot: "10:00 AM - 11:00 AM" });
//     } catch (error) {
//       setMessage("❌ Booking failed. Try again later.");
//     }
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-50">
//       <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Book 1:1 Session with Mentor</h1>

//         <div className="mb-6">
//           <p className="text-gray-700 mb-2"><strong>Mentor ID:</strong> {mentorId}</p>
//           <p className="text-gray-600">
//             Fill the form below to book a personalized session with your mentor.
//           </p>
//         </div>

//         {message && (
//           <div className="mb-4 text-center text-sm font-semibold text-green-600">{message}</div>
//         )}

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Your Name</label>
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               type="text"
//               placeholder="Enter your name"
//               required
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//               placeholder="Enter your email"
//               required
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
//             <input
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               type="date"
//               required
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Preferred Time Slot</label>
//             <select
//               name="timeSlot"
//               value={formData.timeSlot}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
//             >
//               <option>10:00 AM - 11:00 AM</option>
//               <option>2:00 PM - 3:00 PM</option>
//               <option>5:00 PM - 6:00 PM</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition duration-300"
//           >
//             Book Session
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MentorBooking;
