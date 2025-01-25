import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="full-screen-div">
            {/* Search Section */}
            <section className="search-section">
                <input 
                    type="text" 
                    placeholder="Search for jobs..." 
                    className="search-bar" 
                />
                <button className="search-button">Search</button>
            </section>

            {/* Let's Hire and Get Hired Sections */}
            <main className="main">
                <div className="frame-container">
                    <div className="frame">
                        <h2>Let's Hire</h2>
                        <p>
                            Find the best talent for your company. 
                            <Link to="/company-hire">Get Started</Link>
                        </p>
                    </div>
                    <div className="frame">
                        <h2>Get Hired</h2>
                        <p>
                            Explore job opportunities and build your career. 
                            <Link to="/candidate-hire">Get Started</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
