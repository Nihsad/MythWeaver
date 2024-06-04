// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_STORIES } from '../../utils/queries';
// import { Link, useLocation } from 'react-router-dom';
// import SignupForm from '../SignupForm/SignupForm';
// import LoginForm from '../LoginForm/LoginForm';
// import Auth from '../../utils/auth';
// import './Header.css';

// import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

// const Header = () => {
//     // State to control the visibility of the modal
//     const [showModal, setShowModal] = useState(false);

//     const location = useLocation();
//     const [theme, setTheme] = useState('fairycore'); // Initial theme state
//     const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

//     const handleThemeChange = (newTheme) => {
//         setTheme(newTheme);
//         // Apply theme logic here
//         document.documentElement.setAttribute('data-theme', newTheme);
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="header-left">
//                     {Auth.loggedIn() ? (
//                         <>
//                             {/* If user is logged in, there should be a 'Log out' link and the Profile link should go to /user-profile. */}
//                             <button className="header-button" onClick={Auth.logout}>Log out</button>
//                             <a href="/user-profile" className="header-link">
//                                 <button className="header-button">Profile</button>
//                             </a>
//                         </>
//                     ) : (
//                         <>
//                             {/* If user is not logged in, clicking the 'Log in' link should open the signup/login modal, and clicking the 'Profile' link should also open the signup/login modal because user can't view 'Profile' while logged out. */}
//                             <button className="header-button" onClick={() => setShowModal(true)}>Log in</button>
//                             <div className="header-link">
//                                 <button className="header-button" onClick={() => setShowModal(true)}>Profile</button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//                 <h1 className="title"><a href="/myth-index">MythWeaver</a></h1>
//                 <div className="header-right">
//                     {/* MythIndex */}
//                     {location.pathname === '/myth-index' && (
//                         <>
//                             <Link to="/about-us" className="header-link">
//                                 <button className="header-button">About Us</button>
//                             </Link>
//                             <button className="header-button">Donate</button>
//                         </>
//                     )}
//                     {/* UserProfile */}
//                     {location.pathname === '/user-profile' && (
//                         <Link to="/story-index" className="header-link">
//                             <button className="header-button">Stories</button>
//                         </Link>
//                     )}
//                 </div>
//             </header>
//             <div className="dropdown-container">
//                 <div className="dropdown">
//                     <button className="theme-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
//                         Change Theme
//                     </button>
//                     {dropdownOpen && (
//                         <div className="dropdown-content">
//                             <button onClick={() => handleThemeChange('fairycore')}>Fairycore</button>
//                             <button onClick={() => handleThemeChange('cyberpunk')}>Cyberpunk</button>
//                             <button onClick={() => handleThemeChange('fantasy')}>Fantasy</button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Modal currently uses react-bootstrap components; we can switch those out. */}
//             <Modal
//                 size='lg'
//                 show={showModal}
//                 onHide={() => setShowModal(false)}
//                 aria-labelledby='signup-modal'>
//                 {/* tab container to do either signup or login component */}
//                 <Tab.Container defaultActiveKey='login'>
//                     <Modal.Header closeButton>
//                         <Modal.Title id='signup-modal'>
//                             <Nav variant='pills'>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey='login'>Login</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                         </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Tab.Content>
//                             <Tab.Pane eventKey='login'>
//                                 <LoginForm handleModalClose={() => setShowModal(false)} />
//                             </Tab.Pane>
//                             <Tab.Pane eventKey='signup'>
//                                 <SignupForm handleModalClose={() => setShowModal(false)} />
//                             </Tab.Pane>
//                         </Tab.Content>
//                     </Modal.Body>
//                 </Tab.Container>
//             </Modal>
//         </>
//     );
// };

// export default Header;





import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import './Header.css';
import { Modal } from 'react-bootstrap';

const Header = () => {
    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('login'); // To toggle between login and signup

    const location = useLocation();
    const [theme, setTheme] = useState('fairycore'); // Initial theme state
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        // Apply theme logic here
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <>
            <header className="header">
                <div className="header-left">
                    {Auth.loggedIn() ? (
                        <>
                            <button className="header-button" onClick={Auth.logout}>Log out</button>
                            <a href="/user-profile" className="header-link">
                                <button className="header-button">Profile</button>
                            </a>
                        </>
                    ) : (
                        <>
                            <button className="header-button" onClick={() => { setModalType('login'); setShowModal(true); }}>Log in</button>
                            <button className="header-button" onClick={() => { setModalType('signup'); setShowModal(true); }}>Sign Up</button>
                        </>
                    )}
                </div>
                <h1 className="title"><Link to='/myth-index'>MythWeaver</Link></h1>
                <div className="header-right">
                    {location.pathname === '/myth-index' && (
                        <>
                            <Link to="/about-us" className="header-link">
                                <button className="header-button">About Us</button>
                            </Link>
                            <button className="header-button">Donate</button>
                        </>
                    )}
                    {location.pathname === '/user-profile' && (
                        <Link to="/story-index" className="header-link">
                            <button className="header-button">Stories</button>
                        </Link>
                    )}
                </div>
            </header>
            <div className="dropdown-container">
                <div className="dropdown">
                    <button className="theme-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        Change Theme
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <button onClick={() => handleThemeChange('fairycore')}>Fairycore</button>
                            <button onClick={() => handleThemeChange('cyberpunk')}>Cyberpunk</button>
                            <button onClick={() => handleThemeChange('fantasy')}>Fantasy</button>
                        </div>
                    )}
                </div>
            </div>

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
        </>
    );
};

export default Header;
