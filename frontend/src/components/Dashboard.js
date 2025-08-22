import React from 'react';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Ecotips from "./Ecotips";
import SummaryCard from './summary';



export default function Dashboard() {
  const navigate = useNavigate();
  const completed = JSON.parse(localStorage.getItem('completedChallenges')) || [];
  const username = localStorage.getItem("username");
  const handleLogout = () => {
  localStorage.clear();   
  window.location.href = "/";
};

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>TerraStride</h2>
        

        <div className="nav-links">
          <button onClick={() => navigate('/profile')}>profile</button>
          <button onClick={() => navigate('/Dashboard')}>Home</button>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/contact')}>Contact Us</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>
      <div><Ecotips /></div>
      <div className="dashboard-content">
        <h2>Welcome to your Dashboard!</h2>
        {username && <h3>Hello, {username} 👋</h3>}

        <div className="cards-container">
          <div className="card">
            <h3>Carbon Footprint</h3>
            <button style={{ padding:10, borderRadius:10 }} onClick={() => navigate('/carbonfootprint')}>
              Go to Carbon Footprint
            </button>
            <p>Track your emissions easily.</p>
          </div>
          <div className="card">
            <h3>Eco Challenges</h3>
            <button style={{ padding:10, borderRadius:10 }} onClick={() => navigate('/EcoChallenges')}>Eco Challenges</button>
            <p>Complete tasks to earn rewards.</p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <button style={{ padding:10, borderRadius:10 }} onClick={() => navigate('/community')}>Join In</button>
            <p>See what others are doing.</p>
          </div>
        </div>
        
        <div><SummaryCard/></div>
        <div className="extra-section">
          
          <div className="complete-challenge">
            <h3>✅ Completed Challenges</h3>
            {completed.length > 0 ? (
              <ul>
                {completed.map((challenge, index) => (
                  <li key={index}>
                    <strong>{challenge.title}</strong> - {challenge.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No challenges completed yet.</p>
            )}
          </div>




        </div>
      </div>
    </div>
  );
}
