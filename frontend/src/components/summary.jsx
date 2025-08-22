import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/summary.css';

export default function SummaryCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    if (!userId) return;
    axios.get('http://localhost:5000/footprint/summary', { params: { userId } })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const getEmoji = (avg) => {
    if (avg <= 5) return '🌱 Excellent';
    if (avg <= 15) return '🌿 Good';
    if (avg <= 25) return '🌳 Average';
    return '🔥 High';
  };

  return (
    <div className="extra-section">
      <h3>📊 Weekly Summary</h3>
      {data ? (
        <>
          <p>Average Footprint: <strong>{data.avg} kg CO₂</strong></p>
          <p>Best Day: <strong>{data.best} kg CO₂</strong></p>
          <p>Eco Rating: <strong>{getEmoji(data.avg)}</strong></p>
        </>
      ) : <p>Loading...</p>}
    </div>
  );
}
