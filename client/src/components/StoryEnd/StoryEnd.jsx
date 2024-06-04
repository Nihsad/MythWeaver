import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './StoryEnd.css';

const StoryEnd = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyName, storyImage, storyDescription, chapters } = location.state || {};

    const goBackToStoryIndex = () => {
        navigate('/story-index', { state: { storyName, storyImage, storyDescription, chapters } });
    };

    return (
        <div className="story-end-container">
            <h1>{storyName}</h1>
            <h2>The End</h2>
            <p>Thank you for reading the story!</p>
            <button onClick={goBackToStoryIndex}>Back to Story Index</button>
        </div>
    );
};

export default StoryEnd;
