// src/components/Community.js
import React, { useEffect, useState } from 'react';
import '../styles/Community.css';

const Community = () => {
  const [users, setUsers] = useState([]);

  // Dummy data for now
  useEffect(() => {
    const dummyUsers = [
      { id: 1, name: 'Aarav', Carbonfootprint: '1.5kg' },
      { id: 2, name: 'Diya', Carbonfootprint: '1.7kg' },
      { id: 3, name: 'Kabir', Carbonfootprint: '1.8kg' },
    ];
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="community-container">
      <h2>🌍 TerraStride Community</h2>
      <p>Meet others making a difference:</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.Carbonfootprint} carbon footprint
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
