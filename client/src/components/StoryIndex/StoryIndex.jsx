import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StoryIndex.css';

const StoryIndex = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } = location.state || {};

    const startStory = () => {
        navigate('/story-path', { state: { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } });
    };

    if (!storyName || !chapters) {
        return <div>No story data available. Please create a story first.</div>;
    }

    // Split the tags by comma and trim whitespace
    const tagsArray = storyTags ? storyTags.split(',').map(tag => tag.trim()) : [];

    return (
        <div className="story-index">
            <main className="story-main-content">
                <div className="story-photo">
                    <img src={storyImage} alt={storyName} />
                </div>
                <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>
                <div className="genre-tags-links">
                    <div>Genre: {storyGenre}</div>
                    <div>Tags: {tagsArray.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}</div>
                </div>
                <div className="story-description">
                    <h2>Brief Description of Story:</h2>
                    <p>{storyDescription}</p>
                    <button className="start-adventure-button" onClick={startStory}>Start your Adventure Here</button>
                </div>
            </main>
        </div>
    );
};

export default StoryIndex;
