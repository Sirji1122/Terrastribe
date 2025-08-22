import React, { useState } from 'react';
import '../styles/CarbonFootprint.css';
import axios from 'axios';

export default function CarbonFootprint() {
  const [transport, setTransport] = useState('');
  const [electricity, setElectricity] = useState('');
  const [water, setWater] = useState('');
  const [plastic, setPlastic] = useState('');
  const [footprint, setFootprint] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();

    const transportEmission = parseFloat(transport || 0) * 0.21;   // kg CO₂/km
    const electricityEmission = parseFloat(electricity || 0) * 0.5; // kg CO₂/kWh
    const waterEmission = parseFloat(water || 0) * 0.0003;          // kg CO₂/litre
    const plasticEmission = parseFloat(plastic || 0) * 0.1;         // kg CO₂/item

    const total = transportEmission + electricityEmission + waterEmission + plasticEmission;
    const totalValue = total.toFixed(2);

    setFootprint(totalValue);

    try {
      const userId = localStorage.getItem("userid"); 
      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      await axios.post("http://localhost:5000/footprint/save", {
        userId,
        transport: parseFloat(transport),
        electricity: parseFloat(electricity),
        water: parseFloat(water),
        plastic: parseFloat(plastic),
        totalFootprint: parseFloat(totalValue)
      });

      console.log("Footprint saved successfully!");
    } catch (error) {
      console.error("Error saving footprint:", error);
    }
  };

  return (
    <div className="carbon-container">
      <h2>🌍 Carbon Footprint Calculator</h2>
      <p>Enter your daily usage to estimate your carbon emissions.</p>

      <form onSubmit={handleCalculate} className="carbon-form">
        <div className="input-group">
          <label>🚗 Transport (km/day):</label>
          <input
            type="number"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            placeholder="e.g., 15"
          />
        </div>

        <div className="input-group">
          <label>💡 Electricity Usage (kWh/day):</label>
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            placeholder="e.g., 5"
          />
        </div>

        <div className="input-group">
          <label>🚿 Water Usage (litres/day):</label>
          <input
            type="number"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            placeholder="e.g., 100"
          />
        </div>

        <div className="input-group">
          <label>🛍️ Plastic Items Used (per day):</label>
          <input
            type="number"
            value={plastic}
            onChange={(e) => setPlastic(e.target.value)}
            placeholder="e.g., 3"
          />
        </div>

        <button type="submit" className="calculate-btn">Calculate Footprint</button>
      </form>

      {footprint !== null && (
        <div className="result-box">
          <h3>🧾 Estimated Daily Carbon Footprint:</h3>
          <p><strong>{footprint} kg CO₂</strong></p>
          <p>Great job tracking your impact! 🌱</p>
        </div>
      )}
    </div>
  );
}
