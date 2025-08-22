import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [initial,setInitial]=useState("");

  const userId = localStorage.getItem("userid");

  useEffect(() => {
    if (name) {
      setInitial(name.charAt(0).toUpperCase());
    }
  }, [name]);
  useEffect(() => {
    setName(localStorage.getItem("username") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/update-profile/${userId}`, {
        name,
        email
      });

     
      localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("email", res.data.user.email);

      alert("Profile updated successfully!");
    } catch (err) {
      alert("Error updating profile!");
      console.error(err);
    }
  };

  return (
    <div className="profile-container">
      <h2>Update Profile</h2>
      <div className="avatar-circle">
          {initial}
        </div>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div><br></br>

      <button onClick={handleSave} className="save-btn" style={{padding : 10,width:90, margintop: 80, backgroundColor:"light-green"}}>Save</button>

    </div>
  );
}









