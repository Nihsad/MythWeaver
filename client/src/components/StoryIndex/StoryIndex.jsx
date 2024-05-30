import React from 'react';
import './StoryIndex.css';

const StoryIndex = () => {
    return (
        <div className="story-index">
            <header className="header">
                <nav>
                    <a href="/" className="nav-link">Home</a>
                </nav>
            </header>
            <main className="story-main-content">
                <div className="story-photo">Story Photo</div>
                <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>
                <div className="genre-tags-links">
                    <div>Genre of Story</div>
                    <div>Tags</div>
                    <div>Links</div>
                </div>
                <div className="story-description">
                    <h2>Brief Description of Story:</h2>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <button className="start-adventure-button">Start your Adventure Here</button>
            </main>
        </div>
    );
};

export default StoryIndex;
