import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Jobs from "./pages/Jobs";
import Resources from "./pages/Resources";
import CompanyHire from "./pages/CompanyHire";
import CandidateHire from "./pages/CandidateHire";
import ContactUs from "./pages/ContactUs";
import CompanyName from './CompanyName';
import "./App.css";
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles

function App() {
    return (
        <Router>
            <div className="full-screen-div">
                {/* Navigation */}
                <header className="header">
                    <div className="logo-container">
                        <img 
                            src="https://via.placeholder.com/50" 
                            alt="Company Logo" 
                            className="logo" 
                        />
                        <div>
                            <CompanyName name="Awesome Company Name" />
                            <p className="punchline">Empowering Careers, Enabling Success</p>
                        </div>
                    </div>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/jobs">Jobs</Link>
                        <Link to="/resources">Resources</Link>
                    </nav>
                </header>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/company-hire" element={<CompanyHire />} />
                    <Route path="/candidate-hire" element={<CandidateHire />} />
                </Routes>

                {/* Footer */}
                <footer className="footer">
                    <ContactUs />
                </footer>
            </div>
        </Router>
    );
}

export default App;
