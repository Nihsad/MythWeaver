import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <h1>MythWeaver</h1>
                {/* Add your navigation links here if needed */}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* Add footer content here if needed */}
            </footer>
        </div>
    );
};

export default Layout;
