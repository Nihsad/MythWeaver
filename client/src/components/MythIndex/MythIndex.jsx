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
    const { loading, data, error } = useQuery(GET_STORIES);
    const stories = Array.isArray(data?.stories) ? data.stories : [];

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    if (error) {
        return <h2>Error loading stories</h2>;
    }

    const renderStars = (averageRating) => {
        const stars = [];
        for (let i = 0; i < averageRating; i++) {
            stars.push(<span key={i}>★</span>);
        }
        return stars;
    };

    return (
        <div className="mythweaver">
            <header className="header">
                <div className="header-left">
                    {Auth.loggedIn() ? (
                        <>
                            <a href="/user-profile" className="header-link">
                                <button className="header-button">Profile</button>
                            </a>
                            <button className="header-button" onClick={Auth.logout}>Log out</button>
                        </>
                    ) : (
                        <>
                            <button className="header-button" onClick={() => { setModalType('login'); setShowModal(true); }}>Log in</button>
                            <button className="header-button" onClick={() => { setModalType('signup'); setShowModal(true); }}>Sign Up</button>
                        </>
                    )}
                </div>
                <h1 className="title"><Link to='/'>MythWeaver</Link></h1>
                <div className="header-right">
                    <button className="header-button">About Us</button>
                    <button className="header-button">Donate</button>
                </div>
            </header>
            <main className="main-content">
                <div className="story-grid">
                    {stories.map((story, index) => (
                        <Link to={`/story-index/${story._id}`} key={story._id}>
                            <div className={`story-container story story-${index + 1} heartbeat`}>
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
                </div>
            </main>

            <Modal
                size='xl' 
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='auth-modal'
                centered>
                <Modal.Header closeButton className="modal-header-center">
                    <Modal.Title id='auth-modal' className="modal-title-lg">
                        {modalType === 'login' ? 'Login' : 'Sign Up'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-lg">
                    {modalType === 'login' ? (
                        <LoginForm handleModalClose={() => setShowModal(false)} />
                    ) : (
                        <SignupForm handleModalClose={() => setShowModal(false)} />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MythIndex;
