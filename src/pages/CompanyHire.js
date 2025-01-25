import React from "react";

function CompanyHire() {
    return (
        <div>
            <section className="login-section">
                <h2>Login</h2>
                <button className="login-button">Login with Google</button>
                <button className="login-button">Login with LinkedIn</button>
            </section>
            <section className="slider-section">
                <h2>Steps to Hire</h2>
                <ul>
                    <li>Step 1: Post a job.</li>
                    <li>Step 2: Review applications.</li>
                    <li>Step 3: Schedule interviews.</li>
                    <li>Step 4: Select the best talent.</li>
                </ul>
            </section>
        </div>
    );
}

export default CompanyHire;
