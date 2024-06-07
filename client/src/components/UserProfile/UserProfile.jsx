import React, { useState } from 'react';
import './UserProfile.css';
import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '../../utils/queries';

const UserProfile = () => {
    // Mock data for testing purposes
    const mockData = {
        createdStories: [
            {
                id: '1',
                title: 'Created Story 1',
                description: 'Description for created story 1',
                image: 'https://picsum.photos/150/150',
                rating: 4
            },
            {
                id: '2',
                title: 'Created Story 2',
                description: 'Description for created story 2',
                image: 'https://picsum.photos/150/150',
                rating: 5
            },
            {
                id: '3',
                title: 'Created Story 3',
                description: 'Description for created story 3',
                image: 'https://picsum.photos/150/150',
                rating: 5
            },
            {
                id: '4',
                title: 'Created Story 4',
                description: 'Description for created story 4',
                image: 'https://picsum.photos/150/150',
                rating: 5
            }
        ],
        bookmarkedStories: [
            {
                id: '3',
                title: 'Bookmarked Story 1',
                author: 'author',
                description: 'Description for bookmarked story 1',
                image: 'https://picsum.photos/150/150',
                userRating: 3
            },
            {
                id: '4',
                title: 'Bookmarked Story 2',
                author: 'author',
                description: 'Description for bookmarked story 2',
                image: 'https://picsum.photos/150/150',
                userRating: 4
            }
        ],
        tbrList: [
            {
                id: '5',
                title: 'TBR Story 1',
                author: 'author',
                description: 'Description for TBR story 1',
                image: 'https://picsum.photos/150/150',
                rating: 2
            },
            {
                id: '6',
                title: 'TBR Story 2',
                author: 'author',
                description: 'Description for TBR story 2',
                image: 'https://picsum.photos/150/150',
                rating: 4
            }
        ],
        purchasedStories: [
            {
                id: '7',
                title: 'Purchased Story 1',
                author: 'author',
                description: 'Description for purchased story 1',
                image: 'https://picsum.photos/150/150',
                rating: 5
            },
            {
                id: '8',
                title: 'Purchased Story 2',
                author: 'author',
                description: 'Description for purchased story 2',
                image: 'https://picsum.photos/150/150',
                rating: 3
            }
        ]
    };

    const { loading, data } = useQuery(GET_PROFILE);
    const userData = data?.profile || mockData;

    const [isOpen, setIsOpen] = useState({
        created: false,
        bookmarked: false,
        tbr: false,
        purchased: false
    });

    const toggleSection = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    const handleCreateStory = () => {
        window.location.href = '/create-story';
    };

    const handleUpdateStory = (storyId) => {
        window.location.href = `/create-story/${storyId}`;
    };

    const handleDeleteStory = (storyId) => {
        // Placeholder function
        console.log(`Delete story with ID: ${storyId}`);
    };

    const handleRemoveFromBookmarkedStories = (storyId) => {
        // Placeholder function
        console.log(`Remove from bookmarked stories with ID: ${storyId}`);
    };

    const handleRemoveFromTBRList = (storyId) => {
        // Placeholder function
        console.log(`Remove from TBR list with ID: ${storyId}`);
    };

    return (
        <div className="user-profile">
            <main className="user-main-content">
                <div className="button-container">
                    <div className="profile-button" onClick={handleCreateStory}>Create A New Story</div>
                </div>
                <section className="additional-content">
                    <div className="story-section">
                        <h2 onClick={() => toggleSection('created')}>Stories You've Created</h2>
                        {isOpen.created && (
                            <div className="stories-grid">
                                {userData.createdStories.map((story) => (
                                    <div className="story-box" key={story.id}>
                                        <a href={`/story-index/${story.id}`}>
                                            <img src={story.image} alt={story.title} />
                                            <h3>{story.title}</h3>
                                            <p>{story.description}</p>
                                            <div className="rating">{'★'.repeat(story.rating)}{'☆'.repeat(5 - story.rating)}</div>
                                        </a>
                                        <div className="actions">
                                                <button onClick={() => handleUpdateStory(story.id)}>Update Story</button>
                                                <button className="delete-btn" onClick={() => handleDeleteStory(story.id)}>Delete Story</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="story-section">
                        <h2 onClick={() => toggleSection('bookmarked')}>Bookmarked Stories</h2>
                        {isOpen.bookmarked && (
                            <div className="stories-grid">
                                {userData.bookmarkedStories.map((story) => (
                                    <div className="story-box" key={story.id}>
                                        <a href={`/story/${story.id}`}>
                                            <img src={story.image} alt={story.title} />
                                            <h3>{story.title}</h3>
                                            <p>{story.author}</p>
                                            <p>{story.description}</p>
                                            <div className="rating">{'★'.repeat(story.userRating)}{'☆'.repeat(5 - story.userRating)}</div>
                                        </a>
                                        <div className="actions">
                                            <button className="remove-btn" onClick={() => handleRemoveFromBookmarkedStories(story.id)}>Remove from Bookmarked Stories</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="story-section">
                        <h2 onClick={() => toggleSection('tbr')}>To Be Read List</h2>
                        {isOpen.tbr && (
                            <div className="stories-grid">
                                {userData.tbrList.map((story) => (
                                    <div className="story-box" key={story.id}>
                                        <a href={`/story/${story.id}`}>
                                            <img src={story.image} alt={story.title} />
                                            <h3>{story.title}</h3>
                                            <p>{story.author}</p>
                                            <p>{story.description}</p>
                                            <div className="rating">{'★'.repeat(story.rating)}{'☆'.repeat(5 - story.rating)}</div>
                                        </a>
                                        <div className="actions">
                                            <button className="remove-btn" onClick={() => handleRemoveFromTBRList(story.id)}>Remove from TBR List</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="story-section">
                        <h2 onClick={() => toggleSection('purchased')}>Purchased Stories</h2>
                        {isOpen.purchased && (
                            <div className="stories-grid">
                                {userData.purchasedStories.map((story) => (
                                    <div className="story-box" key={story.id}>
                                        <a href={`/story/${story.id}`}>
                                            <img src={story.image} alt={story.title} />
                                            <h3>{story.title}</h3>
                                            <p>{story.author}</p>
                                            <p>{story.description}</p>
                                            <div className="rating">{'★'.repeat(story.rating)}{'☆'.repeat(5 - story.rating)}</div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UserProfile;