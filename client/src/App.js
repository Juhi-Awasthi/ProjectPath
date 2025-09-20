import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import HeroPage from './components/HeroPage';
import LandingPage from './components/LandingPage';
import LoginRoleSelector from './components/LoginRoleSelector';
import FresherHero from './Fresher/FresherHero';
import ProfessionalHero from './Professional/ProfessionalHero';
import { GoogleOAuthProvider } from '@react-oauth/google';

// New Professional Sub Pages
import ProfessionalDashboard from './Professional/ProfessionalDashboard';
import PostProject from './Professional/PostProject';
import MyProjects from './Professional/MyProjects';
import Earnings from './Professional/Earnings';
import ProfessionalProfile from './Professional/ProfessionalProfile';
import SidebarLayout from './Professional/SidebarLayout';

//new Fresher sub pages

import ExploreProjects from './Fresher/ExploreProjects';
import SavedProjects from './Fresher/SavedProjects';
import BookMentorship from './Fresher/BookMentorship';
import FresherProfile from './Fresher/Profile';
import ProjectDetails from './Fresher/ProjectDetails';

// Mentor Booking Page
import MentorBooking from './Fresher/MentorBooking';

function App() {
  return (
    <GoogleOAuthProvider clientId="100093219614-rpe3pi38pv0cisn59ltmasn9bt2rmoam.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* Landing and Auth */}
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<Signup role="fresher" />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<LoginRoleSelector />} />
          <Route path="/login/fresher" element={<Signup role="fresher" />} />
          <Route path="/login/professional" element={<Signup role="professional" />} />

          {/* Hero Pages */}
          <Route path="/fresher-hero" element={<FresherHero />} />
          <Route path="/professional-hero" element={<ProfessionalHero />} />

          {/* Professional Dashboard Pages (with Sidebar) */}
          <Route element={<SidebarLayout />}>
            <Route path="/dashboard" element={<ProfessionalDashboard />} />
            <Route path="/post-project" element={<PostProject />} />
            <Route path="/my-projects" element={<MyProjects />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/profile" element={<ProfessionalProfile />} />

            {/*Fersher sub pages */}
            
            <Route path="/exploreprojects" element={<ExploreProjects />} />
            <Route path="/savedprojects" element={<SavedProjects />} />
            <Route path="/bookmentorship" element={<BookMentorship />} />
            <Route path="/profile" element={<FresherProfile />} />
            <Route path="/projectdetails" element={<ProjectDetails />} />
            <Route path="/fresher-home" element={<FresherHero />} />

            {/* Mentor Booking */}
          <Route path="/book-mentor/:mentorId" element={<MentorBooking />} />
      
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
