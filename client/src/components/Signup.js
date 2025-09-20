import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ role }) => {
  const navigate = useNavigate(); 
  const redirectPath = role === 'professional' ? '/professional-hero' : '/fresher-hero';

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/signup', formData);
      alert('Signed up successfully!');
      navigate(redirectPath);

    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
    }
    navigate(redirectPath);

  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email: formData.email,
        password: formData.password,
      });
      setMessage({ type: 'success', text: res.data.message });
      setTimeout(() => {
        setMessage(null);
        navigate(redirectPath);

      }, 1500);
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Login failed' });
      setTimeout(() => setMessage(null), 6000);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
  
      const res = await axios.post('http://localhost:5000/api/users/google-signup', {
        name: decoded.name,
        email: decoded.email,
        password: '123456' // Or a generated token
      });
  
      if (res.data.success) {
        alert("✅ Google signup successful!");
        navigate(redirectPath);

      } else {
        alert("⚠️ Signup failed on server");
      }
    } catch (err) {
      console.error("Google Signup Error:", err);
      alert("❌ Google signup failed. Check console for details.");
    }
  };
  
  
  

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md text-center border border-purple-100">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-1">
          Welcome to <span className="text-sky-500">ProjectVerse</span>
        </h2>
        <p className="text-sm text-gray-600 mb-5">{isLogin ? 'Login to your account' : 'Create an account to begin'}</p>

        {/* Toggle */}
        <div className="relative flex bg-gray-200 rounded-full p-1 mb-4 w-72 mx-auto h-10">
          <span
            className={`absolute top-1 left-1 h-8 w-1/2 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
              isLogin ? 'translate-x-full' : 'translate-x-0'
            }`}
          ></span>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 relative z-10 text-sm font-semibold transition-colors duration-300 ${
              !isLogin ? 'text-sky-600' : 'text-gray-500'
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 relative z-10 text-sm font-semibold transition-colors duration-300 ${
              isLogin ? 'text-sky-600' : 'text-gray-500'
            }`}
          >
            Log In
          </button>
        </div>

        {message && (
          <p className={`text-sm mb-4 ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {message.text}
          </p>
        )}

        {/* SignUp Form */}
        {!isLogin && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="👤 Name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="🔐 Password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-xl font-semibold transition duration-300"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Login Form */}
        {isLogin && (
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="🔐 Password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-xl font-semibold transition duration-300"
            >
              🔓 Log In
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="my-4 text-gray-400 text-sm">or</div>

        {/* Google Login */}
        <div className="flex justify-center">
        <GoogleLogin
  onSuccess={handleGoogleSuccess}
  onError={() => {
    console.log("❌ Google login failed");
    alert("❌ Google signup failed. Check console for details.");
  }}
  useOneTap
/>



        </div>
      </div>
    </div>
  );
};

export default Signup;
