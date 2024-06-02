import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
          <Link to="/login" className="header-link">
            <button className="header-button">Log in</button>
          </Link>
          <Link to="/user-profile" className="header-link">
            <button className="header-button">Profile</button>
          </Link>
        </div>
        <h1 className="title"><a href="/">MythWeaver</a></h1>
        <div className="header-right">
          {/* MythIndex */}
          {location.pathname === '/' && (
            <>
              <Link to="/about-us" className="header-link">
                <button className="header-button">About Us</button>
              </Link>
              <button className="header-button">Donate</button>
            </>
          )}
          {/* UserProfile */}
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
    </>
  );
};

export default Header;
