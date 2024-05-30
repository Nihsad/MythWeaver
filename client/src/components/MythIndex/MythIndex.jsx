import React from 'react';
import './MythIndex.css';

const MythIndex = () => {
  return (
    <div className="mythweaver">
      <header className="header">
        <div className="header-left">
          <button className="header-button">Log in</button>
          <a href="/user-profile" className="header-link">
            <button className="header-button">Profile</button>
          </a>
        </div>
        <h1 className="title">MythWeaver</h1>
        <div className="header-right">
          <button className="header-button">About Us</button>
          <button className="header-button">Donate</button>
        </div>
      </header>
      <main className="main-content">
        <div className="story-grid">
          {Array(8).fill().map((_, index) => (
            <div key={index} className={`story story-${index + 1}`}>
              Story
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MythIndex;
