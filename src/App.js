import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
    const [showLoginDropdown, setShowLoginDropdown] = useState(false);

    return (
        <div>
            {/* Header Section */}
            <header style={styles.header}>
                <div style={styles.logoContainer}>
                    <img 
                        src="https://via.placeholder.com/50" 
                        alt="Company Logo" 
                        style={styles.logo} 
                    />
                    <div>
                        <h1 style={styles.companyName}>Your Company Name</h1>
                        <p style={styles.punchline}>Empowering Careers, Enabling Success</p>
                    </div>
                </div>
                <nav style={styles.nav}>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#jobs">Jobs</a>
                    <a href="#resources">Resources</a>
                    <a href="#contact-us">Contact Us</a>
                    <div
                        style={styles.login}
                        onMouseEnter={() => setShowLoginDropdown(true)}
                        onMouseLeave={() => setShowLoginDropdown(false)}
                    >
                        <span>Login</span>
                        {showLoginDropdown && (
                            <div style={styles.dropdown}>
                                <a href="#candidate-login">Candidate Login</a>
                                <a href="#company-login">Company Login</a>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* Search Section */}
            <section style={styles.searchSection}>
                <input 
                    type="text" 
                    placeholder="Search for jobs..." 
                    style={styles.searchBar} 
                />
                <button style={styles.searchButton}>Search</button>
            </section>

            {/* Main Section */}
            <main style={styles.main}>
                <div style={styles.frameContainer}>
                    <div style={styles.frame}>
                        <h2>Let's Hire</h2>
                        <p>Find the best talent for your company.</p>
                    </div>
                    <div style={styles.frame}>
                        <h2>Get Hired</h2>
                        <p>Explore job opportunities and build your career.</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
