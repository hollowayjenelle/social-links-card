import React from "react";
import avatar from "./images/avatar.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App" role="main">
      <div className="profileCard">
        <img src={avatar} alt="user portrait" className="userPortrait" />
        <h1 className="userName">Jessica Randall</h1>
        <h4 className="userLocation">London, United Kingdom</h4>
        <p className="userQuote">"Front-end developer and avid reader"</p>
        <div className="socialLinks">
          <button className="socialLink">GitHub</button>
          <button className="socialLink">Frontend Mentor</button>
          <button className="socialLink">LinkedIn</button>
          <button className="socialLink">Twitter</button>
          <button className="socialLink">Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default App;
