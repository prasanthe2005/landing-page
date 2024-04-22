import React from 'react';
import './App.css'; 
import './image.jpg'; 
function TravelSite() {
    return (
        <div>
            <header>
                <h1>Welcome to Our Travel Site</h1>
                <p>Your gateway to unforgettable adventures</p>
                <ul className="header-item">
                    <li className="header-link"><a href="#">Home</a></li>
                    <li className="header-link"><a href="#">Available</a></li>
                    <li className="header-link"><a href="#">Most Popular</a></li>
                    <li className="header-link"><a href="#">About us</a></li>
                </ul>
            </header>
        
            <section className="main-content">
                <h2>Explore the World</h2>
                <p>Discover amazing destinations and plan your next journey with us.</p>
                <a href="#contact" className="cta-button">Get Started</a>
            </section>
        
            <section id="contact" className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
        
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
        
                    <button type="submit">Submit</button>
                </form>
            </section>
        
            <footer>
                <p>&copy; 2024 Travel Site. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default TravelSite;
