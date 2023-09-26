import React from 'react';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import store from '../Redux/Store';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <h1>Fitness Tracker</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/ProfilePage">Profile</Link></li>
            <li><Link to="/Trainers">Trainers</Link></li>
            <li><Link to="/Exercises">Exercises</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="poster-container-vertical">
          <div className="poster moving-poster">
            {/* Content of the moving poster 1 */}
            <h2>Cardio Blat!</h2>
            <p> High-intensity aerobic workout to boost</p>
            <Link to="/new-arrivals" className="explore-button">Explore</Link>
          </div>

          <div className="poster moving-poster">
            {/* Content of the moving poster 2 */}
            <h2>Strength Training!</h2>
            <p>Builds muscle,increases strength,.</p>
            <Link to="/best-sellers" className="explore-button">Explore</Link>
          </div>

          <div className="poster moving-poster">
            {/* Content of the moving poster 3 */}
            <h2>Mindful Meditation!</h2>
            <p> Fosters mental clarity, relaxation.</p>
            <Link to="/summer-reads" className="explore-button">Explore</Link>
          </div>

          <div className="poster moving-poster">
            {/* Content of the moving poster 4 */}
            <h2>Yoga for Flexibility!</h2>
            <p> Enhances suppleness</p>
            <Link to="/discounts" className="explore-button">Explore</Link>
          </div>
        </div>

        
      </main>

      <footer className="footer">
        <ul>
          <li><Link to="/terms">Terms and Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/Contact us">Contact Us</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
