// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from "./Components/Dashboard/dashboard";
import Cardio from './Components/Dashboard/Cardio'; // Import the Cardio component
import Summary from './Components/Dashboard/Summary';
import Gym from './Components/Dashboard/Gym';
import Supplements from './Components/Dashboard/Supplements';
import WeightTraining from './Components/Dashboard/weightTraining';
import Register from './Components/Register/Register';
function App() {
  const [userstate, setUserState] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Dashboard />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route path="/login" element={<Login setUserState={setUserState} />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/cardio" element={<Cardio />} /> 
          <Route path="/gym" element={<Gym />} /> 
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/weighttraining" element={<WeightTraining />} /> {/* Add this route for Cardio */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
