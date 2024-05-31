import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ title, rightElement }) {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/" className="home-link">Home</Link>
            </nav>
            <h1 className="header-title">{title}</h1>
            <div className="header-right-element">
                {rightElement}
            </div>
        </header>
    );
}

export default Header;
