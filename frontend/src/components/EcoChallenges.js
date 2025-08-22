import React, { useState, useEffect } from 'react';
import '../styles/EcoChallenges.css';

const initialChallenges = [
  { id: 1, title: 'Use Public Transport for a Day', description: 'Reduce carbon emissions by using public transport.', joined: false, completed: false },
  { id: 2, title: 'No Plastic Week', description: 'Avoid using any single-use plastic for 7 days.', joined: false, completed: false },
  { id: 3, title: 'Plant a Tree', description: 'Plant one or more trees in your community.', joined: false, completed: false }
];

const EcoChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('ecoChallenges');
    if (saved) {
      setChallenges(JSON.parse(saved));
    } else {
      setChallenges(initialChallenges);
    }
  }, []);

  const saveToLocal = (updated) => {
    setChallenges(updated);
    localStorage.setItem('ecoChallenges', JSON.stringify(updated));
  };

  const handleJoin = (id) => {
    const updated = challenges.map(ch =>
      ch.id === id ? { ...ch, joined: !ch.joined, completed: false } : ch
    );
    saveToLocal(updated);
  };

  const handleComplete = (id) => {
    const updated = challenges.map(ch =>
      ch.id === id ? { ...ch, completed: true } : ch
    );
    saveToLocal(updated);

    
    const completedList = updated.filter(ch => ch.completed);
    localStorage.setItem('completedChallenges', JSON.stringify(completedList));
  };

  return (
    <div className="eco-container">
      <h2>Eco Challenges</h2>
      <div className="challenges-list">
        {challenges.map(challenge => (
          <div key={challenge.id} className="challenge-card">
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>

            <button onClick={() => handleJoin(challenge.id)}>
              {challenge.joined ? 'Leave' : 'Join'}
            </button>

            {challenge.joined && !challenge.completed && (
              <button onClick={() => handleComplete(challenge.id)} style={{ marginLeft: '10px', backgroundColor: 'green', color: 'white' }}>
                Complete
              </button>
            )}

            {challenge.completed && <p style={{ color: 'green' }}>✅ Completed</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoChallenges;
