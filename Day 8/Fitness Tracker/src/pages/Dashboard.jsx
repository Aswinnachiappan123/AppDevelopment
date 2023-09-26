import React from 'react';
import '../assets/css/Dashboard.css';
import store from '../Redux/Store';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/'); 
  }
  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <div className="user-info">
          <img
            src="https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_640.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-details">
          <h1 className="welcome-text">Welcome, {store.getState().email}</h1>
            <p>Email: {store.getState().email}@example.com</p>
          </div>
        </div>
        
        <button className="logout-button" onClick={handleLogout}> LogOut</button>
      </header>
      <main className="user-dashboard-content">
        <section className="orders">
          <h2>Activity Tracking</h2>
          <p>Activity:cardio </p>
          <p>Duration:10 minutes </p>
          <p>Calories:540cl </p>
          {/* Each order should have order details and status */}
        </section>
        <section className="account-details">
          <h2>Workout Logging</h2>
          {/* Display user's account information */}
          <div className="account-info">
            <p>Exercise: 1</p>
            <p>Sets: 2</p>
            <p>Reps: 1</p>
          </div>
        </section>
        <section className="payment-details">
          <h2>Nutrition Tracking</h2>
          {/* Display user's payment information */}
          <div className="payment-info">
          <p>Meals (g): </p>
          <p>Carbs (g): </p>
          <p>Fats (g): </p>
          </div>
        </section>
        <section className="payment-details">
          <h2>Goal Setting</h2>
          {/* Display user's payment information */}
          <div className="payment-info">
          <p>Goals: </p>
          <p>Traget: </p>
          <p>DeadLine: </p>
          </div>
        </section>
        <section className="payment-details">
          <h2>Progress Monitoring</h2>
          {/* Display user's payment information */}
          <div className="payment-info">
          <p>Weight: </p>
          <p>Body Fat: </p>
          <p>Workout Intensity: </p>
          </div>
        </section>
      </main>
      <section className="recommended-books">
        <h2>Recommended Trainer</h2>
        {<p>Ajith kumar</p>}
        {/* Each book should have cover image, title, and author */}
      </section>
      <section className="recent-reviews">
        <h2>Recent Reviews</h2>
        {/* Display a list of recent book reviews */}
        {/* Each review should have book cover, title, and review content */}
      </section>
    </div>
  );
}

export default UserDashboard;
