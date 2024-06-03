import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import './MythIndex.css';


const MythIndex = () => {
    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);

    // GET_STORIES query is being worked on
    // const { loading, data } = useQuery(GET_STORIES);
    // const storiesData = data?.stories || {};

    // if (loading) {
    //     return <h2>LOADING...</h2>;
    // }
    // console.log('The console log which follows is the storiesData obtained from GET_STORIES:');
    // console.log(storiesData);

    return (
        <div className="mythweaver">
            <header className="header">
                <div className="header-left">
                    {Auth.loggedIn() ? (
                        <>
                            {/* If user is logged in, there should be a 'Log out' link and the Profile link should go to /user-profile. */}
                            <button className="header-button" onClick={Auth.logout}>Log out</button>
                            <a href="/user-profile" className="header-link">
                                <button className="header-button">Profile</button>
                            </a>
                        </>
                    ) : (
                        <>
                            {/* If user is not logged in, clicking the 'Log in' link should open the signup/login modal, and clicking the 'Profile' link should also open the signup/login modal because user can't view 'Profile' while logged out. */}
                            <button className="header-button" onClick={() => setShowModal(true)}>Log in</button>
                            <div className="header-link">
                                <button className="header-button" onClick={() => setShowModal(true)}>Profile</button>
                            </div>
                        </>
                    )}
                </div>
                <h1 className="title" as={Link} to='/'>MythWeaver</h1>
                <div className="header-right">
                    <button className="header-button">About Us</button>
                    <button className="header-button">Donate</button>
                </div>
            </header>
            <main className="main-content">
                <div className="story-grid">
                    {Array(8).fill().map((_, index) => (
                        <div key={index} className={`story story-${index + 1} heartbeat`}>
                            Story
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal currently uses react-bootstrap components; we can switch those out. */}
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignupForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </div>
    );
}

export default MythIndex;



