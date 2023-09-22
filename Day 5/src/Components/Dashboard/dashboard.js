// Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="dashboard-container">
      <div className="topbar">
        <div className="logo">Fitness Tracker</div>
        <Link to="/login" className="topbar-link">
          Logout
        </Link>
      </div>  
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/summary" className="sidebar-link">
              Summary
            </Link>
          </li>
          <li>
            <Link to="/cardio" className="sidebar-link">
              Cardio {/* Updated the link text */}
            </Link>
          </li>
          {/* ... other links ... */}
          <li>
            <Link to="/gym" className="sidebar-link">Gym</Link>
          </li>
          <li>
            <Link to="/supplements" className="sidebar-link">Supplements</Link>
          </li>
          <li>
            <Link to="/weighttraining" className="sidebar-link">WeightTraining</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <div>Welcome to Fitness Tracker </div>
        {user && <div>{user.username}</div>}
      </div>
    </div>
  );
}

export default Dashboard;
