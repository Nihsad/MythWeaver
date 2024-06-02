import React from 'react';
import './UserProfile.css';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROFILE } from '../../utils/queries';

const UserProfile = () => {

    // ADD APPROPRIATE AUTH STUFF AND SUCH. THIS IS JUST A TEST OF THE QUERY SO FAR
    const { loading, data } = useQuery(GET_PROFILE);
    const userData = data?.profile || {};

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    console.log('The console log which follows is the userData obtained from GET_PROFILE:');
    console.log(userData);

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
