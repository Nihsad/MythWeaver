import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className="user-profile">
            <header className="header">
                <nav>
                    <a href="/" className="nav-link">Home</a>
                    <h1>User Profile</h1>
                    <a href="#" className="nav-link">Change Theme</a>
                </nav>
            </header>
            <main className="main-content">
                <div className="button-container">
                    <div className="profile-button">Create A New Story</div>
                    <div className="profile-button">Your Stories</div>
                    <div className="profile-button">Saved Stories</div>
                    <div className="profile-button"></div>
                    <div className="profile-button"></div>
                    <div className="profile-button">TBR list</div>
                </div>
            </main>
        </div>
    );
};

export default UserProfile;
