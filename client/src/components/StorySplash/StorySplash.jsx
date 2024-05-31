import React from 'react';
import './StorySplash.css';

function StorySplash() {
    return (
        <div className="story-splash-container">
            <header className="header">
                <nav>
                    <a href="/" className="nav-link">Home</a>
                    <h1>Story Title</h1>
                    <a href="#" className="nav-link">Change Theme</a>
                </nav>
                </header>
            <main className="story-splash-main">
                <div className="story-splash-card">
                    <h2 className="story-splash-name">Random Story Name:</h2>
                    <p className="story-splash-description">Click Below to Play</p>
                    <button className="story-splash-button">Start</button>
                </div>
            </main>
        </div>
    );
}

export default StorySplash;
