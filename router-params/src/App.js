// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  // which app is currently selected
  const [selectedApp, setSelectedApp] = useState("");

  // list of TV apps and their logo URLs
  const apps = [
    {
      id: "Netflix",
      name: "Netflix",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      id: "HBO Max",
      name: "HBO Max",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    },
    {
      id: "Hulu",
      name: "Hulu",
      // ✅ working Hulu logo URL
      logo: "https://www.pngmart.com/files/23/Hulu-Logo-PNG-Pic.png",
    },
    {
      id: "Prime Video",
      name: "Prime Video",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    },
  ];

  return (
    <div className="app-box">
      <h2 className="title">TV APPS</h2>

      <div className="logo-row">
        {apps.map((app) => (
          <img
            key={app.id}
            src={app.logo}
            alt={app.name}
            className={
              selectedApp === app.id ? "tv-icon tv-icon-selected" : "tv-icon"
            }
            onClick={() => setSelectedApp(app.id)}
          />
        ))}
      </div>

      <p className="selected-text">
        You Selected: <span>{selectedApp}</span>
      </p>

      {selectedApp && (
        <button className="download-button">Download</button>
      )}
    </div>
  );
}

export default App;
