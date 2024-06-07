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
