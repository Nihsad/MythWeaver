import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import './MythIndex.css';

const MythIndex = () => {
    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('login'); // To toggle between login and signup

    // Apollo Client query to fetch stories
    const { loading, data } = useQuery(GET_STORIES);
    const stories = Array.isArray(data?.stories) ? data.stories : [];

    // Placeholder stories for display purposes, using images from the public folder
    const placeholderStories = [
        { _id: '1', title: 'Coming Soon!', author: 'TBA', description: 'Lorm IpsumLorm IpsumLorm IpsumLorm Ipsum Lorm Ipsum IpsumLorm Ipsum Lorm IpsumIpsumLorm Ipsum Lorm IpsumIpsumLorm Ipsum Lorm IpsumIpsumLorm Ipsum Lorm IpsumIpsumLorm Ipsum Lorm IpsumIpsumLorm Ipsum Lorm Ipsum', imageUrl: '/images/test-img-1.png', averageRating: 4, ratingsCount: 10 },
        { _id: '2', title: 'Coming Soon!', author: 'TBA', description: 'TBA', imageUrl: '/images/test-img-2.jpg', averageRating: 3, ratingsCount: 8 },
        { _id: '3', title: 'Coming Soon!', author: 'TBA', description: 'TBA', imageUrl: '/images/test-img-3.jpg', averageRating: 5, ratingsCount: 15 },
        { _id: '4', title: 'Coming Soon!', author: 'TBA', description: 'TBA', imageUrl: '/images/test-img-4.jpg', averageRating: 2, ratingsCount: 5 },
        { _id: '5', title: 'Coming Soon!', author: 'TBA', description: 'TBA', imageUrl: '/images/test-img-5.jpg', averageRating: 4, ratingsCount: 12 },
        { _id: '6', title: 'Coming Soon!', author: 'TBA', description: 'TBA', imageUrl: '/images/test-img-6.jpg', averageRating: 3, ratingsCount: 7 },
    ];

    // Combine fetched stories and placeholders to always show 6 stories
    const combinedStories = [...stories, ...placeholderStories].slice(0, 6);

    const renderStars = (averageRating) => {
        const stars = [];
        for (let i = 0; i < averageRating; i++) {
            stars.push(<span key={i}>★</span>);
        }
        return stars;
    };

    return (
            <main className="main-content">
                {loading && <h2>LOADING...</h2>}
                <div className="story-grid">
                    {combinedStories.map((story, index) => (
                        <Link to={`/story-index/${story._id}`} key={story._id}>
                            <div className={`story-container story story-${index + 1}`}>
                                <div className="story-image-wrapper">
                                    <img className='story-image' src={story.imageUrl} alt={story.title} />
                                </div>
                                <div className="story-title-container">
                                    <p className='story-title'>{story.title}</p>
                                </div>
                                <div className="story-info">
                                    <p className='story-author'>Created by {story.author}</p>
                                    <p className='story-description'>{story.description}</p>
                                    {story.reviews?.length === 0 || !story?.reviews ? (
                                        <p>No ratings yet!</p>
                                    ) : (
                                        <>
                                            <div className='story-stars'>{renderStars(story.averageRating)}</div>
                                            <p>Rated {story.averageRating} stars on average by {story.ratingsCount} people.</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
    );
}

export default MythIndex;
