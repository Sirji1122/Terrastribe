import React from 'react';    
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarbonFootprint from './components/CarbonFootprint.js';
import EcoChallenges from './components/EcoChallenges';
import Community from './components/Community.js';
import About from './pages/about.js';
import Profile from './components/Profile.js';
import Contact from './pages/Contact us.js';
import LandingPage from './components/Landingpage.jsx';
import ProtectedRoute from "./components/ProtectedRoute"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/profile" element={<Profile />}/>
        {/* <Route path="/dashboard" element={<Dashboard />} />         */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path="/carbonFootprint" element={<CarbonFootprint/>}/>
        <Route path="/ecochallenges" element={<EcoChallenges />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
}


export default App;
