import React from 'react';
import './StoryEnd.css';

const StoryEnd = () => {
    return (
        <div className="story-end">
            <div className="story-end-container">
                <h1>Story Result</h1>
                <p>
                    Here's where the result of the story will appear!
                </p>
                <div className="story-end-button">
                    <button className="bookmark">Bookmark Story and Leave a Review!</button>
                </div>
            </div>
        </div>
    );
};

export default StoryEnd;