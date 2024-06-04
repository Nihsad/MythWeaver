import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ReadStory.css';

function ReadStory() {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyName, chapters } = location.state || {};
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    const currentChapter = chapters[currentChapterIndex];

    const handleOptionClick = (option) => {
        if (option.isEnd) {
            navigate('/story-end', { state: { storyName } });
        } else {
            setCurrentChapterIndex(option.nextChapterIndex);
        }
    };

    return (
        <div className="read-story-container">
            <h1>{storyName}</h1>
            <h2>{currentChapter.title}</h2>
            <p>{currentChapter.content}</p>
            <div className="options-container">
                {currentChapter.options.map((option, index) => (
                    <button key={index} onClick={() => handleOptionClick(option)}>
                        {option.choiceText}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ReadStory;
