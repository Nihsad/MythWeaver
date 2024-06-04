import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './MythIndex.css';


const MythIndex = () => {
    const { loading, data } = useQuery(GET_STORIES);
    const stories = data?.stories || {};

    if (loading) {
        return <h2>LOADING...</h2>;
    }
    
    console.log('The console log which follows is the storiesData obtained from GET_STORIES:');
    console.log(stories);

    const renderStars = (averageRating) => {
        const stars = [];
        for (let i = 0; i < averageRating; i++) {
            stars.push(<span key={i}>★</span>);
        }
        return stars;
    };

    return (
        <div className="mythweaver">
            <main className="main-content">
                <div className="story-grid">
                    {stories &&
                        stories.map((story, index) => (
                            <Link to={`/story-index/${story._id}`} key={story._id}>
                                <div  className={`story-container story story-${index + 1} heartbeat`}>
                                    <p className='story-title'>{story.title}</p>
                                    <p className='story-author'>Created by {story.author}</p>
                                    <p className='story-description'>{story.description}</p>
                                    <div className='story-image-wrapper'>
                                        <img className='story-image' src={story.imageUrl} alt={story.title} />
                                    </div>

                                    {story.reviews?.length === 0 || !story?.reviews ? (
                                        <p>No ratings yet!</p>
                                    ) : (
                                        <>
                                            {renderStars(story.averageRating)}
                                            <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people.</p>
                                        </>
                                    )}
                                </div>
                            </Link>
                        ))}
                    {/* {Array(8).fill().map((_, index) => (
                        <div key={index} className={`story story-${index + 1} heartbeat`}>
                            Story
                        </div>
                    ))} */}
                </div>
            </main>
        </div>
    );
}

export default MythIndex;
