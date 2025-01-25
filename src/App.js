import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Jobs from "./pages/Jobs";
import Resources from "./pages/Resources";

function App() {
    const [showLoginDropdown, setShowLoginDropdown] = useState(false);

    return (
        <Router>
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
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/jobs">Jobs</Link>
                        <Link to="/resources">Resources</Link>
                        <Link to="#contact-us">Contact Us</Link>
                        <div
                            className="login"
                            onMouseEnter={() => setShowLoginDropdown(true)}
                            onMouseLeave={() => setShowLoginDropdown(false)}
                        >
                            <span>Login</span>
                            {showLoginDropdown && (
                                <div className="dropdown">
                                    <Link to="#candidate-login">Candidate Login</Link>
                                    <Link to="#company-login">Company Login</Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Page Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
