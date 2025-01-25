import React, { useState } from "react";
import "./App.css";

function App() {
    const [showLoginDropdown, setShowLoginDropdown] = useState(false);

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="logo-container">
                    <img 
                        src="https://via.placeholder.com/50" 
                        alt="Company Logo" 
                        className="logo" 
                    />
                    <div>
                        <h1 className="company-name">Your Company Name</h1>
                        <p className="punchline">Empowering Careers, Enabling Success</p>
                    </div>
                </div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#jobs">Jobs</a>
                    <a href="#resources">Resources</a>
                    <a href="#contact-us">Contact Us</a>
                    <div 
                        className="login" 
                        onMouseEnter={() => setShowLoginDropdown(true)} 
                        onMouseLeave={() => setShowLoginDropdown(false)}
                    >
                        <span>Login</span>
                        {showLoginDropdown && (
                            <div className="dropdown">
                                <a href="#candidate-login">Candidate Login</a>
                                <a href="#company-login">Company Login</a>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* Search Section */}
            <section className="search-section">
                <input 
                    type="text" 
                    placeholder="Search for jobs..." 
                    className="search-bar" 
                />
                <button className="search-button">Search</button>
            </section>

            {/* Main Section */}
            <main className="main">
                <div className="frame-container">
                    <div className="frame">
                        <h2>Let's Hire</h2>
                        <p>Find the best talent for your company.</p>
                    </div>
                    <div className="frame">
                        <h2>Get Hired</h2>
                        <p>Explore job opportunities and build your career.</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
