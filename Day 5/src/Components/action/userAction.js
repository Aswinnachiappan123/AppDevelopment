// userActions.js

// Define a unique key for storing user data in local storage
const USER_LOCAL_STORAGE_KEY = 'user_data';

export const setUser = (user) => {
  // Store the user data in local storage
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));

  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const clearUser = () => {
  // Remove the user data from local storage
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);

  return {
    type: 'CLEAR_USER',
  };
};
