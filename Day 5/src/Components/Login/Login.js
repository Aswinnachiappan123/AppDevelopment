import React, { useState } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../action/userAction'; // Import your user action

const Login = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    username: "", // Change "email" to "username"
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9_]+$/; // Customize the regex pattern for username validation
    if (!values.username) {
      errors.username = "Username is required";
    } else if (!regex.test(values.username)) {
      errors.username = "Please enter a valid username";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      // Simulate a successful login; replace this with your actual login logic
      const fakeUser = { id: 1, username: user.username };
      dispatch(setUser(fakeUser));
      navigate("/dash", { replace: true }); // Navigate to the dashboard page
    }
  };

  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="text" // Change "email" to "text" for username input
          name="username" // Change "email" to "username"
          id="username" // Change "email" to "username"
          placeholder="Username" // Change "Email" to "Username"
          onChange={changeHandler}
          value={user.username}
        />
        <p className={basestyle.error}>{formErrors.username}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};

export default Login;
