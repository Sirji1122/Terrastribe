// import React, { useEffect, useState } from "react";

// export default function About() {
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const API = "http://localhost:5000";

//   useEffect(() => {
//     let mounted = true;
//     fetch(`${API}/about`)
//       .then(res => res.json())
//       .then(data => {
//         if (!mounted) return;
//         setContent(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         if (!mounted) return;
//         // fallback static content if backend not reachable
//         setContent({title: "About Terrastribe", body: "TerraStride is a gamified sustainability platform designed to help individuals understand, track, and reduce their carbon footprint in a fun and engaging way Our mission is to encourage eco-friendly habits by combining technology, gamification, and community participation. Users can: Calculate their daily carbon footprint (from transport, electricity, water, and plastic usage). Take part in eco challenges that promote sustainable living. Connect with a community of like-minded people working towards a greener future. By providing visual dashboards, challenges, and achievements, TerraStride motivates users to stay consistent in their sustainability journey. Every small step contributes to a big impact on the planet. 🌱." });
//         setLoading(false);
//       });
//     return () => { mounted = false; }
//   }, []);

//   if (loading) return <div className="about-card"><h3>About</h3><p className="muted">Loading…</p></div>;

//   return (
//     <div className="container" style={{ padding: 28 }}>
//       <div className="about-card" style={{color: "white"}}>
//         <h3>{content.title}</h3>
//         <p className="muted">{content.body}</p>
//       </div>
//     </div>
//   );
// }



import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <h2>🌍 About TerraStride</h2>
      <p>
        <strong>TerraStride</strong> is a gamified sustainability platform that
        helps users track, reduce, and celebrate their carbon footprint.
        Through eco challenges, community engagement, and personalized
        insights, we aim to make sustainable living simple and fun.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>📊 Track</h3>
          <p>
            Calculate and monitor your daily carbon emissions from transport,
            electricity, water, and plastic usage.
          </p>
        </div>
        <div className="about-card">
          <h3>🌱 Act</h3>
          <p>
            Participate in eco challenges like "No Plastic Week" or "Plant a
            Tree" to make a real-world impact.
          </p>
        </div>
        <div className="about-card">
          <h3>🤝 Connect</h3>
          <p>
            Join a community of like-minded people, share your journey, and
            inspire others toward sustainability.
          </p>
        </div>
      </div>

      <p className="about-footer">
        Together, we can take small steps for a greener tomorrow. 💚
      </p>
    </div>
  );
}
