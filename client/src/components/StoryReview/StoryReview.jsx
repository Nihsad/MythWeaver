import React, { useState } from 'react';
import './StoryReview.css';

const StoryReview = () => {
    const [reviewText, setReviewText] = useState('');
    const [starRating, setStarRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [username, setUsername] = useState('');

    const handleSaveReview = () => {
        const newReview = {
            username: username,
            date: new Date().toLocaleDateString(),
            starRating: starRating,
            reviewText: reviewText,
        };
        setReviews([newReview, ...reviews].slice(0, 5));
        setReviewText('');
        setStarRating(0);
        setUsername('');
    };
    
// Star Rating clicky nonsense
    const handleStarClick = (rating) => {
        setStarRating(rating);
    };

    const handleStarMouseEnter = (rating) => {
        setHoveredStar(rating);
    };

    const handleStarMouseLeave = () => {
        setHoveredStar(0);
    };
// End star Rating clicky nonsense

    return (
        <div className="story-review">
            <div className="story-review-container">
                <h2>Leave a Review</h2>
                <input 
                    type="text"
                    placeholder="Your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-input"
                />
                <textarea 
                    placeholder="Write your review here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="review-textarea"
                />
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${hoveredStar >= star || starRating >= star ? 'filled' : ''}`}
                            onClick={() => handleStarClick(star)}
                            onMouseEnter={() => handleStarMouseEnter(star)}
                            onMouseLeave={handleStarMouseLeave}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <div className="review-buttons">
                    <button onClick={handleSaveReview} className="save-button">Save Review</button>
                    <button className="save-button">Bookmark Story</button>
                </div>

                <h2>Recent Reviews</h2>
                <div className="reviews-list">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-item">
                            <h3>{review.username}</h3>
                            <p>{review.date}</p>
                            <p>{'★'.repeat(review.starRating)}{'☆'.repeat(5 - review.starRating)}</p>
                            <p>{review.reviewText}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryReview;
