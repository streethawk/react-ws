import React from "react";

function CandidateHire() {
    return (
        <div>
            <section className="login-section">
                <h2>Login</h2>
                <button className="login-button">Login with Google</button>
                <button className="login-button">Login with LinkedIn</button>
            </section>
            <section className="services-section">
                <h2>Services for Candidates</h2>
                <ul>
                    <li>Resume building</li>
                    <li>Mock interviews</li>
                    <li>Career counseling</li>
                    <li>Job application tips</li>
                </ul>
            </section>
        </div>
    );
}

export default CandidateHire;
