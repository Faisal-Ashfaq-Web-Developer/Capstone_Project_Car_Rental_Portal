// HomePage.js
import React from 'react';

const HomePage = () => {
    return (
        <div className="home-page">
        <nav className="navbar">
            <div className="navbar-left">
            <h1>Car Rental App</h1>
            </div>
            <div className="navbar-right">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            </div>
            <div className="navbar-middle">
            <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                {/* Add more options as needed */}
            </select>
            </div>
        </nav>
        <div className="sidebar">
            <button>User</button>
            <button>Admin</button>
            <button>Owner</button>
        </div>
        {/* Add more content as needed */}
        <footer>
            <p>Car Rental App - All rights reserved.</p>
            <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            </div>
        </footer>
        </div>
    );
};

export default HomePage;
