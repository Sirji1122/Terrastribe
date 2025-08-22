import React, { useState, useEffect } from "react";

const EcoTips = () => {
  const tips = [
    "Switch off lights when not in use ",
    "Walk instead of driving for short distances 🚶",
    "Use reusable water bottles instead of plastic 🍼",
    "Plant a tree and help clean the air 🌳",
    "Recycle paper, glass, and plastic ♻️",
    "Take public transport instead of private car ",
    "Avoid wasting food 🍽️",
    "Use energy-efficient appliances ⚡"
  ];

  const [randomTip, setRandomTip] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, []);

  return (
    <div style={{
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#e6f7f1",
      color: "#2c6e49",
      border:"dotted",
      margin:"40px",
      marginBottom:"10px",
      textAlign: "center",
      fontWeight: "bold"
    }}>
      🌱 Eco Tip: {randomTip}
    </div>
  );
};

export default EcoTips;