import React from 'react';
import './MythIndex.css';

const MythIndex = () => {
  return (
    <div className="mythweaver">
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
