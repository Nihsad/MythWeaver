import React from 'react';
import { useState, useEffect } from 'react';
import './StoryPath.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_STORY } from '../../utils/queries';

const StoryPath = () => {

    const { storyId } = useParams();
    const { loading, data } = useQuery(GET_STORY, {
        variables: { storyId: storyId },
    });
    const story = data?.story || {};
    console.log('The next console log will be your story obtained from the query on StoryPath.');
    console.log(story);

    // Find the initial chapter
    // const initialChapter = story.chapters?.find(chapter => chapter.chapterIndex === 0) || null;

    // Use state to manage the current chapter
    const [currentChapter, setCurrentChapter] = useState(initialChapter);

    // Update the state when data is loaded and the initial chapter is found
    useEffect(() => {
        if (story.chapters) {
            const initialChapter = story.chapters?.find(chapter => chapter.chapterIndex === 0);
            setCurrentChapter(initialChapter);
        }
    }, [story.chapters]);

    // Function to handle choice selection
    const handleChoiceClick = (nextChapterIndex) => {
        const nextChapter = story.chapters.find(chapter => chapter.chapterIndex === nextChapterIndex);
        setCurrentChapter(nextChapter);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!currentChapter) {
        return <div>No chapter found.</div>;
    }

    return (
        <div className="story-path">
            <div className="story-path-container">
                <h2>{currentChapter.title}</h2>
                <p>{currentChapter.content}</p>
                <div className="options">
                    {currentChapter.choices.map((choice, index) => (
                        <button
                            key={choice._id}
                            className="option"
                            onClick={() => handleChoiceClick(choice.nextChapterIndex)}
                        >
                            {choice.choiceText}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryPath;

