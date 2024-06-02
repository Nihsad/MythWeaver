import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className="user-profile">            
            <main className="main-content">
                <div className="button-container">
                    <div className="profile-button">Create A New Story</div>
                    <div className="profile-button">Your Stories</div>
                    <div className="profile-button">Saved Stories</div>
                    <div className="profile-button">View Bookmarked Stories</div>
                    <div className="profile-button">View Stories You've Created</div>
                    <div className="profile-button">TBR list</div>
                </div>
            </main>
            <section className="additional-content">
                <div className="bookmarked-stories">
                    <h2>Bookmarked Stories</h2>
                    <p>bookmarked stories will appear here</p>
                    {/* Display bookmarked stories */}
                    {/* For each bookmarked story, display title, author, description, image, rating you gave, and reviewText you gave */}
                </div>
                <div className="created-stories">
                    <h2>Stories You've Created</h2>
                    <p>created stories will appear here</p>
                    {/* Display stories you've created */}
                    {/* For each created story, display title, description, image, average rating out of 5, and button to view story's front page */}
                </div>
            </section>
        </div>
    );
};

export default UserProfile;
